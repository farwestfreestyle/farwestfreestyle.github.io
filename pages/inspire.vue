<template>
  <div>
        <v-row class="d-lg-none">
          <v-col cols="12" sm="12" md="8" lg="6" offset-lg="3" offset-md="2">
            <v-card v-intersect="onIntersect" class="info-panel" id="card1">
              <v-card-title>Connection Speed</v-card-title>
              <v-card-subtitle id="progress"></v-card-subtitle>
              <v-card-text id="msg">{{msg}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row justify="start">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card2">
            <v-card-title>Some Test 1</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row justify="start" alignment="center">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card3">
            <v-card-title>Some Test 2</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
				<v-row justify="start">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card3">
            <v-card-title>Some Test 3</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
				<v-row justify="start">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card2">
            <v-card-title>Some Test 1</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row justify="start" alignment="center">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card3">
            <v-card-title>Some Test 2</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
				<v-row justify="start">
          <v-col cols="12" sm="12" md="5" lg="7">
           <v-card v-intersect="onIntersect" class="info-panel" id="card3">
            <v-card-title>Some Test 3</v-card-title>
            <v-card-subtitle>Some Subtitle</v-card-subtitle>
            <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding, Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
            </v-card>
          </v-col>
        </v-row>

  </div>
</template>
<script>
import MeasureBandwidth from '../lib/bandwidth'
const measure = new MeasureBandwidth()

export default {
  layout: 'fixed',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log('mounted')
    measure.start()
  },
  methods: {
    onIntersect (entries, observer) {
      console.log('on intersect', observer);
    }
  }
}

</script>
<style lang="scss">
	.test-rel {
		position: relative;
		z-index: 20;
		border: 1px solid white;
	}
</style>
