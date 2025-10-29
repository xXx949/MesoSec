import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    // Only glitch occasionally - every 8 seconds for 150ms
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block overflow-visible pb-4`}>
      <span className={`relative z-10 text-[96px] ${className}`}>{text}</span>
      {glitching && (
        <>
          <motion.span
            className={`absolute top-0 left-0 text-red-500 text-[96px] opacity-70`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: -2, opacity: 0.7 }}
            transition={{ duration: 0.05 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {text}
          </motion.span>
          <motion.span
            className={`absolute top-0 left-0 text-blue-500 text-[96px] opacity-70`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 2, opacity: 0.7 }}
            transition={{ duration: 0.05 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
