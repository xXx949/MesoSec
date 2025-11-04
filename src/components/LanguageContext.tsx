import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.features': 'Features',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Services
    'service.external': 'External Penetration Testing',
    'service.internal': 'Internal Penetration Testing',
    'service.webapp': 'Web Application Penetration Testing',
    'service.phishing': 'Phishing Simulations',
    
    // Hero
    'hero.title1': 'Secure Your',
    'hero.title2': 'Digital Fortress',
    'hero.subtitle': 'Professional penetration testing and phishing simulations to identify vulnerabilities before attackers do',
    'hero.tagline': 'Protecting digital assets is our mission',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive security testing tailored to your needs',
    'services.external': 'External Penetration Testing',
    'services.internal': 'Internal Penetration Testing',
    'services.webapp': 'Web Application Penetration Testing',
    'services.phishing': 'Phishing Simulations',
    'services.external.title': 'External Penetration Testing',
    'services.external.desc': 'Simulate real-world attacks on your external infrastructure to identify and remediate vulnerabilities before they can be exploited.',
    'services.internal.title': 'Internal Penetration Testing',
    'services.internal.desc': 'Test your internal network security by simulating insider threats and lateral movement scenarios.',
    'services.webapp.title': 'Web Application Penetration Testing',
    'services.webapp.desc': 'Comprehensive security assessment of your web applications to identify OWASP Top 10 vulnerabilities and more.',
    'services.phishing.title': 'Phishing Simulations',
    'services.phishing.desc': 'Train your employees to recognize and respond to phishing attempts with realistic simulation campaigns.',
    'services.learnMore': 'Learn More',
    
    // Service Features - External
    'services.features.networkScanning': 'Network Scanning',
    'services.features.portAnalysis': 'Port Analysis',
    'services.features.socialEngineering': 'Social Engineering',
    'services.features.wirelessSecurity': 'Wireless Security',
    
    // Service Features - Internal
    'services.features.privilegeEscalation': 'Privilege Escalation',
    'services.features.lateralMovement': 'Lateral Movement',
    'services.features.dataExfiltration': 'Data Exfiltration',
    'services.features.activeDirectoryTesting': 'Active Directory Testing',
    
    // Service Features - Web App
    'services.features.owaspTop10': 'OWASP Top 10',
    'services.features.sqlInjection': 'SQL Injection',
    'services.features.crossSiteScripting': 'Cross-Site Scripting',
    'services.features.authenticationTesting': 'Authentication Testing',
    
    // Service Features - Phishing
    'services.features.emailCampaigns': 'Email Campaigns',
    'services.features.landingPages': 'Landing Pages',
    'services.features.userTraining': 'User Training',
    'services.features.reportingDashboard': 'Reporting Dashboard',
    
    // Terminal Titles
    'terminal.external.title': 'external_scan.sh',
    'terminal.internal.title': 'lateral_movement.sh',
    'terminal.webapp.title': 'webapp_test.py',
    'terminal.phishing.title': 'campaign_report.txt',
    
    // External Pentest Terminal
    'terminal.external.line1': './nmap -sV -sC target.company.com',
    'terminal.external.line2': 'Starting Nmap scan on target.company.com',
    'terminal.external.line3': 'PORT     STATE SERVICE    VERSION',
    'terminal.external.line4': '22/tcp   open  ssh        OpenSSH 8.2',
    'terminal.external.line5': '80/tcp   open  http       nginx 1.18.0',
    'terminal.external.line6': '443/tcp  open  ssl/http   nginx 1.18.0',
    'terminal.external.line7': './check-vulnerabilities --target=target.company.com',
    'terminal.external.line8': 'Scanning for known vulnerabilities...',
    'terminal.external.line9': '[!] CVE-2021-XXXX detected on port 443',
    'terminal.external.line10': '[+] Exploitation successful - Access gained',
    
    // Internal Pentest Terminal
    'terminal.internal.line1': './bloodhound -c All -d internal.local',
    'terminal.internal.line2': 'Collecting Active Directory data...',
    'terminal.internal.line3': '[+] 1,247 user accounts enumerated',
    'terminal.internal.line4': '[+] 89 computers discovered',
    'terminal.internal.line5': '[+] Domain admin path found',
    'terminal.internal.line6': './mimikatz "sekurlsa::logonpasswords"',
    'terminal.internal.line7': 'Extracting credentials from memory...',
    'terminal.internal.line8': '[!] 12 plaintext passwords found',
    'terminal.internal.line9': '[!] 34 NTLM hashes extracted',
    'terminal.internal.line10': '[+] Privilege escalation path identified',
    
    // Web App Pentest Terminal
    'terminal.webapp.line1': './sqlmap -u "https://target.com/login" --forms',
    'terminal.webapp.line2': 'Testing for SQL injection vulnerabilities...',
    'terminal.webapp.line3': '[!] Parameter "username" is vulnerable',
    'terminal.webapp.line4': '[!] MySQL database detected',
    'terminal.webapp.line5': './xss-scanner --url https://target.com/search',
    'terminal.webapp.line6': 'Scanning for XSS vulnerabilities...',
    'terminal.webapp.line7': '[!] Reflected XSS found in search parameter',
    'terminal.webapp.line8': '[!] DOM-based XSS detected',
    'terminal.webapp.line9': '[+] 7 high-severity issues identified',
    
    // Phishing Campaign Terminal
    'terminal.phishing.line1': '=== Phishing Campaign Results ===',
    'terminal.phishing.line2': 'Campaign: Q4 2024 Security Test',
    'terminal.phishing.line3': 'Total Recipients: 500 employees',
    'terminal.phishing.line4': 'Emails Opened: 387 (77.4%)',
    'terminal.phishing.line5': 'Links Clicked: 142 (28.4%)',
    'terminal.phishing.line6': 'Data Submitted: 43 (8.6%)',
    'terminal.phishing.line7': 'Reported Emails: 98 (19.6%)',
    'terminal.phishing.line8': '[!] 43 high-risk users identified',
    'terminal.phishing.line9': '[+] Training assigned automatically',
    
    // Features
    'features.title': 'Why Choose',
    'features.titleHighlight': 'MesoSec',
    'features.subtitle': 'Industry-leading expertise and cutting-edge methodologies',
    'features.certified.title': 'Certified Experts',
    'features.certified.desc': 'Our team holds industry-recognized certifications including OSCP, CEH, and CISSP.',
    'features.comprehensive.title': 'Comprehensive Reports',
    'features.comprehensive.desc': 'Detailed documentation with actionable remediation strategies and executive summaries.',
    'features.methodology.title': 'Proven Methodology',
    'features.methodology.desc': 'Following OWASP, NIST, and PTES standards for thorough security assessments.',
    'features.support.title': '24/7 Support',
    'features.support.desc': 'Round-the-clock support during and after testing to answer questions and guide remediation.',
    'features.compliance.title': 'Threat Intelligence Integration',
    'features.compliance.desc': 'Leverage real-time threat intelligence and latest attack vectors to simulate advanced persistent threats.',
    'features.continuous.title': 'Continuous Testing',
    'features.continuous.desc': 'Regular testing schedules to ensure ongoing security as your infrastructure evolves.',
    'features.highlight1.title': 'ADVANCED PENETRATION TESTING',
    'features.highlight1.desc': 'Comprehensive assessment of security posture',
    'features.highlight2.title': 'REAL-WORLD ATTACK SIMULATIONS',
    'features.highlight2.desc': 'Testing defenses with authentic threat scenarios',
    'features.highlight3.title': 'ACTIONABLE INSIGHTS',
    'features.highlight3.desc': 'Detailed remediation guidance and priorities',
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'A systematic approach to security testing',
    'process.step1.title': 'Discovery & Planning',
    'process.step1.desc': 'Initial consultation to understand your infrastructure, define scope, and set objectives.',
    'process.step2.title': 'Reconnaissance',
    'process.step2.desc': 'Gather intelligence about your systems using OSINT and passive scanning techniques.',
    'process.step3.title': 'Vulnerability Assessment',
    'process.step3.desc': 'Identify potential security weaknesses using automated and manual testing methods.',
    'process.step4.title': 'Exploitation',
    'process.step4.desc': 'Safely validate vulnerabilities by attempting controlled exploitation.',
    'process.step5.title': 'Reporting',
    'process.step5.desc': 'Deliver comprehensive reports with findings, risk ratings, and remediation guidance.',
    'process.step6.title': 'Remediation Support',
    'process.step6.desc': 'Provide ongoing support and retesting to verify fixes have been properly implemented.',
    
    // CTA
    'cta.title': 'Ready to Secure Your Infrastructure?',
    'cta.subtitle': 'Get in touch with our security experts today',
    'cta.contact': 'Contact Us',
    
    // Footer
    'footer.tagline': 'Elite cybersecurity solutions for modern threats',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': 'All rights reserved',
    
    // Service Pages - External Pentest
    'external.hero.title1': 'External',
    'external.hero.title2': 'Penetration Testing',
    'external.hero.desc': 'Comprehensive security assessment of your external-facing systems and networks to identify vulnerabilities before malicious actors do.',
    'external.overview.title': 'What is External Penetration Testing?',
    'external.overview.desc': 'External penetration testing simulates real-world cyber attacks on your internet-facing infrastructure. Our certified security experts attempt to breach your defenses from an external perspective, just as a malicious hacker would. This service is essential for organizations that want to understand and strengthen their external security posture.',
    'external.stats.vulnerabilities': 'Average Vulnerabilities Found',
    'external.stats.criticalFixed': 'Critical Issues Fixed',
    'external.stats.breachPrevention': 'Breach Prevention Rate',
    'external.methodology.title': 'Our Methodology',
    'external.methodology.recon.title': 'Network Reconnaissance',
    'external.methodology.recon.desc': 'Comprehensive mapping of your external attack surface including IP ranges, domains, and infrastructure.',
    'external.methodology.assessment.title': 'Vulnerability Assessment',
    'external.methodology.assessment.desc': 'Automated and manual testing to identify security weaknesses in external-facing systems.',
    'external.methodology.exploitation.title': 'Exploitation & Validation',
    'external.methodology.exploitation.desc': 'Controlled exploitation of discovered vulnerabilities to validate real-world impact.',
    'external.methodology.wireless.title': 'Cloud Infrastructure Testing',
    'external.methodology.wireless.desc': 'Comprehensive security assessment of cloud environments, containers, and serverless architectures for misconfigurations and vulnerabilities.',
    'external.stats.text': 'External attacks account for 70% of data breaches, targeting vulnerabilities in internet-facing systems and infrastructure.',
    'external.deliverables.title': 'What You Receive',
    'external.deliverable1': 'Executive Summary Report',
    'external.deliverable2': 'Technical Findings & Evidence',
    'external.deliverable3': 'Risk Assessment Matrix',
    'external.deliverable4': 'Remediation Recommendations',
    'external.deliverable5': 'Retesting After Fixes',
    'external.deliverable6': 'Compliance Mapping (PCI-DSS, ISO 27001)',
    'external.back': 'Back to Home',
    
    // Service Pages - Internal Pentest
    'internal.hero.title1': 'Internal',
    'internal.hero.title2': 'Penetration Testing',
    'internal.hero.desc': 'Simulate insider threats and lateral movement attacks to evaluate your internal security posture and containment capabilities.',
    'internal.overview.title': 'What is Internal Penetration Testing?',
    'internal.overview.desc': 'Internal penetration testing evaluates your organization\'s security from an insider threat perspective. We simulate scenarios where an attacker has already gained access to your internal network, testing your defenses against lateral movement, privilege escalation, and data exfiltration attempts.',
    'internal.stats.text1': 'The average breach takes 277 days to detect',
    'internal.stats.text2': ', with attackers often moving laterally through internal networks undetected.',
    'internal.methodology.title': 'Our Methodology',
    'internal.methodology.network.title': 'Network Segmentation Testing',
    'internal.methodology.network.desc': 'Evaluate the effectiveness of network segmentation and access controls.',
    'internal.methodology.ad.title': 'Active Directory Assessment',
    'internal.methodology.ad.desc': 'Identify misconfigurations and vulnerabilities in AD environments.',
    'internal.methodology.privilege.title': 'Privilege Escalation',
    'internal.methodology.privilege.desc': 'Test ability to gain elevated privileges on internal systems.',
    'internal.methodology.lateral.title': 'Lateral Movement',
    'internal.methodology.lateral.desc': 'Assess containment capabilities and detect lateral movement attempts.',
    'internal.deliverables.title': 'What You Receive',
    'internal.deliverable1': 'Internal Security Assessment Report',
    'internal.deliverable2': 'Network Topology Analysis',
    'internal.deliverable3': 'Active Directory Security Review',
    'internal.deliverable4': 'Privilege Escalation Findings',
    'internal.deliverable5': 'Lateral Movement Analysis',
    'internal.deliverable6': 'Remediation Roadmap',
    
    // Service Pages - Web App Pentest
    'webapp.hero.title1': 'Web Application',
    'webapp.hero.title2': 'Penetration Testing',
    'webapp.hero.desc': 'In-depth security testing of web applications to identify vulnerabilities like SQL injection, XSS, and authentication flaws.',
    'webapp.overview.title': 'What is Web Application Penetration Testing?',
    'webapp.overview.desc': 'Web application penetration testing focuses on identifying security vulnerabilities in your web-based applications and APIs. Using both automated tools and manual testing techniques, we uncover issues like injection flaws, broken authentication, sensitive data exposure, and business logic vulnerabilities.',
    'webapp.methodology.title': 'Our Methodology',
    'webapp.methodology.owasp.title': 'OWASP Top 10 Testing',
    'webapp.methodology.owasp.desc': 'Comprehensive testing against the latest OWASP Top 10 vulnerabilities.',
    'webapp.methodology.auth.title': 'Authentication & Session Testing',
    'webapp.methodology.auth.desc': 'In-depth analysis of authentication mechanisms and session management.',
    'webapp.methodology.api.title': 'API Security Testing',
    'webapp.methodology.api.desc': 'Testing RESTful and GraphQL APIs for security vulnerabilities.',
    'webapp.methodology.business.title': 'Business Logic Testing',
    'webapp.methodology.business.desc': 'Identifying flaws in application workflow and business rules.',
    'webapp.deliverables.title': 'What You Receive',
    'webapp.deliverable1': 'OWASP-Based Assessment Report',
    'webapp.deliverable2': 'Vulnerability Proof of Concepts',
    'webapp.deliverable3': 'Code-Level Recommendations',
    'webapp.deliverable4': 'Secure Coding Guidelines',
    'webapp.deliverable5': 'API Security Analysis',
    'webapp.deliverable6': 'Compliance Verification',
    'webapp.stats.text1': 'Web applications are targeted in 26% of breaches',
    'webapp.stats.text2': ' due to vulnerabilities and misconfigurations in internet-facing systems.',
    
    // Service Pages - Phishing
    'phishing.hero.title1': 'Phishing',
    'phishing.hero.title2': 'Simulations',
    'phishing.hero.desc': 'Test employee awareness with realistic phishing simulations and comprehensive training to strengthen your human firewall.',
    'phishing.overview.title': 'What are Phishing Simulations?',
    'phishing.overview.desc': 'Phishing simulations test your employees\' ability to recognize and respond to social engineering attacks. We create realistic phishing campaigns tailored to your organization, measure click rates and reporting behavior, and provide targeted security awareness training to reduce your human risk factor.',
    'phishing.methodology.title': 'Our Methodology',
    'phishing.approach.title': 'Our Approach',
    'phishing.approach.subtitle': 'Build a culture of security awareness',
    'phishing.methodology.campaign.title': 'Custom Campaign Design',
    'phishing.methodology.campaign.desc': 'Tailored phishing scenarios relevant to your industry and threat landscape.',
    'phishing.methodology.execution.title': 'Controlled Execution',
    'phishing.methodology.execution.desc': 'Safe and ethical phishing campaigns with detailed tracking and analytics.',
    'phishing.methodology.training.title': 'Security Awareness Training',
    'phishing.methodology.training.desc': 'Comprehensive training programs to educate employees on threat recognition.',
    'phishing.methodology.metrics.title': 'Performance Metrics',
    'phishing.methodology.metrics.desc': 'Detailed reporting on employee behavior and improvement over time.',
    'phishing.deliverables.title': 'What You Receive',
    'phishing.deliverables.subtitle': 'Comprehensive insights into your organization\'s security awareness',
    'phishing.deliverable1': 'Campaign Performance Report',
    'phishing.deliverable2': 'Employee Behavior Analysis',
    'phishing.deliverable3': 'Training Completion Metrics',
    'phishing.deliverable4': 'Risk Scoring Dashboard',
    'phishing.deliverable5': 'Customized Training Materials',
    'phishing.deliverable6': 'Improvement Recommendations',
    'phishing.why.title': 'Why Phishing Simulations?',
    'phishing.why.desc1': 'Your employees are your first line of defense against cyber attacks. Phishing remains one of the most effective attack vectors, with over 90% of successful breaches starting with a phishing email.',
    'phishing.why.desc2': 'Our phishing simulation platform helps you identify vulnerable employees, provide targeted training, and measure the effectiveness of your security awareness program over time.',
    'phishing.stats.text1': 'Over 90% of successful breaches',
    'phishing.stats.text2': ' start with phishing attacks, making employee awareness your first line of defense.',
    
    // Service Pages CTA
    'serviceCta.title': 'Ready to Secure Your Infrastructure?',
    'serviceCta.line1': '> Don\'t wait for a breach.',
    'serviceCta.line2': '> Let our expert team identify and help fix',
    'serviceCta.line3': 'your vulnerabilities before attackers exploit them.',
    'serviceCta.line4': '> Feel free to reach out to us',
    'serviceCta.line5': 'Protect your company from online threats',
    'serviceCta.line6': 'and rely on our expertise in cybersecurity.',
    'serviceCta.button': 'Contact Us',
    
    // ChatBot
    'chat.greeting': 'Hello! I\'m your MesoSec security assistant. How can I help you today?',
    'chat.placeholder': 'Ask about our services...',
    'chat.send': 'Send',
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.features': 'المميزات',
    'nav.process': 'العملية',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Services
    'service.external': 'اختبار الاختراق الخارجي',
    'service.internal': 'اختبار الاختراق الداخلي',
    'service.webapp': 'اختبار اختراق تطبيقات الويب',
    'service.phishing': 'محاكاة التصيد الاحتيالي',
    
    // Hero
    'hero.title1': 'احمِ',
    'hero.title2': 'قلعتك الرقمية',
    'hero.subtitle': 'اختبار اختراق احترافي ومحاكاة التصيد الاحتيالي لتحديد الثغرات قبل المهاجمين',
    'hero.tagline': 'حماية الأصول الرقمية هي مهمتنا',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'اختبار أمني شامل مصمم خصيصاً لاحتياجاتك',
    'services.external': 'اختبار الاختراق الخارجي',
    'services.internal': 'اختبار الاختراق الداخلي',
    'services.webapp': 'اختبار اختراق تطبيقات الويب',
    'services.phishing': 'محاكاة التصيد الاحتيالي',
    'services.external.title': 'اختبار الاختراق الخارجي',
    'services.external.desc': 'محاكاة هجمات حقيقية على البنية التحتية الخارجية لتحديد ومعالجة الثغرات قبل استغلالها.',
    'services.internal.title': 'اختبار الاختراق الداخلي',
    'services.internal.desc': 'اختبر أمان شبكتك الداخلية من خلال محاكاة التهديدات الداخلية وسيناريوهات الحركة الجانبية.',
    'services.webapp.title': 'اختبار اختراق تطبيقات الويب',
    'services.webapp.desc': 'تقييم أمني شامل لتطبيقات الويب الخاصة بك لتحديد ثغرات OWASP Top 10 والمزيد.',
    'services.phishing.title': 'محاكاة التصيد الاحتيالي',
    'services.phishing.desc': 'درّب موظفيك على التعرف على محاولات التصيد الاحتيالي والرد عليها من خلال حملات محاكاة واقعية.',
    'services.learnMore': 'اعرف المزيد',
    
    // Service Features - External
    'services.features.networkScanning': 'مسح الشبكة',
    'services.features.portAnalysis': 'تحليل المنافذ',
    'services.features.socialEngineering': 'الهندسة الاجتماعية',
    'services.features.wirelessSecurity': 'أمان الشبكات اللاسلكية',
    
    // Service Features - Internal
    'services.features.privilegeEscalation': 'تصعيد الصلاحيات',
    'services.features.lateralMovement': 'الحركة الجانبية',
    'services.features.dataExfiltration': 'تسريب البيانات',
    'services.features.activeDirectoryTesting': 'اختبار Active Directory',
    
    // Service Features - Web App
    'services.features.owaspTop10': 'OWASP Top 10',
    'services.features.sqlInjection': 'حقن SQL',
    'services.features.crossSiteScripting': 'البرمجة النصية عبر المواقع',
    'services.features.authenticationTesting': 'اختبار المصادقة',
    
    // Service Features - Phishing
    'services.features.emailCampaigns': 'حملات البريد الإلكتروني',
    'services.features.landingPages': 'صفحات الهبوط',
    'services.features.userTraining': 'تدريب المستخدمين',
    'services.features.reportingDashboard': 'لوحة التقارير',
    
    // Terminal Titles
    'terminal.external.title': 'فحص_خارجي.sh',
    'terminal.internal.title': 'حركة_جانبية.sh',
    'terminal.webapp.title': 'اختبار_ويب.py',
    'terminal.phishing.title': 'تقرير_الحملة.txt',
    
    // External Pentest Terminal
    'terminal.external.line1': './nmap -sV -sC target.company.com',
    'terminal.external.line2': 'بدء فحص Nmap على target.company.com',
    'terminal.external.line3': 'المنفذ     الحالة  الخدمة        الإصدار',
    'terminal.external.line4': '22/tcp   مفتوح   ssh        OpenSSH 8.2',
    'terminal.external.line5': '80/tcp   مفتوح   http       nginx 1.18.0',
    'terminal.external.line6': '443/tcp  مفتوح   ssl/http   nginx 1.18.0',
    'terminal.external.line7': './check-vulnerabilities --target=target.company.com',
    'terminal.external.line8': 'فحص الثغرات المعروفة...',
    'terminal.external.line9': '[!] تم اكتشاف CVE-2021-XXXX على المنفذ 443',
    'terminal.external.line10': '[+] نجح الاستغلال - تم الوصول',
    
    // Internal Pentest Terminal
    'terminal.internal.line1': './bloodhound -c All -d internal.local',
    'terminal.internal.line2': 'جمع بيانات Active Directory...',
    'terminal.internal.line3': '[+] تم إحصاء 1,247 حساب مستخدم',
    'terminal.internal.line4': '[+] تم اكتشاف 89 جهاز كمبيوتر',
    'terminal.internal.line5': '[+] تم العثور على مسار مسؤول النطاق',
    'terminal.internal.line6': './mimikatz "sekurlsa::logonpasswords"',
    'terminal.internal.line7': 'استخراج بيانات الاعتماد من الذاكرة...',
    'terminal.internal.line8': '[!] تم العثور على 12 كلمة مرور نصية',
    'terminal.internal.line9': '[!] تم استخراج 34 تجزئة NTLM',
    'terminal.internal.line10': '[+] تم تحديد مسار تصعيد الصلاحيات',
    
    // Web App Pentest Terminal
    'terminal.webapp.line1': './sqlmap -u "https://target.com/login" --forms',
    'terminal.webapp.line2': 'اختبار ثغرات حقن SQL...',
    'terminal.webapp.line3': '[!] المعامل "username" به ثغرة',
    'terminal.webapp.line4': '[!] تم اكتشاف قاعدة بيانات MySQL',
    'terminal.webapp.line5': './xss-scanner --url https://target.com/search',
    'terminal.webapp.line6': 'فحص ثغرات XSS...',
    'terminal.webapp.line7': '[!] تم العثور على XSS منعكس في معامل البحث',
    'terminal.webapp.line8': '[!] تم اكتشاف XSS قائم على DOM',
    'terminal.webapp.line9': '[+] تم تحديد 7 مشاكل عالية الخطورة',
    
    // Phishing Campaign Terminal
    'terminal.phishing.line1': '=== نتائج حملة التصيد الاحتيالي ===',
    'terminal.phishing.line2': 'الحملة: اختبار الأمان Q4 2024',
    'terminal.phishing.line3': 'إجمالي المستلمين: 500 موظف',
    'terminal.phishing.line4': 'الرسائل المفتوحة: 387 (77.4%)',
    'terminal.phishing.line5': 'النقرات على الروابط: 142 (28.4%)',
    'terminal.phishing.line6': 'البيانات المرسلة: 43 (8.6%)',
    'terminal.phishing.line7': 'الرسائل المبلغ عنها: 98 (19.6%)',
    'terminal.phishing.line8': '[!] تم تحديد 43 مستخدم عالي الخطورة',
    'terminal.phishing.line9': '[+] تم تعيين التدريب تلقائيًا',
    
    // Features
    'features.title': 'لماذا تختار',
    'features.titleHighlight': 'MesoSec',
    'features.subtitle': 'خبرة رائدة في الصناعة ومنهجيات متطورة',
    'features.certified.title': 'خبراء معتمدون',
    'features.certified.desc': 'فريقنا حاصل على شهادات معترف بها في الصناعة بما في ذلك OSCP و CEH و CISSP.',
    'features.comprehensive.title': 'تقارير شاملة',
    'features.comprehensive.desc': 'توثيق مفصل مع استراتيجيات علاج قابلة للتنفيذ وملخصات تنفيذية.',
    'features.methodology.title': 'منهجية مثبتة',
    'features.methodology.desc': 'اتباع معايير OWASP و NIST و PTES لتقييمات أمنية شاملة.',
    'features.support.title': 'دعم على مدار الساعة',
    'features.support.desc': 'دعم على مدار الساعة أثناء الاختبار وبعده للإجابة على الأسئلة وإرشاد العلاج.',
    'features.compliance.title': 'تكامل معلومات التهديدات',
    'features.compliance.desc': 'الاستفادة من معلومات التهديدات في الوقت الفعلي وأحدث ناقلات الهجوم لمحاكاة التهديدات المتقدمة المستمرة.',
    'features.continuous.title': 'اختبار مستمر',
    'features.continuous.desc': 'جداول اختبار منتظمة لضمان الأمان المستمر مع تطور البنية التحتية الخاصة بك.',
    'features.highlight1.title': 'اختبار اختراق متقدم',
    'features.highlight1.desc': 'تقييم شامل للوضع الأمني',
    'features.highlight2.title': 'محاكاة هجمات واقعية',
    'features.highlight2.desc': 'اختبار الدفاعات بسيناريوهات تهديد حقيقية',
    'features.highlight3.title': 'رؤى قابلة للتنفيذ',
    'features.highlight3.desc': 'إرشادات وأولويات علاج مفصلة',
    
    // Process
    'process.title': 'عمليتنا',
    'process.subtitle': 'نهج منهجي لاختبار الأمان',
    'process.step1.title': 'الاكتشاف والتخطيط',
    'process.step1.desc': 'استشارة أولية لفهم البنية التحتية الخاصة بك وتحديد النطاق والأهداف.',
    'process.step2.title': 'الاستطلاع',
    'process.step2.desc': 'جمع المعلومات حول أنظمتك باستخدام OSINT وتقنيات المسح السلبي.',
    'process.step3.title': 'تقييم الثغرات',
    'process.step3.desc': 'تحديد نقاط الضعف الأمنية المحتملة باستخدام طرق الاختبار الآلية واليدوية.',
    'process.step4.title': 'الاستغلال',
    'process.step4.desc': 'التحقق الآمن من الثغرات من خلال محاولة الاستغلال المتحكم فيه.',
    'process.step5.title': 'إعداد التقارير',
    'process.step5.desc': 'تقديم تقارير شاملة تحتوي على النتائج وتصنيفات المخاطر وإرشادات العلاج.',
    'process.step6.title': 'دعم العلاج',
    'process.step6.desc': 'تقديم الدعم المستمر وإعادة الاختبار للتحقق من تنفيذ الإصلاحات بشكل صحيح.',
    
    // CTA
    'cta.title': 'هل أنت مستعد لتأمين البنية التحتية الخاصة بك؟',
    'cta.subtitle': 'تواصل مع خبراء الأمان لدينا اليوم',
    'cta.contact': 'اتصل بنا',
    
    // Footer
    'footer.tagline': 'حلول أمن سيبراني متقدمة للتهديدات الحديثة',
    'footer.services': 'الخدمات',
    'footer.company': 'الشركة',
    'footer.legal': 'القانونية',
    'footer.about': 'من نحن',
    'footer.careers': 'الوظائف',
    'footer.terms': 'شروط الخدمة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Service Pages - External Pentest
    'external.hero.title1': 'اختبار الاختراق',
    'external.hero.title2': 'الخارجي',
    'external.hero.desc': 'تقييم أمني شامل لأنظمتك وشبكاتك الخارجية لتحديد الثغرات قبل الجهات الخبيثة.',
    'external.overview.title': 'ما هو اختبار الاختراق الخارجي؟',
    'external.overview.desc': 'يحاكي اختبار الاختراق الخارجي هجمات سيبرانية حقيقية على البنية التحتية المواجهة للإنترنت. يحاول خبراء الأمان المعتمدون لدينا اختراق دفاعاتك من منظور خارجي، تماماً كما يفعل المخترق الخبيث. هذه الخدمة ضرورية للمؤسسات التي تريد فهم وتعزيز وضعها الأمني الخارجي.',
    'external.stats.vulnerabilities': 'متوسط الثغرات المكتشفة',
    'external.stats.criticalFixed': 'المشاكل الحرجة المُصلحة',
    'external.stats.breachPrevention': 'معدل منع الاختراق',
    'external.methodology.title': 'منهجيتنا',
    'external.methodology.recon.title': 'استطلاع الشبكة',
    'external.methodology.recon.desc': 'رسم خرائط شامل لسطح الهجوم الخارجي بما في ذلك نطاقات IP والنطاقات والبنية التحتية.',
    'external.methodology.assessment.title': 'تقييم الثغرات',
    'external.methodology.assessment.desc': 'اختبار آلي ويدوي لتحديد نقاط الضعف الأمنية في الأنظمة الخارجية.',
    'external.methodology.exploitation.title': 'الاستغلال والتحقق',
    'external.methodology.exploitation.desc': 'استغلال محكوم للثغرات المكتشفة للتحقق من التأثير الفعلي.',
    'external.methodology.wireless.title': 'اختبار البنية التحتية السحابية',
    'external.methodology.wireless.desc': 'تقييم أمني شامل لبيئات السحابة والحاويات والبنى بدون خوادم للكشف عن الأخطاء التكوينية والثغرات الأمنية.',
    'external.stats.text': 'تمثل الهجمات الخارجية 70٪ من اختراقات البيانات، مستهدفة الثغرات في الأنظمة والبنية التحتية المواجهة للإنترنت.',
    'external.deliverables.title': 'ما ستحصل عليه',
    'external.deliverable1': 'تقرير ملخص تنفيذي',
    'external.deliverable2': 'النتائج التقنية والأدلة',
    'external.deliverable3': 'مصفوفة تقييم المخاطر',
    'external.deliverable4': 'توصيات العلاج',
    'external.deliverable5': 'إعادة الاختبار بعد الإصلاحات',
    'external.deliverable6': 'ربط الامتثال (PCI-DSS, ISO 27001)',
    'external.back': 'العودة للرئيسية',
    
    // Service Pages - Internal Pentest
    'internal.hero.title1': 'اختبار الاختراق',
    'internal.hero.title2': 'الداخلي',
    'internal.hero.desc': 'محاكاة التهديدات الداخلية وهجمات الحركة الجانبية لتقييم وضعك الأمني الداخلي وقدرات الاحتواء.',
    'internal.overview.title': 'ما هو اختبار الاختراق الداخلي؟',
    'internal.overview.desc': 'يقيم اختبار الاختراق الداخلي أمن مؤسستك من منظور التهديد الداخلي. نحاكي سيناريوهات حيث تمكن المهاجم من الوصول إلى شبكتك الداخلية، ونختبر دفاعاتك ضد الحركة الجانبية وتصعيد الصلاحيات ومحاولات سرقة البيانات.',
    'internal.stats.text1': 'يستغرق الاختراق في المتوسط 277 يوماً للكشف عنه',
    'internal.stats.text2': '، حيث غالباً ما يتحرك المهاجمون عبر الشبكات الداخلية دون أن يتم اكتشافهم.',
    'internal.methodology.title': 'منهجيتنا',
    'internal.methodology.network.title': 'اختبار تجزئة الشبكة',
    'internal.methodology.network.desc': 'تقييم فعالية تجزئة الشبكة وضوابط الوصول.',
    'internal.methodology.ad.title': 'تقييم Active Directory',
    'internal.methodology.ad.desc': 'تحديد التكوينات الخاطئة والثغرات في بيئات AD.',
    'internal.methodology.privilege.title': 'تصعيد الصلاحيات',
    'internal.methodology.privilege.desc': 'اختبار القدرة على الحصول على صلاحيات مرتفعة على الأنظمة الداخلية.',
    'internal.methodology.lateral.title': 'الحركة الجانبية',
    'internal.methodology.lateral.desc': 'تقييم قدرات الاحتواء واكتشاف محاولات الحركة الجانبية.',
    'internal.deliverables.title': 'ما ستحصل عليه',
    'internal.deliverable1': 'تقرير تقييم الأمن الداخلي',
    'internal.deliverable2': 'تحليل طوبولوجيا الشبكة',
    'internal.deliverable3': 'مراجعة أمان Active Directory',
    'internal.deliverable4': 'نتائج تصعيد الصلاحيات',
    'internal.deliverable5': 'تحليل الحركة الجانبية',
    'internal.deliverable6': 'خارطة طريق العلاج',
    
    // Service Pages - Web App Pentest
    'webapp.hero.title1': 'اختبار اختراق',
    'webapp.hero.title2': 'تطبيقات الويب',
    'webapp.hero.desc': 'اختبار أمني متعمق لتطبيقات الويب لتحديد ثغرات مثل حقن SQL و XSS وعيوب المصادقة.',
    'webapp.overview.title': 'ما هو اختبار اختراق تطبيقات الويب؟',
    'webapp.overview.desc': 'يركز اختبار اختراق تطبيقات الويب على تحديد الثغرات الأمنية في تطبيقاتك وواجهات برمجة التطبيقات. باستخدام كل من الأدوات الآلية وتقنيات الاختبار اليدوي، نكتشف مشاكل مثل عيوب الحقن والمصادقة المعطلة وتعرض البيانات الحساسة وثغرات منطق الأعمال.',
    'webapp.methodology.title': 'منهجيتنا',
    'webapp.methodology.owasp.title': 'اختبار OWASP Top 10',
    'webapp.methodology.owasp.desc': 'اختبار شامل ضد أحدث ثغرات OWASP Top 10.',
    'webapp.methodology.auth.title': 'اختبار المصادقة والجلسات',
    'webapp.methodology.auth.desc': 'تحليل متعمق لآليات المصادقة وإدارة الجلسات.',
    'webapp.methodology.api.title': 'اختبار أمان API',
    'webapp.methodology.api.desc': 'اختبار واجهات برمجة تطبيقات RESTful و GraphQL للثغرات الأمنية.',
    'webapp.methodology.business.title': 'اختبار منطق الأعمال',
    'webapp.methodology.business.desc': 'تحديد العيوب في سير عمل التطبيق وقواعد الأعمال.',
    'webapp.deliverables.title': 'ما ستحصل عليه',
    'webapp.deliverable1': 'تقرير تقييم قائم على OWASP',
    'webapp.deliverable2': 'إثباتات مفهوم الثغرات',
    'webapp.deliverable3': 'توصيات على مستوى الكود',
    'webapp.deliverable4': 'إرشادات البرمجة الآمنة',
    'webapp.deliverable5': 'تحليل أمان API',
    'webapp.deliverable6': 'التحقق من الامتثال',
    'webapp.stats.text1': 'تطبيقات الويب مستهدفة في 26% من الاختراقات',
    'webapp.stats.text2': ' بسبب الثغرات والتكوينات الخاطئة في الأنظمة المتصلة بالإنترنت.',
    
    // Service Pages - Phishing
    'phishing.hero.title1': 'محاكاة',
    'phishing.hero.title2': 'التصيد الاحتيالي',
    'phishing.hero.desc': 'اختبر وعي الموظفين بمحاكاة التصيد الاحتيالي الواقعية والتدريب الشامل لتعزيز جدارك البشري.',
    'phishing.overview.title': 'ما هي محاكاة التصيد الاحتيالي؟',
    'phishing.overview.desc': 'تختبر محاكاة التصيد الاحتيالي قدرة موظفيك على التعرف على هجمات الهندسة الاجتماعية والاستجابة لها. نقوم بإنشاء حملات تصيد احتيالي واقعية مخصصة لمؤسستك، ونقيس معدلات النقر وسلوك الإبلاغ، ونقدم تدريباً موجهاً للتوعية الأمنية لتقليل عامل المخاطر البشري.',
    'phishing.methodology.title': 'منهجيتنا',
    'phishing.approach.title': 'نهجنا',
    'phishing.approach.subtitle': 'بناء ثقافة التوعية الأمنية',
    'phishing.methodology.campaign.title': 'تصميم حملة مخصصة',
    'phishing.methodology.campaign.desc': 'سيناريوهات تصيد احتيالي مخصصة ذات صلة بصناعتك ومشهد التهديدات.',
    'phishing.methodology.execution.title': 'تنفيذ محكوم',
    'phishing.methodology.execution.desc': 'حملات تصيد احتيالي آمنة وأخلاقية مع تتبع وتحليلات مفصلة.',
    'phishing.methodology.training.title': 'تدريب التوعية الأمنية',
    'phishing.methodology.training.desc': 'برامج تدريب شاملة لتثقيف الموظفين حول التعرف على التهديدات.',
    'phishing.methodology.metrics.title': 'مقاييس الأداء',
    'phishing.methodology.metrics.desc': 'تقارير مفصلة عن سلوك الموظفين والتحسن مع مرور الوقت.',
    'phishing.deliverables.title': 'ما ستحصل عليه',
    'phishing.deliverables.subtitle': 'رؤى شاملة حول التوعية الأمنية لمؤسستك',
    'phishing.deliverable1': 'تقرير أداء الحملة',
    'phishing.deliverable2': 'تحليل سلوك الموظفين',
    'phishing.deliverable3': 'مقاييس إكمال التدريب',
    'phishing.deliverable4': 'لوحة تحكم تسجيل المخاطر',
    'phishing.deliverable5': 'مواد تدريبية مخصصة',
    'phishing.deliverable6': 'توصيات التحسين',
    'phishing.why.title': 'لماذا محاكاة التصيد الاحتيالي؟',
    'phishing.why.desc1': 'موظفوك هم خط الدفاع الأول ضد الهجمات الإلكترونية. يظل التصيد الاحتيالي أحد أكثر ناقلات الهجوم فعالية، حيث يبدأ أكثر من 90٪ من الاختراقات الناجحة برسالة بريد إلكتروني تصيدية.',
    'phishing.why.desc2': 'تساعدك منصة محاكاة التصيد الاحتيالي لدينا على تحديد الموظفين المعرضين للخطر، وتوفير التدريب المستهدف، وقياس فعالية برنامج التوعية الأمنية لديك مع مرور الوقت.',
    'phishing.stats.text1': 'أكثر من 90٪ من الاختراقات الناجحة',
    'phishing.stats.text2': ' تبدأ بهجمات التصيد الاحتيالي، مما يجعل وعي الموظفين خط الدفاع الأول.',
    
    // Service Pages CTA
    'serviceCta.title': 'هل أنت مستعد لتأمين بنيتك التحتية؟',
    'serviceCta.line1': '> لا تنتظر حتى يحدث الاختراق.',
    'serviceCta.line2': '> دع فريق الخبراء لدينا يحدد ويساعد في إصلاح',
    'serviceCta.line3': 'ثغراتك قبل أن يستغلها المهاجمون.',
    'serviceCta.line4': '> لا تتردد في التواصل معنا',
    'serviceCta.line5': 'احمِ شركتك من التهديدات الإلكترونية',
    'serviceCta.line6': 'واعتمد على خبرتنا في الأمن السيبراني.',
    'serviceCta.button': 'اتصل بنا',
    
    // ChatBot
    'chat.greeting': 'مرحباً! أنا مساعد الأمان الخاص بـ MesoSec. كيف يمكنني مساعدتك اليوم؟',
    'chat.placeholder': 'اسأل عن خدماتنا...',
    'chat.send': 'إرسال',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL when Arabic is selected
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
