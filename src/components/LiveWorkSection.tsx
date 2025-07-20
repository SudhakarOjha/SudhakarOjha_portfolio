import React, { useState } from 'react';

const TECHNOLOGIES = [
  'Python Automation',
  'DevOps',
  'Gen AI',
  'Cloud Automation',
  'JavaScript Automation',
];

const TASKS: Record<string, Array<{ title: string; description?: string; githubUrl?: string; linkedinUrl?: string }>> = {
  'Python Automation': [
    {
      title: 'Web Scrapping Using Python',
      description: 'Automated data extraction from websites using python scripts.',
      githubUrl: 'https://github.com/SudhakarOjha/AajTak-webScrapping', // Updated with actual repo
    },
    {
      title: 'Send an Email with Python',
      description: 'Used python to successfully send an Email programatically',
      githubUrl: 'https://github.com/SudhakarOjha/Lw_tasks/blob/main/send-email.py', // Updated with actual repo
    },
    {
      title: 'Send an SMS with python',
      description: 'Sent a text message using python and an SMS gateway/API',
      githubUrl: 'https://github.com/SudhakarOjha/Lw_tasks/blob/main/SEND-SMS-python.py', // Updated with actual repo
    },
    {
      title: 'Make a phone call with python',
      description: 'Used python to make a phone call using text-to-voice API.',
      githubUrl: 'https://github.com/yourusername/make-phone-call-python', // Replace with your actual repo
    },
    {
      title: 'Post on Instagram With Python',
      description: 'Post a message and images on instagram using python automation',
      githubUrl: 'https://github.com/yourusername/post-instagram-python', // Replace with your actual repo
    },
    {
      title: 'Menu-driven python project',
      description: 'A menu driven python program that combines all automation tasks in to a single interface',
      githubUrl: 'https://github.com/yourusername/menu-driven-python', // Replace with your actual repo
    },
  ],
  'JavaScript Automation': [
    {
      title: 'Take photo using JavaScript or API',
      description: 'Create a JavaScript function to access the webcam and capture a photo',
      githubUrl: 'https://github.com/yourusername/js-take-photo', // Replace with your actual repo
    },
    {
      title: 'Send Email using JavaScript or API',
      description: 'Used EmailJS or a backend API to send email through a JavaScript based interface',
      githubUrl: 'https://github.com/yourusername/js-send-email', // Replace with your actual repo
    },
    {
      title: 'Send Whatsapp message using JavaScript',
      description: 'Use whatsapp web URL scheme or API to initiate  a whatsapp message from JS',
      githubUrl: 'https://github.com/yourusername/js-send-whatsapp', // Replace with your actual repo
    },
    {
      title: 'Open the camera, click a photo & download it',
      description: 'A JavaScript project to acces the camera , capture a photo and enable download',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
    {
      title: 'Send mails using JS',
      description: 'Send emails programmatically using JavaScript',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
    {
      title: 'check nearest grocery stores',
      description: 'A JavaScript feature to find and display the nearest grocery stores ',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
    {
      title: 'Run Google Map inside a project ',
      description: 'Integrate google map into a javascript project for enhanced location features',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
    {
      title: 'Fetch and show current location (latitude - longitude)',
      description: "Use JavaScript to fetch and display the user's current latitude and longitude",
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
    {
      title: 'Brower activity tracker',
      description: 'A browser activity tracker that monitors user behavior and recommends content.',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with your actual LinkedIn post/profile
    },
  ],
  'DevOps': [
    {
      title: 'Automated CI/CD Pipeline',
      description: 'A CI/CD pipeline project using Jenkins, Docker and GitHub.',
      linkedinUrl: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_devops-ciabrcd-jenkins-activity-7350205779590696961-nP37?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs',
    },
    {
      title: 'Docker in Docker',
      description: 'Experimented with running Docker inside Docker and creating custom images.',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with actual LinkedIn post if available
    },
    {
      title: 'Apache server setup',
      description: 'Set up Apache server inside Docker for DevOps automation',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with actual LinkedIn post if available
    },
    {
      title: 'VLC in Docker',
      description: 'Deployed VLC media player in a Docker container with GUI support.',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with actual LinkedIn post if available
    },
  ],
  'Gen AI': [
    {
      title: 'Gemini Expert Advisor',
      description: 'Built a custom Gen AI project using Gemini 2.5 flash model and Gradio for multi-domain advice.',
      linkedinUrl: 'https://www.linkedin.com/posts/sudhakar-ojha-66b264258_linuxworld-vimaldaga-promptengineering-activity-7347689335510454273-rQhb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9l3LMBP8OTGlFx7qY7e3Wc_QaQJ_cqcXs', // Updated with actual LinkedIn post
      githubUrl: 'https://github.com/SudhakarOjha/personality_developer_GenAI_API_gradio', // Updated with actual repo
    },
    {
      title: 'News info Gemini (made with Gen AI + Web Scrapping)',
      description: 'A Gen AI-powered project for News informaton using Gemini API and web scrapping.',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with actual LinkedIn post if available
      githubUrl: 'https://github.com/SudhakarOjha/AajTak-webScrapping/blob/main/AajTak-webScrapping.py', // Updated with actual repo
    },
  ],
  'Cloud Automation': [
    {
      title: 'Launching instances from python code',
      description: 'Automated cloud instance launch using python.',
      linkedinUrl: 'https://www.linkedin.com/in/your-linkedin-profile/', // Replace with actual LinkedIn post if available
    },
  ],
};

// Add a function to get color classes for each technology
const getTaskBg = (tech: string) => {
  switch (tech) {
    case 'Python Automation':
      return 'bg-gradient-to-br from-emerald-200/70 via-green-100/70 to-emerald-50/80';
    case 'JavaScript Automation':
      return 'bg-gradient-to-br from-yellow-100/80 via-orange-100/70 to-yellow-50/80';
    case 'DevOps':
      return 'bg-gradient-to-br from-blue-100/80 via-cyan-100/70 to-blue-50/80';
    case 'Gen AI':
      return 'bg-gradient-to-br from-purple-100/80 via-pink-100/70 to-purple-50/80';
    case 'Cloud Automation':
      return 'bg-gradient-to-br from-indigo-100/80 via-teal-100/70 to-indigo-50/80';
    default:
      return 'bg-gray-100/80';
  }
};

const getTitleDot = (tech: string) => {
  switch (tech) {
    case 'Python Automation':
      return 'bg-emerald-500';
    case 'JavaScript Automation':
      return 'bg-yellow-400';
    case 'DevOps':
      return 'bg-blue-500';
    case 'Gen AI':
      return 'bg-purple-500';
    case 'Cloud Automation':
      return 'bg-indigo-500';
    default:
      return 'bg-gray-400';
  }
};

const LiveWorkSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>(TECHNOLOGIES[0]);

  // Scroll to the section when a tech button is clicked
  const handleTechClick = (tech: string) => {
    setSelectedTech(tech);
    const section = document.getElementById(`tech-section-${tech.replace(/\s+/g, '-')}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="livework" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top line */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 opacity-70" />
        </div>
        {/* Title */}
        <div className="flex items-center">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 opacity-70 mr-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-0 whitespace-nowrap">
            Live Work @ <span className="text-pink-400">LinuxWorld Informatics Pvt Ltd</span>
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 opacity-70 ml-4" />
        </div>
        {/* Bottom line */}
        <div className="flex items-center mt-6 mb-8">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 opacity-70" />
        </div>
        {/* Tagline */}
        <p className="text-lg mt-4 mb-8">
          Ongoing tasks and projects during my internship at LinuxWorld Informatics Pvt Ltd. This section updated regularly with my latest work and learning outcomes.
        </p>
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-20 flex flex-wrap justify-center gap-2 md:gap-4 mb-8 bg-gray-900/80 py-2 rounded-xl shadow-lg">
          {TECHNOLOGIES.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTechClick(tech)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 border-2 focus:outline-none whitespace-nowrap
                ${selectedTech === tech
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-400 shadow-lg scale-105'
                  : 'bg-white/10 text-pink-200 border-pink-400/30 hover:bg-pink-400/20 hover:text-white'}
              `}
            >
              {tech}
            </button>
          ))}
        </nav>
        {/* Render all tech sections as lists with anchor ids */}
        <div className="space-y-16">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech} id={`tech-section-${tech.replace(/\s+/g, '-')}`} className="scroll-mt-32">
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Tasks Completed in {tech}</h3>
              {TASKS[tech].length === 0 ? (
                <div className="text-gray-400 italic">No tasks added yet for this technology.</div>
              ) : (
                <ul className="list-disc list-inside text-left space-y-4 text-gray-200">
                  {TASKS[tech].map((task, idx) => (
                    <li key={idx} className={`relative rounded-lg p-4 ${getTaskBg(tech)}`}>
                      {/* Action buttons in top right, flex row if both exist */}
                      {(task.githubUrl || task.linkedinUrl) && (
                        <div className="absolute top-4 right-4 flex flex-row gap-2 z-10">
                          {task.githubUrl && (
                            <a
                              href={task.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium text-sm shadow hover:scale-105 transition-transform duration-200"
                            >
                              View Code on GitHub
                            </a>
                          )}
                          {task.linkedinUrl && (
                            <a
                              href={task.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium text-sm shadow hover:scale-105 transition-transform duration-200"
                            >
                              View on Linkedin
                            </a>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-2 mt-1 mb-1">
                        <span className={`w-3 h-3 rounded-full ${getTitleDot(tech)}`}></span>
                        <span className="text-lg font-extrabold text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-400">
                          {task.title}
                        </span>
                      </div>
                      {task.description && (
                        <div className="text-base font-bold text-gray-800 mt-2 ml-1 pr-36">
                          {task.description}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveWorkSection; 