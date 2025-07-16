import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { TypingAnimation } from "./ui/typing-animation";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="text-green-400 font-mono text-sm mb-4">
            <TypingAnimation text="// contact.initializeConnection()" speed={50} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            <span className="text-cyan-400">Let's Build</span> Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <TypingAnimation 
              text="Ready to collaborate? Let's turn ideas into reality." 
              speed={40}
              startDelay={1000}
            />
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-green-400">$</span> contact_info
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="text-gray-400 font-mono text-sm">email:</div>
                    <div className="text-white font-mono">khushinataraj28@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-gray-400 font-mono text-sm">location:</div>
                    <div className="text-white font-mono">Bangalore, India</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <Github className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-gray-400 font-mono text-sm">github:</div>
                    <div className="text-white font-mono">@must-not-be-namedd</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-gray-400 font-mono text-sm">linkedin:</div>
                    <div className="text-white font-mono">@khushi-nataraj</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-400 font-mono">
                  <span className="text-green-400">// </span>
                  <span className="text-yellow-400">Status: </span>
                  <span className="text-green-400 animate-pulse">Available for opportunities</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-purple-400">{"<"}</span>
                <span>send_message</span>
                <span className="text-purple-400">{"/>"}</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                    const name =
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-mono"
                    placeholder='"Your name"'
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                    const email =
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-mono"
                    placeholder='"your@email.com"'
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                    const message =
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-mono resize-none"
                    placeholder='"Your message here..."'
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-mono hover-lift"
                >
                  <Send className="w-5 h-5 mr-2" />
                  execute_send()
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}