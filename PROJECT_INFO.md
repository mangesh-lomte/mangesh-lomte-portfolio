# PROJECT_INFO.md

> Comprehensive Technical Overview & Documentation for Mangesh Lomte's Personal Portfolio Project (`video_portfolio`).

---

## 1. Executive Summary & Overview

### What the Project Is
`video_portfolio` (branded on the frontend as **Mangesh Lomte — Software Developer**) is a modern, responsive single-page web application (SPA) built with React 19 and Vite. It serves as an interactive digital portfolio and personal showcase for Mangesh Lomte, a Software Developer with a B.Tech in Information Technology and a PG-DAC credential from C-DAC.

### Core Purpose & Functionality
The application presents an all-in-one interactive platform for recruiters, clients, and technical managers to:
* Explore the developer's technical profile, background, and process.
* Inspect primary tech stacks (Java, React, Node.js, databases, ASP.NET Core, etc.).
* Review flagship full-stack software and IoT projects with live links and repository references.
* View academic credentials, certifications, soft skills, and internship experience.
* Contact the developer directly through a validated contact form integrated with EmailJS (and an automated fallback to standard `mailto:` protocol).

---

## 2. Tech Stack & Dependencies

### Frontend Architecture
* **Core Framework**: React `^19.2.6` with React DOM `^19.2.6`
* **Build Tooling & Bundler**: Vite `^8.0.12` with `@vitejs/plugin-react` `^6.0.1`
* **Language & Syntax**: JavaScript ES Modules (`"type": "module"`)

### Styling & CSS System
* **CSS Framework**: Tailwind CSS v4 (`tailwindcss` `^4.3.0` via `@tailwindcss/vite` `^4.3.0`)
* **Custom Styling**: `index.css` (Tailwind `@import "tailwindcss";`, custom `@theme` float animation, custom `dropBounce` keyframes for AOS), `App.css` (3D perspective hero transforms and custom utility classes)
* **Typography**: Google Font **Inter** (weights 300 to 900) loaded via `index.html`

### Animation & Interaction Libraries
* **Motion Graphics & Scroll Mechanics**: Framer Motion (`framer-motion` `^12.40.0`)
* **Scroll Animations**: AOS — Animate On Scroll (`aos` `^2.3.4`)

### Services & Utility Dependencies
* **Email Client SDK**: `@emailjs/browser` `^4.4.1` for client-side contact form submissions
* **Linting & Code Quality**: ESLint `^10.3.0`, `@eslint/js` `^10.0.1`, `eslint-plugin-react-hooks` `^7.1.1`, `eslint-plugin-react-refresh` `^0.5.2`

---

## 3. Project Structure

```text
Portfolio-main/
├── .gitignore                      # Git ignore rules
├── README.md                       # Vite template default README
├── eslint.config.js                # ESLint configuration
├── index.html                      # Single page HTML entry point & SEO meta tags
├── package.json                    # Project manifest & dependency list
├── package-lock.json               # Dependency lockfile
├── vite.config.js                  # Vite configuration (React & Tailwind v4 plugins)
├── public/                         # Static public assets
│   ├── Resume.pdf                  # Downloadable resume file
│   ├── favicon.svg                 # Site favicon
│   └── icons.svg                   # SVG icon set
└── src/                            # Source code directory
    ├── App.css                     # Global custom CSS rules & hero animations
    ├── App.jsx                     # Top-level application component
    ├── index.css                   # Tailwind v4 import & keyframes definition
    ├── main.jsx                    # React DOM root entry point
    ├── assets/                     # Media & asset directory
    │   ├── about/
    │   │   ├── mangesh-avatar.png  # ID badge profile picture
    │   │   ├── mongodb.png         # Database brand asset
    │   │   ├── node.png            # Node.js brand asset
    │   │   └── react.png           # React brand asset
    │   └── hero video/
    │       ├── Developer_introduces_self_and_sk..._202606051918.mp4
    │       └── mangesh-hero.mp4    # Main hero background video reel
    ├── components/                 # UI Component Layer
    │   ├── About.jsx               # Interactive ID badge & bio section
    │   ├── Certificates.jsx        # Certification showcase section
    │   ├── Contact.jsx             # Form with EmailJS integration & mailto fallback
    │   ├── ContentCreator.jsx      # Creative work & social reels section
    │   ├── Education.jsx           # B.Tech & PG-DAC qualification cards
    │   ├── EngineeringBehindProjects.jsx # Interactive tech map & architecture showcase
    │   ├── Footer.jsx              # Bottom brand watermark, quick links, copyright
    │   ├── Hero.jsx                # Video reel section with controls & CTA buttons
    │   ├── Internships.jsx         # Software development internship experience
    │   ├── Leadership.jsx          # Activities, events & leadership timeline
    │   ├── Navbar.jsx              # Fixed header navigation with mobile drawer
    │   ├── Preloader.jsx           # Animated water-fill logo startup screen
    │   ├── Projects.jsx            # Flagship & project cards display grid
    │   ├── SoftSkills.jsx          # Professional soft skills competency cards
    │   └── TechnicalSkills.jsx     # Technical skill categories with percentage bars
    └── data/
        └── portfolioData.js        # Single Source of Truth (SSOT) data configuration
```

---

## 4. Architecture & Data Flow

### Single Source of Truth (SSOT) Pattern
All content rendered across the entire application is completely decoupled from UI component code. Data is centrally configured and exported from `src/data/portfolioData.js`. 

Key exported data structures in `portfolioData.js`:
* `personalInfo`: Name, brand title, location, contact details, summary bio, resume path (`/Resume.pdf`).
* `socialLinks`: URLs for GitHub, LinkedIn, and Instagram.
* `heroContent`: Greeting, highlight title, subtitle, CTA text and target anchors.
* `aboutContent`: Bio text (with inline HTML styling) and core tech stack array.
* `engineeringArchitecture`: Architecture showcase configuration (tech map nodes, featured project multi-tier web flow, AI pipeline, documented AI capabilities, request flow, capability categories, proof of skill matrix).
* `technicalSkills`: 6 skill categories (*Programming Languages*, *Frontend*, *Backend*, *Databases*, *Tools*, *Computer Science*) with individual skill names and concepts.
* `internshipsList`: Role details, organization, duration, skills gained, and technology tags.
* `softSkillsList`: Core competencies (*Problem Solving*, *Teamwork*, *Communication*, *Adaptability*, *Time Management*, *Continuous Learning*) with icons and descriptions.
* `projects`: Array of detailed project objects including flagship flag (`isFlagship: true`), badge, title, description, tech tags, GitHub links, and live demo URLs.
* `education`: Object with degree details, institution (*Genba Sopanrao Moze College of Engineering*), CGPA (7.22), graduation year (2024), and PG-DAC (*C-DAC*).
* `footerContent`: Taglines, credential string, copyright year calculation.
* `emailjsConfig`: Object reading EmailJS environment variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).

### Application Execution Flow
1. **HTML Initialization**: `index.html` loads Inter fonts, meta tags (SEO description, keywords, Open Graph attributes), and mounts `<div id="root">`.
2. **React Root Execution**: `src/main.jsx` initializes React root via `createRoot` and renders `<App />` within `<StrictMode>`.
3. **Component Cascade**: `src/App.jsx` renders a vertical single-page stack of components:
   - `Preloader` (locks screen with `#ff2a2a` overlay; animates logo water fill via Framer Motion `clipPath` for 2.2s before sliding up offscreen)
   - `Navbar` (fixed header listening to window scroll to toggle background translucency and mobile hamburger menu)
   - `Hero` (renders `<video>` reel, fixed left social media bar for desktop screens, main headings, CTA buttons, and interactive video play/pause toggle)
   - `About` (renders 3D rotated ID badge lanyard card with `mangesh-avatar.png` and custom SVG tech icons for Java, React, and Node.js)
   - `TechnicalSkills` (renders grid of 6 skill categories with progress bar fills)
   - `TechnicalHighlights` (renders key capabilities & verified portfolio features)
   - `EngineeringBehindProjects` (interactive technology map, featured architecture flow, request lifecycle, capability cards, and proof of skill matrix)
   - `Projects` (renders project cards with flagship styling, tech tags, and repository links)
   - `Internships` (renders work experience timeline card)
   - `Education` (renders qualification cards for B.Tech IT and PG-DAC)
   - `SoftSkills` (renders 4-column grid of core professional traits)
   - `Contact` (renders form with field validation, submission status state machine, and EmailJS/mailto link execution)
   - `Footer` (renders huge brand name watermark and quick jump anchors)

---

## 5. Key Application Features & UI Mechanics

### 1. Water-Fill Preloader Screen (`Preloader.jsx`)
* Full-screen overlay (`z-[100000]`) in brand red (`#ff2a2a`).
* Dual-layer text effect: background text in low-opacity `red-900/30`, foreground white text animated with Framer Motion `clipPath: inset(100% 0 0 0)` to `inset(0% 0 0 0)` over 1.6 seconds.
* Automatically unmounts after 2200ms with a smooth upward shutter exit transition (`y: "-100%"`).

### 2. Video Background Reel & Hero Controls (`Hero.jsx`)
* Full-bleed background `<video>` (`mangesh-hero.mp4`).
* Interactive Play/Pause/Unmute control button that updates internal state (`isPlaying`) and directly triggers `.play()` or `.pause()` on `videoRef`.
* Desktop-only fixed left social floating bar (`mix-blend-difference`) providing direct access to GitHub, LinkedIn, and Instagram.

### 3. Interactive ID Badge Component (`About.jsx`)
* Left side renders an interactive security ID badge suspended by a black lanyard cord.
* Uses CSS transforms (`-rotate-3` with `hover:rotate-0` smooth 500ms transition) and AOS `drop-bounce` animation.
* Right side displays greeting bio text and custom SVG icons for core technologies (Java, React, Node.js).
* Bottom boundary features a custom torn paper SVG divider.

### 4. Interactive System Architecture Showcase (`EngineeringBehindProjects.jsx`)
* **Interactive Technology Map**: Select any technology (React, ASP.NET Core, FastAPI, SQL Server, C++, etc.) to reveal technical roles and highlight connected projects.
* **Featured Architecture Flow**: Interactive multi-tier web & database flow and AI microservice pipeline for the *AI + QR-Based Smart Restaurant Management System*.
* **Documented AI Capabilities**: Showcase for menu recommendations, customer segmentation, and demand prediction features.
* **"How It Connects" Pipeline**: End-to-end request lifecycle from user action to database query and AI microservice response.
* **Proof of Skill Matrix**: Direct mapping of claimed technologies to project implementations with interactive `[View Project Evidence]` actions.

### 5. Contact Form with Automatic Fallback (`Contact.jsx`)
* Form inputs: First Name, Last Name, Email, Message, and Permission Checkbox.
* State Machine (`status`): `idle` | `sending` | `success` | `error`.
* Form logic:
  1. Checks if EmailJS environment variables are valid (not empty and not default `YOUR_EMAILJS_...` placeholders).
  2. **If configured**: Dynamically imports `@emailjs/browser` and calls `emailjs.sendForm(...)`.
  3. **If unconfigured**: Automatically constructs a pre-filled `mailto:` link with recipient, subject line, and body message, and opens `window.open(mailtoLink, '_blank')`.

---

## 6. Documented Projects & Source of Truth

While the portfolio repository itself is a static React application without a native backend database or hardware runtime, `src/data/portfolioData.js` documents key academic projects developed by Mangesh Lomte:

### Flagship Project: Smart AI & QR-Based Restaurant Management System
* **Category**: C-DAC / PG-DAC Project (Post Graduate Diploma in Advanced Computing)
* **Team**: Mangesh Motiram Lomte, Manvendra Singh Kushwaha, Nitin Kumar Mishra, Omkar Laxman Dhawan, Sanjana Baban Gawhande
* **Architecture & Stacks**: React.js, Tailwind CSS, ASP.NET Core Web API (C#), Entity Framework Core, SQL Server, Java Spring Boot Notification Microservice, Gmail SMTP, JWT Authentication with RBAC, Docker, AWS EC2 Deployment.
* **Main Modules**: Authentication, Menu Management, Order Management, Inventory Management, Staff Management, Offer Management, Notification Service, QR Access Functionality.
* **Security**: Role-Based Access Control (RBAC) for Customer, Chef, and Admin roles.
* **AI Foundation**: Incorporates a Python data-processing foundation for intelligent restaurant operations.

### College Project: Road Safety Alert System
* **Category**: BE Information Technology College Project (2024)
* **Institution**: Genba Sopanrao Moze College of Engineering, Balewadi, Pune
* **Team & Guide**: Mangesh Lomte, Ganesh Tambale, Prathmesh Girulkar (Guide: Prof. Pradnya Patange)
* **Tech Stack**: C++, Arduino IDE, Arduino UNO R3, 3 Servo Motors (2 vehicle barriers @ ~45°, 1 pedestrian gate @ ~90°), LEDs, Breadboard, Jumper Wires.
* **Functionality**: Automated pedestrian crossing alert system coordinating traffic signal indication LEDs, vehicle barrier servos, and pedestrian gate movements.

---

## 7. Build, Execution & Environment Configuration

### Prerequisites
* Node.js (v18.x or higher recommended)
* npm package manager

### Available CLI Scripts
All standard scripts are defined in `package.json`:

```bash
# Install all project dependencies
npm install

# Start local Vite development server (with HMR)
npm run dev

# Build production distribution bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run ESLint across code files
npm run lint
```

### Environment Variable Setup (Optional)
To enable direct EmailJS form submissions without relying on the `mailto:` fallback, create a `.env` or `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

---

## 8. Summary of Architectural Highlights for AI Agents

When reading or modifying this codebase, another AI assistant should keep the following design patterns in mind:

1. **Centralized Data Model**: Do NOT hardcode text, project links, or skill lists directly inside JSX files. Update `src/data/portfolioData.js`.
2. **Tailwind CSS v4 Standard**: The project uses Tailwind CSS v4 via `@import "tailwindcss";` in `src/index.css`. Tailwind configuration is defined directly in CSS using `@theme` blocks rather than a legacy `tailwind.config.js`.
3. **Glassmorphism & Contrast Aesthetics**: Dark background (`#0a0a0a` / `#111111`) paired with vibrant accent red (`#ff2a2a`), backdrop filters (`backdrop-blur-md`), and torn SVG section dividers.
4. **No Routing Needed**: The entire app functions as a single-page section scroll interface (`html { scroll-behavior: smooth; }`). Header navigation links target element IDs (`#about`, `#skills`, `#projects`, `#experience`, `#education`, `#contact`).
