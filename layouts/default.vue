<template>
  <v-app dark>
    <v-content class='main'>
      <v-flex class="video-container">
        <div class="color-overlay"></div>
        <video autoplay loop muted v-if="showVideo">
          <source src="videos/matt-test-bw.mp4" format="mp4"></source>
        </video>
      </v-flex>
      <v-flex class="header"><div></div></v-flex>
      <v-flex class="nuxt">
        <v-flex sm12 md12 lg6 cats>CATS</v-flex>
        <nuxt />
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showVideo: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'example'
    }
  }
}
</script>
<style lang="scss">
  .header {
    height: 8.5rem;
    position: relative;
    width: 100%;
    z-index: 5;
    background-size: 17rem;
    background-position: right 20px bottom;
    background-image: url('/images/farwest-freestyle-logo.svg');
    background-repeat: no-repeat;
  }
  .main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
  .color-overlay {
    background-color: black;
    opacity: .1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index:1;
  }
  .video-container {
    position: absolute;
    top:0;
    left: 0;
  }
  .nuxt {
    border: 1px solid red;
    position: relative;
    width: 100%;
    padding: 10px;
    z-index:20;
  }
</style>
