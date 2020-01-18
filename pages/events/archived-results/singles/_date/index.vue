<template v-slot:exp>
  <b>
</template>
<template>
  <v-container>
    <v-row cols="12">
      <v-col>
        <div>
          <center>
            <div style="border-bottom: 1px solid #999; padding: 0px 50px; display: inline-block;"><b>{{parseData(date)}} | {{details['description']}}</b></div>
            <h4>Head Judge: {{details['head-judge']}}</h4>
            <h4>Chief of Comp: {{details['chief-of-comp']}}</h4>
            <h4>Technical Delegate: {{details['technical-delegate']}}</h4>
            <div style=" width: 50%; justify-content: center; font-size: 80%; display:flex; flex-direction: row;">
              <div style="display:flex; flex-direction:column; border-right: 1px solid #999; padding: 10px;">
                <div>Judge 1 (Turns): {{details['judge-1']}}</div>
                <div>Judge 2 (Turns): {{details['judge-2']}}</div>
                <div>Judge 3 (Turns): {{details['judge-3']}}</div>
              </div>
              <div style="display:flex; flex-direction:column; padding: 10px;">
                <div>Judge 4 (Air): {{details['judge-4-air']}}</div>
                <div>Judge 5 (Air): {{details['judge-5-air']}}</div>
              </div>
            </div>
            <div>
              <div style="font-size:85%; color: #333;">Course: {{details['course']}} | Length: {{details['length']}}</div>
              <div style="font-size:85%; color: #333;">Pace Times: Male: {{details['male-pace']}} | Female: {{details['female-pace']}}</div>
            </div>
            <p style="margin-top: 10px; font-size: 70%; text-transform: uppercase; color: #666">{{details['meta']}}</p>
          </center>
        </div>
        <div v-for="(rows, key) in data" :key="key">
          <H3>{{key}}</H3>
          <table v-html="buildTable(rows)"></table>
        </div>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-container class="results-overlay">
        <v-flex v-if="turns">
          <div><b>Turns (60% Total Score)</b></div>
          <p>Each judge will score on a 0.1 - 20.0 point scale.</p>
          <p>Turn score is calculated by adding up all 3 judges scores ( J1, J2, J3 ) and displayed in the total (TOT) column.</p>
          <p>Maximum points possible is 60 points.</p>
        </v-flex>
        <v-flex v-else-if="airs">
          <div><b>Air (20% Total Score)</b></div>
          <div>Each Air Judge (J4, J5) will judge each jump on a 0.0 - 10.0 point scale.
            <p>The total air score is the sum of each jump averaged and then multiplied by the degree of difficulty (DOD) associated with each jump code (CODE).</p>
            <p>Maximum points possible is 20 points.</p>
            <div style="border-bottom: 1px solid #666; margin-bottom: 5px;">An example:</div>
            <div style="display:flex; flex-direction:row">
              <table class="explained">
                <tbody>
                  <tr class="th">
                    <th colspan="6" class="ctr">Airs (20%)</th>
                  </tr>
                  <tr>
                    <td class="lpad ctr"></td>
                    <td class="lpad ctr">J4</td>
                    <td class="lpad ctr">J5</td>
                    <td class="lpad ctr">CODE</td>
                    <td class="lpad ctr">DOD</td>
                    <td class="lpad ctr">TOT</td>
                  </tr>
                  <tr>
                    <td class="lpad ctr">AIR 1</td>
                    <td class="lpad ctr">8.9</td>
                    <td class="lpad ctr">8.3</td>
                    <td class="lpad ctr">7op</td>
                    <td class="lpad ctr">0.860</td>
                    <td class="lpad ctr" rowspan="2">15.98</td>
                  </tr>
                  <tr>
                    <td class="lpad ctr">AIR 2</td>
                    <td class="lpad ctr">9.2</td>
                    <td class="lpad ctr">8.7</td>
                    <td class="lpad ctr">7oG</td>
                    <td class="lpad ctr">0.960</td>
                  </tr>
                </tbody>
              </table>
              <div style="padding-left: 20px; align-self: center;">
                <center>(((8.9 + 8.3) / 2) * .860) + (((9.2 + 8.7)/2) * .960)</center>
                <center>( 8.6 * .860) + (8.95 * .960)</center>
                <center>7.396 + 8.592 = 15.988</center>
                <center><b>15.98 truncate to 2 digits (not rounded)</b></center>
              </div>
            </div>
          </div>
          
        </v-flex>
        <v-flex v-else-if="totalJS">
          <div><b>Total Judges Score</b></div>
          <p>Total judges score is the sum of turns total score + air total score of each run.</p>
        </v-flex>
        <v-flex v-else-if="time">
          <div><b>Time (20% Total Score)</b></div>
          <p>Time points are calculate using the following formula:</p>
          <p>48 - ( 32 * (competitor time / pace time<sup>†</sup>)<p>
          <p><sup>†</sup> Pace Time: length of course/9.7 m/s for men; length of course / 8.2 m/s women</p>
        </v-flex>
        <v-flex v-else-if="total">
          <div><b>Total Run Score</b></div>
          <p>Total Judges Score (TOT JS) + Time Points (TIME PTS).</p>
        </v-flex>
        <v-flex v-else-if="eventScore">
          <div><b>Event Score</b></div>
          <p>Event Score is the higher of the two run scores.</p>
        </v-flex>
        <v-flex v-else>default</v-flex>
      </v-container>
    </v-overlay>
    <v-btn text small id="explain-turns" @click="explainTurns()">Explain Turns</v-btn>|
    <v-btn text small id="explain-airs" @click="explainAirs()">Explain Airs</v-btn>|
    <v-btn text small id="explain-time" @click="explainTime()">Explain Speed</v-btn>|
    <v-btn text small id="explain-total-judges-score" @click="explainTotalJS()">Explain Total Judges Score</v-btn>|
    <v-btn text small id="explain-total" @click="explainTotal()">Explain Total</v-btn>|
    <v-btn text small id="explain-event-score" @click="explainEventScore()">Explain Event Score</v-btn>
  </v-container>
</template>
<script>
/*
*/
import uuidV4 from 'uuid/v4';
import moment from 'moment';

export default {
  layout: 'secondary',
  data() {
    return {
      overlay: false,
      turns: false,
      airs: false,
      time: false,
      totalJS: false,
      total: false,
      eventScore: false
    };
  },
  computed: {
    date() {
      return this.$route.params.date;
    },
    details() {
      if ( /([0-9]+)-([0-9]+)-([0-9]+)/.test(this.$route.params.date)) {
        return require(`./${this.$route.params.date}-details.json`);
      }
    },
    data() {
      if ( /([0-9]+)-([0-9]+)-([0-9]+)/.test(this.$route.params.date)) {
        return require(`./${this.$route.params.date}.json`);
      }
    }
  },
  methods: {
    parseData(str) {
      const d = moment(str, 'YYYY-MM-DD');
      console.log('data', d);
      return d.format('dddd MMMM DD, YYYY');
    },
    reset() {
      this.turns = false;
      this.airs = false;
      this.time = false;
      this.totalJS = false;
      this.total = false;
      this.eventScore = false;
    },
    explainTurns() {
      console.log('explain turns');
      this.reset();
      this.turns = true;
      this.overlay = true;
    },
    explainAirs() {
      this.reset();
      this.airs = true;
      this.overlay = true;
    },
    explainTime() {
      this.reset();
      this.time = true;
      this.overlay = true;
    },
    explainTotalJS() {
      this.reset();
      this.totalJS = true;
      this.overlay = true;
    },
    explainTotal() {
      this.reset();
      this.total = true;
      this.overlay = true;
    },
    explainEventScore() {
      this.reset();
      this.eventScore = true;
      this.overlay = true;
    },
    buildTable(rows) {
      if (rows[0].runs.length === 1) {
        return this.buildSingleRunTable(rows);
      } else {
        return this.buildTwoRunTable(rows);
      }
    },
    buildTableHead() {
      return `<tr class="th">
                <td rowspan="2" class="ctr">PLACE</td>
                <td rowspan="2" class="ctr">BIB</td>
                <td rowspan="2">NAME</td>
                <td rowspan="2" class="ctr">AGE</td>
                <td rowspan="2" class="ctr">TEAM</td>
                <td class="ctr" colspan="5"><a href="javascript:explainTurns()">TURNS (60%)</a></td>
                <td class="ctr" colspan="6"><a href="javascript:explainAirs()">AIRS (20%)</a></td>
                <td rowspan="2" class="ctr"><a href="javascript:explainTotalJS()">TOT JS</a></td>
                <td class="ctr" colspan="2"><a href="javascript:explainTime()">TIME (20%)</a></td>
                <td rowspan="2" class="ctr"><a href="javascript:explainTotal()">TOTAL</a></td>
                <td class="spa ctr" rowspan="2"><a href="javascript:explainEventScore()">EVENT SCORE</a></td>
              </tr>
              <tr>
                <td class="wht spad">RUN 1</td>
                <td class="spad ctr">J1</td>
                <td class="spad ctr">J2</td>
                <td class="spad ctr">J3</td>
                <td class="spad ctr">TOT</td>
                <td class="spad ctr"></td>
                <td class="spad ctr">J4</td>
                <td class="spad ctr">J5</td>
                <td class="spad ctr">CODE</td>
                <td class="spad ctr">DOD</td>
                <td class="spad ctr">TOT</td>
                <td class="spad ctr">TIME</td>
                <td class="spad ctr">TIME PTS</td>
              </tr>
      `;
    },
    buildSingleRunTable(rows) {
      return `${this.buildTableHead()}${this.iterateRows(rows, 1)}`;
    },
    buildTwoRunTable(rows) {
      return `${this.buildTableHead()}${this.iterateRows(rows, 2)}`;
    },
    iterateRows(rows, runs) {
      let str = '';
      let cnt = 0;
      const mainRowSpan = runs === 1 ? '2' : '4';
      rows.forEach((row) => {
        str += `${ cnt % 2 === 0 ? '<tr class="bg">' : '<tr>'}
          <td class="pad ctr" rowspan="${mainRowSpan}">${row.place}</td>
          <td class="pad ctr" rowspan="${mainRowSpan}">${row.bib}</td>
          <td class="pad" rowspan="${mainRowSpan}">${row.name}</td>
          <td class="pad ctr" rowspan="${mainRowSpan}">${row.age}</td>
          <td class="pad ctr" rowspan="${mainRowSpan}">${row.team}</td>
          <td class="spad ctr" rowspan="2">RUN 1</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].turn_j1}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].turn_j2}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].turn_j3}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].turnTotal}</td>
          <td class="spad ctr">AIR 1</td>
          <td class="spad ctr">${row.runs[0].air_1_j4}</td>
          <td class="spad ctr">${row.runs[0].air_1_j5}</td>
          <td class="spad ctr">${row.runs[0].air_1_code}</td>
          <td class="spad ctr">${row.runs[0].air_1_dod}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].airTotal}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].totalJudgesScore}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].time}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].timePts}</td>
          <td class="spad ctr" rowspan="2">${row.runs[0].total}</td>
          <td class="pad ctr" rowspan="${mainRowSpan}">${row.eventScore}</td>
        </tr>
        ${ cnt % 2 === 0 ? '<tr class="bg">' : '<tr>'}
          <td class="spad ctr">AIR 2</td>
          <td class="spad ctr">${row.runs[0].air_2_j4}</td>
          <td class="spad ctr">${row.runs[0].air_2_j5}</td>
          <td class="spad ctr">${row.runs[0].air_2_code}</td>
          <td class="spad ctr">${row.runs[0].air_2_dod}</td>
        </tr>`;
        if (runs === 2) {
           str += ` 
            ${ cnt % 2 === 0 ? '<tr class="bg">' : '<tr>'}
              <td class="spad ctr" rowspan="2">RUN 2</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].turn_j1}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].turn_j2}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].turn_j3}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].turnTotal}</td>
              <td class="spad ctr">AIR 1</td>
              <td class="spad ctr">${row.runs[1].air_1_j4}</td>
              <td class="spad ctr">${row.runs[1].air_1_j5}</td>
              <td class="spad ctr">${row.runs[1].air_1_code}</td>
              <td class="spad ctr">${row.runs[1].air_1_dod}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].airTotal}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].totalJudgesScore}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].time}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].timePts}</td>
              <td class="spad ctr" rowspan="2">${row.runs[1].total}</td>
            </tr>
            ${ cnt % 2 === 0 ? '<tr class="bg">' : '<tr>'}
              <td class="spad ctr">AIR 2</td>
              <td class="spad ctr">${row.runs[1].air_2_j4}</td>
              <td class="spad ctr">${row.runs[1].air_2_j5}</td>
              <td class="spad ctr">${row.runs[1].air_2_code}</td>
              <td class="spad ctr">${row.runs[1].air_2_dod}</td>
            </tr>`;
        }
        cnt += 1;
      });
      return str;
    },
    getKey() {
      return uuidV4();
    }
  }
}

</script>
<style>
  table.explaned {
    border-collapse: collapse;
    padding: 0px;
    margin: 0px;
    font-size: 110%;
  }

  .v-overlay__content {
    background-color: #666;
  }
  .results-overlay {
    min-width: 200px;
    padding: 10px;
    background-color: white;
    color: black;
  }
  .air-one {
    width: 45px;
  }
  .air-one:last-child {
    border-left: 1px solid #666;
  }
  .wht {
    color: white;
  }
  .th > td {
    padding: 5px;
  }
  .ctr {
    text-align: center;
  }
  .bg {
    background-color: #DDD;
  }
  .br {
    border-right: 1px solid #999;
  }
  .pad {
    padding: 5px;
  }
  .spad {
    font-size: 80%;
    padding: 0px 3px;
  }
  .lpad {
    font-size: 105%;
    padding: 3px 10px;
  }
  H3 {
    text-transform: uppercase;
  }
  table {
    border-collapse: collapse;
    padding: 0px;
    margin: 0px;
    font-size: 80%;
  }
  .td-div > div, .th-div > div {
    display: flex;
    flex-direction: row;
  }
  .td-div > div > div, .th-div > div > div {
    text-align: center;
    padding: 0px 7px;
    flex-grow: 1;
  }
    
  .td-div > div:first-child {
    border-bottom: 1px solid #999;
  }
  td {
    margin: 0px;
    padding: 0px;
    border: 1px solid #999;
  }
</style>
