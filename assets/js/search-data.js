// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed research in transportation engineering, machine learning, and urban mobility systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects in transportation systems, traffic safety, and sustainable mobility.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae - Mohammed Abdalazeem, PhD student in Transportation Engineering at University of Massachusetts Amherst.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and mentorship at University of Massachusetts Amherst and University of Khartoum.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference presentations in transportation engineering and data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-code",
          title: "code",
          description: "Open-source code from the NARSLab group at UMass Amherst where I contributed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-presented-a-poster-on-trip-pattern-typologies-in-the-pioneer-valley-bus-transit-system-at-the-trb-annual-meeting-in-d-c",
          title: 'Presented a poster on “Trip Pattern Typologies in the Pioneer Valley Bus Transit...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-spatio-temporal-trip-pattern-typology-analysis-for-a-regional-bus-network-at-the-informs-annual-meeting-in-indianapolis",
          title: 'Gave a talk on “Spatio-Temporal Trip Pattern Typology Analysis for a Regional Bus...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-spatiotemporal-bus-passenger-trip-patterns-at-the-massdot-transportation-innovation-conference-in-worcester-ma",
          title: 'Presented a poster on spatiotemporal bus passenger trip patterns at the MassDOT Transportation...',
          description: "",
          section: "News",},{id: "news-our-review-paper-origin-destination-inference-in-public-transportation-systems-a-comprehensive-review-is-published-in-ijtst-vol-12-1-pp-315-328",
          title: 'Our review paper “Origin-destination inference in public transportation systems: A comprehensive review” is...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-spatiotemporal-trip-chaining-framework-for-open-mobile-fare-collection-systems-at-the-trb-annual-meeting-in-d-c",
          title: 'Gave a talk on “Spatiotemporal Trip Chaining Framework for Open Mobile Fare Collection...',
          description: "",
          section: "News",},{id: "news-spatiotemporal-typology-paper-published-in-dst",
          title: 'Spatiotemporal typology paper published in DST',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10.html";
            },},{id: "news-presented-typology-enhanced-od-transfer-inference-from-noisy-mobile-boarding-observations-at-the-informs-annual-meeting-in-phoenix",
          title: 'Presented “Typology-Enhanced OD-Transfer Inference from Noisy Mobile Boarding Observations” at the INFORMS Annual...',
          description: "",
          section: "News",},{id: "news-transit-trip-chaining-paper-published-in-dst",
          title: 'Transit trip chaining paper published in DST',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8.html";
            },},{id: "news-gave-a-talk-on-enhancing-road-safety-a-data-driven-spatial-typology-of-crashes-in-new-england-at-the-informs-annual-meeting-in-seattle",
          title: 'Gave a talk on “Enhancing Road Safety: A Data-Driven Spatial Typology of Crashes...',
          description: "",
          section: "News",},{id: "news-crash-typology-paper-published-in-dst",
          title: 'Crash typology paper published in DST',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6.html";
            },},{id: "news-had-a-busy-trb-week-in-d-c-gave-a-talk-on-a-typology-informed-od-transfer-model-for-a-bus-transit-network-and-presented-a-poster-on-spatial-crash-typology-analysis",
          title: 'Had a busy TRB week in D.C. — gave a talk on “A...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-a-roadway-crash-typology-of-census-tracts-enables-targeted-interventions-at-the-neutc-annual-symposium-at-norwich-university-vt",
          title: 'Presented a poster on “A Roadway Crash Typology of Census Tracts Enables Targeted...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-optimizing-and-deploying-schematic-bicycle-maps-with-milp-and-user-input-at-the-informs-annual-meeting-in-atlanta",
          title: 'Presented a poster on “Optimizing and Deploying Schematic Bicycle Maps with MILP and...',
          description: "",
          section: "News",},{id: "news-schematic-bicycle-maps-paper-out-in-erc",
          title: 'Schematic bicycle maps paper out in ERC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-our-collaborative-paper-scenario-discovery-framework-aids-robust-regional-emissions-mitigation-planning-is-now-published-in-environmental-research-communications",
          title: 'Our collaborative paper “Scenario discovery framework aids robust regional emissions mitigation planning” is...',
          description: "",
          section: "News",},{id: "projects-transit-od-inference-from-mobile-ticketing-data",
          title: 'Transit OD Inference from Mobile Ticketing Data',
          description: "2021–2023 · Inferring complete passenger OD matrices from boarding-only mobile ticketing data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-spatial-crash-typology-and-risk-prediction",
          title: 'Spatial Crash Typology and Risk Prediction',
          description: "2024–2025 · Interpretable ML to classify crash typologies across census tracts and forecast risk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-schematic-bicycle-maps-for-sustainable-mobility",
          title: 'Schematic Bicycle Maps for Sustainable Mobility',
          description: "2024–present · How schematic bicycle maps influence cyclist behavior, mode choice, and sustainable mobility",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
