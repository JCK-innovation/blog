import { motion } from "framer-motion";
import { ChevronDown, Cpu, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import mainLogo from "@assets/Main_logo - 복사본_1764535319039.png";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background blobs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated accent elements */}
        <motion.div 
          className="absolute top-20 left-10 opacity-20 dark:opacity-30"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Cpu className="w-8 h-8 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 opacity-20 dark:opacity-30"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Settings className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: "8s" }} />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-1/4 opacity-20 dark:opacity-30"
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Zap className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.img
            src={mainLogo}
            alt="JCK Innovation"
            className="h-96 w-auto mb-8 relative z-10"
            style={{ maxHeight: '384px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="img-hero-logo"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Est. 2025
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-hero-title"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
              Just Creating
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tomorrow's Key
            </span>
            <br />
            <span className="text-foreground">Test Solutions</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-testid="text-hero-subtitle"
          >
            LabVIEW 기반 자동화 Software 개발 및
            <br className="hidden md:block" />
            Custom Software & System Instrument 개발 전문 기업
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="text-base px-8"
              data-testid="button-explore-services"
            >
              서비스 살펴보기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-base px-8"
              data-testid="button-contact-us"
            >
              문의하기
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
