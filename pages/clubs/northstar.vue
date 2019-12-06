<template>
  <v-container style="min-height:800px">
    <v-row align="center" justify="center">
      <v-img height="300" src="/images/northstar-hero-image.jpg"></v-img>
    </v-row>
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="clubs"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Northstar</div>
        <hr class="hrr"></hr>
        <p>This program is designed for skiers who have the desire to compete in moguls, with a focus on development. Training includes skiing moguls, slopestyle, halfpipe, powder, trees, jumps, gates, steeps, and more. Athletes will train on a private mogul course in our Northstar Training Arena approximately 50%-60% of the time. We introduce competitive skiing, and allow athletes to develop their own personal vision for the sport.</p>
        <div class="text-center">
          <v-btn href="https://www.northstarcalifornia.com/plan-your-trip/ski-and-ride-lessons/products/Mogul-Part-Time">Visit Team Site</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
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
