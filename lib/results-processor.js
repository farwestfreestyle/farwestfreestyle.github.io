const fs = require('fs');
import readline from 'readline';

export default class ResultsProcessor {
  constructor(path) {
    this.results = [];
    this.current;
    this.maleResults = [];
    this.femaleResults = [];
    this.lines = [];
    this.additionalLineCount = 0;
    this.resultLines = [];
    this.resultLine = /^( )+([0-9\.dns]+)/;
    if (!path) {
      throw new Error('missing required path to results text file');
    }
    this.path = path;
    this.lineReader;
  }
  parseDuals() {
    return new Promise((resolve, reject) => {
      this.lineReader = readline.createInterface({
        input: fs.createReadStream(this.path)
      });

      this.lineReader.on('line', (line) => {
        this.lines.push(line);
      });

      this.lineReader.on('close', () => {
        this.parseDualsResultLines();
        resolve();
      });
    });

  }

  parse() {
    return new Promise((resolve, reject) => {
      this.lineReader = readline.createInterface({
        input: fs.createReadStream(this.path)
      });

      this.lineReader.on('line', (line) => {
        this.lines.push(line);
      });

      this.lineReader.on('close', () => {
        this.parseResultLines();
        resolve();
      });
    });
  }

  hasLines() {
    return this.lines.length > 0;
  }

  getLines() {
    return this.lines;
  }

  isNameRow(arr) {
    return arr.length > 3 && arr[2].indexOf(',') > -1;
  }
  
  saveDualsResults(arr)  {
  if (this.current) {
      if (this.current.age.indexOf('M') > -1) {
        this.maleResults.push(JSON.parse(JSON.stringify(this.current)));
      } else {
        this.femaleResults.push(JSON.parse(JSON.stringify(this.current)));
      }
    }
    console.log('current', arr, 'len', arr.length);
    // if last and second to last are some; most likely single run
    // total === event score
    let singleRun = arr[arr.length - 1] === arr[arr.length - 2];
    let zeroTimePts = arr.length < 18 && !singleRun;
    this.current = {};
   


  }
  setCurrent(arr) {
    if (this.current) {
      if (this.current.age.indexOf('M') > -1) {
        this.maleResults.push(JSON.parse(JSON.stringify(this.current)));
      } else {
        this.femaleResults.push(JSON.parse(JSON.stringify(this.current)));
      }
    }
    console.log('current', arr, 'len', arr.length);
    // if last and second to last are some; most likely single run
    // total === event score
    let singleRun = arr[arr.length - 1] === arr[arr.length - 2];
    let zeroTimePts = arr.length < 18 && !singleRun;
    this.current = {};
    this.current.place = arr[0];
    this.current.bib = arr[1];
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

  getMaleResults() {
    return this.maleResults;
  }

  getFemaleResults() {
    return this.femaleResults;
  }

  getAllResults() {
    return { male: this.maleResults, female: this.femaleResults };
  }

  writeFile(path, json) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, json, 'utf8', (err, obj) => {
        resolve(true);
      });
    });
  }

  async saveAsJSON(path) {
    const data = await this.getAllResults();
    let json = JSON.stringify(data);
    await this.writeFile(path, json);
    return;
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

  parseDualsResultLines() {
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
        let gen = (row[3].indexOf('M') > -1) ? 'maleResults' : 'femaleResults'; 
        this[gen].push(obj);
      }
    });
  }

  parseResultLines() {
    this.lines.forEach((line) => {
      let row = line.split(' ');
      if (this.resultLine.test(line)) {
        row = row.filter(item => item.length > 0);
        // ex John,M Smith will split ['1', '23', 'John,M', 'Smith', 'M14', ...]
        // M14 needs to be at position 3 NOT 4; below will fix an produce
        // ['1', '23', 'John,M Smith', 'M14', ...] 
        if (row.length > 17 && row[3].length > 3 ) {
          let name = row.splice(3,1);
          row[2] += ` ${name[0]}`;
        }
        if (this.isNameRow(row)) {
          this.setCurrent(row);
        } else {
          this.augmentCurrent(row);
        }
      }
    });
  }

  getResultLines() {
    return this.resultLines;
  }
}
