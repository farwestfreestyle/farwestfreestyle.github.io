const fs = require('fs');
const readline = require('readline');
const moment = require('moment');
const SinglesResultRow = require('./singles-result-row');
const {
  GET_JUDGES,
  GET_COURSE,
  EMPTY_LINE,
  IS_DUALS,
  IS_SINGLES,
  IS_MAIN_RESULTS_ROW,
  DUALS,
  SINGLES,
  GET_PACE,
  IS_RESULTS_TOP_BAR,
  GET_LENGTH,
  GET_TECHNICAL_DELEGATE,
  GET_CHIEF_OF_COMP,
  GET_CHIEF_OF_SCORING,
  GET_HEAD_JUDGE } = require('./constants');

module.exports = class ResultsProcessor {
  constructor(path) {
    this.results = [];
    this.format = '-';
    this.numberOfSinglesRuns = 0;
    this.current;
    this.maleResults = [];
    this.femaleResults = [];
    this.lines = [];
    this.additionalLineCount = 0;
    this.resultLines = [];
    this.resultLine = /^( )+([0-9\.dns]+)/;
    //if (!path) {
      //throw new Error('missing required path to results text file');
    //}
    this.lineReader;
  }

  findString (regex, index) {
    let line;
    for(let i = 0; i < this.lines.length; i++) {
      line = this.lines[i];
      if (regex.test(line)) {
        const results = regex.exec(line); 
        return results[index];
        break;
      }
    }
  }

  saveJson (obj, file, folder) {
    return  new Promise((resolve, reject) => {
      const parts = file.split('.');
      const filename = `${parts[0]}.json`;
      fs.writeFile(`${folder}/${filename}`, JSON.stringify(obj), 'utf8', (err) => {
        if (err) reject(err);
        resolve(filename);
      });
    });
  }
  
  getInfo(file) {
    let parts = file.split('-');
    const date = moment(`${parts[0]}-${parts[1]}-${parts[2]}`);
    console.log('date', date, 'day', date.format('dddd'));
    let info = {
      month: date.format('MMM'),
      day: date.format('dddd'),
      date: date.format('M/D/YY'),
      "format": this.format, 
      "technical-delegate": this.findString(GET_TECHNICAL_DELEGATE, 2),
      "chief-of-comp": this.findString(GET_CHIEF_OF_COMP,  2),
      "chief-of-scoring": this.findString(GET_CHIEF_OF_SCORING, 2),
      "head-judge": this.findString(GET_HEAD_JUDGE, 2),
      "course": this.findString(GET_COURSE, 2),
      "length": this.findString(GET_LENGTH, 2),
      "pace": this.findString(GET_PACE, 2),
      "judges": this.getJudges()
    };

    if (this.format === SINGLES) {
      return Object.assign(info, {numberOfSinglesRuns: this.numberOfSinglesRuns });
    } else {
      return info;
    }
  }
  
  getJudges() {
    let arr = [];
    let line;
    for(let i = 0; i < this.lines.length; i++) {
      line = this.lines[i];
      if (GET_JUDGES.test(line)) {
        const results = GET_JUDGES.exec(line); 
        arr.push(results[0]);
      }
    }
    return arr;
  }

  getResults ()  {
    console.log('get results', this.format);
    if (this.format === DUALS) {
      return this.getDualsResults();
    } else if (this.format === SINGLES) {
      return this.getSinglesResults(); 
    } else {
      return `unknown format(${this.format}), no results`;
    }
  }

  getNumberOfSinglesRuns() {
    let resultsSection = false;
    let counts = [];
    let cnt = 0;
    let start = false;
    for(let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];
      if( this.isNameRow(line)) {
        if ( cnt > 0) {
          counts.push(cnt);
        }
        cnt = 0;
        start = true;
      }
      if (start && !this.emptyRow(line)) {
        cnt++;
      } else {
        start = false;
      }
    }
    let t = 0;
    counts.forEach((count) => {
      t += count;
    });
    const avg = t / counts.length;
    return Math.ceil(avg) / 2;
    console.log('counts avg', avg);
  }

  async process (file, folder) {
    await this.parse(`${folder}/${file}`);
    this.format = IS_DUALS.test(file) ? DUALS : IS_SINGLES.test(file) ? SINGLES : '-'; 
    if ( this.format === SINGLES ) {
      this.numberOfSinglesRuns = this.getNumberOfSinglesRuns();
    }
    const obj = {
      info: this.getInfo(file),
      results: this.getResults()
    };
    return this.saveJson(obj, file, folder);
  }

  parse(file) {
    this.path = file;
    return new Promise((resolve, reject) => {
      this.lineReader = readline.createInterface({
        input: fs.createReadStream(this.path)
      });

      this.lineReader.on('line', (line) => {
        this.lines.push(line);
      });

      this.lineReader.on('close', () => {
        resolve();
      });
    });
  }

  isNameRow(str) {
    if(!str) return false;
    return IS_MAIN_RESULTS_ROW.test(str);
  }
  
  getSinglesResults() {
    console.log('getSinglesResults', this.lines);
    let results = { male:[], female: [] };
    let rr;
    let a;
    for(let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];
      if( this.isNameRow(line)) {
        if (rr) {
          const gender = rr.getGender();
          results[gender].push(rr.out());
        }
        rr = new SinglesResultRow();
        rr.setMainRow(line);
        console.log('--------- num runs -----------', this.numberOfSinglesRuns);
        console.log('run 1, line 1', line);
        if (this.numberOfSinglesRuns === 1 || this.numberOfSinglesRuns === 2 ) {
          i++;
          console.log('run 1, line 2:', this.lines[i]);
          if (!this.emptyRow(this.lines[i]) && this.numberOfSinglesRuns === 1) {
            a = this.lines[i].split(' ');
            console.log('coverted to array', a);
            //54 j4, j2
            //55 j5, j2
            //60 JumpCode
            //61 DD
            rr.setAir2Judge4(a[54]);
            rr.setAir2Judge5(a[55]);
            rr.setAir2Code(a[60]);
            rr.setAir2Dod(a[61]);
                      }
          if (this.numberOfSinglesRuns === 2 ) {
            i++;
            console.log('run 2, line 1', this.lines[i].split(' '));
            i++;
            console.log('run 2, line 2', this.lines[i]);
            a = this.lines[i].split(' ');

            for(let x = 0; x < a.length; x++) {
              console.log(x, a[x]);
            }

            rr.setAir2Judge4(a[54]);
            rr.setAir2Judge5(a[55]);
            rr.setAir2Code(a[60]);
            rr.setAir2Dod(a[61]);

          }
        }
      }
    }
    return results;
  }

  setCurrent(arr) {
    if (this.current) {
      if (this.current.age.indexOf('M') > -1) {
        this.maleResults.push(JSON.parse(JSON.stringify(this.current)));
      } else {
        this.femaleResults.push(JSON.parse(JSON.stringify(this.current)));
      }
    }
    // if last and second to last are some; most likely single run
    // total === event score
    let singleRun = arr[arr.length - 1] === arr[arr.length - 2];
    let zeroTimePts = arr.length < 18 && !singleRun;
    this.current = {};
    this.current.name = arr[2];
    this.current.age = arr[3];
    this.current.team = arr[4];
    if (singleRun) {
      this.current.eventScore = arr[arr.length - 1];
    }
    this.current.runs = [{
      turn_j1: arr[5],
      turn_j2: arr[6],
      turn_j3: arr[7],
      turnTotal: arr[8],
      air_1_j4: arr[9] || '-',
      air_1_j5: arr[10] || '-',
      air_1_code: arr[11] || '-',
      air_1_dod: arr[12] || '-',
      airTotal: arr[13] || '-',
      totalJudgesScore: arr[14] || '-',
      time: arr[15] || '-',
      timePts: zeroTimePts ? 0 : singleRun && arr.length === 19 ? arr[16] : 0,
      total: zeroTimePts ? arr[16] : arr[17]
    }];
  }

  augmentCurrent(arr) {
    if (arr.length <= 4 ) {
      if (arr.length === 2 && arr[0] === '.0' && arr[1] === '.0') {
        arr[0] = '0';
        arr[1] = '0';
        arr.push('-');
        arr.push('-');
      }

      if (this.current.runs.length === 1) {
        //2nd air 1st run
        this.current.runs[0].air_2_j4 = arr[0] || '-';
        this.current.runs[0].air_2_j5 = arr[1] || '-';
        this.current.runs[0].air_2_code = arr[2] || '-';
        this.current.runs[0].air_2_dod = arr[3] || '-';
      } else {
        this.current.runs[1].air_2_j4 = arr[0] || '-';
        this.current.runs[1].air_2_j5 = arr[1] || '-';
        this.current.runs[1].air_2_code = arr[2] || '-';
        this.current.runs[1].air_2_dod = arr[3] || '-';
      }
    } else {
      if (this.current && this.current.runs) {
        if (arr.length < 9) {
          let time = '-';
          let timePts = 0;
          let total = '-';
          let totalJudgesScore = '-';
          if (/([0-9]\.)+/.test(arr[arr.length - 1])) {
            this.current.eventScore = arr[arr.length - 1];
          }
          for ( let i =0; i < arr.length; i++) {
            if (arr[i].indexOf(':') > -1) {
              time = arr[i];
              if (arr[i + 1]) {
                total = arr[i + 1];
              }
              if(/([0-9]\.)+/.test(arr[i -1])) {
                totalJudgesScore = arr[i -1];
              }
            }
          }
          this.current.runs.push({
            turn_j1: arr[0],
            turn_j2: arr[1],
            turn_j3: arr[2],
            turnTotal: arr[3],
            air_1_j4:  '-',
            air_1_j5: '-',
            air_1_code: '-',
            air_1_dod:  '-',
            airTotal: 0,
            totalJudgesScore,
            time,
            timePts,
            total 
          });
        } else {
          let hasTimePts = arr.length === 14;
          this.current.runs.push({
            turn_j1: arr[0],
            turn_j2: arr[1],
            turn_j3: arr[2],
            turnTotal: arr[3],
            air_1_j4: arr[4] || '-',
            air_1_j5: arr[5] || '-',
            air_1_code: arr[6] || '-',
            air_1_dod: arr[7] || '-',
            airTotal: arr[8] || '-',
            totalJudgesScore: arr[9] || '-',
            time: arr[10] || '-',
            timePts: hasTimePts ? arr[11] : 0,
            total: (hasTimePts ? arr[12] : arr[11]) || '-'
          });
          this.current.eventScore = hasTimePts ? arr[13] : arr[12];
        }
      }
    }
  }

  getDualsResults() {
    let r = { male: [], female: [] };
    this.lines.forEach((line) => {
      let row = line.split(' ');
      if (this.resultLine.test(line)) {
        row = row.filter(item => item.length > 0);
        if (row.length > 9 && row[3].length > 3 ) {
          let name = row.splice(3,1);
          row[2] += ` ${name[0]}`;
        }
        let team = row[4];
        if (!(/([1-8].)|(top)/.test(row[5]))) {
          team += ` ${row[5] === 'Vall' ? 'Valley' : row[5] === 'Sk' ? 'Ski' : row[5]}`;
        }
        let obj = { place: row[0], bib: row[1], name: row[2], age: row[3], team, score: row[row.length -1]};
        let gen = (row[3].indexOf('M') > -1) ? 'male' : 'female'; 
        r[gen].push(obj);
      }
    });
    return r;
  }

  emptyRow(line) {
    if (!line) return true;
    return EMPTY_LINE.test(line);
  }
}
