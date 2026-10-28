// ============================================================
// portfolioData.js — Centralized configuration for Mangesh Lomte's Portfolio
// ============================================================

export const personalInfo = {
  name: "Mangesh Lomte",
  firstName: "Mangesh",
  brandName: "Mangesh Lomte",
  title: "Software Developer",
  roleHeadline: "Software Developer | Full-Stack Web Development",
  specialization: "Full-Stack Web Development",
  location: "Pune, India",
  phone: "+91 9737930634",
  emails: {
    primary: "mangesh.lomte.2002@gmail.com",
    secondary: "",
  },
  summary:
    "Full-Stack Developer with a B.Tech in Information Technology and C-DAC PGCP-AC training, focused on building responsive, high-performance web applications with React.js, TypeScript, Node.js, Express.js, and PostgreSQL. Comfortable with API integration, authentication, database design, debugging, and Git-based development.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/mangesh-lomte",
  linkedin: "https://www.linkedin.com/in/mangesh-lomte/",
  instagram: "https://www.instagram.com/simple.guy.hello/",
};

export const heroContent = {
  greeting: "Hi, I'm",
  name: "Mangesh Lomte",
  titleHighlight: "Software Developer",
  roleSubline: "Specializing in Full-Stack Web Development",
  subtitle:
    "Building practical, responsive web applications with React, TypeScript, Node.js, Express, and PostgreSQL — engineering high-concurrency booking platforms, competitive tools, and service-oriented systems.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaGithub: { text: "GitHub", href: "https://github.com/mangesh-lomte" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mangesh Lomte</span>, a Software Developer with a B.Tech in Information Technology and C-DAC PGCP-AC training. I specialize in full-stack web development with React, TypeScript, Node.js, Express.js, and PostgreSQL. I build practical, user-centered applications — from sports venue booking platforms with database-level conflict prevention to modern competitive typing applications and service-oriented management platforms.`,
  techStack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Express.js", "ASP.NET Core"],
};

// Technical Skills Data (Concept-based, realistic grouping verified against resume & repos)
export const technicalSkills = {
  categories: [
    {
      title: "Frontend Development",
      icon: "💻",
      description: "Modern, component-driven interfaces built for responsiveness, performance, and accessibility.",
      concepts: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Responsive UI / UX",
        "Three.js (WebGL)",
        "Component Architecture",
        "State Management"
      ]
    },
    {
      title: "Backend Development & APIs",
      icon: "⚡",
      description: "Robust RESTful APIs, dependency injection, service layers, and business logic pipelines.",
      concepts: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "CRUD Operations",
        "API Integration",
        "ASP.NET Core Web API",
        "Dependency Injection",
        "Java Spring Boot"
      ]
    },
    {
      title: "Databases & ORM",
      icon: "🛢️",
      description: "Relational schema design, ORM mappings, indexing, and transactional integrity guarantees.",
      concepts: [
        "PostgreSQL",
        "Prisma ORM",
        "SQL Server",
        "Entity Framework Core",
        "MySQL",
        "Relational Schema Design",
        "Complex SQL Queries",
        "GiST Exclusion Constraints"
      ]
    },
    {
      title: "Programming Languages",
      icon: "🧩",
      description: "Strong foundation in typed, object-oriented, and modern scripting languages.",
      concepts: [
        "TypeScript",
        "JavaScript",
        "C# (.NET)",
        "Python",
        "Java",
        "C++",
        "SQL"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      description: "Developer tooling, containerization, cloud hosting, and testing workflows.",
      concepts: [
        "Git & GitHub",
        "Docker",
        "AWS EC2",
        "Postman",
        "VS Code",
        "Vite",
        "Linux CLI",
        "JWT & RBAC Security"
      ]
    }
  ]
};

// Projects Data (Featured: TurfBook, typeDon, Smart Restaurant Management System)
export const projects = [
  {
    id: "turfbook",
    number: "01",
    badge: "Featured Project · Production Live",
    category: "Full-Stack Sports Venue Booking Platform",
    title: "TurfBook",
    subtitle: "Real-Time Slot Reservations, GiST Conflict Protection & 3D Arena",
    image: "/turfbook-preview.png",
    imageAlt: "TurfBook Sports Turf Discovery and Booking Platform Screenshot",
    description:
      "A full-stack sports venue booking platform designed to help users discover sports venues and manage bookings, with dedicated functionality for venue owners and administrators. Engineered with PostgreSQL GiST exclusion constraints to guarantee zero overlapping bookings at the database level, and integrated with a Python FastAPI analytical service for dynamic pricing and venue telemetry.",
    keyFeatures: [
      "PostgreSQL GiST exclusion constraints (btree_gist extension) to eliminate double-booking at the database layer",
      "Role-Based Access Control (Customer, Owner, Admin) with JWT access and HttpOnly refresh token rotation",
      "Responsive React & TypeScript UI featuring venue discovery, sport-specific filters, and interactive 3D arena preview",
      "Node.js & Express.js REST API with Prisma ORM, centralized error handling, and interactive Swagger documentation",
      "Python FastAPI analytical microservice for dynamic pricing, diagnostic health checks, and venue metrics"
    ],
    techTags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "FastAPI",
      "Python",
      "Three.js",
      "Docker"
    ],
    links: {
      github: "https://github.com/mangesh-lomte/TurfBook",
      demo: "https://turf-book-real.vercel.app/"
    },
    isFlagship: true,

    caseStudy: {
      overview:
        "TurfBook is an end-to-end sports venue reservation and management ecosystem built to solve high-concurrency booking conflicts in sports turf facilities, box cricket arenas, and badminton courts.",
      problem:
        "Sports facilities often face severe concurrency issues: multiple players attempting to reserve the exact same turf court and time window simultaneously. Application-level locks frequently fail under network latency, leading to double-bookings and disgruntled customers.",
      solution:
        "Implemented PostgreSQL GiST exclusion constraints utilizing the btree_gist extension. When concurrent transactions attempt to book overlapping time ranges on the same turf court, the database raises an exclusionary constraint violation error (code 23P01). The backend intercepts this error and cleanly translates it into an HTTP 409 Conflict, guaranteeing data consistency without brittle distributed locks.",
      architectureHighlights: [
        "Client: React 18 SPA with TypeScript, Tailwind CSS, and Three.js 3D arena visualization",
        "API Gateway: Node.js / Express.js RESTful API structured around layered controllers and services",
        "Data Layer: PostgreSQL 16 hosted with Prisma 5.22 ORM and raw SQL migrations for exclusion constraints",
        "Analytical Service: Python 3.12 FastAPI microservice providing dynamic demand-based pricing models",
        "Auth: Dual-token JWT architecture with short-lived access tokens and HttpOnly secure cookie refresh sessions"
      ],
      userRoles: [
        { role: "Customer", access: "Discover local turfs by sport, inspect slot calendar, book time slots, view personal reservations." },
        { role: "Venue Owner", access: "Create and update turf listings, configure court operating hours, manage slot prices, view earnings." },
        { role: "Administrator", access: "System-wide venue moderation, user audits, platform analytics, and dispute resolution." }
      ]
    }
  },
  {
    id: "typedon",
    number: "02",
    badge: "Featured Project · Production Live",
    category: "Competitive Typing Platform",
    title: "typeDon",
    subtitle: "Modern-Noir Aesthetic, 34-Lesson Academy & Zero-Latency Engine",
    image: "/typedon-preview.png",
    imageAlt: "typeDon Competitive Touch Typing Platform Screenshot",
    description:
      "A typing platform inspired by the competitive nature of typing tests, using a distinctive Modern-Noir visual identity to create a focused typing experience. Features a zero-latency typing engine, a 34-lesson touch typing academy across 5 progression stages, adaptive weak-key ngram drills, daily challenge contracts, and a 7-tier reputation hierarchy with real-time telemetry.",
    keyFeatures: [
      "Zero-latency typing engine with real-time HUD telemetry (WPM, Raw Speed, Accuracy, Consistency, and Streak)",
      "34 structured lessons across 5 stages with visual obsidian keyboard and tactile anchor bump finger guides",
      "Adaptive weak-key practice algorithm generating customized ngram exercises on the fly for troublesome letters",
      "Daily challenge contract rotation (Speed, Accuracy, Endurance, Volume, Clean Run) with streak multipliers",
      "7-tier syndicate reputation system from Outsider to Don with offline-first local storage and profile dossier",
      "Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and SignalR integration"
    ],
    techTags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SignalR",
      "Vite",
      "ASP.NET Core",
      "Lucide React"
    ],
    links: {
      github: "https://github.com/mangesh-lomte/typeDon",
      demo: "https://type-don.vercel.app/"
    },
    isFlagship: true,

    caseStudy: {
      overview:
        "typeDon is a high-performance touch-typing web application engineered with an Obsidian Modern-Noir aesthetic, prioritizing tactile responsiveness, structured learning loops, and competitive discipline.",
      problem:
        "Many online typing tests suffer from noticeable input lag caused by heavy state re-renders on every keystroke, generic gamification mechanics (coins, energy meters), and a lack of structured pedagogical progression from home-row fundamentals to speed fluency.",
      solution:
        "Built a zero-latency custom typing hook that captures key events directly, avoiding unnecessary DOM repaints. Created a 34-lesson pedagogical Academy structured across 5 tiers (Home Row, Expanding Territory, Lower Grounds, Syndicate Codes, Fluency & Graduation). Added an algorithmic weak-key analyzer that dynamically generates targeted practice drill sentences.",
      architectureHighlights: [
        "Client: React 19 + TypeScript with strict typing contracts and Tailwind CSS v4 styling",
        "Motion Engine: Framer Motion for cinematic stage transitions and smooth progress dials",
        "Telemetry HUD: Microsecond-precise WPM calculation, raw stroke counting, error categorization, and consistency standard deviation",
        "Progression Engine: 7-tier hierarchy (Outsider → Associate → Soldato → Enforcer → Capo → Underboss → Don) based strictly on verified performance",
        "Offline-First: Complete local storage persistence ensuring full utility even when disconnected"
      ],
      userRoles: [
        { role: "Learner", access: "Follow 34 guided lessons with real-time finger position guidance and tactile anchor indicators." },
        { role: "Practitioner", access: "Execute custom-timed tests (15s, 30s, 60s, 120s) and word count goals with instant restart shortcuts." },
        { role: "Competitor", access: "Complete daily syndicate contracts, build reputation multipliers, and review detailed telemetry graphs." }
      ]
    }
  },
  {
    id: "smart-restaurant-management",
    number: "03",
    badge: "C-DAC / PG-DAC Project",
    category: "Full-Stack Application | C-DAC Project",
    title: "Smart AI & QR-Based Restaurant Management System",
    subtitle: "Contactless QR Dining, Role-Based Dashboards & Microservices",
    image: null,
    imageAlt: "Smart Restaurant Management Architecture Blueprint",
    description:
      "A restaurant management application combining QR-based interactions, role-specific dashboards (Customer, Chef, Admin), backend REST APIs, and an independent Java Spring Boot notification microservice for automated email receipts. Built during PG-DAC at C-DAC with layered ASP.NET Core APIs, SQL Server, and Docker deployment.",
    keyFeatures: [
      "Table-specific QR code scanning workflow for instant digital menu browsing without physical paper menus",
      "Layered ASP.NET Core REST API architecture with Dependency Injection and Entity Framework Core",
      "Role-Based Access Control (RBAC) with JWT tokens securing Customer, Chef, and Admin endpoints",
      "Independent Java Spring Boot notification microservice dispatching email confirmations via Gmail SMTP",
      "Containerized with Docker and deployed on AWS EC2 cloud infrastructure"
    ],
    techTags: [
      "React",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "EF Core",
      "Java",
      "Spring Boot",
      "JWT",
      "Docker",
      "AWS EC2"
    ],
    links: {
      github: "https://github.com/mangesh-lomte/Qr-Dining-main",
      demo: null
    },
    isFlagship: false,

    caseStudy: {
      overview:
        "A multi-tier restaurant management platform developed as a C-DAC PG-DAC team project to digitize restaurant floor operations, customer orders, kitchen workflows, stock tracking, and automated receipts.",
      problem:
        "Traditional restaurant dining experiences rely on physical printed menus, verbal kitchen dispatching, and manual paper billing, creating table turn-around bottlenecks and order miscommunications.",
      solution:
        "Implemented table QR scanning opening a responsive digital menu. When an order is placed, it enters an ASP.NET Core order processing pipeline backed by SQL Server, immediately notifying kitchen displays and triggering an asynchronous Spring Boot microservice to dispatch customer email confirmations.",
      architectureHighlights: [
        "Frontend: React SPA with dynamic category browsing, cart state handling, and role dashboards",
        "Backend API: ASP.NET Core Web API with clean Controller-Service-Repository separation",
        "Data Storage: SQL Server normalized database managed via Entity Framework Core migrations",
        "Notification Microservice: Java Spring Boot service integrating with Gmail SMTP via JavaMail",
        "Infrastructure: Docker containerized services hosted on AWS EC2 Linux instances"
      ],
      userRoles: [
        { role: "Customer", access: "Scan table QR code, browse digital menu, customize items, submit order, view order status." },
        { role: "Chef", access: "Real-time kitchen order queue, table-specific item breakdown, milestone preparation updates." },
        { role: "Admin", access: "Full menu and price CRUD, inventory stock monitoring, staff management, promotional offers." }
      ]
    }
  }
];

// Internships / Work Experience Data
export const internshipsList = [
  {
    organization: "Nexprism",
    role: "Software Developer Intern",
    duration: "May 2026 – October 2026",
    skills: [
      "Web Application Development",
      "Full-Stack Feature Engineering",
      "RESTful API Integration",
      "Database Schema Modeling",
      "Software Maintenance & Debugging"
    ],
    tech: ["React", "Node.js", "Express.js", "REST APIs", "Git", "SQL"]
  },
  {
    organization: "Txon, Pune",
    role: "Web Developer Intern",
    duration: "6 Months",
    skills: [
      "Responsive Web Design",
      "User Interface Engineering",
      "Cross-Browser Compatibility",
      "Functional UI Testing",
      "DOM & Performance Optimization"
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "UI Testing", "Git"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating effectively with cross-functional teams to build robust software." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured technical documentation and dialogue." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn and implement new tools, frameworks, and modern technologies." },
  { name: "Time Management", icon: "⏰", desc: "Efficiently prioritizing tasks to meet project milestones and deliverables." },
  { name: "Continuous Learning", icon: "🧠", desc: "Always eager to stay up-to-date with modern full-stack development practices." }
];

// Education Qualifications Data
export const education = {
  degree: "B.Tech – Information Technology",
  institution: "Genba Sopanrao Moze College of Engineering",
  cgpa: "8.3",
  graduation: "2020 – 2024",
  pgdac: "Post Graduate Certificate Program in Advanced Computing (PGCP-AC / PG-DAC)",
  cdacInstitution: "Centre for Development of Advanced Computing (C-DAC), Pune",
  cdacYear: "2026",
};

// Footer Content
export const footerContent = {
  taglines: [
    "Mangesh Lomte",
    "Software Developer",
    "Full-Stack Web Development",
    "React · TypeScript · Node.js · PostgreSQL",
  ],
  credential: "B.Tech IT · PGCP-AC (C-DAC)",
  copyright: `© ${new Date().getFullYear()} Mangesh Lomte | Software Developer`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// Structured Knowledge Base for "Ask Mangesh AI" Assistant
export const aiKnowledgeBase = {
  about: "Mangesh Lomte is a Software Developer specializing in full-stack web development with React.js, TypeScript, Node.js, Express.js, and PostgreSQL. He holds a B.Tech in Information Technology (2020-2024, CGPA: 8.3) and C-DAC PGCP-AC credentials. He builds practical, high-performance web applications including TurfBook and typeDon.",
  skills: "Mangesh's technical skillset includes: Frontend: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Three.js. Backend: Node.js, Express.js, ASP.NET Core Web API, RESTful APIs, Java Spring Boot. Databases: PostgreSQL, MySQL, Prisma ORM, SQL Server, Entity Framework Core. Tools & DevOps: Git, GitHub, Docker, AWS EC2, Postman, VS Code, Vite.",
  projects: [
    {
      name: "TurfBook",
      details: "Full-Stack Sports Venue Booking Platform built with React, TypeScript, Node.js, Express.js, Prisma ORM, PostgreSQL (with GiST exclusion constraints to eliminate double bookings), and a Python FastAPI analytical microservice for dynamic pricing."
    },
    {
      name: "typeDon",
      details: "Competitive Touch-Typing Platform with a Modern-Noir aesthetic built using React 19, TypeScript, Tailwind CSS v4, Framer Motion, and SignalR. Features zero-latency keyboard telemetry HUD, a 34-lesson touch typing academy across 5 progression stages, adaptive weak-key ngram drills, and a 7-tier syndicate reputation hierarchy."
    },
    {
      name: "Smart AI & QR-Based Restaurant Management System",
      details: "C-DAC PG-DAC Full-Stack Application combining table QR digital menus, role-specific web dashboards (Customer, Chef, Admin), ASP.NET Core backend REST APIs, SQL Server, and an independent Java Spring Boot notification microservice with Gmail SMTP."
    }
  ],
  internship: "Mangesh has worked as a Software Developer Intern at Nexprism (May 2026 – October 2026) building full-stack web features with React, Node.js, Express, and Git; and as a Web Developer Intern at Txon, Pune (6 months) engineering responsive web pages with HTML, CSS, and JavaScript.",
  education: "B.Tech in Information Technology from Genba Sopanrao Moze College of Engineering (2020–2024, CGPA: 8.3) and Post Graduate Certificate Program in Advanced Computing (PGCP-AC) from C-DAC Pune (2026).",
  location: "Pune, India.",
  contact: "Email: mangesh.lomte.2002@gmail.com, GitHub: github.com/mangesh-lomte, LinkedIn: linkedin.com/in/mangesh-lomte."
};
