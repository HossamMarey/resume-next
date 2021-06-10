const data = [
  {
    title: "Front-End Developer",
    company: "Alsakn - Remotly - Part-time",
    date: "Mar 2021 - present",
    img: "/images/companies/alsakn.jpg",
  },
  {
    title: "Front-End Developer",
    company: "Rytalo - Remotly - Full-time",
    date: "Oct 2020 - Apr 2021 . 7 mos",
    img: "/images/companies/rytalo.png",
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
