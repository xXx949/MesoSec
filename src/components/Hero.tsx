import { motion } from 'motion/react';
import { Shield, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { StatusIndicator } from './StatusIndicator';
import { BinaryRain } from './BinaryRain';
import { ScanLines } from './ScanLines';
import { GlitchText } from './GlitchText';
import { HexDisplay } from './HexDisplay';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';
import { useLanguage } from './LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const fullText = t('hero.tagline');

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText(''); // Reset displayed text
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      {/* Binary rain effect - optimized for mobile */}
      <BinaryRain columnCount={isMobile === true ? 15 : 30} opacity={isMobile === true ? 0.15 : 0.2} />
      
      {/* Scan lines */}
      <ScanLines />
      
      {/* Animated glow orbs - simplified on mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={isMobile === true ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={isMobile === true ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      
      {/* Noise overlay - disabled on mobile */}
      {isMobile === false && (
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-cyan-500/30 blur-2xl"
              animate={isMobile === true ? {} : {
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            />
            <img src={logoImage} alt="MesoSec Logo" className="w-32 h-32 md:w-50 md:h-50 relative" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 overflow-visible"
        >
          <span className="text-white text-[96px]">{t('hero.title1')}</span>
          <span className="block overflow-visible">
            <GlitchText 
              text={t('hero.title2')}
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <div className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </div>
          <div className="inline-block px-6 py-3 font-mono">
            <span className="text-cyan-400">{'> '}</span>
            <span className="text-green-400">{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-green-400 ml-1"
            />
          </div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
          onClick={scrollToServices}
          style={{ pointerEvents: 'auto' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <ChevronDown className="w-8 h-8 text-blue-400 cursor-pointer" style={{ pointerEvents: 'auto' }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
