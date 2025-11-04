import { motion } from 'motion/react';
import { Shield, Search, Mail, Globe, ArrowRight, Terminal } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CodeTerminal } from './CodeTerminal';
import { ScanLines } from './ScanLines';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

type Page = "home" | "terms" | "privacy" | "cookies" | "external-pentest" | "internal-pentest" | "webapp-pentest" | "phishing-sim";

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const getServices = (t: (key: string) => string) => [
  {
    icon: Search,
    title: t('services.external.title'),
    description: t('services.external.desc'),
    features: [
      t('services.features.networkScanning'),
      t('services.features.portAnalysis'),
      t('services.features.socialEngineering'),
      t('services.features.wirelessSecurity')
    ],
    page: 'external-pentest' as Page
  },
  {
    icon: Shield,
    title: t('services.internal.title'),
    description: t('services.internal.desc'),
    features: [
      t('services.features.privilegeEscalation'),
      t('services.features.lateralMovement'),
      t('services.features.dataExfiltration'),
      t('services.features.activeDirectoryTesting')
    ],
    page: 'internal-pentest' as Page
  },
  {
    icon: Globe,
    title: t('services.webapp.title'),
    description: t('services.webapp.desc'),
    features: [
      t('services.features.owaspTop10'),
      t('services.features.sqlInjection'),
      t('services.features.crossSiteScripting'),
      t('services.features.authenticationTesting')
    ],
    page: 'webapp-pentest' as Page
  },
  {
    icon: Mail,
    title: t('services.phishing.title'),
    description: t('services.phishing.desc'),
    features: [
      t('services.features.emailCampaigns'),
      t('services.features.landingPages'),
      t('services.features.userTraining'),
      t('services.features.reportingDashboard')
    ],
    page: 'phishing-sim' as Page
  }
];

export function Services({ onNavigate }: ServicesProps) {
  const { t } = useLanguage();
  const services = getServices(t);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black" />
      
      {/* Scan lines */}
      <ScanLines />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card 
                className="bg-slate-950/80 border-cyan-500/20 backdrop-blur-sm p-8 h-full group relative overflow-hidden"
                style={{
                  boxShadow: hoveredCard === index 
                    ? '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(34, 211, 238, 0.3)'
                    : '0 10px 25px rgba(0, 0, 0, 0.3)',
                  borderColor: hoveredCard === index ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="mb-6 relative flex justify-center">
                    <motion.div
                      className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                    />
                    <div className="relative">
                      <service.icon className="w-12 h-12 text-cyan-400 relative z-10" strokeWidth={1.5} />
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(34, 211, 238, 0.3)',
                            '0 0 40px rgba(34, 211, 238, 0.5)',
                            '0 0 20px rgba(34, 211, 238, 0.3)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl mb-4 text-white min-h-[4rem] text-center">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-6 min-h-[8rem]">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-slate-300 group/item"
                      >
                        <motion.div
                          whileHover={{ x: 5, scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Terminal className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        </motion.div>
                        <span className="group-hover/item:text-white transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 w-full group border border-cyan-500/20 hover:border-cyan-500/40 mt-auto relative overflow-hidden cursor-pointer [&>*]:cursor-pointer"
                    onClick={() => onNavigate(service.page)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 pointer-events-none"
                      animate={
                        hoveredCard === index
                          ? {
                              x: ['-100%', '100%'],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <span className="relative z-10 pointer-events-none">{t('services.learnMore')}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10 pointer-events-none" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
