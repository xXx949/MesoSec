import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2"
    >
      <Globe className="w-4 h-4 text-cyan-400" />
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded text-sm transition-all duration-300 ${
            language === 'en'
              ? 'bg-cyan-500/20 text-cyan-400 font-bold'
              : 'text-slate-400 hover:text-cyan-400'
          }`}
        >
          EN
        </button>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-2 py-1 rounded text-sm transition-all duration-300 ${
            language === 'ar'
              ? 'bg-cyan-500/20 text-cyan-400 font-bold'
              : 'text-slate-400 hover:text-cyan-400'
          }`}
        >
          AR
        </button>
      </div>
    </motion.div>
  );
}
