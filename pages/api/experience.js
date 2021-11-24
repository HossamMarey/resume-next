const data = [
  {
    title: "Front-End Developer (NuxtJs , NextJS)",
    company: "Inovola - Remotly - Full-time",
    date: "Aug. 2021 - Present",
    img: "/images/companies/inovola.jpg",
    projects: [
      {
        title: "BuilderZ Project",
        date: "Aug. 2021 - Present",
      },
      {
        title: "Tamincom Refactor",
        date: "Nov. 2021 - Present",
      },
    ],
  },
  {
    title: "Front-End Developer (NextJS)",
    company: "Alsakn - Remotly - Part-time",
    date: "Mar. 2021 - Oct. 2021",
    img: "/images/companies/alsakn.jpg",
  },
  {
    title: "Front-End Developer (NuxtJs)",
    company: "Rytalo - Remotly - Full-time",
    date: "Oct 2020 - Apr 2021 . 7 mos",
    img: "/images/companies/rytalo.png",
    projects: [
      {
        title: "GenWin Project",
        date: "Oct. 2020 - Apr. 2021",
      },
    ],
  },
  {
    title: "UI Developer",
    company: "Besteam - Nasr City - Full-time",
    date: "Sep 2019 - Oct 2020 . 1 yr 2 mos",
    img: "/images/companies/besteam.png",
  },
  {
    title: "Graphic Designer",
    company: "Freelance",
    date: "2015 -  Sep 2019 . 4 yrs",
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
