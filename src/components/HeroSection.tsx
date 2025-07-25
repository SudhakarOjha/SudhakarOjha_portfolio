import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Code, Trophy } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import resumeFile from '../assets/documents/Sudhakar_Ojha_Resume.pdf';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const professionTexts = [
    'I am a DevOps Engineer and Cloud Engineer',
    'I build scalable cloud solutions',
    'I automate complex workflows',
    'I create intelligent AI systems'
  ];

  useEffect(() => {
    let textIndex = 0;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText(professionTexts[textIndex]);
        textIndex = (textIndex + 1) % professionTexts.length;
        setIsVisible(true);
      }, 500);
    }, 3000);

    setCurrentText(professionTexts[0]);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-3 sm:px-6 py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 md:col-span-1">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Hello, I am{' '}
              <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent whitespace-nowrap">
                Sudhakar&nbsp;Ojha
              </span>
            </h1>
            <div className="h-12 sm:h-16 flex items-center">
              <p className={`text-lg sm:text-xl md:text-2xl text-blue-200 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {currentText}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={resumeFile}
              download="Sudhakar_Ojha_Resume.pdf"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <span className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-2">
            {/* Subtle animated border ring effect for social buttons */}
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/SudhakarOjha', color: 'bg-black text-white', hover: 'hover:bg-black hover:text-white', tooltip: 'bg-black text-white', ring: 'from-cyan-400 via-cyan-300 to-cyan-500', border: 'border-cyan-400' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudhakar-ojha-66b264258/', color: 'bg-blue-600 text-white', hover: 'hover:bg-blue-600 hover:text-white', tooltip: 'bg-blue-600 text-white', ring: 'from-blue-400 via-blue-300 to-blue-500', border: 'border-blue-400' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 sm:p-4 rounded-full border-4 ${social.border} transition-all duration-300 hover:scale-110 ${social.color} ${social.hover} animate-social-border-pulse`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  {/* Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 mt-2 sm:mt-3 px-2 sm:px-3 py-1 rounded shadow-lg text-xs font-semibold opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-20 ${social.tooltip}`}
                    style={{ bottom: '-2.5rem', whiteSpace: 'nowrap' }}
                  >
                    {social.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* RNA Animation in the middle (desktop only) */}
        <div className="hidden md:flex justify-center items-center h-full md:col-span-1">
          <div className="relative flex flex-col items-center">
            <svg width="80" height="520" viewBox="0 0 80 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-rna-spin">
              {/* Helix left strand */}
              <path d="M30 10 Q10 80 30 150 Q50 220 30 290 Q10 360 30 430 Q50 500 30 510" stroke="#00ffff" strokeWidth="4" fill="none"/>
              {/* Helix right strand */}
              <path d="M50 10 Q70 80 50 150 Q30 220 50 290 Q70 360 50 430 Q30 500 50 510" stroke="#a78bfa" strokeWidth="4" fill="none"/>
              {/* Connecting rungs (more, with circles) */}
              {Array.from({length: 16}).map((_, i) => {
                const y = 35 + i * 30;
                const x1 = 30 + (i % 2 === 0 ? 0 : 20);
                const x2 = 50 - (i % 2 === 0 ? 0 : 20);
                return (
                  <g key={i}>
                    <line
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke="#fff"
                      strokeWidth="2"
                      opacity="0.7"
                    />
                    <circle cx={x1} cy={y} r="4" fill="#00ffff" opacity="0.8" />
                    <circle cx={x2} cy={y} r="4" fill="#a78bfa" opacity="0.8" />
                  </g>
                );
              })}
            </svg>
            <span className="block mt-2 text-xs text-cyan-300 font-mono opacity-60 select-none">RNA Helix</span>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:col-span-1">
          <div className="relative group">
            {/* OUTER LIGHTING BORDER */}
            <div className="absolute -inset-3 sm:-inset-6 z-0 pointer-events-none animate-pulse rounded-2xl border-4 border-blue-400/60 shadow-[0_0_40px_10px_rgba(59,130,246,0.4)]" style={{boxShadow:'0 0 40px 10px rgba(139,92,246,0.3), 0 0 80px 20px rgba(16,185,129,0.2)'}}></div>
            {/* INNER LIGHTING BORDER */}
            <div className="absolute -inset-1 sm:-inset-2 z-10 pointer-events-none rounded-2xl border-2 border-purple-400/80"></div>
            <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 max-w-xs rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 p-1 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-105 relative z-20">
              <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Sudhakar Ojha"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;