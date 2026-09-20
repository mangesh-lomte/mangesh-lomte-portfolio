import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import ProjectDetailModal from './components/ProjectDetailModal'
import Internships from './components/Internships'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'
import ResumeModal from './components/ResumeModal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About />
      <TechnicalSkills />
      <Projects onSelectProject={(project) => setSelectedProject(project)} />
      <Internships />
      <Education />
      <Contact />
      <Footer />

      {/* Modals & AI Floating Assistant */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <AIAssistant />
    </>
  )
}

export default App


