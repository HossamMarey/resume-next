// experienced 1
// basic 2
const data = [
  {
    title: "Trend Coupons",
    description:
      "A professional project for Sharing udemy coupons automaticly, I had used nodeJS web scraping to automate website and collect coupons from other websites",
    image: "/images/projects/trend.png",
    tags: [
      "html",
      "css",
      "sass",

      "bootstrap",
      "vue",
      "nuxt",
      "node.js",
      "express.js",
      "mongodb",
    ],
    links: {
      preview: "https://www.trend.coupons/",
      code: null,
      design: null,
    },
  },
  {
    title: "Tahakoom",
    description:
      "A professional project for Saudi Wireless & Remote Control Sports Federation & Robot , I built the Front-End part from scratch & the UI/UX Design",
    image: "/images/projects/tahakoom.jpg",
    tags: ["html", "css", "sass", "javascript", "bootstrap", "jQuery"],
    links: {
      preview: "http://tahakoom.gov.sa/",
      code: null,
      design: "https://www.behance.net/gallery/93230949/tahakoom-UI-web-Design",
    },
  },
  {
    title: "WRO Competions",
    description:
      "A professional project for Saudi WRO robotics competitions , I built the Front-End part from scratch & the UI/UX Design",
    image: "/images/projects/wro.jpg",
    tags: ["html", "css", "sass", "javascript", "bootstrap", "jQuery"],
    links: {
      preview: "https://www.wrosaudi.com/",
      code: null,
      design: "https://www.behance.net/gallery/93200737/WroSaud-Ui-Design",
    },
  },

  {
    title: "Shortly",
    description: "A beautiful landing page, designed for my udemy course",
    image: "/images/projects/shortly.png",
    tags: ["html", "css"],
    links: {
      preview: "https://css-course-projects.netlify.app/shortly/index.html",
      code: "https://github.com/HossamMarey/css-course-projects",
      design: null,
    },
  },
  {
    title: "Codv Academy",
    description: "Form Websit to a coding campaign",
    image: "/images/projects/codv.png",
    tags: ["html", "css", "tailwindcss", "react", "next", "firebase"],
    links: {
      preview: "https://codv.net",
      code: null,
      design: null,
    },
  },
  {
    title: "Foodery Mobile view",
    description: "a web view for mobile only E-commerce app",
    image: "/images/projects/foodery.png",
    tags: ["html", "css", "sass", "bootstrap", "vue"],
    links: {
      preview: "https://foodery-mobile.netlify.app/",
      code: null,
      design: "https://github.com/HossamMarey/todo-react-redux",
    },
  },

  {
    title: "Slacky",
    description: "Slack clone using react and firebase",
    image: "/images/projects/slacky.png",
    tags: ["html", "css", "sass", "bootstrap", "React", "Firebase"],
    links: {
      preview: "https://slacky.netlify.app/",
      code: null,
      design: "https://github.com/HossamMarey/react-slack-clone",
    },
  },

  {
    title: "Genwin app",
    description:
      "part of the front-end team  - using NuxtJs - it's onboarding markiting campaigns to collect funds and donations",
    image: "/images/projects/genwin.png",
    tags: ["html", "css", "sass", "vue", "nuxt"],
    links: {
      preview: "https://newwc.genwin.app/login",
      code: null,
      design: null,
    },
  },
  {
    title: "Maham",
    description: "TODO React app, designed for my udemy course",
    image: "/images/projects/maham.png",
    tags: ["html", "css", "react"],
    links: {
      preview: "https://maham.netlify.app/",
      code: null,
      design: "https://github.com/HossamMarey/todo-react-redux",
    },
  },
  {
    title: "Alakeel",
    description: "A beautiful landing page, designed for my udemy course",
    image: "/images/projects/alakeel.png",
    tags: ["html", "css"],
    links: {
      preview: "https://css-course-projects.netlify.app/resturant/index.html",
      code: "https://github.com/HossamMarey/css-course-projects",
      design: null,
    },
  },
  {
    title: "Motamd",
    description: "Project for Saudi teachers to be certificated",
    image: "/images/projects/motamd.png",
    tags: ["html", "css", "vue"],
    links: {
      preview: "http://motamd.org/",
      code: null,
      design: null,
    },
  },
  {
    title: "TVFLIX",
    description: "A react project, designed for my udemy course",
    image: "/images/projects/tvflix.png",
    tags: ["html", "css", "bootstrap", "react"],
    links: {
      preview: "https://show-react.netlify.app/",
      code: null,
      design: "https://github.com/HossamMarey/tv-shows",
    },
  },
  {
    title: "Discord Clone",
    description: "A beautiful landing page, designed for my udemy course",
    image: "/images/projects/discord.png",
    tags: ["html", "css"],
    links: {
      preview:
        "https://css-course-projects.netlify.app/discord-clone/index.html",
      code: "https://github.com/HossamMarey/css-course-projects",
      design: null,
    },
  },
  {
    title: "Alsakn",
    description:
      "A startup to build roommates community , still under developmenr ...",
    image: "/images/projects/alsakn.png",
    tags: ["html", "css", "react", "next", "strapi cms", "ant design"],
    links: {
      preview: "https://alsakn.com",
      code: null,
      design: null,
    },
  },
  {
    title: "AwnBank",
    description:
      "A professional project for AwnBank Store , I built the Front-End part from scratch & the UI/UX Design",
    image: "/images/projects/awnbank.jpg",
    tags: ["html", "css", "sass", "bootstrap", "javascript", "jQuery"],
    links: {
      preview: "http://awnbank.com/",
      code: null,
      design:
        "https://www.behance.net/gallery/93227291/AwnBank-Ecommerce-ui-design",
    },
  },
  {
    title: "BeStore",
    description:
      "A professional project for Besteam Store , I built the Front-End part from scratch & the UI/UX Design",
    image: "/images/projects/bestore.png",
    tags: ["html", "css", "sass", "bootstrap", "javascript", "jQuery"],
    links: {
      preview: "https://bestore.netlify.app/",
      code: null,
      design: null,
    },
  },
];

// https://beacademy.netlify.app/

export default async (req, res) => {
  try {
    if (req.method === "GET") {
      res.status(200).json(data);
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
