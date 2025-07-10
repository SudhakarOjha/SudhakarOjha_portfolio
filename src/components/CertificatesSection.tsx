import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Foundational knowledge of AWS cloud services and best practices'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2024',
      description: 'Container orchestration and deployment expertise'
    },
    {
      title: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      description: 'Advanced Kubernetes cluster management and administration'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-xl text-blue-200">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-300 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                  <button className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Certificate</span>
                  </button>
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