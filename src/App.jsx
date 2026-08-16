import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Globe,
  Terminal,
  Layout,
  ExternalLink,
  MapPin,
  Phone,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            A<span className="text-blue-500">.</span>R<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['Home', 'About', 'Tech', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Welcome to my portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Ahmed <br/> Ramadhan <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Mohammedsaeed
                </span>
              </h1>
              <p className="text-xl text-gray-400 font-medium">
                Full-Stack Software Engineer & Computer Educator
              </p>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-xl text-lg">
              "Building scalable web platforms, embedded IoT innovations, and AI-driven solution architectures."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollTo('projects')} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2">
                View Projects
              </button>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="flex gap-6 pt-8 border-t border-gray-800">
              <a href="https://github.com/Smelane" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ahmed-ramadhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ahmadsmilane@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
              <div className="w-full h-full rounded-full border border-gray-800 bg-[#111] p-2 relative z-10 overflow-hidden shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Ahmed Ramadhan Mohammedsaeed" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Ahmed+Ramadhan&background=0D8ABC&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <button onClick={() => scrollTo('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white animate-bounce transition-colors">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a highly resilient Computer Education graduate and adaptive IT professional with a proven track record of solving complex technical problems under pressure. 
              </p>
              <p>
                Recognized for a rapid learning curve and sharp diagnostic skills in hardware, software, and networking ecosystems. Deeply skilled in leveraging advanced AI models to accelerate workflows.
              </p>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">B.Sc. in Computer Education</h3>
                    <p className="text-sm text-gray-500">Tishk International University (Honors Graduate, 2026)</p>
                    <p className="text-sm mt-2">Focus: AI in Education, Robotics Integration, and Modern Teaching Methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Code2 />, title: "Software Engineering", desc: "Full-stack web apps & APIs" },
              { icon: <Cpu />, title: "Embedded IoT", desc: "Arduino, ESP32, Automation" },
              { icon: <Database />, title: "Systems & Cloud", desc: "Docker, Linux, MySQL" },
              { icon: <Terminal />, title: "AI Integration", desc: "Prompt Engineering & Workflows" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#151515] rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-400">Tools, languages, and frameworks I use to build solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Layout size={20} className="text-blue-500"/> Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {['PHP (Laravel)', 'Python', 'C++', 'JavaScript', 'Tailwind CSS', 'Flutter', 'Dart', 'Java'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-gray-600 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Globe size={20} className="text-purple-500"/> Systems & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['MySQL', 'Git/GitHub', 'Docker', 'Linux', 'Cisco Packet Tracer', 'Arduino', 'ESP32', 'VMware'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-gray-600 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400">Some of the impactful solutions I've architected.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Smart Fire Response System (SFRS)",
                desc: "Autonomous IoT emergency localization & real-time alerting system built with embedded controllers and smart sensors.",
                tags: ["IoT", "Arduino", "C++", "Sensors"]
              },
              {
                title: "Eye-Track Mobility",
                desc: "AI-powered wheelchair control system utilizing eye-tracking for extreme accessibility and mobility independence.",
                tags: ["AI", "Python", "Computer Vision", "Hardware"]
              },
              {
                title: "Web-Based Radiology Platform",
                desc: "Platform for streamlined access to radiology service information, improving patient flow and data management.",
                tags: ["Laravel", "PHP", "MySQL", "Tailwind"]
              },
              {
                title: "Enterprise Laravel Systems",
                desc: "Scalable full-stack web applications featuring custom authentication, complex REST APIs, and optimized database architectures.",
                tags: ["PHP", "Laravel", "REST API", "Architecture"]
              }
            ].map((project, i) => (
              <div key={i} className="group bg-[#151515] border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#1a1a1a] rounded-xl text-gray-400 group-hover:text-blue-500 transition-colors">
                      <Code2 size={24} />
                    </div>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Impact */}
      <section id="leadership" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership & Impact</h2>
            <p className="text-gray-400">Community engagement and technical operations.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                role: "Field Tech & Technical Ops",
                org: "Electricity Office (Grid Maintenance) & 3rd Erbil Forum (Rudaw)",
                desc: "Coordinated technical logistics, network maintenance, and operational support."
              },
              {
                role: "Community & STEM Leader",
                org: "\"My Account\" Digital Banking Initiative & STEM Workshops",
                desc: "Instructed students in tech concepts and contributed to major digital civic initiatives."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-[#111] border border-gray-800 rounded-2xl">
                <div className="hidden sm:block">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Briefcase size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                  <h4 className="text-gray-400 font-medium mb-3">{item.org}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-[2rem] p-8 md:p-16 border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Together.</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                Interested in collaborating on a scalable web platform, IoT innovation, or just want to say hi? Drop a message.
              </p>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-500" size={20} />
                  <span>ahmadsmilane@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-500" size={20} />
                  <span dir="ltr">+964 751 659 7959</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-emerald-500" size={20} />
                  <span>Erbil, Kurdistan Region, Iraq</span>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Hello Ahmed, I'd like to discuss..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Ahmed Ramadhan Mohammedsaeed. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;