import { motion, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface CodeLine {
  text: string;
  type?: 'command' | 'output' | 'error' | 'success' | 'warning';
}

interface CodeTerminalProps {
  title?: string;
  lines: CodeLine[];
  className?: string;
}

export function CodeTerminal({ title = 'terminal', lines, className = '' }: CodeTerminalProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Start animation when in view
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    const chars = line.text.split('');
    let charIndex = 0;
    let isActive = true;

    const typeInterval = setInterval(() => {
      if (!isActive) return;
      
      if (charIndex <= chars.length) {
        setCurrentText(chars.slice(0, charIndex).join(''));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        if (isActive) {
          setTimeout(() => {
            if (isActive) {
              setVisibleLines((prev) => prev + 1);
              setCurrentLineIndex((prev) => prev + 1);
              setCurrentText('');
            }
          }, 300);
        }
      }
    }, 30);

    return () => {
      isActive = false;
      clearInterval(typeInterval);
    };
  }, [currentLineIndex, hasStarted]);

  const getLineColor = (type?: string) => {
    switch (type) {
      case 'command':
        return 'text-cyan-400';
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      default:
        return 'text-slate-300';
    }
  };

  const getLinePrefix = (type?: string) => {
    switch (type) {
      case 'command':
        return '$ ';
      case 'error':
        return '[ERROR] ';
      case 'success':
        return '[OK] ';
      case 'warning':
        return '[WARN] ';
      default:
        return '';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/20 ${className}`}
    >
      {/* Terminal header */}
      <div className="bg-slate-900/80 border-b border-cyan-500/30 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono">{title}</span>
        </div>
        <div className="ml-auto flex gap-1">
          <motion.div
            className="w-1 h-1 rounded-full bg-cyan-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-1 h-1 rounded-full bg-cyan-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-1 h-1 rounded-full bg-cyan-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </div>

      {/* Terminal content */}
      <div className={`p-4 font-mono text-sm min-h-[200px] max-h-[400px] overflow-auto ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`${getLineColor(line.type)} mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {isRTL ? (
              <>
                {line.text}
                {getLinePrefix(line.type)}
                <span className="text-slate-500 select-none ml-2">{String(index + 1).padStart(2, '0')}</span>
              </>
            ) : (
              <>
                <span className="text-slate-500 select-none mr-2">{String(index + 1).padStart(2, '0')}</span>
                {getLinePrefix(line.type)}
                {line.text}
              </>
            )}
          </motion.div>
        ))}

        {currentLineIndex < lines.length && (
          <div className={`${getLineColor(lines[currentLineIndex].type)} mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            {isRTL ? (
              <>
                {currentText}
                <motion.span
                  className="inline-block w-2 h-4 bg-cyan-400 mr-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                {getLinePrefix(lines[currentLineIndex].type)}
                <span className="text-slate-500 select-none ml-2">
                  {String(currentLineIndex + 1).padStart(2, '0')}
                </span>
              </>
            ) : (
              <>
                <span className="text-slate-500 select-none mr-2">
                  {String(currentLineIndex + 1).padStart(2, '0')}
                </span>
                {getLinePrefix(lines[currentLineIndex].type)}
                {currentText}
                <motion.span
                  className="inline-block w-2 h-4 bg-cyan-400 ml-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
