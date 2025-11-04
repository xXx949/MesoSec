import { motion } from 'motion/react';
import { ArrowLeft, Mail, Users, TrendingUp, Lock, CheckCircle2, Terminal, AlertTriangle, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ScanLines } from '../../components/ScanLines';
import { CodeTerminal } from '../../components/CodeTerminal';
import { GlitchText } from '../../components/GlitchText';
import { Footer } from '../../components/Footer';
import { BinaryRain } from '../../components/BinaryRain';
import { ChatBot } from '../../components/ChatBot';
import { ScrollToTop } from '../../components/ScrollToTop';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { useLanguage } from '../../components/LanguageContext';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';

type Page = 'home' | 'terms' | 'privacy' | 'cookies' | 'external-pentest' | 'internal-pentest' | 'webapp-pentest' | 'phishing-sim';

interface PhishingSimPageProps {
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export function PhishingSimPage({ onBack, onNavigate }: PhishingSimPageProps) {
  const { t, language } = useLanguage();
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);
  
  const lines = [
    { text: t('serviceCta.line1'), color: 'text-red-500' },
    { text: t('serviceCta.line2'), color: 'text-orange-400' },
    { text: t('serviceCta.line3'), color: 'text-orange-400' },
    { text: t('serviceCta.line4'), color: 'text-green-400' },
    { text: t('serviceCta.line5'), color: 'text-green-400' },
    { text: t('serviceCta.line6'), color: 'text-green-400' }
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
      title: t('phishing.methodology.campaign.title'),
      description: t('phishing.methodology.campaign.desc')
    },
    {
      icon: Users,
      title: t('phishing.methodology.execution.title'),
      description: t('phishing.methodology.execution.desc')
    },
    {
      icon: BookOpen,
      title: t('phishing.methodology.training.title'),
      description: t('phishing.methodology.training.desc')
    },
    {
      icon: TrendingUp,
      title: t('phishing.methodology.metrics.title'),
      description: t('phishing.methodology.metrics.desc')
    }
  ];

  const deliverables = [
    t('phishing.deliverable1'),
    t('phishing.deliverable2'),
    t('phishing.deliverable3'),
    t('phishing.deliverable4'),
    t('phishing.deliverable5'),
    t('phishing.deliverable6')
  ];

  const serviceItems = [
    { name: t('services.external'), page: 'external-pentest' as Page },
    { name: t('services.internal'), page: 'internal-pentest' as Page },
    { name: t('services.webapp'), page: 'webapp-pentest' as Page },
    { name: t('services.phishing'), page: 'phishing-sim' as Page },
  ];

  const handleMouseEnter = () => {
    setServicesDropdownOpen(true);
    setIsDropdownLocked(true);
  };

  const handleMouseLeave = () => {
    // Dropdown stays locked, won't close on mouse leave
  };

  const handleServicesClick = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setIsDropdownLocked(!servicesDropdownOpen);
  };

  const navigateToService = (page: Page) => {
    onNavigate(page);
    setServicesDropdownOpen(false);
    setIsDropdownLocked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown-container')) {
        setServicesDropdownOpen(false);
        setIsDropdownLocked(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={onBack}
          >
            <div className="relative">
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
              <img src={logoImage} alt="MesoSec Logo" className="w-12 h-12 relative cursor-pointer" />
            </div>
            <span className="text-2xl text-white font-mono cursor-pointer">
              MESO<span className="text-cyan-400 cursor-pointer">SEC</span>
            </span>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Services Dropdown */}
            <div
              className="relative services-dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.button
                onClick={handleServicesClick}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group flex items-center gap-1"
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: servicesDropdownOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: servicesDropdownOpen ? 1 : 0,
                  y: servicesDropdownOpen ? 0 : -10,
                  pointerEvents: servicesDropdownOpen ? 'auto' : 'none'
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2 w-72"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-black/95 backdrop-blur-lg border border-cyan-500/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  {serviceItems.map((service, index) => (
                    <motion.button
                      key={service.page}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: servicesDropdownOpen ? 1 : 0,
                        x: servicesDropdownOpen ? 0 : -10
                      }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => navigateToService(service.page)}
                      className="w-full text-left px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 border-b border-cyan-500/10 last:border-b-0"
                    >
                      {service.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t('external.back')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        <BinaryRain columnCount={20} opacity={0.15} />
        <ScanLines />
        
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Mail className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 relative" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 px-4 break-words leading-tight"
          >
            <span className="text-white block">{t('phishing.hero.title1')}</span>
            <span className="block">
              <GlitchText 
                text={t('phishing.hero.title2')} 
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 px-4"
          >
            {t('phishing.hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="cursor-pointer flex justify-center z-50"
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ pointerEvents: 'auto' }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <ChevronDown className="w-8 h-8 text-cyan-400 cursor-pointer" style={{ pointerEvents: 'auto' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />
        <ScanLines />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                {t('phishing.why.title')}
              </h2>
              <p className="text-lg text-slate-400 mb-6">
                {t('phishing.why.desc1')}
              </p>
              <p className="text-lg text-slate-400 mb-6">
                {t('phishing.why.desc2')}
              </p>
              <div className="flex items-start space-x-3 text-cyan-400">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  <span className="text-cyan-400">{t('phishing.stats.text1')}</span>{t('phishing.stats.text2')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <CodeTerminal
                title={t('terminal.phishing.title')}
                lines={[
                  { text: t('terminal.phishing.line1'), type: 'output' },
                  { text: '', type: 'output' },
                  { text: t('terminal.phishing.line2'), type: 'output' },
                  { text: t('terminal.phishing.line3'), type: 'output' },
                  { text: '', type: 'output' },
                  { text: t('terminal.phishing.line4'), type: 'success' },
                  { text: t('terminal.phishing.line5'), type: 'error' },
                  { text: t('terminal.phishing.line6'), type: 'error' },
                  { text: t('terminal.phishing.line7'), type: 'success' },
                  { text: '', type: 'output' },
                  { text: t('terminal.phishing.line8'), type: 'error' },
                  { text: t('terminal.phishing.line9'), type: 'success' },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        <ScanLines />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              {t('phishing.methodology.title')}
            </h2>
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
                <Card className="bg-slate-950/80 border-cyan-500/20 backdrop-blur-sm p-8 h-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <method.icon className="w-12 h-12 text-cyan-400 relative" strokeWidth={1.5} />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />
        <ScanLines />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              {t('phishing.deliverables.title')}
            </h2>
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
                <Card className="bg-slate-950/80 border-cyan-500/20 backdrop-blur-sm p-6 h-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 h-full">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"
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
            className="bg-gradient-to-br from-black/90 to-slate-950/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 blur-3xl"
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
              className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl"
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
              {t('serviceCta.title')}
            </h2>
            
            <div className="max-w-2xl mx-auto bg-black/60 rounded-lg p-6 border border-cyan-500/30 backdrop-blur-sm mb-8">
              <div className={`font-mono space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {lines.slice(0, visibleLines).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: language === 'ar' ? 10 : -10 }}
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
                      className={`inline-block w-2 h-4 bg-green-400 ${language === 'ar' ? 'mr-0.5' : 'ml-0.5'}`}
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
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black border-0 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
                onClick={() => window.location.href = 'mailto:contact@mesosec.com'}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                />
                <Mail className="mr-2 h-5 w-5 relative z-10 cursor-pointer" />
                <span className="relative z-10 cursor-pointer">{t('serviceCta.button')}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10 cursor-pointer" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* ChatBot */}
      <ChatBot />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
