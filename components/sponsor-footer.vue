<template>
  <footer>
    <v-container>
      <v-row justify="center" align="center" class="sponsors">
        <a href="https://mountainlotusyoga.com"><v-img contain src="/images/mountain-lotus-yoga.png" max-height="150" max-width="150" border="0"></v-img></a>
        <v-img contain src="/images/ovfree-logo.png" max-height="150" max-width="150" border="0"></v-img>
        <a href="https://www.idoneusa.com/default.asp"><v-img contain max-height="60" max-width="230" src="/images/idone-logo.svg" border="0"></v-img></a>
        <a href="https://www.tahoesportshub.com"><v-img contain max-height="150" max-width="150" src="/images/tahoe-sportshub-logo.svg" border="0"></v-img></a>
        <a href="https://www.northstarcalifornia.com/plan-your-trip/ski-and-ride-lessons/search-results.aspx"><v-img contain max-height="150" max-width="150"src="/images/northstar-logo.svg" border="0"></v-img></a>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" class="sm-text">&copy; FARWEST FREESTYLE 2024 All Rights Reserved.</v-col>
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
      margin: 0px;
      cursor: pointer;
      justify-content: space-between !important;
    }
  }
</style>
