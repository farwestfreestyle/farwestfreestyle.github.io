<template>
  <div class="home-cards">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img class="farwestlogo" src="/images/farwest-freestyle-logo.svg"></img>
        </v-col>
        <v-col cols="12" xs="12" md="8">
          <div class="hdr">WELCOME</div>
          <p>Far West Freestyle is the western division of the United States Ski and Snowboard Association (USSA).</p>
          <p>We sanction, organize, finance and host amateur level freestyle ski events in, and around, the Lake Tahoe area.</p>
           <hr class="hrr"></hr>
          <div class="hdr">ABOUT</div>
          <p>Our events are held at Ski areas such as Heavenly Valley, Squaw Valley, Boreal, Sugar Bowl and Sierra at Tahoe. Athletes compete in age ranges from as young as 7 years of age up through their early 20s. We also have adults competing at a Master's level in Far West events.</p>
          <p>Our competitive events are in Moguls, Dual Moguls, Slopestyle and Half-pipe, and Big Air.</p>
           <hr class="hrr"></hr>
           <div class="hdr">VOLUNTEERS</div>
           <p>Our events are organized by a board made up of parent volunteers from various freestyle teams. This group works with competitor teams and the USSA to schedule and organize our events.</p>
           <p>We rely solely on the support of parent volunteers to assist with the numerous jobs required to put on a good event, which is why all parents of competitors are encouraged to volunteer.</p>
           <p>sponsors go here</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MeasureBandwidth from '../lib/bandwidth'
const measure = new MeasureBandwidth()

export default {
  layout: 'index',
  data () {
    return {
      msg: '',
    }
  },
  mounted () {
    console.log('mounted')
    //measure.start()
  },
  methods: {
    onIntersect (entries, observer) {
      console.log('on intersect', observer);
    }
  }
}

</script>
<style lang="scss">
  .farwestlogo {
    width: 15rem;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .home-cards > div {
    margin-top: 1rem;
    overflow: hidden;
  }
</style>
