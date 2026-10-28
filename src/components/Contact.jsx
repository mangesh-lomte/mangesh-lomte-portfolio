import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo, socialLinks } from '../data/portfolioData';
import ParallaxStars from './ParallaxStars';

const Contact = () => {
  const ref = useRef(null);
  const form = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false,
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'fallback' | 'validation_error' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const { firstName, lastName, email, message, permission } = formData;

    // Validate required inputs
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !validateEmail(email.trim()) ||
      !message.trim() ||
      !permission
    ) {
      setStatus('validation_error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS credentials are not configured, use mailto fallback
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`);
      const body = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const recipient = personalInfo.emails.primary || "mangesh.lomte.2002@gmail.com";
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
      window.open(mailtoUrl, '_blank');
      setStatus('fallback');
      setTimeout(() => setStatus('idle'), 7000);
      return;
    }

    setStatus('sending');

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("EMAILJS_REQUEST_TIMEOUT")), 12000)
    );

    try {
      await Promise.race([
        emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          { publicKey }
        ),
        timeoutPromise
      ]);

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        permission: false,
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.warn("Direct EmailJS dispatch unavailable, falling back to mailto client:", error);
      const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`);
      const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
      const recipient = personalInfo.emails.primary || "mangesh.lomte.2002@gmail.com";
      window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
      
      setStatus('fallback');
      setTimeout(() => {
        setStatus('idle');
      }, 7000);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900 font-sans">
      <ParallaxStars speed={0.7} density="medium" />

      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/90 uppercase tracking-tighter select-none scale-y-[1.5] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[88%] lg:w-[78%] p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between shadow-2xl"
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 pb-6 border-b border-white/20">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-black/80 block mb-1">
                Let's Build Something
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight uppercase">
                Get In Touch
              </h2>
            </div>

            {/* Quick social shortcuts */}
            <div className="flex items-center gap-3">
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black hover:text-white border border-white/25 px-3.5 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  <span>GitHub</span>
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black hover:text-white border border-white/25 px-3.5 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} noValidate className="flex flex-col gap-10 md:gap-14 w-full">
            {/* Hidden fields mapped for EmailJS template */}
            <input type="hidden" name="first_name" value={formData.firstName} />
            <input type="hidden" name="last_name" value={formData.lastName} />
            <input type="hidden" name="reply_to" value={formData.email} />

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column: First Name, Last Name, Email */}
              <div className="flex-1 flex flex-col gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-mono font-bold uppercase tracking-wider text-black/80 mb-2">
                    First Name <span className="text-white">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name" 
                    required
                    className="w-full bg-black/20 border-b-2 border-white/40 p-3 text-base sm:text-lg focus:outline-none focus:border-white focus:bg-black/30 transition-all placeholder-white/60 font-medium rounded-t-lg"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-mono font-bold uppercase tracking-wider text-black/80 mb-2">
                    Last Name <span className="text-white">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name" 
                    required
                    className="w-full bg-black/20 border-b-2 border-white/40 p-3 text-base sm:text-lg focus:outline-none focus:border-white focus:bg-black/30 transition-all placeholder-white/60 font-medium rounded-t-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-black/80 mb-2">
                    Email Address <span className="text-white">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    required
                    className="w-full bg-black/20 border-b-2 border-white/40 p-3 text-base sm:text-lg focus:outline-none focus:border-white focus:bg-black/30 transition-all placeholder-white/60 font-medium rounded-t-lg"
                  />
                </div>
              </div>

              {/* Right Column: Message Area */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-black/80 mb-2">
                  Your Message <span className="text-white">*</span>
                </label>
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team opportunity, or inquiry..." 
                    required
                    className="w-full h-full min-h-[160px] md:min-h-[220px] bg-black/20 border-b-2 border-white/40 p-4 text-base sm:text-lg focus:outline-none focus:border-white focus:bg-black/30 transition-all placeholder-white/60 font-medium resize-none rounded-t-lg"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Row: Permission Checkbox & Submit Feedback */}
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center pt-2">
              <div className="flex items-start gap-3 text-sm font-medium text-white/95 max-w-md">
                <input 
                  type="checkbox" 
                  id="permission" 
                  name="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-white/40 bg-black/30 text-white focus:ring-2 focus:ring-white cursor-pointer" 
                  style={{ accentColor: "black" }}
                />
                <label htmlFor="permission" className="cursor-pointer text-xs sm:text-sm leading-snug">
                  I consent to being contacted at this email address regarding this message.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 whitespace-nowrap shadow-lg focus:outline-none focus:ring-2 focus:ring-white ${
                    status === 'sending' 
                      ? 'opacity-60 cursor-not-allowed bg-black/40 text-white' 
                      : status === 'success'
                      ? 'bg-green-700 text-white shadow-[0_0_20px_rgba(21,128,61,0.5)]'
                      : status === 'fallback'
                      ? 'bg-blue-700 text-white shadow-[0_0_20px_rgba(29,78,216,0.5)]'
                      : status === 'validation_error'
                      ? 'bg-black text-yellow-300'
                      : 'bg-black text-white hover:bg-white hover:text-[#ff2a2a]'
                  }`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2 text-xs sm:text-sm">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : status === 'success' ? (
                    <span className="text-xs sm:text-sm">Message Sent Successfully ✓</span>
                  ) : status === 'fallback' ? (
                    <span className="text-xs sm:text-sm">Email Client Prepared ✓</span>
                  ) : status === 'validation_error' ? (
                    <span className="text-xs sm:text-sm">Please fill all fields & check box</span>
                  ) : (
                    <span className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                      Send Message
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Email fallback note */}
            <div className="pt-4 border-t border-white/15 text-xs text-white/80 flex flex-wrap justify-between items-center gap-3">
              <span>
                Prefer direct email? Reach me directly at{" "}
                <a 
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline hover:text-black font-bold font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded px-1"
                >
                  {personalInfo.emails.primary}
                </a>
              </span>
              <span className="font-mono text-[11px] text-black/80 font-bold">
                {personalInfo.location} · {personalInfo.phone}
              </span>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
