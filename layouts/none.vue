<template>
  <v-app>
		<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="green" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Far West Freestyle</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<!-- Provides the application the proper gutter -->
			<div class="d-lg-block d-sm-none d-md-none vid">
				<video width="100%" height="100%" src="/videos/matt-test-bw.mp4" autoplay type="video/mp4" muted loop></video>
			</div>
			<div class="d-md-block d-lg-none d-xl-none photo">PHOTO BG</div>
			<v-container fluid class="main-area">
				<div><nuxt /></div>
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
  }
}

</script>
<style lang="scss">
	header {
		position: fixed;
		z-index: 2;
		background-color: #0f1e40;
		height: 10vh;
	}
	.vid {
		position:fixed;
		top: 0px;
		z-index: 0;
	}
	.photo {
		width: 100%;
		height:100%;
		background-color: #CCC;
		position: absolute;
		z-index: 1;
	}
	.main-area {
		margin-top: 50px;
		position: fixed;
		height: 93vh;
		overflow: scroll;
		z-index: 1;	
		& > div {
		}
	}
</style>
