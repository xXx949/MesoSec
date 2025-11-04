import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function HexDisplay() {
  const [hexValues, setHexValues] = useState<string[]>([]);

  useEffect(() => {
    const generateHex = () => {
      const hex = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 256)
          .toString(16)
          .toUpperCase()
          .padStart(2, '0')
      );
      setHexValues(hex);
    };

    generateHex();
    const interval = setInterval(generateHex, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs text-cyan-400/50 flex gap-2">
      {hexValues.map((hex, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {hex}
        </motion.span>
      ))}
    </div>
  );
}
