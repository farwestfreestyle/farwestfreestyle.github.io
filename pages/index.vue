<template>
  <div class="home-cards">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img class="farwestlogo" src="/images/farwest-freestyle-logo.svg"></img>
        </v-col>
        <v-col cols="12" xs="12" md="8">
          <div class="hdr">WELCOME</div>
            <p>Far West Freestyle is the Western division of US Ski and Snowboard, formerly USSA, the US national skiing and snowboarding organizing body as sanctioned by the United States Olympic Committee.</p>
            <p>Far West Freestyle is a not-for-profit 501(c) (3) organization dedicated to supporting the training and development of competitive freestyle moguls athletes through the organization and promotion of freestyle moguls skiing events in the Sierra Nevada mountains.</p>
            <p>Over its 30+ year history, Far West Freestyle has been the home to many US Freestyle Ski Team and Olympic athletes.</p>
            <p>Our events are held at ski areas in the Lake Tahoe area. Athletes compete in age ranges from as young as 7 years of age up through their early 20s. We also have adults competing at a Master's level in Far West Freestyle events.</p>
            <p>We are governed by a <nuxt-link to="/about/board-of-directors">board of Directors</nuxt-link> consisting of parents of athletes, prior and current competitors, and representatives of the various ski clubs and freestyle teams. This group organizes events with the help of other parent volunteers and US Ski and Snowboard officials.</p>
            <p>Far West Freestyle events are financed by the membership dues and event fees collected through US Ski and Snowboard.</p>
            <p>We also receive the support of the generous sponsors listed below.</p>
            <p>Insta here</p>
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
  .insta {
    margin-top: 100px;
    border: 1px solid;
    width: 100%;
  }
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
