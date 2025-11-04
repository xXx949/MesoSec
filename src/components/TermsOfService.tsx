import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';
import { ScanLines } from './ScanLines';
import { Button } from './ui/button';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <ScanLines />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-blue-950/10" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  onClick={onBack}
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <div className="flex items-center gap-3">
                  <img src={logoImage} alt="MesoSec Logo" className="w-12 h-12" />
                  <span className="text-xl text-white font-mono">
                    MESO<span className="text-cyan-400">SEC</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Title */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-4xl text-white mb-2">Terms of Service</h1>
                  <p className="text-slate-400">Last Updated: October 27, 2025</p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-8 text-slate-300">
              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">01.</span>
                  Agreement to Terms
                </h2>
                <p className="mb-4">
                  By accessing and using MesoSec's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our cybersecurity services, including but not limited to penetration testing, security assessments, and phishing simulations.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">02.</span>
                  Service Description
                </h2>
                <p className="mb-4">
                  MesoSec provides professional cybersecurity services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>External Penetration Testing</li>
                  <li>Internal Penetration Testing</li>
                  <li>Web Application Penetration Testing</li>
                  <li>Phishing Simulation Campaigns</li>
                  <li>Security Assessments and Consulting</li>
                </ul>
                <p className="mt-4">
                  All services are performed by certified security professionals following industry-standard methodologies and best practices.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">03.</span>
                  Client Responsibilities
                </h2>
                <p className="mb-4">
                  Clients engaging our services agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide written authorization for all testing activities</li>
                  <li>Define the scope of testing clearly and accurately</li>
                  <li>Ensure all necessary permissions are obtained for testing infrastructure</li>
                  <li>Not hold MesoSec liable for any system downtime during authorized testing</li>
                  <li>Maintain confidentiality of all findings and reports</li>
                  <li>Promptly address critical vulnerabilities identified during testing</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">04.</span>
                  Confidentiality and Data Protection
                </h2>
                <p className="mb-4">
                  MesoSec is committed to protecting your confidential information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All client data is handled in accordance with industry standards and applicable laws</li>
                  <li>Testing results and findings are encrypted and securely transmitted</li>
                  <li>We maintain strict confidentiality regarding all discovered vulnerabilities</li>
                  <li>Data is retained only as long as necessary and securely disposed thereafter</li>
                  <li>Non-disclosure agreements are available upon request</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">05.</span>
                  Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>MesoSec shall not be liable for any indirect, incidental, or consequential damages</li>
                  <li>Our liability is limited to the amount paid for the specific service engagement</li>
                  <li>We are not responsible for damages resulting from client's failure to implement recommendations</li>
                  <li>Testing is performed in good faith but cannot guarantee discovery of all vulnerabilities</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">06.</span>
                  Testing Scope and Authorization
                </h2>
                <p className="mb-4">
                  All penetration testing activities:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Must be explicitly authorized in writing before commencement</li>
                  <li>Are strictly limited to the defined scope and target systems</li>
                  <li>May be halted immediately if unauthorized access is detected</li>
                  <li>Require client to obtain all necessary third-party permissions</li>
                  <li>Follow rules of engagement agreed upon before testing begins</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">07.</span>
                  Payment Terms
                </h2>
                <p className="mb-4">
                  Payment and billing terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Services are billed according to the agreed-upon statement of work</li>
                  <li>Payment is typically due within 30 days of invoice date</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Client retains ownership of all deliverables upon full payment</li>
                  <li>Cancellation terms are defined in individual service agreements</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">08.</span>
                  Intellectual Property
                </h2>
                <p className="mb-4">
                  Regarding intellectual property rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>MesoSec retains ownership of our methodologies, tools, and techniques</li>
                  <li>Client owns all specific findings and reports related to their systems</li>
                  <li>MesoSec may use anonymized data for research and service improvement</li>
                  <li>No case studies or public disclosure without explicit client consent</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">09.</span>
                  Modifications to Terms
                </h2>
                <p>
                  MesoSec reserves the right to modify these terms at any time. We will notify clients of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">10.</span>
                  Contact Information
                </h2>
                <p className="mb-4">
                  For questions regarding these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-cyan-400">
                  <p>Email: legal@mesosec.io</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Security Blvd, San Francisco, CA 94102</p>
                </div>
              </section>

              {/* Acceptance */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 mt-8">
                <p className="text-sm text-slate-400">
                  By engaging MesoSec's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and MesoSec.
                </p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 flex justify-center">
              <Button
                onClick={onBack}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
