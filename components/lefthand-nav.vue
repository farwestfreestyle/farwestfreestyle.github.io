<template>
  <v-list style="background-color: transparent;">
    <v-list-item v-for="(item, i) in items" :key="i" :nuxt="!isSelected(item)" :href="isSelectedLink(item)" :class="{'link':true, 'selected': isSelected(item)}">
      <v-list-item-title>{{item.title}}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  props: ['section'],
  created() {
    console.log('created', this.section);
  },
  computed: {
    items() {
      return this.$store.getters.getSection(this.section).links;
    }
  },
  methods: {
    isSelected(item) {
      console.log('isSelected', item.link, this.$route.path);
      const bool = item.link == this.$route.path;
      return bool;
    },
    isSelectedLink(item) {
      return this.isSelected(item) ? "" : item.link;
    }
  }

}
</script>
<style>

</style>
