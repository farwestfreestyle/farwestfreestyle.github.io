
<template>
  <v-container style="min-height:750px">
    <v-row>
      <v-col cols="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="about"></LefthandNav>
      </v-col>
      <v-col cols="12" md="8">
        <div class="hdr">Event Crew</div>
        <hr class="hrr"></hr>
        <p>The below document outlines event roles and responsibilities.</p>
        <p>
          <a href="/files/farwest-event-organization-crew.pdf">Farwest Event Organization Crew</a>
        </p>
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
  computed: {
    board() {
      return this.$store.getters.board;
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
