export interface INavigation {
  id: number;
  name: string;
  href: string;
}
export interface ISocial {
  id: number;
  name: string;
  href: string;
  icon: string;
}

export interface ISkills {
  id: number;
  img: string;
  name: string;
  note: string;
  message: string;
}
export interface IProjects {
  title: string;
  link: string;
  thumbnail: string;
}

export const navigation: INavigation[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    name: "Blogs",
    href: "/blogs",
  },
];

export const socials: ISocial[] = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/muhammadasif-cse",
    icon: "github",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadasif-cse/",
    icon: "linkedin",
  },
  {
    id: 2,
    name: "Youtube",
    href: "https://www.youtube.com/@muhammadasif_cse",
    icon: "youtube",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/muhammadasif_cse/",
    icon: "instagram",
  },
  {
    id: 4,
    name: "Facebook",
    href: "https://www.facebook.com/muhammadasif.cse",
    icon: "facebook",
  },
];

export const skills: ISkills[] = [
  {
    id: 1,
    img: "java",
    name: "Java",
    note: "1 year",
    message: "Experienced in building backend applications.",
  },
  {
    id: 2,
    img: "python",
    name: "Python",
    note: "1 year",
    message: "Strong background in scripting and automation.",
  },
  {
    id: 3,
    img: "javascript",
    name: "JavaScript",
    note: "3 years",
    message: "Proficient in frontend and backend development.",
  },
  {
    id: 4,
    img: "typescript",
    name: "TypeScript",
    note: "2 years",
    message: "Used extensively in large-scale applications.",
  },
  {
    id: 5,
    img: "react",
    name: "React.js",
    note: "3 years",
    message: "Expertise in building scalable UI components.",
  },
  {
    id: 6,
    img: "vue",
    name: "Vue.js",
    note: "2 years",
    message: "Experience with Vue and Vuex for state management.",
  },
  {
    id: 7,
    img: "nodejs",
    name: "Node.js",
    note: "3 years",
    message: "Built RESTful APIs and microservices.",
  },
  {
    id: 8,
    img: "express",
    name: "Express.js",
    note: "3 years",
    message: "Experience in creating middleware and APIs.",
  },
  {
    id: 9,
    img: "nestjs",
    name: "Nest.js",
    note: "2 years",
    message: "Developed modular and scalable applications.",
  },
  {
    id: 10,
    img: "django",
    name: "Django",
    note: "0.6 months",
    message: "Built secure and scalable web applications.",
  },
  {
    id: 11,
    img: "spring",
    name: "Spring Boot",
    note: "0.6 months",
    message: "Experience in developing enterprise-level applications.",
  },
  {
    id: 12,
    img: "postgresql",
    name: "PostgreSQL",
    note: "2 years",
    message: "Proficient in database design and optimization.",
  },
  {
    id: 13,
    img: "mysql",
    name: "MySQL",
    note: "2 years",
    message: "Experience in relational database management.",
  },
  {
    id: 14,
    img: "mongodb",
    name: "MongoDB",
    note: "3 years",
    message: "Familiar with NoSQL database structures.",
  },
  {
    id: 15,
    img: "html",
    name: "HTML",
    note: "4 years",
    message: "Expertise in semantic HTML and accessibility.",
  },
  {
    id: 16,
    img: "css",
    name: "CSS",
    note: "4 years",
    message: "Strong understanding of modern CSS techniques.",
  },
  {
    id: 17,
    img: "tailwind",
    name: "Tailwind CSS",
    note: "3 years",
    message: "Efficient styling with utility-first approach.",
  },
  {
    id: 18,
    img: "bootstrap",
    name: "Bootstrap",
    note: "3 years",
    message: "Experience in responsive design frameworks.",
  },
  {
    id: 19,
    img: "docker",
    name: "Docker",
    note: "2 years",
    message: "Containerization and orchestration skills.",
  },
  {
    id: 20,
    img: "aws",
    name: "AWS",
    note: "2 years",
    message: "Experience in cloud deployment and architecture.",
  },
  {
    id: 21,
    img: "graphql",
    name: "GraphQL",
    note: "2 years",
    message: "Building flexible and efficient APIs.",
  },
  {
    id: 22,
    img: "jest",
    name: "Jest",
    note: "2 years",
    message: "Proficient in unit and integration testing.",
  },
];
export const projects: IProjects[] = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
