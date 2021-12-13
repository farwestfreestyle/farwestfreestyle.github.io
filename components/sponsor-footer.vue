<template>
  <footer>
    <v-container>
      <v-row justify="center" align="center" class="sponsors">
        <a href="https://shanemcconkey.org/"><v-img contain src="/images/sm-shane.png" max-height="100" max-width="100" border="0"></v-img></a>
        <a href="https://www.aon.com"><v-img contain max-height="75" max-width="150" src="/images/aon.png" border="0"></v-img></a>
        <a href="https://www.tahoegetaways.com"><v-img contain max-height="118" max-width="200" src="/images/tahoe-getaways.png" border="0"></v-img></a>
        <a href="https://squawalpine.com/events-things-do/wildflour-baking-company"><v-img contain max-height="75" max-width="150" src="/images/sm-wildflour.png" border="0"></v-img></a>
        <a href="https://charitysmith.org"><v-img contain max-height="75" max-width="267"src="/images/charitysmith.png" border="0"></v-img></a>
        <v-img contain max-height="75" max-width="200"src="/images/ajax-health.png" border="0"></v-img>
        <a href="https://www.swifturgentclinic.com"><v-img contain max-height="100" max-width="180"src="/images/sm-swift-urgent-care.png" border="0"></v-img></a>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" class="sm-text">&copy; FARWEST FREESTYLE 2019-2020 All Rights Reserved.</v-col>
        <v-col cols="12" sm="6" class="version">VERSION {{ version }}</v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script>
  import pkg from '../package.json';
  export default {
    computed: {
      version () {
        return pkg.version;
      }
    }
  }
</script>
<style lang="scss">
  footer {
    border-top:1px solid #CCC;
    background-color: white;
    .version {
      text-align:right;
      font-size: 60%;
      color: #CCCCCC;
    }
    .sm-text {
      color: #5B677A;
      font-size: 70%;
    }
    .sponsors div {
      margin: 5px;
      cursor: pointer;
    }
  }
</style>
