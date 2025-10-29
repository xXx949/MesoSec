import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalLine {
  text: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'command';
  delay?: number;
}

interface TerminalOutputProps {
  lines: TerminalLine[];
  prompt?: string;
  title?: string;
}

export function TerminalOutput({ lines, prompt = 'cybershield@terminal', title }: TerminalOutputProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleLines < lines.length) {
        setVisibleLines(visibleLines + 1);
      }
    }, lines[visibleLines]?.delay || 400);

    return () => clearTimeout(timer);
  }, [visibleLines, lines]);

  const getLineIcon = (type?: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'warning':
        return '⚠';
      default:
        return '';
    }
  };

  const getLineColor = (type?: string) => {
    switch (type) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-yellow-400';
      case 'command':
        return 'text-blue-400';
      default:
        return 'text-slate-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-950/90 backdrop-blur-sm border border-slate-800 rounded-lg overflow-hidden font-mono text-sm"
    >
      {title && (
        <div className="bg-slate-900/50 border-b border-slate-800 px-4 py-2 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span className="text-slate-400">{title}</span>
        </div>
      )}
      <div className="p-4 space-y-1">
        <div className="text-blue-400 mb-2">{prompt}</div>
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${getLineColor(line.type)} flex items-start gap-2`}
          >
            {getLineIcon(line.type) && (
              <span className="flex-shrink-0">{getLineIcon(line.type)}</span>
            )}
            <span>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines === lines.length && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-green-400 ml-1"
          />
        )}
      </div>
    </motion.div>
  );
}
