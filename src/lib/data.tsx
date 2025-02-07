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
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
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
  {
    id: 4,
    name: "Contact",
    href: "/contact",
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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform that enables businesses to sell products online efficiently. This platform supports user authentication, product management, and seamless checkout with Stripe integration. Customers can browse through categorized products, add items to their cart, and complete purchases securely. The platform also includes an admin dashboard for managing orders, inventory, and users, along with a wishlist feature and product reviews to enhance the shopping experience.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Stripe API",
    ],
    features: [
      "User authentication & authorization (JWT, OAuth)",
      "Product catalog & categories with search and filtering",
      "Shopping cart & checkout with Stripe integration",
      "Order tracking & admin dashboard with analytics",
      "Wishlist, product reviews & ratings",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/asif/ecommerce-platform",
    image: "https://placehold.co/1020x720",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern and intuitive real-time chat application that allows users to engage in seamless one-on-one or group conversations. Built using WebSockets and Socket.io, this application delivers instant messaging with real-time updates. It includes features such as file sharing, user status indicators, and message encryption to ensure security. With a clean and user-friendly UI, users can communicate effectively while managing their chat history.",
    techStack: ["Next.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS"],
    features: [
      "One-to-one and group messaging with real-time updates",
      "WebSockets for instant communication",
      "User authentication with JWT for secure login",
      "Message encryption & file sharing support",
      "Online/offline status indicators and chat history",
    ],
    liveUrl: "https://chatapp.example.com",
    githubUrl: "https://github.com/asif/chat-app",
    image: "https://placehold.co/1020x720",
  },
  {
    title: "AI-Powered Blog Platform",
    description:
      "An innovative blogging platform that leverages AI-powered content generation to assist writers in creating high-quality articles. Users can write, edit, and publish their blogs using a Markdown editor with advanced formatting options. AI integration provides topic suggestions and automatic text improvement, making the writing process more efficient. The platform is optimized for SEO, ensuring high search engine visibility. Users can also comment on articles with spam filtering to maintain content quality.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "TailwindCSS",
    ],
    features: [
      "AI-assisted content generation with topic suggestions",
      "Markdown editor with rich text formatting",
      "User authentication & role-based access control",
      "SEO-friendly article pages with social media sharing",
      "Comment system with spam filtering and moderation",
    ],
    liveUrl: "https://aiblog.example.com",
    githubUrl: "https://github.com/asif/ai-blog-platform",
    image: "https://placehold.co/1020x720",
  },
  {
    title: "Job Portal System",
    description:
      "A complete job portal system designed to connect employers with job seekers. The platform allows companies to post job listings, track applications, and manage candidate profiles. Job seekers can create professional resumes, apply for jobs, and receive updates on their applications. The system includes an advanced search and filtering mechanism, ensuring that users can easily find relevant job opportunities. Additionally, an admin dashboard is available for monitoring job listings and user activities.",
    techStack: ["Next.js", "Express.js", "MySQL", "Prisma ORM", "TailwindCSS"],
    features: [
      "Employer and job seeker account creation",
      "Job posting & application tracking system",
      "Resume upload & profile management for candidates",
      "Admin dashboard for managing job listings & analytics",
      "Job search functionality with advanced filters",
    ],
    liveUrl: "https://jobportal.example.com",
    githubUrl: "https://github.com/asif/job-portal",
    image: "https://placehold.co/1020x720",
  },
  {
    title: "Online Learning Platform",
    description:
      "A comprehensive e-learning system that allows instructors to create and upload courses while enabling students to enroll and engage in interactive learning. The platform includes video streaming, file uploads, and quizzes to enhance the learning experience. Users can track their progress and earn certifications upon course completion. The system also includes discussion forums to facilitate peer-to-peer interaction and support. Secure authentication ensures that only registered users can access premium courses.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "TailwindCSS",
    ],
    features: [
      "Course creation & management for instructors",
      "Video streaming & cloud file uploads via Cloudinary",
      "User authentication & subscription-based access",
      "Interactive quizzes & certifications upon completion",
      "Progress tracking, discussion forums, and student engagement tools",
    ],
    liveUrl: "https://elearning.example.com",
    githubUrl: "https://github.com/asif/elearning-platform",
    image: "https://placehold.co/1020x720",
  },
];
