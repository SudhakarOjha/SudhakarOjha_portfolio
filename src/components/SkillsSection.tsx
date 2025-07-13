import React from 'react';
import { Code, Cloud, Brain, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'Javascript', proficiency: 85 },
        { name: 'Bash Scripting', proficiency: 80 },
        { name: 'YAML', proficiency: 85 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      skills: [
        { name: 'Docker', proficiency: 80 },
        { name: 'Kubernetes', proficiency: 88 },
        { name: 'Jenkins', proficiency: 95 },
        { name: 'AWS Cloud', proficiency: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'LangChain', proficiency: 80 },
        { name: 'Gemini AI', proficiency: 82 },
        { name: 'Streamlit', proficiency: 85 },
        { name: 'AI Agents', proficiency: 92 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      skills: [
        { name: 'Git', proficiency: 95 },
        { name: 'GitHub Actions', proficiency: 88 },
        { name: 'Linux', proficiency: 92 },
        { name: 'REST APIs', proficiency: 85 }
      ]
    }
  ];

  const allTechnologies = [
    'Python', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'LangChain', 'Gemini', 
    'Streamlit', 'Linux', 'Bash', 'AWS Cloud', 'GitHub Actions', 'REST APIs', 
    'YAML', 'DevOps', 'AI Agents', 'Cloud Native', 'CI/CD'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Skills & Expertise Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-blue-200">
            A comprehensive toolkit for modern development, deployment and AI integration
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group ${category.bgColor} ${category.borderColor} border-2 rounded-xl p-6 hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-white font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies I Master Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Technologies I </span>
            <span className="text-yellow-400">Master</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 