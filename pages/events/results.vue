<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="events"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Results</div>
        <hr class="hrr"></hr>
        <b>Notes on Scoring</b>
        <a name="turns"></a>
        <h4>Turns (60% of total score) Min. = 0.1 / Max. = 20.0</h4>
        <p>Turns, in terms of judging criteria, refers to a technical evaluation of how well a
        competitor turns through the moguls. They refer to rhythmic changes in direction
        of travel to either side of the fall line, utilizing an aggressive, controlled
        technique. The competitor shall be judged from crossing the start line until
        crossing the finish line.</p>
        <b>Technical considerations</b>
        <p>Full control must be gained after every jump, resulting in controlled turns. It is
        important to register the direction of the landing. Air is scored until return to
        control; turns begin scoring when the initial landing direction has been changed,
        so the changeover between the scoring</p>
        <a href="https://assets.fis-ski.com/image/upload/v1570543090/fis-prod/assets/Freestyle_Skiing_Judging_Handbook.pdf">See section 6204.1 for complete judging criteria for turns</a>

        <p>Loss of a ski, the skier is scored to that point and skier receives not time</p>
        <p>New changes for 2020, a grab now will differentiate jumps</p>
        <p>Turn points are...</p>

        <a name="air"></a>
        <h4>Air 20% of total score</h4>
        <p>Loss of a ski, the skier is scored to that point and skier receives not time</p>

        <a name="time"></a>
        <h4>Time 20% of total score</h4>
        <p>Loss of a ski, the skier is scored to that point and skier receives not time</p>

        <div v-for="result in results" :key="result.id">
          <nuxt-link :to="getPath(result.id)">{{result.name}}</nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LefthandNav from '@/components/lefthand-nav';

export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
  data() {
    return {
      results: [{
        name: '01/03/20 Shirley Lake Express, Squaw Valley',
        id: '2020-01-03'
      }]
    }
  },
  methods: {
    getPath(date) {
      return `/events/archived-results/${date}`;
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
