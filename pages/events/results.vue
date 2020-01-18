<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="events"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Results</div>
        <hr class="hrr"></hr>
        <div v-for="result in results" :key="result.id">
          <nuxt-link :to="getPath(result)">{{result.label}}</nuxt-link>
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
      return pkg.config.results;
    }
  },
  methods: {
    getPath(result) {
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
</style>
