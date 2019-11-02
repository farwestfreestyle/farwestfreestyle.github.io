<template>
  <div class="news">
    <b>LATEST NEWS</b>
    <div v-for="(item) in feed" :key="item.id" class="news-item">
      <div>{{ item.title }}</div>
      <div class="news-content">{{ item.content }}</div>
      <div>{{ item.date }}</div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      cursor: 0
    }
  },
  computed: {
    feed () {
      return [
        { id: 1, title: 'Some Example News', date: 'Oct 24, 2019 10:36pm', content: 'Woodwards is closed tonight, will be opent tomorrow' },
        { id: 2, title: 'Some Example News', date: 'Oct 24, 2019 10:36pm', content: 'Woodwards is closed tonight, will be opent tomorrow' },
        { id: 3, title: 'Some Example News', date: 'Oct 24, 2019 10:36pm', content: 'Woodwards is closed tonight, will be opent tomorrow' },
        { id: 4, title: 'Some Example News', date: 'Oct 24, 2019 10:36pm', content: 'Woodwards is closed tonight, will be opent tomorrow' }
      ]
    }
  }
}
</script>
<style lang="scss">
  .news {
    display: inline-flex;
    background-color: white;
    min-height: 2rem;
    border: 1px solid white;
    flex-direction: column;
    padding: 5px;
    & > b {
      margin: 5px;
    }
    .news-item {
      margin:1px;
      padding: 3px;
      & > div {
        background-color: #DDDDDD;
        padding: .3rem;
        font-size: 90%;
        &:first-child {
          font-weight: 700;
          font-size: 80%;
          border-bottom: 1px solid #999999;
        }
        &:last-child {
          color: #666666;
          font-weight: normal;
          text-decoration: italic;
          font-size: 65%;
        }
      }
    }

  }
  .news-content {
    border-top: 1px solid #FEFEFE;
  }
  .prev, .next {
    padding: 5px;
  }
</style>
