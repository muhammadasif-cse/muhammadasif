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
  highlightTitle: string;
  highlightDescription: string;
}

export interface IFAQ {
  icon: string;
  question: string;
  answer: string;
}

export interface ITestimonial {
  image: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
}
export interface IExperience {
  title: string;
  description: string;
  status: "completed" | "running";
  duration: string;
  progress: number;
  experiences: string[];
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
      "A full-fledged e-commerce platform designed for businesses to seamlessly sell products online. It provides an intuitive shopping experience with secure authentication, product management, and Stripe-powered checkout. The system includes a feature-rich admin panel that allows vendors to manage orders, inventory, and customer data efficiently. Users can explore categorized products, add items to their cart, and complete purchases securely while enjoying additional features such as wishlists, product reviews, and order tracking.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Stripe API",
    ],
    features: [
      "Secure authentication with JWT and OAuth",
      "Seamless shopping cart & checkout integration with payment gateway",
      "Real-time order tracking & notifications",
      "Admin dashboard with analytics & inventory management",
      "Wishlist, product reviews, and ratings system",
      "Responsive design optimized for desktop & mobile users",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/asif/ecommerce-platform",
    image: "/images/projects/muhammadasif-e-commerce-platform-mockup.avif",
    highlightTitle: "Seamless Shopping Experience",
    highlightDescription:
      "Optimized for high performance and security, ensuring a smooth shopping journey for customers and an efficient management system for store owners.",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern, high-performance real-time chat application built with WebSockets and Socket.io, enabling instant communication for individuals and groups. The app supports group conversations, ensuring secure and fast messaging. Users can send text messages, share multimedia files, and see live status indicators. With a sleek and responsive UI, the app is designed for optimal engagement and seamless interactions across devices.",
    techStack: ["Next.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS"],
    features: [
      "Instant messaging powered by WebSockets",
      "One-on-one and group chat functionality",
      "Live online/offline user status indicators",
      "File sharing (images, documents, videos)",
      "Chat history storage with search capability",
      "User authentication via JWT for secure access",
      "Mobile-responsive UI with dark mode support",
    ],
    liveUrl: "https://chatapp.example.com",
    githubUrl: "https://github.com/asif/chat-app",
    image: "/images/projects/muhammadasif-e-commerce-platform-mockup.avif",
    highlightTitle: "Instant & Secure Communication",
    highlightDescription:
      "Enables real-time, encrypted conversations with an engaging UI and smooth user experience across all devices.",
  },
  {
    title: "AI-Powered Blog Platform",
    description:
      "An innovative blogging platform that leverages AI-driven content suggestions to assist writers in generating high-quality articles. The system features a Markdown editor with advanced formatting tools, making writing and editing more intuitive. AI integration provides automatic topic recommendations and sentence improvements. The platform is optimized for SEO and includes an intelligent commenting system with spam filtering to maintain content quality. Users can publish, edit, and share their blogs effortlessly, with support for role-based access control.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "TailwindCSS",
    ],
    features: [
      "AI-powered content generation & suggestions",
      "Advanced Markdown editor with rich formatting",
      "SEO-optimized blog posts with meta tags & indexing",
      "Spam-protected comment system with moderation tools",
      "Social media sharing & post analytics",
      "Drafts & scheduled publishing options",
    ],
    liveUrl: "https://aiblog.example.com",
    githubUrl: "https://github.com/asif/ai-blog-platform",
    image: "/images/projects/muhammadasif-e-commerce-platform-mockup.avif",
    highlightTitle: "AI-Assisted Writing",
    highlightDescription:
      "Enhances the blogging experience with AI-powered tools for content suggestions, SEO optimization, and seamless editing.",
  },
  {
    title: "Job Portal System",
    description:
      "A comprehensive job portal designed to connect employers with job seekers efficiently. The system enables companies to post job listings, manage candidate applications, and track recruitment metrics. Job seekers can create detailed resumes, apply for jobs, and receive updates on their applications. The platform includes advanced search and filtering options, allowing users to find the most relevant opportunities. An intuitive admin dashboard provides real-time insights into job postings, applications, and user activity.",
    techStack: ["Next.js", "Express.js", "MySQL", "Prisma ORM", "TailwindCSS"],
    features: [
      "User registration & role-based access control (Employer/Job Seeker)",
      "Job posting & application management system",
      "Resume upload & candidate profile creation",
      "Advanced job search with filtering & sorting",
      "Email notifications for job applications & updates",
      "Admin dashboard for managing job listings & user analytics",
      "Company profiles & employer branding features",
      "Mobile-friendly UI for seamless job searching on-the-go",
    ],
    liveUrl: "https://jobportal.example.com",
    githubUrl: "https://github.com/asif/job-portal",
    image: "/images/projects/job-portal-mockup.avif",
    highlightTitle: "Smart Hiring Made Simple",
    highlightDescription:
      "A powerful job portal that streamlines recruitment with advanced search, tracking, and employer branding tools.",
  },
  {
    title: "Online Learning Platform",
    description:
      "A feature-rich e-learning platform that enables instructors to create and manage courses while providing students with an engaging learning experience. The system includes video streaming, interactive quizzes, and certification upon course completion. Users can track progress, participate in discussion forums, and access learning materials from anywhere. Secure authentication ensures that only authorized users can access premium content. The platform is designed to scale, supporting a large number of students and courses.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "TailwindCSS",
    ],
    features: [
      "Course creation & content management for instructors",
      "Video streaming with Cloudinary integration",
      "Subscription-based access & secure authentication",
      "Interactive quizzes & automated grading",
      "Student progress tracking & performance analytics",
      "Discussion forums & peer-to-peer collaboration",
      "Certification upon course completion",
      "SEO-friendly course pages & social media sharing",
    ],
    liveUrl: "https://elearning.example.com",
    githubUrl: "https://github.com/asif/elearning-platform",
    image: "/images/projects/elearning-mockup.avif",
    highlightTitle: "Interactive & Engaging Learning",
    highlightDescription:
      "Empowers students and instructors with an intuitive learning experience, interactive content, and scalable course management.",
  },
];

export const faq: IFAQ[] = [
  {
    icon: "code",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in JavaScript, TypeScript, React.js, Vue.js, Node.js, Express.js, Nest.js, Django, Spring Boot, PostgreSQL, MySQL, and MongoDB, focusing on building scalable and high-performance web solutions.",
  },
  {
    icon: "briefcase",
    question: "Do you offer freelance or contract work?",
    answer:
      "Yes, I’m open to freelance and contract opportunities. If you have a project in mind, feel free to reach out via email or LinkedIn.",
  },
  {
    icon: "user-check",
    question: "How can I get in touch with you?",
    answer:
      "You can contact me via email at asif@example.com or connect with me on LinkedIn at linkedin.com/in/asif.",
  },
  {
    icon: "globe",
    question: "Do you contribute to open-source projects?",
    answer:
      "Yes, I actively contribute to open-source projects on GitHub. You can check out my repositories at github.com/asif.",
  },
  {
    icon: "book-open",
    question: "Do you write technical blogs or tutorials?",
    answer:
      "Yes, I write articles on software development, best practices, and new technologies. You can find my blogs on Medium or Dev.to.",
  },
  {
    icon: "award",
    question: "What are your notable achievements?",
    answer:
      "I have worked on high-traffic e-commerce platforms, developed scalable backend architectures, and contributed to successful product launches for various companies.",
  },
];

export const testimonials: ITestimonial[] = [
  {
    quote:
      '"I hired Asif to create my branding website, and he exceeded my expectations. His creativity and attention to detail amazed me. The site is very user-friendly and perfectly reflects my brand. I will always recommend him!"',
    author: "Amir Faysal",
    role: "Founder Of Thinkystorm",
    image: "/images/man.avif",
    rating: 5,
  },
  {
    quote:
      '"Working with Muhammad Asif to develop our education platform was a fantastic experience. He is highly professional and responsible with deadlines. The quality and depth of his work are commendable. We have been able to create an effective and user-friendly experience for our students through this platform."',
    author: "MD. Abu Junaed Sajib",
    role: "Founder Of EduFixup",
    image: "/images/man.avif",
    rating: 5,
  },
  {
    quote:
      '"I am extremely satisfied with the work done for my e-commerce website. Not only did he provide a beautiful design, but he also improved the overall user experience of the site. His passion and professionalism are truly remarkable. I would love to work with him again!"',
    author: "Tarikul Islam Sushan",
    role: "Business Owner",
    image: "/images/man.avif",
    rating: 4,
  },
];

export const experience: IExperience[] = [
  {
    title: "Interlink Techsoft Limited",
    description:
      "Frontend Development: JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS. API Integration: Fetching and displaying data from RESTful APIs. Ensured cross-browser compatibility and optimized performance for a seamless user experience. Worked closely with backend developers to connect frontend interfaces with server-side functionality.",
    status: "running",
    duration: "May 2023 - Present",
    progress: 100,
    experiences: [
      "Frontend Development",
      "Basic UI components",
      "Authentication system",
      "Software Development",
      "Performance Optimization",
      "State Management with Redux, Zustand, or Context API",
      "Component-Based Development",
      "Responsive Design & Mobile Optimization",
      "Unit & Integration Testing (Jest, React Testing Library, Cypress)",
      "Version Control & CI/CD (Git, GitHub, GitLab, Automated Pipelines)",
      "Collaboration & Agile Development",
      "API Handling & Optimization",
    ],
  },

  {
    title: "Thinky Storm",
    description:
      "Developed and maintained full-stack web applications using the MERN stack. Designed and implemented APIs for seamless data exchange between the frontend and backend. Utilized MongoDB for database management, schema design, and data manipulation. Created responsive and user-friendly interfaces using React, Redux, JavaScript, HTML, and CSS. Deployed applications on cloud platforms and optimized performance and scalability.",
    status: "completed",
    duration: "November 2022 - November 2023",
    progress: 80,
    experiences: [
      "Full-Stack Development with MERN",
      "Advanced User Management System",
      "Analytics Dashboard Implementation",
      "Integration with Third-Party APIs",
      "Real-Time Notifications & WebSockets",
      "Database Optimization & Indexing",
      "Authentication & Authorization (JWT, OAuth)",
      "Cloud Deployment & Performance Optimization",
      "Responsive UI & Cross-Browser Compatibility",
      "Unit & Integration Testing (Jest, Mocha, Cypress)",
    ],
  },
];
