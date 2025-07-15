import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'Cloud Mastery Training and Internship Program',
      issuer: 'EXLEARN TECHNOLOGIES',
      date: '2025',
      description: 'Foundational knowledge of Cloud services and best practices',
      url: 'https://credsverse.com/credentials/05d48ef6-2f04-44bb-b26b-be34a18417c5'
    },
    {
      title: 'DSA Bootcamp',
      issuer: 'SELDOM INDIA TECHNOLOGIES',
      date: '2024',
      description: 'Learn about core concept of Data Structure of Algorithm',
      url: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_i-am-on-my-way-to-upskill-my-skills-and-earn-activity-7181244303246077953-J_F5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs'
    },
    {
      title: 'AI Builders Lab',
      issuer: 'Google for Developers and Hack2Skill',
      date: '2024',
      url: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_google-h2s-artificial-activity-7260999268033810432-si4x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs',
      description: 'Gained knowledge about AI tools'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative flex flex-col items-center justify-center py-8">
            {/* Laurel wreath SVG background */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-20 z-0 opacity-60" viewBox="0 0 176 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,70 Q40,10 88,40 Q136,10 166,70" stroke="#fbbf24" strokeWidth="6" fill="none"/>
              <path d="M20,70 Q45,30 88,50 Q131,30 156,70" stroke="#34d399" strokeWidth="4" fill="none"/>
            </svg>
            {/* Sparkles */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <span key={i} className={`absolute w-2 h-2 rounded-full bg-yellow-200 opacity-80 animate-pulse`} style={{left:`${15+Math.random()*70}%`,top:`${20+Math.random()*60}%`,animationDelay:`${i*0.3}s`}}></span>
              ))}
            </div>
            {/* Award icon with shimmer */}
            <div className="flex items-center gap-3 z-10">
              <span className="relative flex items-center">
                <Award className="w-10 h-10 text-yellow-400 animate-bounce" />
                <span className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-2 bg-gradient-to-r from-yellow-200 via-white to-emerald-300 blur-md opacity-80 animate-shimmer" style={{zIndex:-1}}></span>
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_16px_#fbbf24] tracking-wide bg-gradient-to-r from-yellow-400 via-emerald-300 to-white bg-clip-text text-transparent animate-shine">Certificates</h2>
            </div>
          </div>
          <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-emerald-300 to-pink-400 bg-clip-text text-transparent animate-shine mt-2">
            Celebrating milestones of achievement and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-200/60 hover:border-blue-400/80 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-300 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  {cert.description && (
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/40 border-2 border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300 animate-glow"
                      style={{ boxShadow: '0 0 16px 4px #22d3ee, 0 0 32px 8px #38bdf8' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-bold tracking-wide">View Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;