import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Suspense, lazy, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  language: string;
}

const PrivacyPolicyDialogContent = lazy(() => import("./PrivacyPolicyDialogContent"));
const TermsDialogContent = lazy(() => import("./TermsDialogContent"));

const Footer = ({ language }: FooterProps) => {
  const isHindi = language === "hi";
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/100xdropship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    },
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/918858185272?text=Hello!%20I'm%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%20my%20project?", 
      label: "WhatsApp",
      color: "hover:bg-green-500"
    },
    { 
      icon: Mail, 
      href: "mailto:100xdropship@gmail.com", 
      label: "Email",
      color: "hover:bg-blue-500"
    },
  ];

  const quickLinks = [
    { name: isHindi ? "सेवाएं" : "Services", path: "/services" },
    { name: isHindi ? "पोर्टफोलियो" : "Portfolio", path: "/portfolio" },
    { name: isHindi ? "संपर्क" : "Contact", path: "/contact" },
    { name: isHindi ? "गोपनीयता नीति" : "Privacy Policy", action: () => setShowPrivacy(true) },
    { name: isHindi ? "सेवा की शर्तें" : "Terms of Service", action: () => setShowTerms(true) },
    { name: isHindi ? "साइटमैप" : "Sitemap", path: "/sitemap" },
  ];

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your newsletter service
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="asn-container asn-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="asn-headline text-3xl text-background">
              100XDROPSHIP
            </h3>
            <p className="asn-body text-background/80 max-w-md leading-relaxed">
              {isHindi 
                ? "आपका डिजिटल साम्राज्य यहाँ शुरू होता है। अंतर्राष्ट्रीय स्तर पर विश्वसनीय व्यापारिक भागीदार।"
                : "Your digital empire starts here. International trusted business partner delivering excellence worldwide."
              }
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 border border-background/20 hover:border-background transition-all duration-300 rounded-full ${social.color} hover:text-white`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="asn-headline text-xl text-background">
              {isHindi ? "संपर्क करें" : "GET IN TOUCH"}
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-background/60 flex-shrink-0" />
                <a href="mailto:100xdropship@gmail.com" className="asn-body text-background/80 hover:text-background transition-colors break-all">
                  100xdropship@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-background/60 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="https://wa.me/918858185272?text=Hi!%20I%20want%20to%20call%20you%20on%20WhatsApp.%20Are%20you%20available?" target="_blank" rel="noopener noreferrer" className="asn-body text-background/80 hover:text-background transition-colors">
                    +91 88581 85272
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-background/60" />
                <span className="asn-body text-background/80">
                  Uttar Pradesh, Prayagraj, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="asn-headline text-xl text-background">
              {isHindi ? "त्वरित लिंक" : "QUICK LINKS"}
            </h4>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                link.action ? (
                  <button
                    key={index}
                    onClick={link.action}
                    className="block asn-body text-background/80 hover:text-background transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="block asn-body text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h4 className="asn-headline text-xl text-background">
              {isHindi ? "न्यूज़लेटर" : "NEWSLETTER"}
            </h4>
            
            <div className="space-y-4">
              <p className="asn-body text-background/80 text-sm">
                {isHindi 
                  ? "डिजिटल विकास टिप्स के बारे में जानकारी रखें।"
                  : "Stay in the know about digital growth tips."
                }
              </p>
              
              <form onSubmit={handleNewsletterSignup} className="space-y-3">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder={isHindi ? "आपका ईमेल" : "Your email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:border-background"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-background text-foreground hover:bg-background/90 px-4"
                    disabled={isSubscribed}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 text-sm">
                    {isHindi ? "सफलतापूर्वक सब्सक्राइब किया गया!" : "Successfully subscribed!"}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="asn-body text-background/60 text-sm">
            © 2025 100XDROPSHIP. {isHindi ? "सभी अधिकार सुरक्षित।" : "All rights reserved."}
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="asn-body text-background/40 text-xs">
              {isHindi ? "वेबसाइट द्वारा" : "Powered by"}
            </span>
            <a 
              href="https://100xdropship.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-background/60 hover:text-background transition-colors text-sm"
            >
              <span>100XDROPSHIP</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Privacy Policy Modal */}
        <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
          <Suspense fallback={<div className="flex justify-center items-center min-h-[20vh] text-lg">Loading...</div>}>
            <PrivacyPolicyDialogContent />
          </Suspense>
        </Dialog>

        {/* Terms of Service Modal */}
        <Dialog open={showTerms} onOpenChange={setShowTerms}>
          <Suspense fallback={<div className="flex justify-center items-center min-h-[20vh] text-lg">Loading...</div>}>
            <TermsDialogContent />
          </Suspense>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;