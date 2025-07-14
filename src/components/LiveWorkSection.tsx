import React, { useState } from 'react';

const TECHNOLOGIES = [
  'Python Automation',
  'JavaScript Automation',
  'DevOps',
  'Gen AI',
  'Cloud Automation',
];

const TASKS: Record<string, Array<{ title: string; description?: string; githubUrl?: string; linkedinUrl?: string }>> = {
  'Python Automation': [
    {
      title: 'Web Scrapping Using Python',
      description: 'Automated data extraction from websites using python scripts.',
      githubUrl: 'https://github.com/yourusername/web-scraping-python', // Replace with your actual repo
    },
    {
      title: 'Send an Email with Python',
      description: 'Used python to successfully send an Email programatically',
      githubUrl: 'https://github.com/yourusername/send-email-python', // Replace with your actual repo
    },
    {
      title: 'Send an SMS with python',
      description: 'Sent a text message using python and an SMS gateway/API',
      githubUrl: 'https://github.com/yourusername/send-sms-python', // Replace with your actual repo
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
  'DevOps': [],
  'Gen AI': [],
  'Cloud Automation': [],
};

const LiveWorkSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>(TECHNOLOGIES[0]);
  const tasks = TASKS[selectedTech];

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
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 overflow-x-auto scrollbar-hide">
          {TECHNOLOGIES.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
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
        {/* Tasks List */}
        <div className="bg-gray-900/80 rounded-xl p-6 shadow-lg max-w-2xl mx-auto relative">
          <h3 className="text-2xl font-bold text-pink-300 mb-4">Tasks Completed in {selectedTech}</h3>
          {tasks.length === 0 ? (
            <div className="text-gray-400 italic">No tasks added yet for this technology.</div>
          ) : (
            <ul className="list-disc list-inside text-left space-y-4 text-gray-200">
              {tasks.map((task, idx) => (
                <li key={idx} className="relative bg-gray-800/80 rounded-lg p-4">
                  {/* GitHub or LinkedIn button in top right */}
                  {task.githubUrl && (
                    <a
                      href={task.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium text-sm shadow hover:scale-105 transition-transform duration-200 z-10"
                    >
                      View Code on GitHub
                    </a>
                  )}
                  {task.linkedinUrl && (
                    <a
                      href={task.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium text-sm shadow hover:scale-105 transition-transform duration-200 z-10"
                    >
                      View on Linkedin
                    </a>
                  )}
                  <span className="font-semibold block pr-36">{task.title}</span>
                  {task.description && (
                    <div className="text-gray-400 text-sm mt-1 ml-1 pr-36">{task.description}</div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveWorkSection; 