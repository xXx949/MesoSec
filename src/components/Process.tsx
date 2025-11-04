import { motion } from 'motion/react';
import { Telescope, Target, Bug, FileCheck, Search, Shield } from 'lucide-react';
import { ScanLines } from './ScanLines';
import { useLanguage } from './LanguageContext';

const getSteps = (t: (key: string) => string) => [
  {
    icon: Telescope,
    title: t('process.step1.title'),
    description: t('process.step1.desc')
  },
  {
    icon: Search,
    title: t('process.step2.title'),
    description: t('process.step2.desc')
  },
  {
    icon: Bug,
    title: t('process.step3.title'),
    description: t('process.step3.desc')
  },
  {
    icon: Target,
    title: t('process.step4.title'),
    description: t('process.step4.desc')
  },
  {
    icon: FileCheck,
    title: t('process.step5.title'),
    description: t('process.step5.desc')
  },
  {
    icon: Shield,
    title: t('process.step6.title'),
    description: t('process.step6.desc')
  }
];

export function Process() {
  const { t } = useLanguage();
  const steps = getSteps(t);
  
  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Scan lines */}
      <ScanLines />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
      
      {/* Animated scanline effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-32"
        animate={{
          y: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            {t('process.title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          {/* Animated data flow */}
          <motion.div
            className="hidden lg:block absolute top-1/4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
            animate={{
              left: ['0%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-8 text-center relative z-10 group hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-full flex flex-col items-center">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500/30 blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <step.icon className="w-8 h-8 text-white relative z-10" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-slate-400 flex-grow">
                  {step.description}
                </p>

                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-cyan-400 font-mono">{index + 1}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
