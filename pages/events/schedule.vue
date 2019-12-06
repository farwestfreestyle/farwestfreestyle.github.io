<template>
  <v-container style="min-height:800px">
    <v-row>
      <v-col sm="12" md="4" class="pa-4 mt-6 d-none d-md-flex">
        <LefthandNav section="events"></LefthandNav>
      </v-col>
      <v-col sm="12" md="8">
        <div class="hdr">Schedule</div>
        <hr class="hrr"></hr>
        <v-sheet height="360"> 
					<v-toolbar flat color="#728EBF">
						<v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
						<v-btn fab text small @click="prev">
							<v-icon small>mdi-chevron-left</v-icon>
						</v-btn>
						<v-btn fab text small @click="next">
							<v-icon small>mdi-chevron-right</v-icon>
						</v-btn>
						<v-toolbar-title>{{ title }}</v-toolbar-title>
						<v-spacer></v-spacer>
          </v-toolbar>
          <v-calendar
            ref="calendar"
            v-model="focus"
            type="month"
            :now="today"
            light
            :events="events"
            @click:event="showEvent"
            @click:more="viewDay"
						@change="updateRange"
          >
          </v-calendar>
					<v-menu
						v-model="selectedOpen"
						:close-on-content-click="false"
						:activator="selectedElement"
						offset-x
					>
						<v-card
							color="grey lighten-4"
							min-width="350px"
							flat
						>
							<v-toolbar
								:color="selectedEvent.color"
								dark
							>
								<v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
								<v-spacer></v-spacer>
							</v-toolbar>
							<v-card-text>
                <div class="calendar-details-title" v-html="selectedEvent.title"></div>
								<div class="calendar-details" v-html="selectedEvent.details"></div>
								<div class="calendar-details-access" v-html="selectedEvent.access"></div>
							</v-card-text>
							<v-card-actions>
								<v-btn
									text
									color="secondary"
									@click="selectedOpen = false"
								>
									Cancel
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LefthandNav from '@/components/lefthand-nav';
import moment from 'moment';

export default {
  layout: 'secondary',
  components: {
    LefthandNav
  },
  data() {
    return {
      focus: '2020-01-01',
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    };
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  computed: {
    title () {
      const { start, end } = this
			console.log('start', start, 'end', end);
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear


      return `${startMonth} ${startYear}`
    },
		monthFormatter () {
			return this.$refs.calendar.getFormatter({
				timeZone: 'UTC', month: 'long',
			})
		},
    today() {
      return moment().format('YYYY-MM-DD');
    },
    events() {
      return this.$store.getters.events;
    }
  },
  methods: {
    setToday() {
      console.log('here', moment().format('YYYY-MM-DD'));
      this.focus = this.today;
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    viewDay ({ date }) {
      console.log('view day');
      this.focus = date
      this.type = 'day'
    },
    showEvent ({ nativeEvent, event }) {
      console.log('show event');
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
          setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
		updateRange ({ start, end }) {
			// You could load events from an outside source (like database) now that we have the start and end dates on the calendar
			this.start = start
			this.end = end
		},
  }
}

</script>
<style lang="scss">
.month {
  color: black;
}

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
  .calendar-details-title, .calendar-details, .calendar-details-access {
    color: black !important;
  }
  .calendar-details-title {
    font-weight: bold;
  }
</style>
