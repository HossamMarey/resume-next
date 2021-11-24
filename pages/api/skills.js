// experienced 1
// basic 2
const data = [
  {
    group: "Main skills",
    data: [
      {
        title: "HTML",
        img: "/images/skills/html.png",
        level: 1,
      },
      {
        title: "CSS",
        img: "/images/skills/css.png",
        level: 1,
      },
      {
        title: "SASS",
        img: "/images/skills/sass.png",
        level: 1,
      },
      {
        title: "Javascript",
        img: "/images/skills/javascript.png",
        level: 1,
      },
      {
        title: "jQuery",
        img: "/images/skills/jQuery.png",
        level: 1,
      },
      {
        title: "Bootstrap",
        img: "/images/skills/bootstrap.png",
        level: 1,
      },
      {
        title: "TailwindCss",
        img: "/images/skills/tailwindcss.png",
        level: 1,
      },
      {
        title: "Ant Design",
        img: "/images/skills/ant.svg",
        level: 1,
      },
      {
        title: "Material Ui",
        img: "/images/skills/material.png",
        level: 1,
      },
      {
        title: "React.js",
        img: "/images/skills/react.svg",
        level: 1,
      },
      {
        title: "Redux",
        img: "/images/skills/redux.png",
        level: 1,
      },
      {
        title: "Next.js",
        img: "/images/skills/next.png",
        level: 1,
      },

      {
        title: "Vue.js",
        img: "/images/skills/vue.png",
        level: 1,
      },
      {
        title: "Nuxt.js",
        img: "/images/skills/nuxt.png",
        level: 1,
      },
    ],
  },
  {
    group: "Basics Only",
    data: [
      {
        title: "Angular 2+",
        img: "/images/skills/angular.png",
        level: 2,
      },
      {
        title: "Anime.js",
        img: "/images/skills/animejs.png",
        level: 2,
      },
      {
        title: "Node (express.js)",
        img: "/images/skills/node.png",
        level: 2,
      },
      {
        title: "MongoDb",
        img: "/images/skills/mongodb.png",
        level: 2,
      },
      {
        title: "Strapi CMS",
        img: "/images/skills/strapi.png",
        level: 2,
      },
      {
        title: "Firebase",
        img: "/images/skills/firebase.png",
        level: 2,
      },
    ],
  },
  {
    group: "Tools",
    data: [
      {
        title: "GIT",
        img: "/images/skills/git.png",
        level: 2,
      },
      {
        title: "Postman",
        img: "/images/skills/postman.png",
        level: 2,
      },
      {
        title: "Adobe XD",
        img: "/images/skills/adobexd.png",
        level: 2,
      },
      {
        title: "VS Code",
        img: "/images/skills/vscode.png",
        level: 2,
      },
      {
        title: "Illustrator",
        img: "/images/skills/Illustrator.png",
        level: 2,
      },
    ],
  },
];

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
