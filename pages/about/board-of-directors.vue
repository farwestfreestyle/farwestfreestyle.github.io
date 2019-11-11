<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="about"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Board of Directors</div>
        <hr class="hrr"></hr>
        <div class="d-none d-md-block">
					<v-simple-table light>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Title</th>
									<th class="text-left">Name</th>
									<th class="text-left">Email</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,i) in board" :key="i">
									<td>{{ item.title }}</td>
									<td>{{ item.name }}</td>
									<td>{{ item.email }}</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</div>
				<div class="hidden-md-and-up">
					<v-list>
						<v-list-item v-for="(item,i) in board" :key="i" two-line>
							<v-list-item-content>
								<v-list-item-title><b>{{item.name}}, {{item.title}}</b></v-list-item-title>
								<v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LefthandNav from '@/components/lefthand-nav';

export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
  computed: {
    board() {
      return this.$store.getters.board;
    }
  }
}

</script>
<style lang="scss">
.link > div {
    color: black !important;
  }
  .link:hover > div {
    text-decoration: underline;
  }
  .selected {
    font-weight: bold;
  }
  .selected:hover > div {
    text-decoration: none !important;
  }

</style>
