import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // your handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // send via EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error(error);
    alert('Something went wrong, please try again.');
  }

  setIsSubmitting(false);
};

  const contactInfo = [
   {
  icon: <Mail className="w-6 h-6" />,
  label: "Email",
  value: "sanialina112@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&to=sanialina112@gmail.com"
},
    {
  icon: <Linkedin className="w-6 h-6" />,
  label: "LinkedIn",
  value: "Sania Alina",
  href: "https://www.linkedin.com/in/sania-alina-801245226/"
},
    {
  icon: <MapPin className="w-6 h-6" />,
  label: "Location",
  value: "Pakistan",
  href: "https://www.google.com/maps/place/Pakistan/"
}

  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Sanialina",
      color: "hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sania-alina-801245226/",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://x.com/sanialina112",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {`I enjoy exploring new challenges, creative projects, and innovative ideas. Whether you’re looking for an AI-focused developer, a collaborator, or just someone to exchange thoughts with, I’d love to connect.`}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-neon-purple/50 transition-all duration-300 group"
                >
                  <div className="text-neon-purple group-hover:text-neon-magenta transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white group-hover:text-neon-purple transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-orbitron font-bold text-white mb-4">
                Follow Me
              </h4>
             <div className="flex space-x-4">
  {socialLinks.map((social, index) => {
    const randomX = Math.floor(Math.random() * 100) - 50;
    const randomY = Math.floor(Math.random() * 100) - 50;

    return (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          x: randomX,
          y: randomY,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: index * 0.3,
          type: "spring",
        }}
        whileHover={{
          scale: 1.2,
          rotate: 5,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className={`p-3 rounded-full border border-gray-800 text-gray-400 ${social.color} hover:border-neon-purple/50 transition-all duration-300`}
      >
        {social.icon}
      </motion.a>
    );
  })}
</div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="floating-panel"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 focus:outline-none transition-all duration-300"
                  placeholder="Let's work together"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-neon-purple to-neon-magenta px-8 py-4 rounded-lg text-white font-orbitron font-bold hover:shadow-2xl hover:shadow-neon-purple/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;