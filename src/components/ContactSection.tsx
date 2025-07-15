import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      // Using Formspree - a free email service
      const response = await fetch('https://formspree.io/f/xrblgbqn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative flex flex-col items-center justify-center py-8">
            {/* Radiating signal circles background */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`absolute rounded-full border-2 border-pink-400 opacity-30 animate-signal`} style={{width:`${6+4*i}rem`,height:`${6+4*i}rem`,animationDelay:`${i*0.5}s`}}></span>
              ))}
            </div>
            {/* Mail icon with wave */}
            <div className="flex items-center gap-3 z-10">
              <span className="relative flex items-center">
                <Mail className="w-10 h-10 text-purple-400 animate-wave" />
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_16px_#a78bfa] tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent animate-ripple">Contact</h2>
            </div>
          </div>
          <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent animate-ripple mt-2">
            Let’s connect and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:sudhakarojha19@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    sudhakarojha19@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a 
                    href="tel:+919057892972" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    +91 9057892972
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/i_sudhakar_07?igsh=MWVqdmN0dXhmeDBmdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://x.com/Sudhakar_Ojha19?t=4MKceoRI2n-x2pP-c-TmDg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl pointer-events-none z-10 animate-sparkle-border" style={{boxShadow:'0 0 24px 6px #f472b6, 0 0 48px 12px #a78bfa, 0 0 32px 8px #06b6d4'}}></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 relative z-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;