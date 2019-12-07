
export const state = () => ({
  events: [
    {
      name: 'Squaw Valley',
      title: 'Mogul Event #1 @ Squaw Valley',
      details: 'This will be a Friday, Saturday event.',
      access: 'Run TBD',
      start: '2020-01-03',
      end: '2020-01-04',
      color: 'blue'
    },
    {
      name: 'Northstar',
      title: 'Farwest Mogul Event #2 @ Northstar',
      details: 'Please arrive early for training.',
      access: 'Run TBD',
      start: '2020-01-25',
      end: '2020-01-26',
      color: 'green'
    },
    {
      name: 'Squaw Valley',
      title: 'Farwest Mogul Event #3 @ Squaw Valley',
      details: 'Please arrive early for training.',
      access: 'Run TBD',
      start: '2020-02-01',
      end: '2020-02-02',
      color: 'blue'
    },
    {
      name: 'Northstar',
      title: 'Divisional Championships',
      details: 'Divisional Champs at Northstar',
      access: 'Run TBD',
      start: "2020-02-22",
      end: "2020-02-23",
      color: "green"
    },
    {
      name: "Squaw Valley",
      title: 'Farwest Spring Mogul Event',
      details: "Final event of the year",
      access: 'Run TBD',
      start: "2020-04-04",
      end: "2020-04-05",
      color: 'blue'
    }
  ],
  sections: {
    getStarted: {
      title: "Get Started",
      links: [
        { title: "Athletes", link: "/get-started/athletes" },
        { title: "Membership & Licenses", link: "/get-started/membership-licenses" },
        { title: "Parents", link: "/get-started/parents" },
        { title: "Become an Official", link: "/get-started/become-an-official" }
      ]
    },
    events: {
      title: "Events",
      icon: 'events-icon',
      links: [
        { title: "Schedule", link: "/events/schedule" },
        { title: "Event Registration", link: "/events/registration" },
        { title: "Results", link: "/events/results" }
      ]
    },
    clubs: {
      title: "Clubs",
      icon: 'clubs-icon',
      links: [
        { title: "Squaw Valley Freestyle", link: "/clubs/squaw" },
        { title: "Northstar", link: "/clubs/northstar" }
      ]
    },
    about: {
      title: "About",
      icon: 'mdi-information',
      links: [
        { title: "Board of Directors", link: "/about/board-of-directors" },
        { title: "Event Crew", link: "/about/event-crew" },
        { title: "Contact Us", link: "/about/contact-us" },
      ]
    },

  },
  board: [
    { title: "Chair", name: "Sebastien Cayolle", email: "sebastien.cayolle@gmail.com" },
    { title: "Co-Chair & Technical Delegate", name: "Erick Panelli", email: "epanelli@wntrucking.com", phone: "(775) 745-2516" },
    { title: "Secretary & Chief of Scoring", name: "Lana Tam",  email: "lana.lee.tam@gmail.com" },
    { title: "Treasurer", name: "Fiona Gersh", email: "fionagersh@gmail.com" },
    { title: "Head Judge",  name: "Chuck Search",  email: "bigsearch@gmail.com" },
    { title: "Head of Fund-Raising & Community", name: "Brooks Rohlen", email: "brookio@gmail.com" },
    { title: "Head of Development & Growth", name: "Amy Tewksbury-Warren", email: "awarren2@vailresorts.com" },
    { title: "Squaw Valley Team Representative", name: "Jimeel Ferris", email: "idahojimeel@gmail.com" },
    { title: "Northstar Team Representative", name: "Nat Schirman",  email: "nschirman79@gmail.com" },
  ]
});

export const getters = {
  events: (state, getters) => {
    return state.events;
  },
  sections: (state, getters) => { 
    return state.sections;
  },
  getSection: (state) => (key) => {
    return state.sections[key];
  },
  board: (state, getters) => {
    return state.board;
  }
};
