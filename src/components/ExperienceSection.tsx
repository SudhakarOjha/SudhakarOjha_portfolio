import React from 'react';
import { MapPin, Zap } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'LinuxWorld Informatics Pvt Ltd',
      role: 'Cloud Intern',
      location: 'Jaipur, Rajasthan',
      achievements: [
        'Built an automated end-to-end pipeline for continuous delivery',
        'Learned to work with diverse technologies',
        'Integrated ML and web development'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub'],
      highlightWord: 'World'
    },
    {
      company: 'CodeAlpha',
      role: 'Cloud Intern',
      location: 'Lucknow, Uttar Pradesh',
      achievements: [
        'Contributed to assigned tasks',
        'Worked with frontend development team',
        'Learned API key usage and client integration'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      highlightWord: 'Alpha'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-blue-200">
            Building innovative solutions and driving automated impact
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.company.split(exp.highlightWord)[0]}
                    <span className="group-hover:animate-pulse inline-flex items-center gap-1 text-yellow-400">
                      <Zap className="w-5 h-5" />
                      {exp.highlightWord}
                    </span>
                    {exp.company.split(exp.highlightWord)[1]}
                  </h3>
                  
                  <div className="group-hover:underline group-hover:scale-105 transition-all duration-300 inline-block">
                    <h4 className="text-xl font-semibold text-blue-400">{exp.role}</h4>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <div className="group-hover:animate-pulse border-2 border-transparent group-hover:border-blue-400 rounded-lg p-4 bg-white/5 transition-all duration-300">
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;