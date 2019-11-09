
export const state = () => ({
  events: [
    {
      name: 'Squaw Valley',
      details: 'This will be a Friday, Saturday event',
      start: '2020-01-03',
      end: '2020-01-04',
      color: 'blue'
    },
    {
      name: 'Northstar',
      details: '',
      start: '2020-01-25',
      end: '2020-01-26',
      color: 'green'
    },
    {
      name: 'Squaw Valley',
      details: '',
      start: '2020-02-01',
      end: '2020-02-02',
      color: 'blue'
    },
    {
      name: "Northstar",
      details: "Divisional Championships",
      start: "2020-02-22",
      end: "2020-02-23",
      color: "green"
    },
    {
      name: "Squaw Valley",
      details: "Spring Event",
      start: "2020-04-04",
      end: "2020-04-05"
    }
  ],
  sections: { 
    about: {
      title: "About",
      icon: 'mdi-information',
      links: [
        { title: "Farwest Freestyle", link: "/about/farwest" },
        { title: "Board of Directors", link: "/about/board-of-directors" },
        { title: "Membership & Licenses", link: "/about/membership-licenses" },
        { title: "Clinics", link: "/about/clinics" }
      ]
    },
    events: {
      title: "Events",
      icon: 'events-icon',
      links: [
        { title: "Registration", link: "/events/registration" },
        { title: "Scoring", link: "/events/scoring" },
        { title: "Schedule & Results", link: "/events/schedule-results" }
      ]
    },
    clubs: {
      title: "Clubs",
      icon: 'clubs-icon',
      links: [
        { title: "Squaw Valley Freestyle", link: "/clubs/squaw" },
        { title: "Northstar", link: "/clubs/northstar" }
      ]
    }
  },
  board: [
    { title: "Chair", name: "Sebastien Cayolle", email: "sebastien.cayolle@gmail.com" },
    { title: "Secretary & Scoring", name: "Lana Tam",  email: "lana.lee.tam@gmail.com" },
    { title: "Treasurer", name: "Fiona Gersh", email: "fionagersh@gmail.com" },
    { title: "Head Judge",  name: "Chuck Search",  email: "bigsearch@gmail.com" },
    { title: "Squaw Valley Team Director", name: "Jimeel Ferris", email: "idahojimeel@gmail.com" },
    { title: "Northstar Team Director", name: "Nat Schirman",  email: "nschirman79@gmail.com" },
    { title: "Northstar Representative", name: "Amy Tewksbury-Warren", email: "awarren2@vailresorts.com" },
    { title: "Technical Delegate", name: "Erick Panelli", email: "epanelli@wntrucking.com" },
    { title: "Fund Raising", name: "Brooks Rohlen", email: "brookio@gmail.com" }
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
