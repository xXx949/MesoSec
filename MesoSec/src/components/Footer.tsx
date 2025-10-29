import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ScanLines } from './ScanLines';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';

type Page = 'home' | 'terms' | 'privacy' | 'cookies';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 relative overflow-hidden">
      <ScanLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <div className="relative mr-2">
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img src={logoImage} alt="MesoSec Logo" className="w-10 h-10 relative" />
              </div>
              <span className="text-xl text-white font-mono">
                MESO<span className="text-cyan-400">SEC</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-400 mb-4 max-w-md"
            >
              Leading cybersecurity firm specializing in penetration testing and security assessments. Protecting organizations from digital threats since 2014.
            </motion.p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">External Pentesting</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Internal Pentesting</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Phishing Simulations</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web App Pentesting</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>contact@mesosec.io</span>
              </li>
              <li className="flex items-start text-slate-400">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Security Blvd<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm mb-4 md:mb-0"
          >
            © 2025 MesoSec. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-sm"
          >
            <button 
              onClick={() => onNavigate('privacy')}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate('cookies')}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Cookie Policy
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
