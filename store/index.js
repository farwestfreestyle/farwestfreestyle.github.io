
export const state = () => ({
  events: [
    {
      name: 'Squaw Valley Singles',
      title: 'Mogul Event #1 @ Squaw Valley',
      details: '<ul><li><a href="https://drive.google.com/file/d/1J1l35oLJLyI5EZ20O1tRJ557_phYa18P/view?usp=sharing" target="new">Competition Fact Sheet</a></li><li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeJv6TcaPMYyoAHrToy2RJZoGO44aM-2TYGg42HTzakDYaTig/viewform" target="new">Competition DAILY Check-in and Covid-19 Questionnaire</a></li><li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li></ul>',
      start: '2021-02-20',
      end: '2021-02-20',
      color: 'blue'
    },
    {
      name: 'Squaw Valley #2 Duals',
      title: 'Mogul Event #2 @ Squaw Valley',
      details: '<ul><li><a href="https://drive.google.com/file/d/1J1l35oLJLyI5EZ20O1tRJ557_phYa18P/view?usp=sharing" target="new">Competition Fact Sheet</a></li><li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeJv6TcaPMYyoAHrToy2RJZoGO44aM-2TYGg42HTzakDYaTig/viewform" target="new">Competition DAILY Check-in and Covid-19 Questionnaire</a></li><li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li></ul>',
      start: '2021-02-21',
      end: '2021-02-21',
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
