<template>
  <v-app>
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      app
    >
		<v-list>
      <v-list-group v-for="(section,s) in sections" :key="s" value="false">
        <template v-slot:activator>
          <v-list-item-title>{{sections[s].title}}</v-list-item-title>
        </template>
        <v-list-item v-for="(link, l) in sections[s].links" :key="s" nuxt :href="link.link">
          <v-list-item-title>{{link.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
	</v-navigation-drawer>
    <v-toolbar width="100%" color="#728EBF" fixed>
			<v-app-bar-nav-icon @click.stopall="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome" class="top-logo"><div></div></v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-menu offset-y v-for="(section,s) in sections" :key="s">
					<template v-slot:activator="{ on }">
						<v-btn text dark v-on="on">{{ section.title }}<v-icon right>mdi-chevron-down</v-icon></v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(link,n) in sections[s].links" :key="n" :href="link.link" nuxt>
              <v-list-item-title>{{ link.title}}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar-items>
    </v-toolbar>
		<v-content>
			<v-container fluid class="main-area ma-0 pa-0">
				<v-row no-gutters justify="center">
          <v-col columns="12" xs="12" md="10" lg="8" class="bgcolor">
            <nuxt />
            </v-col>
        </v-row>
			</v-container>
		</v-content>
    <footer>
      <v-container>
        <v-row justify="center" align="center" class="sponsors">
          <a href="https://shanemcconkey.org/"><v-img contain src="/images/sm-shane.png" max-height="100" max-width="100" border="0"></v-img></a>
          <a href="https://www.aon.com"><v-img contain max-height="100" max-width="100" src="/images/sm-aon.png" border="0"></v-img></a>
          <a href="https://www.tahoegetaways.com"><v-img contain max-height="100" max-width="150" src="/images/sm-tahoe-getaways.png" border="0"></v-img></a>
          <a href="https://squawalpine.com/events-things-do/wildflour-baking-company"><v-img contain max-height="100" max-width="150" src="/images/sm-wildfour-bw.png" border="0"></v-img></a>
          <a href="https://charitysmith.org"><v-img contain max-height="100" max-width="180"src="/images/sm-charitysmith.png" border="0"></v-img></a>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" class="sm-text">&copy; FARWEST FREESTYLE 2019-2020 All Rights Reserved.</v-col>
          <v-col cols="12" sm="6" class="version">VERSION {{ version }}@{{ timestamp }}</v-col>
        </v-row>
      </v-container>
    </footer>
  </v-app>
</template>
<script>
import pkg from '../package.json';
console.log('env', process.env);

export default {
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
      console.log('go home', this.$router);
      this.$router.push('/');
    }
  },
  computed: {
    version () {
      return pkg.version;
    },
    timestamp () {
      return process.env.TIMESTAMP;
    },
    sections() {
      return this.$store.getters.sections;
    }
  }
}
</script>
