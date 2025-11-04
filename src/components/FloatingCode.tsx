import { motion } from 'motion/react';

interface FloatingCodeProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingCode({ delay = 0, duration = 20, className = '' }: FloatingCodeProps) {
  const codeSnippets = [
    'if (vulnerability.detected) { patch(); }',
    'const secure = await encrypt(data);',
    'function scanPorts() { return open; }',
    'exploit.analyze().remediate();',
    'auth.verify() || alert("breach");',
    'firewall.rules.apply();',
  ];

  const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 0.3, 0],
        y: -100,
        x: [0, Math.random() * 50 - 25, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`absolute font-mono text-sm text-blue-400/30 whitespace-nowrap ${className}`}
    >
      {randomSnippet}
    </motion.div>
  );
}
