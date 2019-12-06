<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="getStarted"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Membership & Licenses</div>
        <hr class="hrr"></hr>
        <p>Please visit below links on instructions how to create a US Ski & Snowboard Membership.</p>
        <ul>
          <li><a href="https://my.ussa.org/membership/start">Create New Membership Here</a></li>
          <li><a href="https://my.ussa.org/sites/default/files/documents/membership/2014-15/documents/Member%20Materials_Freestyle_Print_0.pdf">Membership types and benefits</a></li>
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
