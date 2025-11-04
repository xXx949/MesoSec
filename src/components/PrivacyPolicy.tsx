import image_3ee119e5e2e17dd6a712e46e0f61509dbde85556 from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';
import { motion } from 'motion/react';
import { ArrowLeft, Lock } from 'lucide-react';
import { ScanLines } from './ScanLines';
import { Button } from './ui/button';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
                  <img src={image_3ee119e5e2e17dd6a712e46e0f61509dbde85556} alt="MesoSec Logo" className="w-12 h-12" />
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
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-4xl text-white mb-2">Privacy Policy</h1>
                  <p className="text-slate-400">Last Updated: October 27, 2025</p>
                </div>
              </div>
            </div>

            {/* Privacy Content */}
            <div className="space-y-8 text-slate-300">
              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">01.</span>
                  Introduction
                </h2>
                <p className="mb-4">
                  At MesoSec, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cybersecurity services.
                </p>
                <p>
                  We are committed to protecting your personal information and your right to privacy in accordance with applicable data protection laws and regulations.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">02.</span>
                  Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information that you provide directly to us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Business Information:</strong> Company details, industry, size, security requirements</li>
                  <li><strong>Technical Information:</strong> IP addresses, system configurations, network architecture (only as required for service delivery)</li>
                  <li><strong>Communication Records:</strong> Correspondence, support tickets, service requests</li>
                  <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors)</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">03.</span>
                  How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our cybersecurity services</li>
                  <li>Conduct penetration testing and security assessments as authorized</li>
                  <li>Generate reports and deliver findings to you</li>
                  <li>Communicate with you about services, updates, and security alerts</li>
                  <li>Process payments and maintain billing records</li>
                  <li>Comply with legal obligations and protect against fraud</li>
                  <li>Improve our methodologies and service offerings (using anonymized data)</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">04.</span>
                  Data Security
                </h2>
                <p className="mb-4">
                  We implement industry-leading security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Secure, encrypted storage of all client data and findings</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security audits and penetration testing of our own systems</li>
                  <li>Employee background checks and security training</li>
                  <li>Secure disposal of data when no longer needed</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">05.</span>
                  Information Sharing
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in service delivery (under strict confidentiality agreements)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                  <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our clients or others</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">06.</span>
                  Data Retention
                </h2>
                <p className="mb-4">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fulfill the purposes outlined in this privacy policy</li>
                  <li>Comply with legal, accounting, or reporting requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain service quality and historical records as needed</li>
                </ul>
                <p className="mt-4">
                  Typically, we retain client data for 7 years after service completion, unless a longer retention period is required by law or requested by the client.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">07.</span>
                  Your Privacy Rights
                </h2>
                <p className="mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
                </ul>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">08.</span>
                  Cookies and Tracking
                </h2>
                <p className="mb-4">
                  Our website uses cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enhance user experience and website functionality</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Remember your preferences and settings</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Please see our Cookie Policy for more details.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">09.</span>
                  International Data Transfers
                </h2>
                <p>
                  If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">10.</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">11.</span>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-cyan-400">
                  <p>Email: privacy@mesosec.io</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Security Blvd, San Francisco, CA 94102</p>
                </div>
              </section>
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
