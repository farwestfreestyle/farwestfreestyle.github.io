<template>
  <v-app light>
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
      <v-container class="mx-auto pa-0">
        <div class="top-shadow hidden-sm-and-down"></div>
        <div class="hidden-sm-and-down carousel-container">
          <v-carousel cycle interval="8000" height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(item,i) in items"
              :key="key()"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div :class="{'show-title': true, 'align-right': item.align === 'right', 'align-left': item.align === 'left'}">
                <div class="pb-0 mb-0">{{ item.title }}</div>
                <div class="sub">{{ item.subtitle }}</div>
                <div :class="{'mt-3': true, 'd-none': !item.showButton}"><v-btn color="primary" large nuxt to="/events/schedule">VIEW SCHEDULE</v-btn></div>
                <div :class="{judges: true, 'd-none': !item.showJudgesInfo}">
                  <div>Become a Freestyle Judge</div>
                  <ul>
                    <li>$200/Day Stipend</li>
                    <li>Free Lunch</li>
                    <li>Complimentary Lift Ticket</li>
                    <li>Great Community</li>
                    <li>Fun!</li>
                  </ul>
                  <div class="questions">
                    <div>QUESTIONS?</div>
                    <div>BIGSEARCH@GMAIL.COM</div>
                  </div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
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
      {src:'/images/hero/judges-flyer-01.png', align: 'left', title: "FARWEST FREESTYLE", subtitle: 'Is looking for you!', showButton: false, showJudgesInfo: true},
      {src:'/images/hero/squaw-05.png', align: 'left', title: 'IT\'S GO TIME!', subtitle: '21/22 Schedule Posted!', showButton: true},
      {src:'/images/hero/squaw-03.jpg', align: 'left', title: 'IT\'S GO TIME!', subtitle: '21/22 Schedule Posted', showButton: true},
      {src:'/images/hero/squaw-04.jpg', align: 'right', title: 'IT\'S GO TIME!', subtitle: '21/22 Schedule Posted', showButton: true}
    ]
	}),
	watch: {
		group () {
			this.drawer = false
		},
  },
  methods: {
    key() {
      return Math.round(Math.random() * 10000);
    },
    goHome (e) {
      this.$router.push('/');
    }
  },
  computed: {
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
  .questions {
    margin-top: 15px;
    font-weight: bold;
  }
  .carousel-container {
    height: 400px;
    margin: 0px auto;
  }
  .align-right {
    position: absolute;
    top: 50px;
    z-index: 2;
    right: 50px;
  }
  .align-left {
    position: absolute;
    top: 50px;
    z-index: 2;
    left: 50px;
  }
  .show-title {
    padding: 10px;
    & > div:first-child {
      font-family: 'Titillium Web', sans-serif;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 250%;
      color: DarkRed;
      text-shadow: 0 0 0.1em white, 0 0 0.1em white,  0 0 2em #FFFFFFDD;
    }
    & > div.sub {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 600;
      font-size: 175%;
      color: black;
      text-shadow: 0 0 0.1em white, 0 0 0.1em white,  0 0 2em #FFFFFFDD;
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
    left: 0px;
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
