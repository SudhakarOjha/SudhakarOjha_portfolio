import React from 'react';
import { MapPin, Zap, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'LinuxWorld Informatics Pvt Ltd',
      role: 'Cloud Intern',
      location: 'Jaipur, Rajasthan',
      duration: 'June 2025 - August 2025',
      achievements: [
        'Built an automated end-to-end pipeline for continuous delivery',
        'Learned to work with diverse technologies',
        'Integrated ML and web development'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub'],
      highlightWord: 'World',
      borderColor: 'border-green-400'
    },
    {
      company: 'CodeAlpha',
      role: 'Web development Project Intern',
      location: 'Lucknow, Uttar Pradesh',
      duration: 'April 2024 - July 2024',
      achievements: [
        'Contributed to assigned tasks',
        'Worked with frontend development team',
        'Learned API key usage and client integration'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      highlightWord: 'Alpha',
      borderColor: 'border-yellow-400'
    },
    {
      company: 'Learn&Build',
      role: 'AWS Cloud Intern',
      location: 'Jaipur',
      duration: 'July 2024 - August 2024',
      achievements: [
        'Worked on AWS services like EC2 and S3 and Relational database service',
        'Learn to integrate the services with automation tools',
        'Contribute in CICD project'
      ],
      technologies: ['Jenkins', 'Docker', 'AWS CLI', 'EC2', 'S3', 'RDS', 'Git&GitHub'],
      highlightWord: 'Learn',
      borderColor: 'border-red-400'
    },
    {
      company: 'Learn&Build',
      role: 'Java Trainee',
      location: 'Jaipur',
      duration: 'July 2023',
      achievements: [
        'Understand the Object Oriented Programming concept',
        'Complete the individual tasks(ex - Hangman game, Guess the number etc)',
        'Enhance knowledge of java basic'
      ],
      technologies: ['Java OOPs'],
      highlightWord: 'Learn',
      borderColor: 'border-red-800'
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
            <div key={index} className={`group bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 ${exp.borderColor} hover:scale-105 transition-all duration-300`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2 space-y-4">
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
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300"
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