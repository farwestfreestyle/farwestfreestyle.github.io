<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <News></News>
    </v-flex>
  </v-layout>
</template>

<script>
import News from '../components/news'

export default {
  data () {
    return {
      items: []
    }
  },
  components: {
    News
  },
  mounted () {
    console.log('mounted')
  },
  created () {
    console.log('created')
  }
}
</script>
