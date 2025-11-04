import { motion } from 'motion/react';
import { Lock, Zap, FileText, Radio, Clock, Award } from 'lucide-react';
import { CodeTerminal } from './CodeTerminal';
import { ScanLines } from './ScanLines';
import { useLanguage } from './LanguageContext';

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Award,
    title: t('features.certified.title'),
    description: t('features.certified.desc')
  },
  {
    icon: FileText,
    title: t('features.comprehensive.title'),
    description: t('features.comprehensive.desc')
  },
  {
    icon: Lock,
    title: t('features.methodology.title'),
    description: t('features.methodology.desc')
  },
  {
    icon: Clock,
    title: t('features.support.title'),
    description: t('features.support.desc')
  },
  {
    icon: Radio,
    title: t('features.compliance.title'),
    description: t('features.compliance.desc')
  },
  {
    icon: Zap,
    title: t('features.continuous.title'),
    description: t('features.continuous.desc')
  }
];

export function Features() {
  const { t, language } = useLanguage();
  const features = getFeatures(t);
  
  const getTerminalLines = () => {
    if (language === 'ar') {
      return [
        { text: './فحص_أمني --الحالة', type: 'command' as const },
        { text: 'جاري تهيئة تقييم الأمان...', type: 'output' as const },
        { text: 'تم اكتشاف بنية الشبكة', type: 'success' as const },
        { text: 'تم اكتشاف 12 ثغرة أمنية', type: 'error' as const },
        { text: 'حرجة: تم العثور على ثغرة SQL في /api/users', type: 'warning' as const },
        { text: 'محاكاة التصيد الاحتيالي: معدل نقر 78%', type: 'warning' as const },
        { text: 'اكتمل تعداد Active Directory', type: 'success' as const },
        { text: 'اكتمل الفحص. تم إنشاء التقرير.', type: 'success' as const },
        { text: '', type: 'output' as const },
        { text: 'التوصيات:', type: 'warning' as const },
        { text: 'مطلوب استشارة أمنية فورية', type: 'error' as const },
      ];
    }
    return [
      { text: './security_scan --status', type: 'command' as const },
      { text: 'Initializing security assessment...', type: 'output' as const },
      { text: 'Network topology discovered', type: 'success' as const },
      { text: '12 vulnerabilities detected', type: 'error' as const },
      { text: 'Critical: SQL injection found in /api/users', type: 'warning' as const },
      { text: 'Phishing simulation: 78% click rate', type: 'warning' as const },
      { text: 'Active Directory enumeration complete', type: 'success' as const },
      { text: 'Scan complete. Report generated.', type: 'success' as const },
      { text: '', type: 'output' as const },
      { text: 'RECOMMENDATION:', type: 'warning' as const },
      { text: 'Immediate security consultation required', type: 'error' as const },
    ];
  };
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Scan lines */}
      <ScanLines />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            {t('features.title')} <span className="text-cyan-400">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 font-mono"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-cyan-400">{t('features.highlight1.title')}</span>
              </div>
              <p className="text-slate-300">{t('features.highlight1.desc')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 font-mono"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <span className="text-cyan-400">{t('features.highlight2.title')}</span>
              </div>
              <p className="text-slate-300">{t('features.highlight2.desc')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 font-mono"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <span className="text-cyan-400">{t('features.highlight3.title')}</span>
              </div>
              <p className="text-slate-300">{t('features.highlight3.desc')}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <CodeTerminal
              title={language === 'ar' ? 'سجل_تقييم_الأمان.log' : 'security_assessment.log'}
              lines={getTerminalLines()}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative bg-slate-950/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
