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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hello, I am{' '}
              <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Sudhakar Ojha
              </span>
            </h1>
            
            <div className="h-16 flex items-center">
              <p className={`text-xl md:text-2xl text-blue-200 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {currentText}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={resumeFile}
              download="Sudhakar_Ojha_Resume.pdf"
              className="group relative px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <span className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/SudhakarOjha', color: 'bg-black text-white', hover: 'hover:bg-black hover:text-white', tooltip: 'bg-black text-white' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudhakar-ojha-66b264258/', color: 'bg-blue-600 text-white', hover: 'hover:bg-blue-600 hover:text-white', tooltip: 'bg-blue-600 text-white' },
              // { icon: Code, label: 'LeetCode', url: 'https://leetcode.com/u/sudhakarojha19/', color: 'bg-orange-400 text-white', hover: 'hover:bg-orange-400 hover:text-white', tooltip: 'bg-orange-400 text-white' },
              // { icon: Trophy, label: 'HackerRank', url: 'https://www.hackerrank.com/profile/sudhakarojha19', color: 'bg-green-600 text-white', hover: 'hover:bg-green-600 hover:text-white', tooltip: 'bg-green-600 text-white' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 ${social.color} ${social.hover}`}
              >
                <social.icon className="w-6 h-6" />
                {/* Tooltip */}
                <div className={`absolute left-1/2 -translate-x-1/2 mt-3 px-3 py-1 rounded shadow-lg text-xs font-semibold opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-20 ${social.tooltip}`}
                  style={{ bottom: '-2.5rem', whiteSpace: 'nowrap' }}
                >
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* OUTER LIGHTING BORDER */}
            <div className="absolute -inset-6 z-0 pointer-events-none animate-pulse rounded-2xl border-4 border-blue-400/60 shadow-[0_0_40px_10px_rgba(59,130,246,0.4)]" style={{boxShadow:'0 0 40px 10px rgba(139,92,246,0.3), 0 0 80px 20px rgba(16,185,129,0.2)'}}></div>
            {/* INNER LIGHTING BORDER */}
            <div className="absolute -inset-2 z-10 pointer-events-none rounded-2xl border-2 border-purple-400/80"></div>
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 p-1 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-105 relative z-20">
              <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Sudhakar Ojha"
                  className="w-full h-full object-cover"
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