import { motion } from 'motion/react';
import { Shield, Search, Mail, Globe, ArrowRight, Terminal } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CodeTerminal } from './CodeTerminal';
import { ScanLines } from './ScanLines';
import { useState, useEffect } from 'react';

type Page = "home" | "terms" | "privacy" | "cookies" | "external-pentest" | "internal-pentest" | "webapp-pentest" | "phishing-sim";

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    icon: Search,
    title: 'External Penetration Testing',
    description: 'Comprehensive security assessment of your external-facing systems and networks to identify vulnerabilities before malicious actors do.',
    features: [
      'Network Scanning',
      'Port Analysis',
      'Social Engineering',
      'Wireless Security'
    ],
    page: 'external-pentest' as Page
  },
  {
    icon: Shield,
    title: 'Internal Penetration Testing',
    description: 'Simulate insider threats and lateral movement attacks to evaluate your internal security posture and containment capabilities.',
    features: [
      'Privilege Escalation',
      'Lateral Movement',
      'Data Exfiltration',
      'Active Directory Testing'
    ],
    page: 'internal-pentest' as Page
  },
  {
    icon: Globe,
    title: 'Web Application Penetration Testing',
    description: 'In-depth security testing of web applications to identify vulnerabilities like SQL injection, XSS, and authentication flaws.',
    features: [
      'OWASP Top 10',
      'SQL Injection',
      'Cross-Site Scripting',
      'Authentication Testing'
    ],
    page: 'webapp-pentest' as Page
  },
  {
    icon: Mail,
    title: 'Phishing Simulations',
    description: 'Test employee awareness with realistic phishing simulations and comprehensive training to strengthen your human firewall.',
    features: [
      'Email Campaigns',
      'Landing Pages',
      'User Training',
      'Reporting Dashboard'
    ],
    page: 'phishing-sim' as Page
  }
];

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />
      
      {/* Scan lines */}
      <ScanLines />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your organization from evolving threats
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-950/80 border-cyan-500/20 backdrop-blur-sm p-8 h-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Animated scanline on hover */}
                <motion.div
                  className="absolute left-0 right-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-20 opacity-0 group-hover:opacity-100"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                

                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="mb-6 relative flex justify-center">
                    <motion.div
                      className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                    />
                    <div className="relative">
                      <service.icon className="w-12 h-12 text-cyan-400 relative z-10" strokeWidth={1.5} />
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(34, 211, 238, 0.3)',
                            '0 0 40px rgba(34, 211, 238, 0.5)',
                            '0 0 20px rgba(34, 211, 238, 0.3)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl mb-4 text-white min-h-[4rem] text-center">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-6 min-h-[8rem]">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-slate-300 group/item"
                      >
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        </motion.div>
                        <span className="group-hover/item:text-white transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 w-full group border border-cyan-500/20 hover:border-cyan-500/40 mt-auto"
                    onClick={() => onNavigate(service.page)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
