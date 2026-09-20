// ============================================================
// portfolioData.js — Centralized configuration for Mangesh Lomte's Portfolio
// ============================================================

export const personalInfo = {
  name: "Mangesh Lomte",
  firstName: "Mangesh",
  brandName: "Mangesh Lomte",
  title: "Software Developer",
  location: "Vapi, Gujarat, India",
  phone: "",
  emails: {
    primary: "",
    secondary: "",
  },
  summary:
    "B.Tech Information Technology graduate and PG-DAC professional focused on software development, full-stack applications, service-oriented architecture, databases, and solving real-world problems through technology.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/mangesh-lomte",
  linkedin: "https://www.linkedin.com/in/mangesh-lomte/",
  instagram: "https://www.instagram.com/simple.guy.hello/",
};

export const heroContent = {
  greeting: "Hi, I'm Mangesh",
  titleHighlight: "Software Developer",
  subtitle:
    "I build practical applications spanning React, ASP.NET Core, Java Spring Boot, SQL Server, Docker, and IoT embedded C++.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mangesh Lomte</span>, a B.Tech Information Technology graduate and PG-DAC professional focused on full-stack software development, REST API design, database modeling, containerized services, and IoT engineering.`,
  techStack: ["React.js", "ASP.NET Core", "Spring Boot", "SQL Server", "Docker", "C++"],
};

export const engineeringArchitecture = {
  badge: "System Architecture Showcase",
  heading: "Engineering Behind My Projects",
  subtitle:
    "From user interaction to backend services, data, security, notifications, and cloud deployment — see how the technologies in my projects work together.",
  
  // Interactive Technology Map Nodes
  techNodes: [
    {
      id: "react",
      name: "React.js",
      layer: "Frontend",
      subtitle: "React.js — Single Page Frontend",
      description:
        "Used to build responsive, component-based interfaces for Customer, Chef, and Admin roles in the Smart Restaurant System.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Frontend"
    },
    {
      id: "javascript",
      name: "JavaScript / HTML / CSS",
      layer: "Frontend",
      subtitle: "JavaScript / Tailwind CSS — Client Logic & Styling",
      description:
        "Used for DOM manipulation, client-side state handling, dynamic UI rendering, and styling across web applications.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Frontend"
    },
    {
      id: "aspnet-core",
      name: "ASP.NET Core Web API",
      layer: "Backend & REST APIs",
      subtitle: "ASP.NET Core — Core API & Business Layer",
      description:
        "Serves as the main REST API layer implementing Layered Architecture, Dependency Injection, and business logic controllers.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Backend"
    },
    {
      id: "ef-core",
      name: "Entity Framework Core",
      layer: "Data Access / ORM",
      subtitle: "EF Core — Relational Data Access",
      description:
        "Used for object-relational mapping (ORM) connecting ASP.NET Core services cleanly to SQL Server relational tables.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Backend"
    },
    {
      id: "sql-server",
      name: "SQL Server",
      layer: "Relational Database",
      subtitle: "SQL Server — Application Data Store",
      description:
        "Stores structured relational tables for Users, Menus, Categories, Orders, OrderItems, Inventory, Staff, and Offers.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Data"
    },
    {
      id: "spring-boot",
      name: "Java Spring Boot",
      layer: "Microservices / Notification",
      subtitle: "Java Spring Boot — Email Notification Service",
      description:
        "An independent microservice that receives email notification requests from the main application and dispatches emails via Gmail SMTP.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Services"
    },
    {
      id: "jwt-rbac",
      name: "JWT & Role-Based Security",
      layer: "Security & Auth",
      subtitle: "JWT & RBAC — Authentication & Authorization",
      description:
        "Handles user registration, login, JWT token generation, validation, and role-based access control for Customer, Chef, and Admin roles.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "Security"
    },
    {
      id: "docker-aws",
      name: "Docker & AWS EC2",
      layer: "DevOps & Cloud",
      subtitle: "Docker Containerization & AWS EC2 Deployment",
      description:
        "Used to containerize application services and deploy them onto AWS EC2 instances for cloud accessibility.",
      usedInProjectIds: ["smart-restaurant-management"],
      usedInProjectNames: ["Smart AI & QR-Based Restaurant Management System"],
      category: "DevOps"
    },
    {
      id: "cpp-arduino",
      name: "C++ & Arduino UNO R3",
      layer: "Embedded / IoT",
      subtitle: "C++ & Arduino UNO R3 — Microcontroller Logic",
      description:
        "Used to program 3 servo motors (2 vehicle barriers at ~45°, 1 pedestrian crossing at ~90°) and traffic signal LEDs for safety automation.",
      usedInProjectIds: ["road-safety-alert-system"],
      usedInProjectNames: ["Road Safety Alert System"],
      category: "IoT"
    }
  ],

  // Featured Project Architecture: Smart AI & QR-Based Restaurant Management System
  featuredProject: {
    id: "smart-restaurant-management",
    title: "Smart AI & QR-Based Restaurant Management System",
    subtitle: "Service-Oriented Full-Stack Architecture, Spring Boot Service & Cloud Deployment",
    
    // Web & Database Flow
    webFlow: [
      {
        step: "01",
        layer: "Customer Layer",
        title: "Customer Table QR",
        tech: "QR Code Scan",
        role: "Customer scans table-specific QR code to launch digital menu interface without physical paper menus."
      },
      {
        step: "02",
        layer: "Frontend Layer",
        title: "React.js Frontend",
        tech: "React + Tailwind CSS",
        role: "Renders responsive interfaces for Customer ordering, Chef kitchen display, and Admin operations."
      },
      {
        step: "03",
        layer: "API Layer",
        title: "ASP.NET Core REST API",
        tech: "C# Controllers & DI",
        role: "Receives REST calls, validates JWT tokens, handles business logic, and manages order state transitions."
      },
      {
        step: "04",
        layer: "Data Access Layer",
        title: "Entity Framework Core",
        tech: "EF Core ORM",
        role: "Maps domain objects to relational queries with dependency injection and repository patterns."
      },
      {
        step: "05",
        layer: "Database Layer",
        title: "SQL Server",
        tech: "Relational Storage",
        role: "Stores Users, Menus, Categories, Orders, OrderItems, Inventory Stock, Staff, and Offers."
      }
    ],

    // Java Spring Boot Notification Flow
    notificationFlow: [
      {
        step: "01",
        title: "Main Application",
        tech: "REST Request Trigger",
        role: "Order Service dispatches notification request upon order creation or milestone status update."
      },
      {
        step: "02",
        title: "Java Spring Boot Service",
        tech: "Spring Boot Microservice",
        role: "Independent service endpoint parses notification payloads and handles async queue processing."
      },
      {
        step: "03",
        title: "Gmail SMTP Integration",
        tech: "JavaMail / SMTP Protocol",
        role: "Establishes secure TLS connection with Gmail SMTP server to send confirmation emails."
      },
      {
        step: "04",
        title: "Recipient Email Delivery",
        tech: "Email Notification",
        role: "Delivers email receipt or alert notification to specified customer or staff recipient."
      }
    ],

    // Authentication & RBAC Flow
    authFlow: [
      {
        step: "01",
        title: "User Credentials",
        tech: "Registration / Login Form",
        role: "User submits email and password credentials over HTTPS to authentication endpoints."
      },
      {
        step: "02",
        title: "ASP.NET Core Auth",
        tech: "Password Hash & Auth Service",
        role: "Validates credentials against database records and claims user roles."
      },
      {
        step: "03",
        title: "JWT Token Generation",
        tech: "JSON Web Token (JWT)",
        role: "Generates signed JWT token containing user identity, roles, and expiration timestamp."
      },
      {
        step: "04",
        title: "JWT Validation & RBAC",
        tech: "Middleware Authorization",
        role: "Validates incoming Authorization headers and enforces role-based access for Customer, Chef, and Admin endpoints."
      }
    ],

    // Docker & AWS EC2 Flow
    deploymentFlow: [
      {
        step: "01",
        title: "Application Build",
        tech: "Production Bundles",
        role: "Vite compiles React static assets and .NET SDK compiles C# API binaries."
      },
      {
        step: "02",
        title: "Docker Containerization",
        tech: "Dockerfiles & Container Images",
        role: "Packages frontend and backend services into isolated Docker container images."
      },
      {
        step: "03",
        title: "AWS EC2 Deployment",
        tech: "AWS EC2 Instance",
        role: "Deploys Docker containers onto cloud-hosted AWS EC2 Linux virtual server instances."
      }
    ],

    // Intelligent Operations Foundation
    aiFoundation: {
      title: "Python / AI Foundation for Intelligent Operations",
      subtitle: "Architectural Foundation for Smart Restaurant Analytics",
      description:
        "The application architecture incorporates a Python data-processing foundation designed to support intelligent restaurant operations, such as analyzing order history trends and structured menu data for future operational insights."
    }
  },

  // "How It Connects" Conceptual Request Flow
  howItConnects: [
    { title: "QR Table Access", desc: "Customer scans table QR code to open session and browse digital menu." },
    { title: "React SPA Action", desc: "Customer selects menu items and dispatches HTTP POST order payload." },
    { title: "REST API Endpoint", desc: "ASP.NET Core validates JWT header and forwards payload to Order Service." },
    { title: "Order Processing", desc: "Order Service verifies item availability and executes transaction rules." },
    { title: "EF Core & SQL Server", desc: "Entity Framework persists order and item records to SQL Server." },
    { title: "Notification Request", desc: "Order Service sends notification payload to Java Spring Boot service." },
    { title: "Gmail SMTP Delivery", desc: "Spring Boot dispatches email receipt via Gmail SMTP protocol." },
    { title: "Client Confirmation", desc: "React frontend receives confirmation response and updates order status." }
  ],

  // Technical Capability Cards ("What I Work With")
  capabilityCategories: [
    {
      category: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["ASP.NET Core Web API", "C#", "Entity Framework Core", "REST APIs"]
    },
    {
      category: "Database",
      skills: ["SQL Server", "Relational Database Design", "CRUD Operations"]
    },
    {
      category: "Services & Security",
      skills: ["Java", "Spring Boot", "Gmail SMTP", "JWT Authentication", "Role-Based Auth (RBAC)"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS EC2", "Git", "GitHub", "Visual Studio", "VS Code", "Postman"]
    },
    {
      category: "IoT / Embedded",
      skills: ["C++", "Arduino UNO R3", "Servo Motors", "LED Signal Logic"]
    }
  ],

  // Proof of Skill (SKILL → PROJECT → EVIDENCE)
  skillEvidence: [
    {
      skill: "React.js",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Digital Menu Interface, Customer/Chef/Admin Dashboards & State Handling"
    },
    {
      skill: "ASP.NET Core Web API",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Layered Architecture, Dependency Injection & REST Controller Endpoints"
    },
    {
      skill: "SQL Server & EF Core",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Relational Schema Design & Entity Framework Data Access"
    },
    {
      skill: "Java & Spring Boot",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Independent Notification Service & Gmail SMTP Integration"
    },
    {
      skill: "JWT & Security",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Token Generation, Validation & Customer/Chef/Admin Role-Based Authorization"
    },
    {
      skill: "Docker & AWS EC2",
      projectTitle: "Smart AI & QR-Based Restaurant Management System",
      projectId: "smart-restaurant-management",
      evidence: "Service Containerization & Deployment onto AWS EC2 Virtual Servers"
    },
    {
      skill: "C++ & Arduino",
      projectTitle: "Road Safety Alert System",
      projectId: "road-safety-alert-system",
      evidence: "3 Servo Barrier Control (~45°/90°), Traffic Signal LED Timing in Arduino IDE"
    }
  ],

  // College Project vs C-DAC Project Growth Comparison
  projectComparison: {
    badge: "Engineering Progression",
    heading: "College IoT Project vs. C-DAC Full-Stack Project",
    subtitle: "Demonstrating growth from hardware/software embedded control to multi-tier service-oriented software engineering.",
    rows: [
      {
        aspect: "Domain",
        college: "IoT / Embedded Systems / Road Safety",
        cdac: "Full-Stack Web App / Restaurant Management"
      },
      {
        aspect: "Core Technology",
        college: "Arduino UNO R3",
        cdac: "React.js + ASP.NET Core + Java Spring Boot"
      },
      {
        aspect: "Programming Languages",
        college: "C++",
        cdac: "C# + Java + JavaScript"
      },
      {
        aspect: "Database",
        college: "Not used (Microcontroller RAM)",
        cdac: "SQL Server (Entity Framework Core)"
      },
      {
        aspect: "Security & Auth",
        college: "Direct Hardware Circuitry",
        cdac: "JWT Authentication + Role-Based Access Control (RBAC)"
      },
      {
        aspect: "Deployment",
        college: "Physical Hardware Breadboard Prototype",
        cdac: "Docker Containers + AWS EC2 Cloud Hosting"
      },
      {
        aspect: "Key Feature",
        college: "Automated vehicle barrier & pedestrian crossing control",
        cdac: "QR Digital Menu Access + Service-Oriented Management"
      }
    ],
    progressionText: "HARDWARE / IoT  →  FULL-STACK SOFTWARE ENGINEERING  →  SERVICE-ORIENTED ARCHITECTURE  →  CLOUD DEPLOYMENT"
  }
};

// Technical Skills Data (Concept-based, realistic grouping)
export const technicalSkills = {
  categories: [
    {
      title: "Backend & Web APIs",
      concepts: ["ASP.NET Core Web API", "C# Programming", "RESTful Architecture", "Layered Architecture", "Dependency Injection", "Java & Spring Boot Fundamentals"]
    },
    {
      title: "Frontend Engineering",
      concepts: ["React.js & Component Design", "Hooks & State Management", "Tailwind CSS & Responsive UI", "REST API Integration", "JavaScript (ES6+)"]
    },
    {
      title: "Databases & Storage",
      concepts: ["SQL Server", "Entity Framework Core (ORM)", "Relational Database Schema Design", "Complex SQL Queries & Joins", "CRUD Operations"]
    },
    {
      title: "Security & Microservices",
      concepts: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Java Spring Boot Notification Service", "Gmail SMTP Integration", "Service-Oriented Architecture"]
    },
    {
      title: "DevOps, Cloud & Tools",
      concepts: ["Docker Containerization", "AWS EC2 Deployment", "Git & GitHub Version Control", "Visual Studio & VS Code", "Postman API Testing"]
    },
    {
      title: "Embedded & IoT Engineering",
      concepts: ["C++ Arduino Sketching", "Arduino UNO R3", "Servo Motor Control Logic", "Breadboard Wiring & Hardware Logic", "State Machine Controls"]
    }
  ]
};

// Practical Engineering Highlights
export const technicalHighlights = [
  {
    title: "ASP.NET Core & REST APIs",
    desc: "Built layered RESTful Web APIs using C# and ASP.NET Core with dependency injection, DTO request models, and Postman API validation.",
    icon: "⚡"
  },
  {
    title: "JWT & Role-Based Authorization",
    desc: "Implemented secure token-based authentication (JWT) and role-based access control (RBAC) for Customer, Chef, and Admin user roles.",
    icon: "🔐"
  },
  {
    title: "Java Spring Boot Notification Service",
    desc: "Engineered an independent microservice using Java, Spring Boot, and Gmail SMTP to handle asynchronous email notification requests.",
    icon: "📧"
  },
  {
    title: "Relational Database & EF Core",
    desc: "Designed normalized relational schemas in SQL Server using Entity Framework Core for transparent data mapping and transactional integrity.",
    icon: "🛢️"
  },
  {
    title: "QR Code Menu Workflow",
    desc: "Developed contactless table QR code scanning flows linking customer mobile browsing directly to digital menus and backend order services.",
    icon: "📲"
  },
  {
    title: "Docker Containerization & AWS EC2",
    desc: "Containerized application services using Docker images and deployed the platform onto AWS EC2 Linux virtual servers.",
    icon: "☁️"
  }
];

export const contentCreation = {
  badge: "Creative Work",
  heading: "Projects & Creations",
  description: "Building modern applications and interactive experiences.",
  categories: []
};

export const leadershipList = [];

// Internships Data
export const internshipsList = [
  {
    organization: "Software Development Internship",
    role: "Software Development Intern",
    duration: "July 2025 – December 2025",
    skills: ["Software Engineering", "Full Stack Development", "API Integration", "Database Design"],
    tech: ["Java", "React", "Node.js", "SQL"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating effectively with cross-functional teams to build robust software." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured technical interactions." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn and implement new tools, frameworks, and technologies." },
  { name: "Time Management", icon: "⏰", desc: "Efficiently prioritizing tasks to meet project deadlines." },
  { name: "Continuous Learning", icon: "🧠", desc: "Always eager to stay up-to-date with modern development practices." }
];

export const projects = [
  {
    id: "smart-restaurant-management",
    number: "01",
    badge: "C-DAC / PG-DAC Project",
    course: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    category: "Full-Stack Web Application / Restaurant Management / Service-Oriented Architecture",
    title: "Smart AI & QR-Based Restaurant Management System",
    description:
      "A modern web-based restaurant management platform that digitizes restaurant operations. Customers access a digital menu through QR codes, while administrators and restaurant staff manage menus, orders, inventory, staff, offers, authentication, and notifications. Combines a React frontend, ASP.NET Core backend services, SQL Server, JWT authentication, a Java Spring Boot notification service, Docker, and AWS EC2 deployment.",
    techTags: [
      "React.js",
      "ASP.NET Core Web API",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "Java",
      "Spring Boot",
      "Gmail SMTP",
      "JWT Auth",
      "Docker",
      "AWS EC2",
      "Tailwind CSS"
    ],
    links: {
      github: "https://github.com/mangesh-lomte/Qr-Dining-main",
      demo: null,
    },
    isFlagship: true,

    // Case Study Deep-Dive Information (14 Sections)
    caseStudy: {
      overview:
        "A modern web-based restaurant management platform designed to digitize dining room operations, menu management, order fulfillment, stock tracking, staff oversight, and promotional offers. Features table QR code scanning for digital menu browsing, role-based access control for Customer, Chef, and Admin users, an independent Java Spring Boot email notification service, and containerized cloud deployment on AWS EC2.",
      problem:
        "Traditional restaurant operations rely heavily on physical paper menus, manual order taking by waitstaff, verbal kitchen communication, and paper record keeping. This often results in order delays, miscommunicated food customizations, zero real-time inventory tracking, inefficient staff allocation, and lack of automated customer communication.",
      objectives: [
        "Digitize order placement via table-specific QR code scanning.",
        "Provide dedicated web dashboards tailored for Customer, Chef, and Admin roles.",
        "Implement secure authentication and role-based access control using JWT tokens.",
        "Engineered layered ASP.NET Core backend REST APIs backed by SQL Server relational database storage.",
        "Build an independent notification microservice using Java Spring Boot and Gmail SMTP.",
        "Containerize services with Docker and deploy on cloud infrastructure (AWS EC2)."
      ],
      modules: [
        {
          name: "Authentication Module",
          icon: "🔐",
          details: "User registration, credential login, JWT token generation, token validation, role-based authorization for Customer, Chef, and Admin roles."
        },
        {
          name: "Menu Management Module",
          icon: "📜",
          details: "Menu item creation, item categories, price management, item availability toggles, and full CRUD operations for restaurant admins."
        },
        {
          name: "Order Management Module",
          icon: "🛒",
          details: "Cart selection, order submission, item customization notes, real-time status transitions (Pending, Preparing, Ready, Served), order retrieval, and historical order processing."
        },
        {
          name: "Inventory Management Module",
          icon: "📦",
          details: "Ingredient stock creation, quantity tracking, low-stock threshold monitoring, and inventory replenishment updates."
        },
        {
          name: "Staff Management Module",
          icon: "👥",
          details: "Restaurant staff account creation, staff profiles, role assignment, contact info updates, and active status tracking."
        },
        {
          name: "Offer Management Module",
          icon: "🏷️",
          details: "Promotional discount creation, promotional banner display, offer validity date ranges, and activation/deactivation controls."
        },
        {
          name: "Notification Service Module",
          icon: "📧",
          details: "Independent Java Spring Boot microservice processing notification requests and dispatching confirmation emails via Gmail SMTP."
        },
        {
          name: "QR Functionality Module",
          icon: "📱",
          details: "Table-specific QR code generation and digital menu viewing access."
        }
      ],
      qrWorkflow: {
        title: "QR Code Access & Digital Menu Flow",
        description: "Customers scan table QR codes to access table-specific digital menus directly on their mobile browsers without paper menus.",
        steps: [
          "RESTAURANT TABLE",
          "TABLE QR CODE",
          "CUSTOMER MOBILE SCAN",
          "DIGITAL MENU ACCESS",
          "ORDER SELECTION & PLACEMENT"
        ]
      },
      authFlow: {
        title: "Authentication & Role-Based Authorization Flow",
        description: "Secures protected API resources across Customer, Chef, and Admin roles.",
        steps: [
          "USER CREDENTIALS",
          "LOGIN / REGISTRATION API",
          "AUTHENTICATION VERIFICATION",
          "JWT TOKEN GENERATION",
          "JWT VALIDATION IN MIDDLEWARE",
          "AUTHORIZED REST REQUEST",
          "ROLE-BASED ACCESS CONTROL (RBAC)",
          "PROTECTED RESOURCE ACCESS"
        ],
        roles: [
          { role: "Customer Role", scope: "Scan QR code, view digital menu, place orders, view personal order history." },
          { role: "Chef / Kitchen Role", scope: "Access live kitchen display queue, view table order items, update order preparation state." },
          { role: "Admin Role", scope: "Full CRUD on menus, categories, stock inventory, staff records, promotional offers, and sales reports." }
        ]
      },
      orderFlow: {
        title: "Customer Order Execution Flow",
        description: "Interactive visual pipeline from customer scan to SQL Server persistence and notification processing.",
        steps: [
          "CUSTOMER",
          "SCAN QR CODE",
          "REACT FRONTEND",
          "DIGITAL MENU",
          "SELECT ITEMS",
          "SUBMIT ORDER",
          "REST API GATEWAY",
          "ORDER SERVICE",
          "VALIDATION / BUSINESS LOGIC",
          "ENTITY FRAMEWORK CORE",
          "SQL SERVER DATABASE",
          "ORDER STORED",
          "NOTIFICATION SERVICE (REST CALL)",
          "GMAIL SMTP",
          "EMAIL / NOTIFICATION",
          "FRONTEND CONFIRMATION STATUS"
        ]
      },
      notificationService: {
        title: "Java Spring Boot Notification Microservice",
        description: "An independently implemented notification service decoupling email transmission from core ordering APIs.",
        stack: ["Java", "Spring Boot", "Gmail SMTP Protocol"],
        steps: [
          "MAIN APPLICATION API",
          "NOTIFICATION REST REQUEST",
          "SPRING BOOT NOTIFICATION SERVICE",
          "GMAIL SMTP SERVER",
          "CUSTOMER / STAFF EMAIL RECEIPT"
        ]
      },
      databaseLayer: {
        title: "SQL Server & Entity Framework Core",
        description: "Relational data architecture maintaining data integrity across normalized entities.",
        tables: [
          "Users (UserId, Name, Email, PasswordHash, RoleId, CreatedAt)",
          "Menus (MenuId, CategoryId, ItemName, Description, Price, IsAvailable)",
          "Categories (CategoryId, CategoryName, DisplayOrder)",
          "Orders (OrderId, TableId, UserId, OrderStatus, TotalAmount, CreatedAt)",
          "OrderItems (OrderItemId, OrderId, MenuId, Quantity, UnitPrice, SpecialNotes)",
          "Inventory (StockId, ItemName, Quantity, Unit, MinimumThreshold)",
          "Staff (StaffId, UserId, Designation, ContactPhone, IsActive)",
          "Offers (OfferId, Code, Title, DiscountPercentage, ValidFrom, ValidUntil, IsActive)"
        ]
      },
      deployment: {
        title: "Docker Containerization & AWS EC2 Deployment",
        description: "Services are containerized with Docker and deployed onto AWS EC2 cloud instances for reliable accessibility.",
        steps: [
          "APPLICATION SERVICES",
          "DOCKER CONTAINERIZATION",
          "DOCKER IMAGES & CONTAINERS",
          "AWS EC2 INSTANCE HOISTING"
        ]
      },
      testingValidation: {
        title: "Testing & Operational Validation",
        description: "Comprehensive functional testing executed across key operational modules prior to deployment.",
        coveredAreas: [
          "User Registration & Login Authentication",
          "Protected API Route Access Controls",
          "Menu Creation, Update & Stock Availability Toggles",
          "Table QR Code Scan & Digital Menu Access",
          "Order Creation, Item Customization & Order Placement",
          "Live Order Status Transitions (Pending, Preparing, Ready, Served)",
          "Inventory Stock Updates & Low-Stock Alerts",
          "Staff Record Updates & Profile Management",
          "Offer Creation & Promotional Code Validation",
          "Notification Service Request Handling & Email Dispatch",
          "Invalid Request Handling & Error Payload Formatting",
          "JWT Expiration & Token Tamper Validation",
          "Docker Container Deployment & AWS EC2 HTTP Accessibility"
        ]
      },
      aiFoundation: {
        title: "Python / AI Foundation for Intelligent Operations",
        description: "Incorporates a Python data-processing foundation designed to support intelligent restaurant operations, such as analyzing order history trends and structured menu data for future operational insights."
      },
      outcome:
        "Delivered a working, service-oriented restaurant management platform demonstrating modular web engineering, secure authentication, relational data persistence, microservice notification integration, containerization, and cloud deployment."
    }
  },
  {
    id: "road-safety-alert-system",
    number: "02",
    badge: "BE IT College Project · 2024",
    category: "Embedded Systems & IoT / Road Safety",
    title: "Road Safety Alert System",
    description:
      "An IoT-based pedestrian safety prototype developed at Genba Sopanrao Moze College of Engineering, Balewadi, Pune. Uses Arduino UNO R3, LEDs, and three servo motors to coordinate traffic indication, vehicle barriers, and pedestrian crossing movement.",
    institution: "Genba Sopanrao Moze College of Engineering, Balewadi, Pune",
    techTags: ["C++", "Arduino IDE", "Arduino UNO R3", "Servo Motors", "LEDs", "Breadboard", "Jumper Wires"],
    links: {
      github: "https://github.com/mangesh-lomte/road-safety-alert-system",
      demo: null,
    },
    isFlagship: false,

    // Case Study Deep-Dive Information (8 Sections)
    caseStudy: {
      overview:
        "An IoT-based pedestrian safety prototype designed using Arduino UNO R3, LEDs, and three servo motors to coordinate traffic indication, vehicle barriers, and pedestrian crossing movement. Developed as a Bachelor of Engineering (BE) Information Technology project at Genba Sopanrao Moze College of Engineering, Balewadi, Pune.",
      problem:
        "Manual pedestrian crossings in high-traffic zones often suffer from pedestrian jaywalking, poor signal visibility, and lack of physical barriers. Approaching vehicles frequently fail to stop during pedestrian red signals, creating severe safety risks at un-gated urban pedestrian crossings.",
      howItWorks:
        "Two servo motors act as vehicle barriers on either side of the road. When the traffic signal is red, the barrier servos rotate to approximately 45° to restrict vehicle movement. A third servo controls the pedestrian crossing and rotates approximately 90° during the pedestrian green phase. When the pedestrian signal becomes red, the crossing servo returns to its initial position. LEDs represent traffic-light states. Arduino controls the LEDs and servo motors according to the programmed logic.",
      hardware: [
        "Arduino UNO R3 Microcontroller Board",
        "3 Servo Motors (2 Vehicle Barriers @ ~45°, 1 Pedestrian Gate @ ~90°)",
        "LED Indicators (Red, Yellow, Green Traffic Signal Simulation)",
        "Solderless Breadboard",
        "Male-to-Male & Male-to-Female Jumper Wires"
      ],
      software: [
        "C++ Language / Arduino C++ Sketch",
        "Arduino IDE (Integrated Development Environment)",
        "Arduino Servo Library (<Servo.h>)"
      ],
      controlLogic: [
        "Initial State: Vehicle Signal Green (LED Green ON), Vehicle Barriers UP (0°), Pedestrian Signal Red (LED Red ON), Pedestrian Gate CLOSED (0°).",
        "Transition Phase: Vehicle Signal Yellow (LED Yellow ON) for 3 seconds to alert oncoming drivers.",
        "Pedestrian Crossing Phase: Vehicle Signal Red (LED Red ON), Vehicle Barrier Servos rotate to ~45° to block traffic lane; Pedestrian Signal Green (LED Green ON), Pedestrian Crossing Servo rotates to ~90° allowing crossing.",
        "Reset Phase: Pedestrian Signal Red, Pedestrian Crossing Servo returns to 0°; Vehicle Barrier Servos return to 0°, Vehicle Signal returns to Green."
      ],
      outcome:
        "Successfully constructed and validated a working hardware prototype demonstrating automated vehicle-barrier and pedestrian-crossing control for a road-safety application.",
      futureScope: [
        "Integration into smart traffic-management infrastructure.",
        "Real-time communication between pedestrian signals and traffic lights.",
        "Dynamic signal timing based on pedestrian crossing demand."
      ]
    }
  }
];

export const certificates = {
  featured: [],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech – Information Technology",
  institution: "Genba Sopanrao Moze College of Engineering",
  cgpa: "7.22",
  graduation: "2024",
  pgdac: "PG-DAC / C-DAC",
};

export const footerContent = {
  taglines: [
    "Mangesh Lomte",
    "Software Development",
    "React · ASP.NET Core · Spring Boot",
    "SQL Server · Docker · AWS EC2",
  ],
  credential: "B.Tech IT · PG-DAC",
  copyright: `© ${new Date().getFullYear()} Mangesh Lomte | Software Developer`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// Structured Knowledge Base for "Ask Mangesh AI" Assistant
export const aiKnowledgeBase = {
  about: "Mangesh Lomte is a Software Developer with a B.Tech in Information Technology (2024, CGPA 7.22) from Genba Sopanrao Moze College of Engineering, Pune, and a Post Graduate Diploma in Advanced Computing (PG-DAC) from C-DAC. He specializes in React.js, ASP.NET Core Web API, C#, SQL Server, Java Spring Boot, Docker, AWS EC2, and C++ for IoT.",
  skills: "Mangesh's technical skill set includes: Programming Languages: C#, Java, C++, JavaScript. Frontend: React.js, Tailwind CSS, HTML5, CSS3. Backend & Services: ASP.NET Core Web API, Entity Framework Core, Java Spring Boot (Notification Service), REST APIs, Gmail SMTP. Databases: SQL Server, Relational Schema Design. Security: JWT Authentication, Role-Based Access Control (RBAC). DevOps & Cloud: Docker, AWS EC2. IoT: Arduino UNO R3, Servo Motors, C++ Hardware Controls.",
  projects: [
    {
      name: "Smart AI & QR-Based Restaurant Management System",
      details: "C-DAC PG-DAC Project. Full-stack platform featuring React.js frontend, ASP.NET Core Web API backend (Layered Architecture, EF Core), SQL Server database, independent Java Spring Boot notification microservice (Gmail SMTP), JWT authentication with RBAC (Customer, Chef, Admin), table QR code menu scanning, Docker containerization, AWS EC2 cloud deployment, and Python/AI foundation for intelligent restaurant operations."
    },
    {
      name: "Road Safety Alert System",
      details: "BE Information Technology College Project (2024) at Genba Sopanrao Moze College of Engineering, Balewadi, Pune. IoT pedestrian safety prototype using Arduino UNO R3, C++ in Arduino IDE, LEDs, and 3 servo motors (2 vehicle barriers at ~45°, 1 pedestrian gate at ~90°) to automate traffic indication and crossing safety."
    }
  ],
  internship: "Mangesh completed a Software Development Internship from July 2025 to December 2025, where he worked on Full Stack Development, API integration, database design, software engineering best practices, and tech stacks including Java, React, Node.js, and SQL.",
  education: "B.Tech in Information Technology from Genba Sopanrao Moze College of Engineering, Balewadi, Pune (Graduated 2024, CGPA: 7.22) and PG-DAC (Post Graduate Diploma in Advanced Computing) from C-DAC.",
  location: "Vapi, Gujarat, India.",
  contact: "You can reach Mangesh via the Contact Form on this website or connect via GitHub (github.com/mangesh-lomte) and LinkedIn (linkedin.com/in/mangesh-lomte)."
};
