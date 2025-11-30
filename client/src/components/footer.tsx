import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";
import subLogo from "@assets/Sub_logo_1764461211902.png";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Custom Software", href: "#services" },
    { label: "System Instrument", href: "#services" },
    { label: "LabVIEW 개발", href: "#services" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={subLogo}
                alt="JCK Innovation"
                className="h-12 w-12 object-contain"
                data-testid="img-footer-logo"
              />
              <div>
                <p className="font-bold text-foreground">JCK Innovation</p>
                <p className="text-xs text-muted-foreground">
                  Just Creating tomorrow's Key test solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              LabVIEW 기반 자동화 Software 개발 및 Custom Software & System
              Instrument 개발 전문 기업입니다. 미래의 테스트 솔루션을 창조합니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 text-primary" />
                <span>LabVIEW</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cpu className="w-4 h-4 text-primary" />
                <span>Automation</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-service-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-muted-foreground"
              data-testid="text-copyright"
            >
              © 2025 JCK Innovation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Innovation in Test Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
