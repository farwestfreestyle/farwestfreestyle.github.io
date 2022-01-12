
export const state = () => ({
  events: [
 {
      name: '2021 US Freestyle Selections',
      title: 'Winter Park, CO (Dec 16-21, 2021)',
      details: `National Event, Invite Only.<br/><ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2021-12-16',
      end: '2021-12-21',
      color: 'blue'
    },
   {
      name: 'Palisades Tahoe',
      title: 'Jan 8/9 Comp',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
        <li><a href="/results/01-08-2022-singles-overall.pdf">Sat 1/8 Overall Results</a></li>
        <li><a href="/results/01-08-2022-singles-by-age.pdf">Sat 1/8 Results by Age Group</a></li>
      </ul>`,
      start: '2022-01-08',
      end: '2022-01-09',
      color: 'blue'
    },

    {
      name: 'Palisades Tahoe',
      title: 'Jan 22/23 Comp',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-01-22',
      end: '2022-01-23',
      color: 'blue'
    },
    {
      name: 'Sun Valley, ID',
      title: 'Jan 28/30 comp',
      details: `Athletes u13 and older.<br/><ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-01-28',
      end: '2022-01-30',
      color: 'blue'
    },
    {
      name: '2022 Winter Olympics',
      title: 'Freestyle Moguls | Beijing, China',
      details: `
      Mens Final Saturday 2/5/22<br/>
      Womens Final Sunday 2/6/22
      `,
      start: '2022-02-03',
      end: '2022-02-06',
      color: 'blue'
    },
    {
      name: 'Homewood Mountain Resort',
      title: 'Feb 12/13 comp',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-02-12',
      end: '2022-02-13',
      color: 'blue'
    },
    {
      name: 'Div Champs, Singles',
      title: 'Northstar California Resort<br/>2022 Divisional Championships - Singles (March 5, 2022)',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-03-05',
      end: '2022-03-05',
      color: 'blue'
    },
    {
      name: 'Div Champs, Duals',
      title: 'Northstar California Resort<br/>2022 Divisional Championships - Duals (March 6, 2022)',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-03-06',
      end: '2022-03-06',
      color: 'blue'
    },
    {
      name: '2022 US Junior Nationals',
      title: 'Utah Olympic Park - Park City, UT (March 16 - 21, 2022)',
      details: `National Event, invite only.<br/><ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-03-16',
      end: '2022-03-21',
      color: 'blue'
    },
    {
      name: '2022 US Nationals',
      title: 'Palisades Tahoe, CA (March 23 - 27, 2022)',
      details: `National Event, invite only.<br/><ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">Register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-03-23',
      end: '2022-03-27',
      color: 'blue'
    },
    {
      name: 'palisades tahoe',
      title: 'spring event',
      details: `<ul>
        <li><a href="https://my.usskiandsnowboard.org" target="new">register @ my.usskiandsnowboard.org</a></li>
      </ul>`,
      start: '2022-04-02',
      end: '2022-04-03',
      color: 'blue'
    },
    {
      name: 'palisades tahoe',
      title: 'spring event',
      details: '<ul><li><a href="https://drive.google.com/file/d/1j1l35oljlyi5ez20o1trj557_phya18p/view?usp=sharing" target="new">competition fact sheet</a></li><li><a href="https://docs.google.com/forms/d/e/1faipqlsejv6tcapmyyoahrtoy2rjzogo44am-2tygg42htzakdyatig/viewform" target="new">competition daily check-in and covid-19 questionnaire</a></li><li><a href="https://my.usskiandsnowboard.org" target="new">register @ my.usskiandsnowboard.org</a></li></ul>',
      start: '2020-04-02',
      end: '2020-04-03',
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
