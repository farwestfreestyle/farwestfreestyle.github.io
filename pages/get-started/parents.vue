<template> <v-container style="min-height:750px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="getStarted"></LefthandNav>
      </v-col>
      <v-col cols="12" md="8">
        <div class="hdr">Parents</div>
          <hr class="hrr"></hr>
          <b>Please Volunteer</b>
          <ul>
            <li>FarWest Freestyle is run by volunteer parents and assisted by teams’ coaches. As the parent of an athlete competing in freestyle events you’ll become a key member of a fun and dedicated community known for rolling its sleeves up to make competitions happen. The events require countless hours of preparation from setting up the course and installing equipment, to helping with check-in and distributing bibs, to hand-timing and picking-up lunches for the officials.</li>
            <li>We rely extensively on the support of parent volunteers to assist with the numerous jobs required to put on a good event, and strongly encourage all parents of competitors to volunteer in one capacity or another.</p>
           </li>
          </ul>
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
