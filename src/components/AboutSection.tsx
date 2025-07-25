import React from 'react';
import { Lightbulb, Rocket, BookOpen, ArrowUp, ArrowDown } from 'lucide-react';

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
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4">
            {/* Left vertical arrows */}
            <div className="flex flex-col items-center">
              <ArrowUp className="w-8 h-8 animate-bounce text-pink-400 drop-shadow-[0_0_8px_#f472b6]" />
              <ArrowDown className="w-8 h-8 animate-pulse text-blue-400 drop-shadow-[0_0_8px_#60a5fa]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mx-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">About Me</h2>
            {/* Right vertical arrows */}
            <div className="flex flex-col items-center">
              <ArrowUp className="w-8 h-8 animate-bounce text-green-400 drop-shadow-[0_0_8px_#34d399]" />
              <ArrowDown className="w-8 h-8 animate-pulse text-purple-400 drop-shadow-[0_0_8px_#a78bfa]" />
            </div>
          </div>
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
            <div className="relative bg-gradient-to-br from-[#18181b]/80 via-[#23272f]/80 to-[#0a0a0a]/80 rounded-2xl p-8 border-2 border-cyan-400/40 shadow-lg overflow-hidden animate-about-fade-in">
              {/* Neon border effect */}
              <div className="pointer-events-none absolute -inset-1.5 rounded-2xl border-2 border-cyan-400 opacity-40 blur-[3px] animate-neon-blink z-0"></div>
              {/* Shimmer animation */}
              <div className="pointer-events-none absolute left-0 top-0 w-full h-full z-10 animate-about-shimmer" style={{background: 'linear-gradient(120deg, transparent 60%, rgba(0,255,255,0.08) 80%, transparent 100%)'}}></div>
              <div className="relative z-20">
                <p className="text-lg md:text-xl text-cyan-100 font-medium leading-relaxed font-mono animate-fade-in">
                  I'm an aspiring software engineer currently pursuing academics in Computer Science and Engineering.<br/>
                  With a strong foundation in DevOps, Cloud, and Applied Machine Learning, I thrive on building real-world applications that make a difference.
                </p>
                <p className="text-lg md:text-xl text-cyan-100 font-medium leading-relaxed font-mono mt-4 animate-fade-in delay-200">
                  From voice bots to AI agents, I enjoy creating intelligent solutions that solve complex problems.<br/>
                  My passion for automation drives me to build systems that not only work efficiently but also continuously improve themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Feature boxes */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-visible ${getColorClasses(feature.color)}`}
              >
                {/* Neon border background */}
                <div
                  className={`absolute -inset-1.5 -z-10 rounded-2xl pointer-events-none blur-sm opacity-60 animate-pulse`}
                  style={{
                    background: feature.color === 'blue'
                      ? 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)'
                      : feature.color === 'green'
                      ? 'linear-gradient(90deg, #22d3ee 0%, #22c55e 100%)'
                      : 'linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)',
                    border: '2px solid transparent',
                  }}
                ></div>
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