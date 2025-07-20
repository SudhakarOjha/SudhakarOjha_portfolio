import React from 'react';
import { GitBranch, Bot, Building, ExternalLink, Github, Globe, Rocket } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Sudhakar Ojha Portfolio',
      association: 'Personal Project',
      description: 'A modern, responsive website built with React, TypeScript and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      keyFeatures: ['Responsive design', 'Smooth animation', 'Professional UI'],
      liveDemo: 'https://your-portfolio-url.netlify.app', // Replace with your actual deployed URL
      githubCode: 'https://github.com/SudhakarOjha/SudhakarOjha_portfolio', // Updated GitHub repo URL
      icon: Globe,
      color: 'purple',
      gradientBorder: 'from-purple-400 via-pink-400 to-purple-600'
    },
    {
      title: 'Flask API-CI/CD',
      association: 'Personal Project',
      description: 'Implemented a CI/CD pipeline using Jenkins, Docker, and GitHub for automated build, test and deployment processes.',
      technologies: ['Flask', 'Python', 'Git/GitHub', 'Jenkins', 'Docker', 'Command Line Interface'],
      keyFeatures: ['Automated Testing & Building via Jenkins', 'Pulled code from GitHub SCM', 'Docker Containerization'],
      liveDemo: 'https://your-flask-api-url.com', // Replace with your actual deployed URL
      githubCode: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_devops-ciabrcd-jenkins-activity-7350205779590696961-nP37?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs',
      icon: GitBranch,
      color: 'blue',
      gradientBorder: 'from-blue-400 via-cyan-400 to-blue-600'
    },
    {
      title: 'End-to-End Automated CI/CD Pipeline',
      association: 'LinuxWorld Informatics Pvt Ltd',
      description: 'A CI/CD pipeline project using Jenkins, Docker and GitHub.',
      technologies: ['Javascript', 'Git/GitHub', 'Jenkins', 'Docker', 'CLI', 'AWS EC2'],
      keyFeatures: ['Automated testing & building via Jenkins', 'Pulled code from GitHub SCM', 'Deployed from source to AWS EC2'],
      liveDemo: 'https://your-cicd-pipeline-url.com', // Replace with your actual deployed URL
      githubCode: 'https://github.com/SudhakarOjha/CodeAlpha_LibraryManagement', // Updated GitHub repo URL
      icon: GitBranch,
      color: 'green',
      gradientBorder: 'from-green-400 via-emerald-400 to-green-600'
    },
    {
      title: 'AI Assistant – Personality Developer Coach',
      association: 'LinuxWorld Informatics Pvt Ltd',
      description: [
        'Built with Gemini 2.5 API',
        'Assigned system role to provide guided help to users',
        'Integrated natural language processing for personalized coaching'
      ],
      technologies: ['Gemini 2.5 API', 'Python', 'Prompt Engineering', 'Gradio'],
      keyFeatures: [
        'Conversational AI with Gemini 2.5',
        'Personalized coaching via system role',
        'Natural language understanding',
        'Seamless integration with DevOps tools'
      ],
      githubCode: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_linuxworld-vimaldaga-promptengineering-activity-7347689335510454273-rQhb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs',
      githubRepo: 'https://github.com/SudhakarOjha/personality_developer_GenAI_API_gradio',
      icon: Bot,
      color: 'orange',
      gradientBorder: 'from-orange-400 via-red-400 to-orange-600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-400 bg-blue-400/10',
      green: 'border-green-400 bg-green-400/10',
      purple: 'border-purple-400 bg-purple-400/10',
      orange: 'border-orange-400 bg-orange-400/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative flex flex-col items-center justify-center py-8">
            {/* Animated stars/particles background */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <span key={i} className={`absolute w-1 h-1 rounded-full bg-yellow-300 opacity-70 animate-pulse`} style={{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*80}%`,animationDelay:`${i*0.2}s`}}></span>
              ))}
            </div>
            {/* Rocket launch icon with comet tail */}
            <div className="flex items-center gap-3 z-10">
              <span className="relative flex items-center">
                <Rocket className="w-10 h-10 text-orange-400 animate-bounce" />
                <span className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 blur-md opacity-80 animate-comet" style={{zIndex:-1}}></span>
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_16px_#fbbf24] tracking-wide bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Projects</h2>
            </div>
          </div>
          <p className="text-xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent animate-pulse mt-2">
            Launching ideas into reality, one project at a time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${getColorClasses(project.color)} group-hover:scale-110 transition-all duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Project content with gradient neon border */}
                <div className={`flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-8 border-[0.25px] border-transparent bg-gradient-to-r ${project.gradientBorder} bg-clip-border hover:scale-105 transition-all duration-300 relative`}>
                  {/* Inner content with dark background */}
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 -m-0.25">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      
                      <div className="flex items-center gap-2 text-blue-300">
                        <Building className="w-4 h-4" />
                        <span className="text-sm font-medium">{project.association}</span>
                      </div>
                      
                      {/* Portfolio specific layout */}
                      {project.title === 'Sudhakar Ojha Portfolio' || project.title === 'Flask API-CI/CD' || project.title === 'End-to-End Automated CI/CD Pipeline' ? (
                        <div className="space-y-6">
                          {Array.isArray(project.description) ? (
                            <ul className="space-y-2">
                              {project.description.map((item, i) => (
                                <li key={i} className="text-gray-300 flex items-start gap-2">
                                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                    project.title === 'Sudhakar Ojha Portfolio' ? 'bg-purple-400' : 
                                    project.title === 'Flask API-CI/CD' ? 'bg-blue-400' : 'bg-green-400'
                                  }`}></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-300 text-lg">{project.description}</p>
                          )}
                          
                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((tech, i) => (
                                <span
                                  key={i}
                                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 ${
                                    project.title === 'Sudhakar Ojha Portfolio' 
                                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30'
                                      : project.title === 'Flask API-CI/CD'
                                      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30'
                                      : 'bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30'
                                  } hover:scale-105`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features and Buttons */}
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="flex-1 space-y-2">
                              <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                              <ul className="space-y-1">
                                {project.keyFeatures?.map((feature, i) => (
                                  <li key={i} className="text-gray-300 flex items-start gap-2">
                                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                      project.title === 'Sudhakar Ojha Portfolio' ? 'bg-purple-400' : 
                                      project.title === 'Flask API-CI/CD' ? 'bg-blue-400' : 'bg-green-400'
                                    }`}></span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 lg:flex-shrink-0">
                              {/*
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                                  project.title === 'Sudhakar Ojha Portfolio'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/25'
                                    : project.title === 'Flask API-CI/CD'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25'
                                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 hover:shadow-green-500/25'
                                }`}
                              >
                                <Globe className="w-4 h-4" />
                                Live Demo
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                              */}
                              {/* Add View on LinkedIn button for End-to-End Automated CI/CD Pipeline */}
                              {project.title === 'End-to-End Automated CI/CD Pipeline' && (
                                <a
                                  href={project.githubCode}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-center gap-2 px-6 py-3 bg-blue-600/90 border border-blue-400/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700/90 hover:border-blue-500/70 shadow-lg"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                  View on LinkedIn
                                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                              )}
                              
                              <a
                                href={project.githubCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-2 px-6 py-3 
                                    ${project.title === 'Flask API-CI/CD' 
                                      ? 'bg-blue-600/90 border border-blue-400/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700/90 hover:border-blue-500/70 shadow-lg' 
                                      : 'bg-white/10 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 ' + (project.title === 'Sudhakar Ojha Portfolio' ? 'hover:border-purple-400/50' : 'hover:border-green-400/50')
                                    }`}
                                >
                                {project.title === 'End-to-End Automated CI/CD Pipeline' ? (
                                  <>
                                    <Github className="w-4 h-4" />
                                    View on GitHub
                                  </>
                                ) : project.title === 'Flask API-CI/CD' ? (
                                  <>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    View on LinkedIn
                                  </>
                                ) : (
                                  <>
                                    <Github className="w-4 h-4" />
                                    View Code
                                  </>
                                )}
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Regular project layout */
                        <ul className="space-y-2">
                          {project.title === 'AI Assistant – Personality Developer Coach' && (
                            <div className="absolute right-6 bottom-6 flex flex-col gap-3 z-20">
                              <a
                                href={project.githubCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 bg-blue-600/90 border border-blue-400/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700/90 hover:border-blue-500/70 shadow-lg"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                View on LinkedIn
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                              <a
                                href={project.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:border-orange-400/50"
                              >
                                <Github className="w-4 h-4" />
                                View on GitHub
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          )}
                          {project.title === 'AI Assistant – Personality Developer Coach' ? null : (
                            Array.isArray(project.description) ? (
                              <ul className="space-y-2">
                                {project.description.map((item, i) => (
                                  <li key={i} className="text-gray-300 flex items-start gap-2">
                                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                      project.title === 'Sudhakar Ojha Portfolio' ? 'bg-purple-400' : 
                                      project.title === 'Flask API-CI/CD' ? 'bg-blue-400' : 'bg-green-400'
                                    }`}></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <li className="text-gray-300">{project.description}</li>
                            )
                          )}
                          {/* Technologies for Personality Developer Coach */}
                          {project.technologies && (
                            <div className="space-y-2 mt-4">
                              <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-sm font-medium border border-orange-400/30 bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 hover:scale-105 transition-all duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Key Features for Personality Developer Coach */}
                          {project.keyFeatures && (
                            <div className="space-y-2 mt-4">
                              <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                              <ul className="space-y-1">
                                {project.keyFeatures.map((feature, i) => (
                                  <li key={i} className="text-gray-300 flex items-start gap-2">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;