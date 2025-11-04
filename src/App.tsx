import { useState, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageLoader } from "./components/PageLoader";
import { ChatBot } from "./components/ChatBot";
import { TermsOfService } from "./components/TermsOfService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { CookiePolicy } from "./components/CookiePolicy";
import { ExternalPenTestPage } from "./pages/external-pentest/index";
import { InternalPenTestPage } from "./pages/internal-pentest/index";
import { WebAppPenTestPage } from "./pages/webapp-pentest/index";
import { PhishingSimPage } from "./pages/phishing-sim/index";

type Page = "home" | "terms" | "privacy" | "cookies" | "external-pentest" | "internal-pentest" | "webapp-pentest" | "phishing-sim";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  const goHome = () => {
    setCurrentPage("home");
  };

  // Render based on current page
  const renderPage = () => {
    switch (currentPage) {
      case "terms":
        return <TermsOfService onBack={goHome} />;
      case "privacy":
        return <PrivacyPolicy onBack={goHome} />;
      case "cookies":
        return <CookiePolicy onBack={goHome} />;
      case "external-pentest":
        return <ExternalPenTestPage onBack={goHome} onNavigate={navigateToPage} />;
      case "internal-pentest":
        return <InternalPenTestPage onBack={goHome} onNavigate={navigateToPage} />;
      case "webapp-pentest":
        return <WebAppPenTestPage onBack={goHome} onNavigate={navigateToPage} />;
      case "phishing-sim":
        return <PhishingSimPage onBack={goHome} onNavigate={navigateToPage} />;
      case "home":
      default:
        return (
          <>
            <Navigation onNavigate={navigateToPage} />
            <Hero />
            <Services onNavigate={navigateToPage} />
            <Features />
            <Process />
            <CTA />
            <Footer onNavigate={navigateToPage} />
            <ScrollToTop />
            <ChatBot />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <PageLoader />
      <div className="min-h-screen bg-slate-950">
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}