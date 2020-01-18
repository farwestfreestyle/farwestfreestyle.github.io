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
                <div>Judge 3 (Air): {{details['judge-3']}}</div>
              </div>
              <div style="display:flex; flex-direction:column; padding: 10px;">
                <div>Judge 4 (Air): {{details['judge-4']}}</div>
                <div>Judge 5 (Overall): {{details['judge-5']}}</div>
              </div>
            </div>
            <div>
              <div style="font-size:85%; color: #333;">Course: {{details['course']}} | Length: {{details['length']}}</div>
            </div>
            <p style="margin-top: 10px; font-size: 70%; text-transform: uppercase; color: #666">{{details['meta']}}</p>
          </center>
        </div>
        <v-container class="results-table">
          <v-row>
            <v-col rows="12" md="8" offset-md="2">
              <div v-for="(results, gender) in data" :key="gender">
                <center>
                  <div style="text-align:left;">
                    <H3>{{gender}}</H3>
                    <table width="100%">
                      <tr class="th">
                        <td class="ctr">PLACE</td>
                        <td class="ctr">BIB</td>
                        <td class="ctr">NAME</td>
                        <td class="ctr">AGE</td>
                        <td class="ctr">TEAM</td>
                        <td class="ctr">SCORE</td>
                      </tr>
                      <tr v-for="(result, index) in results" :key="index">
                        <td class="ctr">{{result.place}}</td>
                        <td class="ctr">{{result.bib}}</td>
                        <td>{{result.name}}</td>
                        <td class="ctr">{{result.age}}</td>
                        <td class="ctr">{{result.team}}</td>
                        <td class="ctr">{{result.score}}</td>
                      </tr>
                    </table>
                  </div>
                </center>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
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
      return d.format('dddd MMMM DD, YYYY');
    },
    getKey() {
      return uuidV4();
    }
  }
}

</script>
<style>
  .results-table {
    padding: 5px !important;
  }
  td {
    padding: 3px!important;
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
