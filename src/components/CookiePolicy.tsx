import { motion } from 'motion/react';
import { ArrowLeft, Cookie } from 'lucide-react';
import { ScanLines } from './ScanLines';
import { Button } from './ui/button';
import logoImage from 'figma:asset/3ee119e5e2e17dd6a712e46e0f61509dbde85556.png';

interface CookiePolicyProps {
  onBack: () => void;
}

export function CookiePolicy({ onBack }: CookiePolicyProps) {
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
                  <Cookie className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-4xl text-white mb-2">Cookie Policy</h1>
                  <p className="text-slate-400">Last Updated: October 27, 2025</p>
                </div>
              </div>
            </div>

            {/* Cookie Content */}
            <div className="space-y-8 text-slate-300">
              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">01.</span>
                  What Are Cookies
                </h2>
                <p className="mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies help us understand how you use our website, remember your preferences, and improve your overall experience. This Cookie Policy explains what cookies are, how we use them, and how you can control them.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">02.</span>
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl text-cyan-400 mb-2">Essential Cookies</h3>
                    <p className="mb-2">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Session management</li>
                      <li>Security authentication</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl text-cyan-400 mb-2">Performance Cookies</h3>
                    <p className="mb-2">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Analytics and statistics</li>
                      <li>Page load times</li>
                      <li>Error tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl text-cyan-400 mb-2">Functionality Cookies</h3>
                    <p className="mb-2">
                      These cookies allow our website to remember choices you make (such as your language or region) and provide enhanced, more personalized features.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>User preferences</li>
                      <li>Language settings</li>
                      <li>Theme preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl text-cyan-400 mb-2">Targeting/Advertising Cookies</h3>
                    <p className="mb-2">
                      These cookies are used to deliver content more relevant to you and your interests. They may be used to deliver targeted advertising or limit the number of times you see an advertisement.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Ad personalization</li>
                      <li>Retargeting campaigns</li>
                      <li>Marketing analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">03.</span>
                  Third-Party Cookies
                </h2>
                <p className="mb-4">
                  We may also use third-party cookies from trusted partners to enhance our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                  <li><strong>Marketing Partners:</strong> To deliver relevant advertising and measure campaign effectiveness</li>
                  <li><strong>Customer Support Tools:</strong> To provide chat and support services</li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies, and we have no control over their cookies. We recommend reviewing their policies directly.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">04.</span>
                  How Long Cookies Last
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-2">Session Cookies</h3>
                    <p>
                      These are temporary cookies that expire when you close your browser. They are used to maintain your session and enable core website functionality.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-2">Persistent Cookies</h3>
                    <p>
                      These cookies remain on your device for a set period (usually between 30 days to 2 years) or until you manually delete them. They remember your preferences and settings across multiple visits.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">05.</span>
                  How to Control Cookies
                </h2>
                <p className="mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg text-cyan-400 mb-2">Browser Settings</h3>
                    <p className="mb-2">
                      Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Block all cookies</li>
                      <li>Accept only first-party cookies</li>
                      <li>Delete cookies after each session</li>
                      <li>Set specific preferences for different websites</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-cyan-400 mb-2">Browser-Specific Instructions</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                      <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-cyan-400 mb-2">Cookie Preference Center</h3>
                    <p>
                      You can also manage your cookie preferences using our Cookie Preference Center, accessible through the banner on your first visit or by clicking the cookie settings link in our footer.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded">
                  <p className="text-sm text-yellow-200">
                    <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website. Some features may not function properly if cookies are disabled.
                  </p>
                </div>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">06.</span>
                  Do Not Track Signals
                </h2>
                <p>
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we respect your privacy choices through other cookie control methods described above.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">07.</span>
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>
              </section>

              <section className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">08.</span>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
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
