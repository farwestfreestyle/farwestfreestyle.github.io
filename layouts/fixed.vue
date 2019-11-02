<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
		<v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <v-list-item-title v-text="crud[0]"></v-list-item-title>
            <v-list-item-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
	</v-navigation-drawer>
    <v-toolbar width="100%" color="#728EBF" fixed>
			<v-app-bar-nav-icon @click.stopll="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Far West Freestyle</v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-menu offset-y v-for="(item,i) in items" :key="i">
					<template v-slot:activator="{ on }">
						<v-btn text dark v-on="on">{{ item.title }}<v-icon right>mdi-chevron-down</v-icon></v-btn>
					</template>
					<v-list>
						<v-list-item v-for="(sub,n) in item.subs" :key="n" @click="">
							<v-list-item-title>{{ sub.title}}</v-list-item-title>
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
		items: [
			{ title: "About", subs: [
				{ title: "Farwest Freestyle" },
				{ title: "Board of Directors" },
				{ title: "Membership & Licenses" },
				{ title: "Clinics" }]
			},
			{ title: "Events", subs: [
				{ title: "Registration" },
				{ title: "Scoring" },
				{ title: "Schedule & Results" } ]
			},
			{ title: "Clubs", subs: [
				{ title: "Squaw Valley Freestyle" },
				{ title: "Northstar" }]
			}
		],
		admins: [
			['Management', 'people_outline'],
			['Settings', 'settings'],
		],
		cruds: [
			['Create', 'add'],
			['Read', 'insert_drive_file'],
			['Update', 'update'],
			['Delete', 'delete'],
		]
	}),
	watch: {
		group () {
			this.drawer = false
		},
  }
}

</script>
<style lang="scss">
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
  }
  .bgcolor {
    background-color: #E8F0FF;
  }
  .v-toolbar__title {
    font-family: 'Open Sans', sans-serif;
    font-weight:800;
    font-size: 150%;
  }
	.none {
	}
</style>
