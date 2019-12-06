<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="events"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Event Registration</div>
        <hr class="hrr"></hr>
        <h4 class="my-5">ABOUT EVENTS</h4>
        <ul>
          <li>Mogul events are typically two days.</li>
          <li>The first day is usually a two-run singles event.</li>
          <li>The best score of the two runs are recorded with US Ski & Snowboard as one FSSP score.</li>
          <li>The second day is a one-run single event, followed by a duals event.</li>
          <li>One singles and one Duals FSSP score is recorded with US Ski & Snowboard for each competitor on the second day.</li>
          <li>Competitors must have proper equipment. Helmets are mandatory and mouth guards are strongly encouraged.</li>
          <li>Competitors must have a Far West Bib. These can be purchased at time of registration. New bib purchases will be handed out on the first morning of the event at the registration desk.</li>
          <li>The competitor's bib number is assigned, and that number is kept for all events and subsequent years.</li>
        </ul>
        <h4 class="my-5">REGISTER FOR AN EVENT</h4>
        <p>Registration is done through U.S. Ski & Snowboard. The athlete must <a href="https://my.ussa.org/myussa">join U.S. Ski & Snowboard</a> as a competitor to register for an event.</p>
        <ul>
          <li>Fees for regular events are $55 per day.</li>
          <li>Fees for Divisional Championships are $65 per day.</li>
          <li>Registration will close at Noon(PST) the day before the first event.</li>
          <li>All competitors MUST purchase a bib for $50 at the first Squaw Valley event this year.</li>
        </ul>
        <h4 class="my-5">THE DAY OF AN EVENT</h4>
        <p>Coming soon</p>
        <ul>
          </ul>
        <v-banner light class="mt-5">
          <v-avatar slot="icon" color="red accent-4" size="40">
            <v-icon icon="mdi-alert" color="white">mdi-alert</v-icon>
          </v-avatar>
          <b>PLEASE NOTE THAT EVENT DATES ARE SUBJECT TO CHANGE DUE TO SKI RESORT AVAILABILITY OR WEATHER.</b>
        </v-banner>
        <div align="center" justify="center" class="mt-5">
          <v-btn href="https://my.ussa.org/myussa">U.S. Ski & Snowboard Members Portal</v-btn>
        </div>
        <p class="mt-5">Once logged in, click on "athlete event registration" and follow instructions to complete registration.</p>
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
}

</script>
<style lang="scss">
  ul, h4 {
    color: #333;
  }
  .v-banner {
    border: 1px solid red !important;
  }
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
