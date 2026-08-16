import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Coffee, 
  Github, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  BookOpen, 
  Scissors,
  ChevronDown,
  Music,
  Phone,
  MessageCircle,
  Snowflake,
  ArrowRight,
  Terminal,
  Globe,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState('main'); // 'main' or 'cv'

  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300";

  const scrollTo = (id) => {
    if (view !== 'main') {
      setView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const hobbies = [
    { name: "دەف ژەن و پیانۆ", icon: <Music className="text-pink-400" />, desc: "ئارامی ڕۆح لە ڕێگەی مۆسیقاوە." },
    { name: "قاوە (Spanish Latte)", icon: <Coffee className="text-orange-400" />, desc: "سەرەتایەکی پڕ وزە بۆ هەموو بەیانییەک." },
    { name: "ئایەتەکانی قورئان", icon: <BookOpen className="text-emerald-400" />, desc: "بەکارهێنانی ڕێنماییە ئاینییەکان لە ژیانی ڕۆژانەدا." },
    { name: "سکی سەر بەفر", icon: <Snowflake className="text-blue-400" />, desc: "خولیا و چالاکی لە ناو دڵگیرترین وەرزدا." }
  ];

  const programmingLanguages = ["PHP", "Python", "Java", "C++"];
  const webTools = ["Laravel", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3", "JavaScript", "MySQL"];

  // CV Page Component
  const CVPage = () => (
    <div className="min-h-screen bg-white text-slate-900 p-8 md:p-16 font-sans animate-in fade-in duration-500">
      <button 
        onClick={() => setView('main')}
        className="mb-10 flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all"
      >
        <ArrowLeft size={20} /> گەڕانەوە بۆ پۆرتفۆلیۆ
      </button>

      <div className="max-w-4xl mx-auto border-t-8 border-emerald-500 shadow-2xl p-10 bg-slate-50 rounded-b-xl">
        <div className="flex flex-col md:flex-row justify-between items-start border-b pb-10 gap-8">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tighter">AHMAD RAMADHAN</h1>
            <p className="text-xl text-emerald-600 font-bold mb-4">Web Developer & CS Student</p>
            <div className="space-y-1 text-slate-600 text-sm">
              <p className="flex items-center gap-2" dir="ltr"><Mail size={14} /> ahmadsmilane@gmail.com</p>
              <p className="flex items-center gap-2" dir="ltr"><Phone size={14} /> +964 751 659 7959</p>
              <p className="flex items-center gap-2" dir="ltr"><Globe size={14} /> Erbil, Kurdistan</p>
            </div>
          </div>
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
            <img src={profileImage} className="w-full h-full object-cover" alt="Ahmad" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-10 text-right">
            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">کورتییەک</h2>
              <p className="text-slate-700 leading-relaxed text-justify">
                خوێندکاری بەشی کۆمپیوتەر لە زانکۆی تیشک، گەشەپێدەری وێب بە لاراڤێل و خاوەن ئەزموون لە بواری ڕۆبۆتیک. کەسێکی وردبین و چالاک لە فێربوونی تەکنەلۆژیا نوێیەکان.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">خوێندن</h2>
              <div className="mb-4">
                <h3 className="font-bold">بەکالۆریۆس لە پەروەردەی کۆمپیوتەر</h3>
                <p className="text-sm text-slate-500 font-medium italic">Tishk International University (TIU) | 2022 - Present</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">پڕۆژە دیارەکان</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold">Hane Management System</h3>
                  <p className="text-sm text-slate-600">سیستەمێکی بەڕێوەبردن بە Laravel و Tailwind CSS بۆ ڕێکخستنی کارەکان.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <h3 className="font-bold">Smart Arduino System</h3>
                  <p className="text-sm text-slate-600">پڕۆژەیەکی هاردوێر بۆ چاودێریکردنی ژینگە بە بەکارهێنانی سێنسەرەکان.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-10 text-right">
            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">زمانەکانی پڕۆگرامسازی</h2>
              <div className="flex flex-wrap gap-2 justify-end">
                {programmingLanguages.map(lang => (
                  <span key={lang} className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold">{lang}</span>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">ئامرازەکانی وێب</h2>
              <div className="flex flex-wrap gap-2 justify-end">
                {webTools.map(tool => (
                  <span key={tool} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">{tool}</span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-black border-b-2 border-slate-200 mb-4 pb-2 text-emerald-700">خولیاکان</h2>
              <ul className="space-y-2 text-sm font-medium">
                <li>• مۆسیقا (دەف و پیانۆ)</li>
                <li>• سکی سەر بەفر</li>
                <li>• خوێندنەوەی ئاینی</li>
                <li>• قاوە (Latte)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  if (view === 'cv') return <CVPage />;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black bg-gradient-to-l from-emerald-400 to-cyan-500 bg-clip-text text-transparent tracking-tighter cursor-pointer" onClick={() => setView('main')}>
            AHMAD RAMADHAN
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['home', 'about', 'hobbies', 'work', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
              >
                {item === 'home' ? 'سەرەتا' : 
                 item === 'about' ? 'دەربارە' : 
                 item === 'hobbies' ? 'خولیاکان' : 
                 item === 'work' ? 'کارەکان' : 'پەیوەندی'}
              </button>
            ))}
            <button onClick={() => setView('cv')} className="bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 transition-all font-bold">CV</button>
          </div>

          <button className="md:hidden p-2 text-emerald-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0f172a] p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 border-b border-slate-800">
            {['home', 'about', 'hobbies', 'work', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-right py-3 text-lg font-medium border-b border-slate-800/50 last:border-0">
                 {item === 'home' ? 'سەرەتا' : 
                 item === 'about' ? 'دەربارە' : 
                 item === 'hobbies' ? 'خولیاکان' : 
                 item === 'work' ? 'کارەکان' : 'پەیوەندی'}
              </button>
            ))}
            <button onClick={() => setView('cv')} className="text-emerald-400 py-3 text-lg font-bold">بۆ بینینی CV کلیک بکە</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="relative mb-12 group">
          <div className="w-44 h-44 rounded-[2.5rem] border-2 border-emerald-500/20 p-2 relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img 
              src={profileImage} 
              alt="AHMAD RAMADHAN" 
              className="w-full h-full rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -inset-8 bg-emerald-500/5 blur-[80px] rounded-full -z-0"></div>
        </div>
        
        <h1 className="text-1xl md:text-9xl font-black mb-8 tracking-tighter text-white">
          AHMAD RAMADHAN
        </h1>
        <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed mb-14 px-4">
           خوێندکاری کۆمپیوتەر و گەشەپێدەری وێب کە شارەزاییم لە <span className="text-emerald-400 font-bold border-b-2 border-emerald-500/20 pb-1">Laravel</span> هەیە.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => scrollTo('work')} className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-12 py-5 rounded-2xl font-black transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:-translate-y-1">
            بینینی کارەکان
          </button>
          <button onClick={() => setView('cv')} className="bg-slate-800/50 hover:bg-slate-800 text-white px-12 py-5 rounded-2xl font-black border border-slate-700 transition-all flex items-center gap-3">
            ببینە CV <ArrowRight size={20} />
          </button>
        </div>
        <button onClick={() => scrollTo('about')} className="mt-24 animate-bounce text-slate-600 hover:text-emerald-400 transition-colors">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black flex items-center gap-6 text-white">
              <span className="w-16 h-2 bg-emerald-500 rounded-full"></span>
              دەربارەی من
            </h2>
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed text-justify">
              <p>
                من ئەحمەد ڕەمەزانم، وەک گەشەپێدەرێکی پسپۆڕ لە <span className="text-white font-medium italic underline decoration-emerald-500/30 underline-offset-8">Laravel Framework</span>، کار بۆ دروستکردنی سیستەمی زیرەک و مۆدێرن دەکەم.
              </p>
              <p>
                 کارەکەم وەک <span className="text-emerald-400 font-medium">سەرتاش</span> فێری کردووم کە چۆن گرنگییەکی زۆر بە وردەکارییەکان بدەم، چونکە لە دنیای پڕۆگرامسازیشدا هەر وردەکارییەک کاریگەری گەورەی هەیە.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-slate-800 group hover:border-emerald-500/30 transition-all">
                  <Terminal className="text-emerald-400 mb-4" size={32} />
                  <h4 className="font-bold text-white text-lg">گەشەپێدانی وێب</h4>
                  <p className="text-sm text-slate-500">پشت بەستن بە Laravel</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-slate-800 group hover:border-blue-500/30 transition-all">
                  <Cpu className="text-blue-400 mb-4" size={32} />
                  <h4 className="font-bold text-white text-lg">ڕۆبۆتیک</h4>
                  <p className="text-sm text-slate-500">Arduino Systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-12 rounded-[3rem] border border-slate-800/50 space-y-14">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                <Code2 className="text-emerald-400" /> زمانەکانی پڕۆگرامسازی
              </h3>
              <div className="flex flex-wrap gap-4">
                {programmingLanguages.map((skill) => (
                  <div key={skill} className="bg-[#020617] px-6 py-4 rounded-2xl border border-slate-800 flex items-center gap-3 hover:border-emerald-500/50 transition-colors group">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="font-bold text-slate-200 group-hover:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                <Globe className="text-blue-400" /> ئامرازەکانی وێب (Web Tools)
              </h3>
              <div className="flex flex-wrap gap-4">
                {webTools.map((skill) => (
                  <div key={skill} className="bg-[#020617] px-6 py-4 rounded-2xl border border-slate-800 flex items-center gap-3 hover:border-blue-500/50 transition-colors group">
                    <CheckCircle2 size={18} className="text-blue-500" />
                    <span className="font-bold text-slate-200 group-hover:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-32 px-6 bg-[#0f172a]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6">خولیاکانم</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-lg">ئەو شتانەی وزە و ئارامیم پێ دەبەخشن.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-3 group text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-[2rem] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {React.cloneElement(hobby.icon, { size: 40 })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{hobby.name}</h3>
                <p className="text-slate-500 leading-relaxed">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-white mb-20 text-center">پڕۆژەکانم</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group bg-slate-900/30 border border-slate-800 rounded-[3.5rem] overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
            <div className="h-80 bg-slate-800/50 relative flex items-center justify-center group-hover:bg-slate-800 transition-colors">
              <Code2 size={100} className="text-emerald-500/20 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-12">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Hane Management System</h3>
              <p className="text-emerald-400 mb-6 font-bold text-sm tracking-widest uppercase">Laravel Framework Project</p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">سیستەمێکی بەڕێوەبردن بۆ ڕێکخستنی داتا و کارەکان بە شێوازێکی مۆدێرن و پارێزراو.</p>
              <div className="flex gap-4">
                <span className="px-5 py-2 bg-emerald-500/10 rounded-xl text-xs font-black text-emerald-400">LARAVEL</span>
                <span className="px-5 py-2 bg-slate-800 rounded-xl text-xs font-black text-slate-400">TAILWIND</span>
              </div>
            </div>
          </div>
          
          <div className="group bg-slate-900/30 border border-slate-800 rounded-[3.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500">
            <div className="h-80 bg-slate-800/50 relative flex items-center justify-center group-hover:bg-slate-800 transition-colors">
              <Cpu size={100} className="text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-12">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Smart Irrigation System</h3>
              <p className="text-blue-400 mb-6 font-bold text-sm tracking-widest uppercase">Hardware & IoT</p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">سیستەمێکی ئاودێری زیرەک کە بە Arduino کار دەکات بۆ باشتر بەکارهێنانی سەرچاوەکانی ئاو.</p>
              <div className="flex gap-4">
                <span className="px-5 py-2 bg-blue-500/10 rounded-xl text-xs font-black text-blue-400">ARDUINO</span>
                <span className="px-5 py-2 bg-slate-800 rounded-xl text-xs font-black text-slate-400">C++</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-[#020617] rounded-[4rem] p-16 md:p-24 border border-slate-800/50 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px]"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10">پەیوەندی بکە</h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            بۆ هەر پڕۆژەیەک یان پرسیارێک، من هەمیشە ئامادەم بۆ قسەکردن.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left" dir="ltr">
            <a href="mailto:ahmadsmilane@gmail.com" className="bg-slate-900/50 p-8 rounded-3xl flex items-center gap-6 hover:border-emerald-500 border border-slate-800 transition-all group">
              <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors">
                <Mail className="text-emerald-400 group-hover:text-slate-950" />
              </div>
              <span className="font-bold text-lg">ahmadsmilane@gmail.com</span>
            </a>
            <a href="tel:+96407516597959" className="bg-slate-900/50 p-8 rounded-3xl flex items-center gap-6 hover:border-blue-500 border border-slate-800 transition-all group">
              <div className="bg-blue-500/10 p-4 rounded-2xl group-hover:bg-blue-500 transition-colors">
                <Phone className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="font-bold text-lg">+964 751 659 7959</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://wa.me/9647516597959" className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-[2rem] font-black hover:scale-105 transition-transform shadow-xl shadow-green-900/20">
              <MessageCircle size={24} /> WhatsApp
            </a>
            <a href="https://www.instagram.com/ahmaad_rs?igsh=a3hzOTJ1MTJ0MGJy&utm_source=qr" className="flex items-center gap-3 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white px-10 py-5 rounded-[2rem] font-black hover:scale-105 transition-transform shadow-xl shadow-pink-900/20">
              <Instagram size={24} /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <div className="text-white font-black text-2xl mb-4 tracking-tighter">AHMAD RAMADHAN</div>
        <p className="text-slate-600 text-sm mb-2">Developed with Passion, Code & Coffee.</p>
        <p className="text-slate-800 text-xs uppercase tracking-[0.3em]">© 2026 ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default App;