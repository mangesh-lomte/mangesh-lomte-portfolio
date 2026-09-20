# Mangesh Lomte — Software Developer Portfolio

An interactive, responsive single-page developer portfolio and showcase built for **Mangesh Lomte** (Software Developer, B.Tech IT & C-DAC PG-DAC graduate). Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Overview

This portfolio serves as an interactive hub highlighting software engineering capabilities, full-stack and IoT projects, architectural workflows, technical skill proficiencies, internship experiences, and verified academic credentials.

### Live Highlights
* **Hero Reel**: Background video integration with custom playback and volume controls.
* **Interactive Architecture & Engineering Hub**: Visual mapping of system architectures, request flows, and component pipelines.
* **Project Showcase**: Modal-driven deep-dives into flagship systems with architecture maps, feature breakdown, and tech stack details.
* **Resume Viewer & Downloader**: In-app PDF preview modal and one-click direct download.
* **Integrated Contact Form**: Direct client-side message delivery via EmailJS.
* **Interactive AI Assistant**: Floating AI assistant providing quick navigation, technical summaries, and profile answers.

---

## ✨ Features

- **Dynamic Water-Fill Preloader**: Smooth animated brand preloader powered by Framer Motion `clipPath`.
- **Full-Bleed Hero Section**: Video showcase with interactive controls, floating social docks, and quick CTAs.
- **Interactive ID Badge (About)**: 3D hover badge lanyard card with core stack highlights.
- **Technical Skills Matrix**: Comprehensive categorization across Programming Languages, Frontend, Backend, Databases, Tools, and Computer Science fundamentals.
- **Engineering Behind Projects**: Deep dive into multi-tier architectures, API flows, data pipelines, and skill proof matrices.
- **Featured Projects Grid**: Detailed project cards with live demo links, repository references, and interactive modal views.
- **Internships & Education**: Detailed timeline cards outlining professional software development experience and formal education (B.Tech IT & C-DAC PG-DAC).
- **Interactive AI Assistant Widget**: Floating conversational helper for exploring developer highlights and projects.
- **Responsive Dark Theme UI**: Custom glassmorphism, parallax star fields, smooth scroll anchors, and tailored micro-interactions.
- **EmailJS Contact Form**: Fully validated contact form with asynchronous EmailJS delivery and status feedback.

---

## 🛠️ Technologies Used

### Core Framework & Tooling
* **React 19** (`react`, `react-dom`) — Component-driven UI architecture
* **Vite** — High-performance build tool and development server
* **JavaScript (ES Modules)** — Modern standard client logic

### Styling & Design System
* **Tailwind CSS v4** (`@tailwindcss/vite`, `tailwindcss`) — Utility-first styling engine with `@theme` configurations
* **Vanilla CSS** (`index.css`, `App.css`) — Custom animations, perspective transforms, and scroll effects
* **Google Fonts (Inter)** — Clean, modern typography

### Animation & Interactions
* **Framer Motion** — Physics-based layout transitions, modal animations, and preloader effects
* **AOS (Animate On Scroll)** — Scroll-triggered entry animations

### Communications & Utilities
* **EmailJS Browser SDK** (`@emailjs/browser`) — Client-side form handling and email dispatch
* **ESLint** — Code consistency and linting

---

## 📁 Project Structure

```text
Portfolio-main/
├── public/                         # Static public assets
│   ├── Resume.pdf                  # Downloadable resume document
│   ├── favicon.svg                 # Site favicon
│   └── icons.svg                   # SVG icon definitions
├── src/
│   ├── assets/                     # Media assets (images, profile avatar, video reel)
│   │   ├── about/                  # Profile picture & technology icons
│   │   └── hero video/             # Hero background video assets
│   ├── components/                 # Reusable React components
│   │   ├── About.jsx               # Interactive ID badge & bio
│   │   ├── AIAssistant.jsx          # Floating interactive AI assistant
│   │   ├── ArchitectureDiagram.jsx  # System architecture visualizer
│   │   ├── Certificates.jsx        # Certification cards
│   │   ├── Contact.jsx             # Validated form with EmailJS integration
│   │   ├── ContentCreator.jsx      # Content creation & social highlight
│   │   ├── Education.jsx           # B.Tech IT & PG-DAC academic qualifications
│   │   ├── EngineeringBehindProjects.jsx # Interactive tech maps & system architecture
│   │   ├── Footer.jsx              # Brand footer & navigation links
│   │   ├── Hero.jsx                # Video hero section with controls
│   │   ├── Internships.jsx         # Software development internship experience
│   │   ├── Leadership.jsx          # Activities and leadership timeline
│   │   ├── Navbar.jsx              # Navigation header with mobile drawer
│   │   ├── ParallaxStars.jsx       # Dynamic particle canvas/background
│   │   ├── Preloader.jsx           # Animated water-fill initial load screen
│   │   ├── ProjectDetailModal.jsx  # Detailed project popups
│   │   ├── Projects.jsx            # Project grid & filters
│   │   ├── ResumeModal.jsx         # In-browser resume viewer modal
│   │   ├── SoftSkills.jsx          # Professional soft skills cards
│   │   ├── TechnicalHighlights.jsx # Core competency highlights
│   │   └── TechnicalSkills.jsx     # Technical skill categories & progress indicators
│   ├── data/
│   │   └── portfolioData.js        # Centralized Single Source of Truth (SSOT) data
│   ├── App.css                     # Custom styles and 3D transforms
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Global styles & Tailwind v4 imports
│   └── main.jsx                    # React DOM mount entry point
├── .env.example                    # Environment variable template
├── .gitignore                      # Git exclusion rules
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point with SEO metadata
├── package.json                    # Project dependencies & scripts
├── package-lock.json               # Locked dependency tree
└── vite.config.js                  # Vite configuration
```

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js** (v18.x or higher recommended)
* **npm** (comes bundled with Node.js)

### 1. Clone the Repository
```bash
git clone https://github.com/mangesh-lomte/mangesh-lomte-portfolio.git
cd mangesh-lomte-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

---

## 🔐 Environment Variable Setup

The contact form is pre-configured to send messages using **EmailJS**.

1. Copy the `.env.example` file to create your own `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
> **Note:** `.env` is listed in `.gitignore` and will never be committed to source control.

---

## 💻 Running Locally

Start the Vite local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 🏗️ Build & Production Preview

### Build for Production
To generate an optimized production bundle in the `dist/` directory:
```bash
npm run build
```

### Preview Production Build Locally
To test the generated production build locally before deployment:
```bash
npm run preview
```

### Linting
To check for code quality and syntax issues:
```bash
npm run lint
```

---

## 🌐 Deployment Information

This project is optimized for deployment on modern static hosting platforms:

### Vercel
1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Add the Environment Variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) under Project Settings.
5. Click **Deploy**.

### Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Set build command: `npm run build` and publish directory: `dist`.
3. Add your environment variables in Site settings > Environment variables.
4. Click **Deploy Site**.

### GitHub Pages
1. Build the production assets using `npm run build`.
2. Deploy the `dist/` folder using your preferred GitHub Actions workflow or the `gh-pages` package.

---

## 👤 Author

**Mangesh Lomte**
* GitHub: [@mangesh-lomte](https://github.com/mangesh-lomte)
* LinkedIn: [mangesh-lomte](https://linkedin.com/in/mangesh-lomte)
