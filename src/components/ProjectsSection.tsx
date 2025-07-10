import React from 'react';
import { GitBranch, Bot, Building } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'End-to-End Automated CI/CD Pipeline',
      association: 'LinuxWorld Informatics Pvt Ltd',
      description: [
        'Automated testing & building via Jenkins',
        'Pulled code from GitHub SCM',
        'Deployed from source to AWS EC2'
      ],
      icon: GitBranch,
      color: 'blue'
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
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-400 bg-blue-400/10',
      green: 'border-green-400 bg-green-400/10'
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-green-400"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="relative flex gap-8 group">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${getColorClasses(project.color)} group-hover:scale-110 transition-all duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Project content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    
                    <div className="flex items-center gap-2 text-blue-300">
                      <Building className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.association}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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