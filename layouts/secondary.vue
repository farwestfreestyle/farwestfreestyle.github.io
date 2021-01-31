<template>
  <v-app>
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      app
    >
		<v-list>
      <v-list-group v-for="(section,s) in sections" :key="key()" value="false">
        <template v-slot:activator>
          <v-list-item-title>{{sections[s].title}}</v-list-item-title>
        </template>
        <v-list-item v-for="(link, l) in sections[s].links" :key="key()" nuxt :href="link.link">
          <v-list-item-title>{{link.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
	</v-navigation-drawer>
    <v-toolbar width="100%" color="#728EBF" fixed>
			<v-app-bar-nav-icon @click.stopall="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome" class="top-logo">Farwest Freestyle</v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-menu offset-y v-for="(section,s) in sections" :key="key()">
					<template v-slot:activator="{ on }">
						<v-btn text dark v-on="on">{{ section.title }}<v-icon right>mdi-chevron-down</v-icon></v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(link,n) in sections[s].links" :key="key()" :href="link.link" nuxt>
              <v-list-item-title>{{ link.title}}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar-items>
    </v-toolbar>
		<v-content>
			<v-container fluid class="main-area ma-0 pa-0">
				<v-row no-gutters justify="center">
          <v-col sm="0" md="2" class="d-sm-none"></v-col>
          <v-col sm="12" md="8" class="bgcolor">
            <nuxt />
          </v-col>
          <v-col sm="0" md="2" class="d-sm-none"></v-col>
        </v-row>
			</v-container>
		</v-content>
    <SponsorFooter/>
  </v-app>
</template>
<script>
import SponsorFooter from '../components/sponsor-footer';

export default {
  components: {
    SponsorFooter
  },
	data: () => ({
		drawer: false,
		group: null,
	}),
	watch: {
		group () {
			this.drawer = false
		},
  },
  methods: {
    goHome (e) {
      this.$router.push('/');
    },
    key() {
      return `uuid-${Math.round(Math.random() * 1000000)}`;
    }
  },
  computed: {
    timestamp () {
      return "";
    },
    sections() {
      return this.$store.getters.sections;
    }
  }
}
</script>
<style lang="scss">
  .d-sm-none {
    display: none;
  }
</style>
