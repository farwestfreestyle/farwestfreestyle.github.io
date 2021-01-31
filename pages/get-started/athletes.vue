<template>
  <v-container style="min-height:750px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="getStarted"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Athletes</div>
        <hr class="hrr"></hr>
        <ul>
          <li><b>Join a Team/Club</b> - Join a US Ski and Snowboard competition team or club to get the best professional coaching and logistical support.
            <ul>
              <li><nuxt-link to="/clubs/northstar">Northstar Ski & Snowboard Teams</nuxt-link></li>
              <li><nuxt-link to="/clubs/northstar">Olympic Valley Freestyle and Freeride (aka SquawFree)</nuxt-link></li>
            </ul>
          </li>
          <li><b>Learn and Train</b> - the FarWest Freestyle clubs are staffed with world-class Freestyle coaches who can guide you from your first run down a mogul course to your winning US National Championship run!</li>
          <li><b><nuxt-link to="/get-started/membership-licenses">Sign up for a US Ski and Snowboard Membership</nuxt-link></b> – Athletes must join at both the national and divisional levels (selecting FarWest Freestyle) to gain access to competitions in your home area and nationally.</li>
          <li>A Competitor’s membership is required and involves paying a FarWest Freestyle Division fee.</li>
          <li>Parents generally <a href="https://my.ussa.org/create-myussa-account">create a free US Ski and Snowboard account</a> for themselves plus an account for each child. Once each account is created, the child’s account can be linked to the parent’s account from where memberships and competition registrations are managed. A simple tutorial on setting up accounts is available <a href="https://my.ussa.org/membership/become-member-online">here</a>.</li>
          <li><b>Compete</b> - We plan to hold 5 scored competitions during the season from January to April. The divisional competition schedule is posted at farwestfresstyle.com and registration for events is completed on <a href="https://my.ussa.org/" target="ussa">my.ussa.org.</a></li>
          <ul>
            <li>The five US Ski and Snowboard-sanctioned competitions typically occur on week-ends. Week-end competitions consist of 2 distinct events: one on Saturday with 2 single-mogul runs, and one event on Sunday starting with a single-mogul run in the morning followed by a dual-moguls competition.</li>
            <li>There is an entry fee of approximately $55 for each day of competition ($65 for divisional Championships). The fees are paid with a credit card when registering from your account profile on <a href="https://my.ussa.org/" target="ussa">my.ussa.org</a>.</li>
            <li>Each competitor must purchase a bib s/he will compete with for at least 1 season. Bibs are purchased for $50 from the FarWest Freestyle Treasurer or Chief of Scoring.</li>
            <li>Safety comes first. A helmet is mandatory, mouth-guards and back-protectors are highly recommended.</li>
          </ul>
        </li>
        <li><b>Progress…</b> all the way to <a href="https://usskiandsnowboard.org/index.php/teams/freestyle" target="team">US Team</a> Selection - As you continue to advance, your US Ski and Snowboard ranking may qualify you to compete at the national level in Junior Nationals and US Championships and then onto the US Freestyle Team, and then to the Olympic Team!</li>
          </ul>
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
