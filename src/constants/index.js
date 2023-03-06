import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lhp,
  rmit,
  tech,
  vercel,
  search,
  movie,
  chatGPT,
  youtube,
  facebook,
  threedweb,
  chart,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experiences",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Study at Le Hong Phong highschool",
    company_name: "Le Hong Phong highschool",
    icon: lhp,
    iconBg: "#fff",
    date: "October 2019 - May 2022",
    points: [
      "Learned many things, especially physic ",
      "Got many friends and learned how to work as a team.",
      "Graduated from this school in 2022.",
    ],
  },
  {
    title: "Learn how to code",
    company_name: "Internet",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "2022 - ???",
    points: [
      "First time coding and made many mistakes",
      "First programming language is JavaScript.",
      "Still learn more cutting-edge technologies especially Next.js.",
      "Try to improve coding skill everyday.",
    ],
  },
  {
    title: "Student of RMIT",
    company_name: "RMIT",
    icon: rmit,
    iconBg: "#fff",
    date: "2022 - 2025",
    points: [
      "The first time learn at international environment.",
      "First time work with overseas student and.",
      "Learning everything by English.",
      "Leaning basic knowledge about programming.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Browser",
    description:
      "Web-based platform that allows users to search the information using Google Api and search for a random word.People can search for images as well",
    tags: [
      {
        name: "Next",
        color: "pink-text-gradient",
      },
      {
        name: "google data",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: " blue-text-gradient",
      },
    ],
    image: search,
    source_code_link: "https://github.com/bang07112004/my-search",
    deploy_link: "https://my-search-six.vercel.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "Web application that enables users to watch youtube video using Youtube database, users can search for the videos as well.This web site will be updated weekly",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/bang07112004/Youtube",
    deploy_link: "https://youtube-liard-alpha.vercel.app/",
  },
  {
    name: "Movie Database",
    description:
      "A web application allows people to know briefly about the most popular film recently using moviedb and users can search for film they want as well.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "moviedb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/bang07112004/movie",
    deploy_link: "https://movie-eight-sage.vercel.app/",
  },
  {
    name: "Chat Box",
    description:
      "Web-based platform that allows users to chat with an AI based on ChatGPT database. Users can have many options fo logging in and all the messages will be saved.",
    tags: [
      {
        name: "Next",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: " blue-text-gradient",
      },
    ],
    image: chatGPT,
    source_code_link: "https://github.com/bang07112004/my-chatgpt",
    deploy_link: "https://my-chatgpt-mocha.vercel.app/",
  },
  {
    name: "Social Media",
    description:
      "A social media wb application allow people to post and share their images or status with many type of login which will be updated later.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: " blue-text-gradient",
      },
    ],
    image: facebook,
    source_code_link: "https://github.com/bang07112004/my-fb",
    deploy_link: "https://my-fb-two.vercel.app/",
  },
  {
    name: "Chart Web",
    description:
      "A website allows users to type in their income or the index that they want and it will be converted in to many charts throughout the period.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: " blue-text-gradient",
      },
    ],
    image: chart,
    source_code_link: "https://github.com/bang07112004/my-chart",
    deploy_link: "https://my-chart-psi.vercel.app/",
  },
  {
    name: "3D website",
    description:
      "A 3D website which contains many 3d effects and enable users to interact with the application. Besides that, this is my portfolio website as well.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: " blue-text-gradient",
      },
    ],
    image: threedweb,
    source_code_link: "https://github.com/bang07112004/my-fb",
    deploy_link: "https://my-fb-two.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
