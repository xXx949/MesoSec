import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

type Page = "home" | "terms" | "privacy" | "cookies" | "external-pentest" | "internal-pentest" | "webapp-pentest" | "phishing-sim";

interface NavigationProps {
  onNavigate?: (page: Page) => void;
}

export function Navigation({ onNavigate }: NavigationProps = {}) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setServicesDropdownOpen(false); // Close dropdown when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown-container')) {
        setServicesDropdownOpen(false);
        setIsDropdownLocked(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const serviceItems = [
    { name: t('service.external'), page: 'external-pentest' as Page },
    { name: t('service.internal'), page: 'internal-pentest' as Page },
    { name: t('service.webapp'), page: 'webapp-pentest' as Page },
    { name: t('service.phishing'), page: 'phishing-sim' as Page },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navigateToService = (page: Page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setServicesDropdownOpen(false);
    setIsDropdownLocked(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setServicesDropdownOpen(true);
    setIsDropdownLocked(true);
  };

  const handleMouseLeave = () => {
    // Dropdown stays locked, won't close on mouse leave
  };

  const handleServicesClick = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setIsDropdownLocked(!servicesDropdownOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-black/50 backdrop-blur-sm'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img src={logoImage} alt="MesoSec Logo" className="w-18 h-18 relative cursor-pointer" />
              </div>
              <span className="text-2xl text-white font-mono cursor-pointer text-[30px]">
                MESO<span className="text-cyan-400 cursor-pointer">SEC</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Services Dropdown */}
              <div
                className="relative services-dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleServicesClick}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group flex items-center gap-1"
                >
                  {t('nav.services')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: servicesDropdownOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: servicesDropdownOpen ? 1 : 0,
                    y: servicesDropdownOpen ? 0 : -10,
                    pointerEvents: servicesDropdownOpen ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 w-72"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-black/95 backdrop-blur-lg border border-cyan-500/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  >
                  {serviceItems.map((service, index) => (
                    <motion.button
                      key={service.page}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: servicesDropdownOpen ? 1 : 0,
                        x: servicesDropdownOpen ? 0 : -10
                      }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => navigateToService(service.page)}
                      className="w-full text-left px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 border-b border-cyan-500/10 last:border-b-0"
                    >
                      {service.name}
                    </motion.button>
                  ))}
                  </div>
                </motion.div>
              </div>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  onClick={() => scrollToSection('#services')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
                >
                  {t('nav.getStarted')}
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden text-cyan-400 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-b border-cyan-500/20"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Language Switcher - Mobile */}
            <div className="flex justify-center mb-4">
              <LanguageSwitcher />
            </div>
            
            {/* Services with submenu */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  scrollToSection('#services');
                  setMobileServicesOpen(!mobileServicesOpen);
                }}
                className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2"
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-2">
                  {serviceItems.map((service) => (
                    <button
                      key={service.page}
                      onClick={() => navigateToService(service.page)}
                      className="block w-full text-left text-slate-400 hover:text-cyan-400 transition-colors duration-300 py-2 text-sm"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#services')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
            >
              {t('nav.getStarted')}
            </Button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
