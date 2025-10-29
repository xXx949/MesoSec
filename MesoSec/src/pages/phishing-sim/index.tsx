import { motion } from 'motion/react';
import { ArrowLeft, Mail, Users, TrendingUp, Lock, CheckCircle2, Terminal, AlertTriangle, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ScanLines } from '../../components/ScanLines';
import { CodeTerminal } from '../../components/CodeTerminal';
import { GlitchText } from '../../components/GlitchText';
import { Footer } from '../../components/Footer';
import { BinaryRain } from '../../components/BinaryRain';
import { useState, useEffect } from 'react';

type Page = 'home' | 'terms' | 'privacy' | 'cookies';

interface PhishingSimPageProps {
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export function PhishingSimPage({ onBack, onNavigate }: PhishingSimPageProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const lines = [
    { text: '> Don\'t wait for a breach.', color: 'text-red-500' },
    { text: '> Let our expert team identify and help fix', color: 'text-orange-400' },
    { text: 'your vulnerabilities before attackers exploit them.', color: 'text-orange-400' },
    { text: '> Feel free to reach out to us', color: 'text-green-400' },
    { text: 'Protect your company from online threats', color: 'text-green-400' },
    { text: 'and rely on our expertise in cybersecurity.', color: 'text-green-400' }
  ];

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    const chars = line.text.split('');
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= chars.length) {
        setCurrentText(chars.slice(0, charIndex).join(''));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentText('');
        }, 200);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentLineIndex, lines.length]);

  const methodologies = [
    {
      icon: Mail,
      title: 'Realistic Phishing Campaigns',
      description: 'Custom-crafted phishing emails that mimic real-world attack scenarios to test employee awareness.'
    },
    {
      icon: Users,
      title: 'Targeted Training',
      description: 'Personalized security awareness training based on individual employee performance and vulnerabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and metrics to track improvement over time and identify high-risk users.'
    },
    {
      icon: BookOpen,
      title: 'Security Awareness',
      description: 'Educational content and resources to help employees recognize and report phishing attempts.'
    }
  ];

  const deliverables = [
    'Campaign Performance Report',
    'User Susceptibility Analysis',
    'Training Completion Metrics',
    'Click Rate Analytics',
    'Improvement Tracking',
    'Custom Training Materials'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        <BinaryRain columnCount={20} opacity={0.15} />
        <ScanLines />
        
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Mail className="w-20 h-20 text-purple-400 relative" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6"
          >
            <span className="text-white">Phishing</span>
            <span className="block">
              <GlitchText 
                text="Simulations" 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Test employee awareness with realistic phishing simulations and comprehensive training to strengthen your human firewall.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="cursor-pointer flex justify-center"
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
        <BinaryRain columnCount={15} opacity={0.1} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Why Phishing Simulations?
              </h2>
              <p className="text-lg text-slate-400 mb-6">
                Your employees are your first line of defense against cyber attacks. Phishing remains one of the most effective attack vectors, with over 90% of successful breaches starting with a phishing email.
              </p>
              <p className="text-lg text-slate-400 mb-6">
                Our phishing simulation platform helps you identify vulnerable employees, provide targeted training, and measure the effectiveness of your security awareness program over time.
              </p>
              <div className="flex items-start space-x-3 text-purple-400">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  <span className="text-purple-400">Over 90% of successful breaches</span> start with phishing attacks, making employee awareness your first line of defense.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CodeTerminal
                title="campaign_report.txt"
                lines={[
                  { text: '=== Phishing Campaign Results ===', type: 'output' },
                  { text: '', type: 'output' },
                  { text: 'Campaign: Q4 2024 Security Test', type: 'output' },
                  { text: 'Total Recipients: 500 employees', type: 'output' },
                  { text: '', type: 'output' },
                  { text: 'Emails Opened: 387 (77.4%)', type: 'success' },
                  { text: 'Links Clicked: 142 (28.4%)', type: 'error' },
                  { text: 'Data Submitted: 43 (8.6%)', type: 'error' },
                  { text: 'Reported Emails: 98 (19.6%)', type: 'success' },
                  { text: '', type: 'output' },
                  { text: '[!] 43 high-risk users identified', type: 'error' },
                  { text: '[+] Training assigned automatically', type: 'success' },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Our Approach
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Build a culture of security awareness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-950/80 border-purple-500/20 backdrop-blur-sm p-8 h-full hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <method.icon className="w-12 h-12 text-purple-400 relative" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3 text-white">
                        {method.title}
                      </h3>
                      <p className="text-slate-400">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              What You'll Receive
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive insights into your organization's security awareness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-950/80 border-purple-500/20 backdrop-blur-sm p-6 h-full hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 h-full">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
        <ScanLines />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black/90 to-slate-950/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400" />
            
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/20 blur-3xl"
              animate={{
                scale: [1.5, 1, 1.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Ready to Secure Your Infrastructure?
            </h2>
            
            <div className="max-w-2xl mx-auto bg-black/60 rounded-lg p-6 border border-green-500/30 backdrop-blur-sm mb-8">
              <div className="font-mono text-left space-y-2">
                {lines.slice(0, visibleLines).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.div>
                ))}
                
                {currentLineIndex < lines.length && (
                  <div className={lines[currentLineIndex].color}>
                    {currentText}
                    <motion.span
                      className="inline-block w-2 h-4 bg-green-400 ml-0.5"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 group relative overflow-hidden"
                onClick={() => window.location.href = 'mailto:contact@mesosec.com'}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <Mail className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
