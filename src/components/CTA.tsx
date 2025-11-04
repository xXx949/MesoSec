import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Shield, ArrowRight, Mail } from 'lucide-react';
import { ScanLines } from './ScanLines';
import { StatusIndicator } from './StatusIndicator';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export function CTA() {
  const { t, language } = useLanguage();
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const lines = [
    { text: t('serviceCta.line1'), color: 'text-red-500' },
    { text: t('serviceCta.line2'), color: 'text-orange-400' },
    { text: t('serviceCta.line3'), color: 'text-orange-400' },
    { text: t('serviceCta.line4'), color: 'text-green-400' },
    { text: t('serviceCta.line5'), color: 'text-green-400' },
    { text: t('serviceCta.line6'), color: 'text-green-400' }
  ];

  // Reset animation when language changes
  useEffect(() => {
    setVisibleLines(0);
    setCurrentLineIndex(0);
    setCurrentText('');
  }, [language]);

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
  }, [currentLineIndex, lines.length, language]);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      {/* Scan lines */}
      <ScanLines />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
      
      {/* Animated background */}
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
          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
          
          {/* Animated corner accents */}
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {t('cta.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto bg-black/60 rounded-lg p-6 border border-green-500/30 backdrop-blur-sm mb-8">
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
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              onClick={() => window.location.href = 'mailto:contact@mesosec.com'}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
              />
              <Mail className="mr-2 h-5 w-5 relative z-10 cursor-pointer" />
              <span className="relative z-10 cursor-pointer">{t('cta.contact')}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10 cursor-pointer" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
