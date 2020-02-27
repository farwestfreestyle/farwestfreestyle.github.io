const {
  SQUAW_HINT,
  SQUAW_VALLEY,
  NORTHSTAR_HINT,
  NORTHSTAR,
  MALE,
  FEMALE,
  WASATCH_HINT,
  WASATCH } = require('./constants');

module.exports = class SinglesResultRow {
  constructor() {
    this.obj = {};
  }

  setAge (age) {
    this.obj.age = age;
  }

  setAir2Judge4(pts) {
    this.obj.air2J4 = pts;
  }
  setAir2Judge5(pts) {
    this.obj.air2J5 = pts;
  }

  setAir2Code(code) {
    this.obj.air2Code = code;
  }

  setAir2Dod(dod) {
    this.obj.air2Dod = dod;
  }

  setTeam(str) {
    if(SQUAW_HINT.test(str))
      this.obj.team = SQUAW_VALLEY;
    else if (NORTHSTAR_HINT.test(str))
      this.obj.team = NORTHSTAR;
    else if (WASATCH_HINT.test(str))
      this.obj.team = WASATCH;   
    else
      this.obj.team = str;
  }
  getGender() {
    console.log('get gender', this.obj.age);
    return this.obj.age.indexOf('M') > -1 ? MALE : FEMALE;
  }

  setMainRow(line) {
    let row = line.split(' ');
    row = row.filter(item => item.length > 0);
    if (row.length > 9 && row[3].length > 3 ) {
      let name = row.splice(3,1);
      row[2] += ` ${name[0]}`;
    }
    this.setTeam(row[4], row[5]);

    this.obj.place = row[0];
    this.obj.bib = row[1];
    this.obj.name = row[2];
    this.obj.age = row[3];
    console.log('set main row', row);
  }
  
  out() {
    return this.obj;
  }
}
