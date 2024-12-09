let info = {
  name: "Moushita Patnaik",
  logo_name: "Moushita",
  flat_picture: require("./src/assets/picture/picture.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "Frontend Engineer with expertise in JavaScript, TypeScript, and Vue.js. Skilled in building high-performance, user-friendly web applications. Known for reducing bugs and improving efficiency through detail-oriented, collaborative work. Committed to continuous learning and applying new technologies.",
  links: {
    linkedin: "https://www.linkedin.com/in/moushita-patnaik/",
    github: "https://github.com/Moushita",
    resume:
      "https://drive.google.com/file/d/17G93buunnJcGEWTlkWGiAwMDG7LmH1us/view?usp=sharing",
  },
  education: [
    {
      name: "KIIT University",
      place: "Bhubaneswar, Odisha",
      date: "2018-2022",
      degree: "B.Tech in Computer Science and Engineering",
      gpa: "9.32/10",
      description: "",
      skills: [
        "Web Development",
        "C/C++",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering",
      ],
    },
  ],
  experience: [
    {
      name: "CleverTap",
      place: "Mumbai, Maharashtra, India",
      date: "July, 2023 - currently",
      position: "Frontend Engineer",
      description: "",
      skills: ["Vue.js", "HTML", "CSS", "JavaSript", "TypeSript", "Vuex"],
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        { skill: "JavaScript", level: "Advanced" },
        { skill: "TypeScript", level: "Intermediate" },
        { skill: "SQL", level: "Intermediate" },
        { skill: "C/C++", level: "Intermediate" },
        { skill: "Java", level: "Beginner" },
      ],
      icon: "fa fa-code",
    },
    {
      title: "Front-end",
      info: [
        { skill: "Vue.js", level: "Intermediate" },
        { skill: "HTML", level: "Advanced" },
        { skill: "CSS", level: "Advanced" },
      ],
      icon: "fa fa-cubes",
    },
  ],
  portfolio_projects: [
    {
      name: "Weather Application",
      technologies: ["HTML", "CSS", "Vuejs"],
      description:
        "An application providing real-time weather updates and forecasts. Users can view current conditions and upcoming weather trends effortlessly.",
    },
    {
      name: "Recipe and Meal Search Application",
      technologies: ["HTML", "CSS", "JavaSript"],
      description:
        "An application for searching and browsing recipes and meal ideas. Offers a seamless interface for discovering and exploring various culinary options.",
    },
  ],
  portfolio_publications: [
    {
      title:
        "Indoor Positioning System assisted Big Data Analytics in Smart Healthcare",
      date: "Jul, 2021 - Jan, 2021",
      visit: "https://link.springer.com/chapter/10.1007/978-3-030-97929-4_18",
      description:
        "A research paper focusing on the effects of Big data analytics on modern day healthcare. It also explores the concept of Indoor Positioning System as an aid to healthcare.",
    },
    {
      title: "IoT and Cloud Convergence in Healthcare: An Exploration Analysis",
      date: "Jun 2021 - Dec 2021",
      visit: "https://www.eurekaselect.com/chapter/18096",
      description:
        "This paper focuses on the pros and cons of convergence of emerging technologies, IoT and Cloud computing, on healthcare.",
    },
    {
      title: "A Perspective Depiction of Heuristics in Virtual Reality",
      date: "Aug 2020 - Jan 2021",
      visit:
        "https://www.sciencedirect.com/science/article/abs/pii/B9780323851176000066?via%3Dihub=",
      description:
        "This paper explores the benefits of using Heuristic algorithms to solve complex problems of Virtual Reality.",
    },
  ],
};

export default info;
