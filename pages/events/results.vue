<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="events"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Results</div>
        <hr class="hrr"></hr>
        <div v-for="result in results" :key="result.id" class="result">
          <a href target="pdf" :href="result.pdf" v-if="result.pdf">{{result.label}}</a>
          <nuxt-link :to="getPath(result)" v-else>{{result.label}}</nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LefthandNav from '@/components/lefthand-nav';
import pkg from '@/package.json';
export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
  data() {
    return {};
  },
  computed: {
    results() {
      const arr = pkg.config.results;
      const rev = arr.reverse();
      return rev;
    }
  },
  methods: {
    getPath(result) {
      if (result.pdf) {
        return result.pdf;
      }
      return `/events/archived-results/${result.type}/${result.date}`;
    }
  }
}

</script>
<style lang="scss">
.link > div {
    color: black !important;
  }
  .link:hover > div {
    text-decoration: underline;
  }
  .selected {
    font-weight: bold;
  }
  .selected:hover > div {
    text-decoration: none !important;
  }
  .result {
    padding: 5px 0px;
    border-bottom: 0px dotted #999;
  }
  .result:last-child {
    border-bottom: 0px;
  }
</style>
