import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Sparkles, Download, Linkedin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const subtleFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#E57A44] selection:text-white antialiased relative overflow-hidden flex flex-col">
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E57A44] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7C533F] opacity-[0.05] blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#F2C14E] opacity-[0.03] blur-[120px]" />
      </div>

      {/* Minimal background track for top bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/10 z-[60]"></div>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E57A44] via-[#F2C14E] to-[#E57A44] bg-[length:200%_auto] animate-gradient-x z-[61] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header className={`fixed top-0 left-0 right-0 z-[50] transition-colors duration-500 pt-[18px] pb-4 px-6 sm:px-12 flex justify-center items-center ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'}`}>
        <div className="hidden md:block absolute left-6 sm:left-12 font-serif text-2xl text-white opacity-90 hover:opacity-100 transition-opacity">
          <a href="#">R.M.</a>
        </div>
        <nav className="flex items-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/50 relative z-10">
          <a href="#about" className="hover:text-[#E57A44] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#E57A44] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#E57A44] transition-colors">Experience</a>
          <a href="#education" className="hover:text-[#E57A44] transition-colors">Education</a>
        </nav>
        <div className="hidden md:block absolute right-6 sm:right-12">
          <a href="#contact" className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 hover:bg-[#E57A44]/10 hover:border-[#E57A44]/50 hover:text-[#E57A44] hover:shadow-[0_0_20px_rgba(229,122,68,0.15)] transition-all duration-300">Contact</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-32 relative z-10 w-full flex-grow">
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-56 flex flex-col items-center text-center min-h-[75vh] justify-center relative -mt-12"
        >
          <motion.div variants={fadeIn} className="flex gap-4 items-center justify-center text-xs tracking-[0.3em] uppercase text-[#E57A44] mb-6 font-semibold">
            <span className="w-8 h-[1px] bg-gradient-to-l from-[#E57A44] to-transparent hidden sm:block"></span>
            <span>Portfolio</span>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#E57A44] to-transparent hidden sm:block"></span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            Roxanne <span className="italic font-light text-white/30">Mariscal</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 mb-10 max-w-3xl leading-relaxed">
            Engineering solid foundations and collaborative teams with meticulous precision.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-white/50 font-medium tracking-wide justify-center mt-4">
            <a href="mailto:roxannemariscal38@gmail.com" className="flex items-center justify-center gap-3 hover:text-[#E57A44] transition-colors duration-300">
              <span className="p-2 border border-white/10 rounded-full bg-white/5"><Mail size={14} strokeWidth={2} /></span>
              roxannemariscal38@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/roxanne-mariscal-8a55902a4/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-[#0A66C2] transition-colors duration-300">
              <span className="p-2 border border-white/10 rounded-full bg-white/5"><Linkedin size={14} strokeWidth={2} /></span>
              LinkedIn
            </a>
            <span className="flex items-center justify-center gap-3 group">
              <span className="p-2 border border-white/10 rounded-full bg-white/5"><MapPin size={14} strokeWidth={2} /></span>
              Cebu City, Philippines
            </span>
          </motion.div>

          <motion.div variants={fadeIn} className="flex justify-center mt-12">
            <a href="/Resume-Mariscal.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-white/90 hover:bg-[#E57A44]/10 hover:border-[#E57A44]/50 hover:text-[#E57A44] hover:shadow-[0_0_20px_rgba(229,122,68,0.15)] hover:-translate-y-1 transition-all duration-300">
              <Download size={16} strokeWidth={2} />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={fadeIn} 
            className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-medium">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-40 relative flex flex-col items-center text-center scroll-mt-48"
        >
          <div>
            <Sparkles size={24} className="text-[#E57A44] mb-8 opacity-80 mx-auto" strokeWidth={1.5} />
            <p className="text-xl sm:text-2xl font-serif text-white/70 leading-relaxed max-w-4xl mx-auto">
              Hi, I'm Roxanne. I am a detail-oriented Civil Engineering student entering my third year at the Cebu Institute of Technology - University. My academic journey is driven by a highly structured approach to problem solving—translating complex data into clear action. Beyond the technical drafts and spreadsheets, I thrive in environments that require human collaboration, from coordinating emergency operations to directing academic research arrays.
            </p>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 scroll-mt-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <h2 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-white/40">Capabilities</h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-[#E57A44]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E57A44] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none"></div>
              <h3 className="font-serif italic text-3xl mb-8 text-white relative z-10 group-hover:text-[#E57A44] transition-colors duration-300">Technical & Diagnostic</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {[
                  "Data Management (AutoCAD, MS Excel)",
                  "Tool Proficiency (Canva, CapCut)",
                  "Timeline Mapping (Calendar, Notion)",
                  "Rapid Technical Adaptation"
                ].map((skill, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 cursor-default hover:bg-[#E57A44]/10 hover:border-[#E57A44]/50 hover:text-[#E57A44] hover:shadow-[0_0_20px_rgba(229,122,68,0.15)] hover:-translate-y-1 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-[#F2C14E]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2C14E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none"></div>
              <h3 className="font-serif italic text-3xl mb-8 text-white relative z-10 group-hover:text-[#F2C14E] transition-colors duration-300">Workflow & Mindset</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {[
                  "Meticulous Attention to Detail",
                  "High-Pressure Composure",
                  "Cross-functional Team Coordination",
                  "Task Delegation & Strategy"
                ].map((skill, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 cursor-default hover:bg-[#F2C14E]/10 hover:border-[#F2C14E]/50 hover:text-[#F2C14E] hover:shadow-[0_0_20px_rgba(242,193,78,0.15)] hover:-translate-y-1 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 scroll-mt-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <h2 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-white/40">Impact & Leadership</h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {[
              {
                date: "2025 — Present",
                title: "REAVO Operations",
                role: "Volunteer Facilitator",
                colorHex: "#E57A44",
                hoverBorder: "hover:border-[#E57A44]/30",
                glowBg: "bg-[#E57A44]",
                textHover: "group-hover:text-[#E57A44]",
                roleText: "text-[#E57A44]",
                desc: "Supported emergency assistance frameworks and directed crowd flow for extensive city-wide engagements including the 7/11 Fun Run and Sinulog Festival."
              },
              {
                date: "2024",
                title: "CIT-U Research Congress",
                role: "Group Leader",
                colorHex: "#F2C14E",
                hoverBorder: "hover:border-[#F2C14E]/30",
                glowBg: "bg-[#F2C14E]",
                textHover: "group-hover:text-[#F2C14E]",
                roleText: "text-[#F2C14E]",
                desc: "Directed a research cohort through complex academic deliverables. Outlined scope boundaries, distributed milestones utilizing project management tracking, and consolidated technical feedback points."
              },
              {
                date: "2018 — 2024",
                title: "Student Leadership",
                role: "Class President & Civic Coordinator",
                colorHex: "#7C533F",
                hoverBorder: "hover:border-[#7C533F]/50",
                glowBg: "bg-[#7C533F]",
                textHover: "group-hover:text-[#7C533F]",
                roleText: "text-[#7C533F]",
                desc: "Spearheaded continuous student initiatives over specific six-year terms across CNHS and CIT-U. Governed task scheduling, ensured the integrity of event records, and mediated collaboration constraints."
              }
            ].map((exp, i) => (
              <motion.div key={i} variants={fadeIn} className={`bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 ${exp.hoverBorder} hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-64 h-64 ${exp.glowBg} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none`}></div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 relative z-10">
                  <div className={`text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 pt-2 transition-colors duration-500 ${exp.textHover}`}>
                    {exp.date}
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white mb-2">{exp.title}</h3>
                    <p className={`text-xs ${exp.roleText} font-bold tracking-[0.2em] uppercase mb-4 opacity-90`}>{exp.role}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-2">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ACADEMIC MILESTONES */}
        <motion.section 
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40 scroll-mt-32"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <h2 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-white/40">Academic Milestones</h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
          </motion.div>
          
          <div className="flex flex-col gap-10">
            {/* College */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-[#E57A44]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E57A44] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 relative z-10">
                <div>
                  <h3 className="font-serif text-4xl mb-3 text-white group-hover:text-white transition-colors duration-300">Undergraduate</h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-[#E57A44] uppercase">2024 — Present</p>
                  <p className="text-sm text-white/40 mt-6 leading-relaxed max-w-[200px]">Cebu Institute of Technology<br/>Civil Engineering, BS</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { title: "Dean's Lister", desc: "1st & 2nd Year (Parangal Awardee)" },
                    { title: "Champion, Table Tennis", desc: "Doubles Category, School Intramural" },
                    { title: "Mathematician of the Year", desc: "Participant (1st Year College)" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#E57A44] rounded-full shadow-[0_0_8px_#E57A44] shrink-0"></div>
                      <div>
                        <p className="text-sm text-white/90 font-medium leading-tight">{item.title}</p>
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Senior High */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-[#F2C14E]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2C14E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 relative z-10">
                <div>
                  <h3 className="font-serif text-4xl mb-3 text-white">Senior High</h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-[#F2C14E] uppercase">2022 — 2024</p>
                  <p className="text-sm text-white/40 mt-6 leading-relaxed max-w-[200px]">Cebu Institute of Technology</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { title: "With Honors", desc: "Grade 12" },
                    { title: "Research Congress", desc: "Participant, Poster Category" },
                    { title: "Math Wizard of The Year", desc: "Participant" },
                    { title: "Table Tennis, 4th Place", desc: "School Intramural" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#F2C14E] rounded-full shadow-[0_0_8px_#F2C14E] shrink-0"></div>
                      <div>
                        <p className="text-sm text-white/90 font-medium leading-tight">{item.title}</p>
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Junior High */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 hover:border-[#7C533F]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C533F] opacity-0 group-hover:opacity-20 blur-[100px] transition-opacity duration-700 rounded-full pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 relative z-10">
                <div>
                  <h3 className="font-serif text-4xl mb-3 text-white">Junior High</h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-[#7C533F] uppercase">2018 — 2022</p>
                  <p className="text-sm text-white/40 mt-6 leading-relaxed max-w-[200px]">Colawin National High School</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { title: "With Honors", desc: "Grade 7, 8, 9 & 10" },
                    { title: "MTAP Competitions", desc: "Quiz Bowl Champion & Rep. (Area Level)" },
                    { title: "Techno Jingle", desc: "Champion (Area) & Rep. (Division)" },
                    { title: "Table Tennis & Sudoku", desc: "3rd Place & 2nd Place (School)" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#7C533F] rounded-full shadow-[0_0_8px_#7C533F] shrink-0"></div>
                      <div>
                        <p className="text-sm text-white/90 font-medium leading-tight">{item.title}</p>
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="text-center pt-32 pb-10 mt-20 relative scroll-mt-32"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-64 bg-[#E57A44] opacity-[0.04] blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-10"><span className="italic font-light text-white/40">Let's build</span> together.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-white/60 mb-24 relative z-10 flex-wrap">
            <a href="mailto:roxannemariscal38@gmail.com" className="flex items-center gap-3 hover:text-[#E57A44] transition-colors duration-300">
              <span className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"><Mail size={16} strokeWidth={1.5} /></span>
              roxannemariscal38@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/roxanne-mariscal-8a55902a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#0A66C2] transition-colors duration-300">
              <span className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"><Linkedin size={16} strokeWidth={1.5} /></span>
              LinkedIn
            </a>
            <a href="tel:+639305244914" className="flex items-center gap-3 hover:text-[#F2C14E] transition-colors duration-300">
              <span className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"><Phone size={16} strokeWidth={1.5} /></span>
              +639305244914
            </a>
          </div>
          <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase relative z-10">
            © {new Date().getFullYear()} Roxanne Mariscal
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
