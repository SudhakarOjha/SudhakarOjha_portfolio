import React from 'react';
import { Lightbulb, Rocket, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Building cutting-edge AI agents and automation tools that streamline complex workflows and enhance user experiences.',
      color: 'blue'
    },
    {
      icon: Rocket,
      title: 'Passion Projects',
      description: 'From geospatial analysis tools to voice AI systems, I love tackling diverse challenges that push the boundaries of technology.',
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies to stay at the forefront of AI/ML and software development.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'hover:border-blue-400 hover:shadow-blue-400/20',
      green: 'hover:border-green-400 hover:shadow-green-400/20',
      purple: 'hover:border-purple-400 hover:shadow-purple-400/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-blue-200">
            Driven by{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold animate-pulse">
                curiosity
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></span>
            </span>
            {' '}and powered by code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an aspiring software engineer currently pursuing academics in AI and Robotics. 
                With a strong foundation in DevOps, Cloud, and Applied Machine Learning, I thrive on 
                building real-world applications that make a difference.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                From voice bots to AI agents, I enjoy creating intelligent solutions that solve complex problems. 
                My passion for automation drives me to build systems that not only work efficiently but also 
                continuously improve themselves.
              </p>
            </div>
          </div>

          {/* Right side - Feature boxes */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${getColorClasses(feature.color)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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

export default AboutSection;