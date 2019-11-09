
export const state = () => ({
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
