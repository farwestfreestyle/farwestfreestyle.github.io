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
      <v-toolbar-title @click="goHome" class="top-logo"><img src="/images/bear-logo.svg"></v-toolbar-title>
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
			<v-container fluid class="main-area">
				<v-row no-gutters justify="center">
          <v-col columns="12" xs="12" md="10" lg="8" class="bgcolor">
            <nuxt />
            </v-col>
        </v-row>
			</v-container>
		</v-content>
  </v-app>
</template>
<script>
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
    sections() {
      return this.$store.getters.sections;
    }
  }
}

</script>
<style lang="scss">
  .v-toolbar {
    flex: 0 1 auto !important;
  }
  .hrr {
    border:1px solid #333;
    opacity: .25;
    margin-bottom: 2rem;
  }
  .hdr {
    color: #5B677A;
    font-weight: 800;
    font-size: 175%;
  }
  p {
    color: black;
  }
  .main-area {
    background-color: #5B677A;
    min-height:400px;
  }
  .bgcolor {
    background-color: #E8F0FF;
  }
  .v-toolbar__title img {
    height: 45px;
  }
  .v-list__group__header__prepend-icon i.events-icon, .events-icon {
    color: red;
    background-image: url('/images/events-icon.svg');
    background-repeat:no-repeat;
    background-size: 20px;
    background-position: center center;
    width: 20px;
    height: 20px;
  }  

  .v-list__group__header__prepend-icon i.clubs-icon, .clubs-icon {
    color: red;
    background-image: url('/images/clubs-icon.svg');
    background-repeat:no-repeat;
    background-size: 20px;
    background-position: center center;
    width: 20px;
    height: 20px;
  }
  .top-logo {
    cursor: pointer;
  }
</style>
