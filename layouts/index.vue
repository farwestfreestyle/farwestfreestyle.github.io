<template>
  <v-app light>
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
      <v-toolbar-title @click="goHome" class="top-logo">Farwest Freestyle</v-toolbar-title>
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
      <v-container fluid class="ma-0 pa-0">
        <div class="top-shadow hidden-sm-and-down"></div>
        <div class="show-title hidden-sm-and-down">
          <div class="pb-0 mb-0">{{ showTitleHeadline }}</div>
          <div class="sub">{{ showTitleSubtitle }}</div>
          <div class="mt-3"><v-btn color="primary" large nuxt to="/events/schedule">VIEW SCHEDULE</v-btn></div>
        </div>
        <v-carousel height="600" hide-delimiter-background show-arrows-on-hover class="hidden-sm-and-down">
          <v-carousel-item v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition">
          </v-carousel-item>
        </v-carousel>
      </v-container>
			<v-container fluid class="main-area pa-0">
				<v-row no-gutters justify="center">
          <v-col columns="12" md="10" lg="8" class="bgcolor">
            <nuxt />
            </v-col>
        </v-row>
			</v-container>
		</v-content>
    <SponsorFooter />
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
    items: [
      {src:'/images/hero/squaw-05.png'},
      {src:'/images/hero/squaw-03.jpg'},
      {src:'/images/hero/squaw-04.jpg'}
    ]
	}),
	watch: {
		group () {
			this.drawer = false
		},
  },
  methods: {
    goHome (e) {
      this.$router.push('/');
    }
  },
  computed: {
    showTitleHeadline () {
      return 'CALLING ALL RIPPERS';
    },
    showTitleSubtitle () {
      return '2020 Schedule Posted!';
    },
    showTitleAction () {
      return true;
    },
    showTitleNuxt () {
      return false;
    },
    showTitleLink () {
      return 'https://www.google.com';
    },
    version () {
      return pkg.version;
    },
    timestamp () {
      return '';
    },
    sections() {
      return this.$store.getters.sections;
    }
  }
}

</script>
<style lang="scss">
  .show-title {
    position: absolute;
    z-index: 2;
    top: 50px;
    left: 60px;
    & > div:first-child {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 600;
      font-size: 310%;
      color: black;
    }
    & > div.sub {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 400;
      font-size: 175%;
      color: black;
      margin-top: -10px;
    }
  }
  .top-shadow {
    opacity: .5;
    height: 10px;
    width: 100%;
    background-image: linear-gradient(#222, transparent);
    position:absolute;
    z-index: 1;
    top: 0px;
  }
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
    background-color: #DDD;
  }
  .bgcolor {
    background-color: white;
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
    font-family: "Titillium Web", sans-serif;
    font-weight: 800;
    color: #254873;
    text-shadow: 0px 1px #A3ADBF;
    font-size: 180%;
    & > div {
      height: 55px;
      width: 7rem;
      background-image:url("/images/bear-logo-skis-1.0.0.svg");
      background-repeat: no-repeat;
      background-size: 6.5rem;
      background-position: center center;
    }
  }
</style>
