import React from 'react';
import { GitBranch, Bot, Building, ExternalLink, Github, Globe } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Sudhakar Ojha Portfolio',
      association: 'Personal Project',
      description: 'A modern, responsive website built with React, TypeScript and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      keyFeatures: ['Responsive design', 'Smooth animation', 'Professional UI'],
      liveDemo: 'https://your-portfolio-url.netlify.app', // Replace with your actual deployed URL
      githubCode: 'https://github.com/SudhakarOjha/portfolio', // Replace with your actual GitHub repo
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
      description: 'Implemented a complete CI/CD pipeline for automated testing, building, and deployment processes using Jenkins and Docker.',
      technologies: ['Javascript', 'Git/GitHub', 'Jenkins', 'Docker', 'CLI', 'AWS EC2'],
      keyFeatures: ['Automated testing & building via Jenkins', 'Pulled code from GitHub SCM', 'Deployed from source to AWS EC2'],
      liveDemo: 'https://your-cicd-pipeline-url.com', // Replace with your actual deployed URL
      githubCode: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_devops-ciabrcd-automation-activity-7348413824892358656-1u0G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs',
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
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
                              
                              <a
                                href={project.githubCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                                  project.title === 'Sudhakar Ojha Portfolio' 
                                    ? 'hover:border-purple-400/50'
                                    : project.title === 'Flask API-CI/CD'
                                    ? 'hover:border-blue-400/50'
                                    : 'hover:border-green-400/50'
                                }`}
                              >
                                {project.title === 'Flask API-CI/CD' || project.title === 'End-to-End Automated CI/CD Pipeline' ? (
                                  <>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    View Post
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
                          {Array.isArray(project.description) ? project.description.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          )) : (
                            <li className="text-gray-300">{project.description}</li>
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