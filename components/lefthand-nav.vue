<template>
  <div>
    <v-list style="background-color: transparent;">
      <v-list-item v-for="(item, i) in items" :key="i" :nuxt="!isSelected(item)" :href="isSelectedLink(item)" :class="{'link':true, 'selected': isSelected(item)}">
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isEventsPage">
        <a href="/files/western-states-freestyle-2019-2020-sc.pdf">Western Region/FIS Freestyle 2019/2020 Schedule</a>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ['section'],
  computed: {
    items() {
      return this.$store.getters.getSection(this.section).links;
    },
    isEventsPage() {
      return this.$route.path === '/events/schedule';
    }
  },
  methods: {
    isSelected(item) {
      const bool = item.link == this.$route.path;
      return bool;
    },
    isSelectedLink(item) {
      return this.isSelected(item) ? "" : item.link;
    }
  }
}
</script>
