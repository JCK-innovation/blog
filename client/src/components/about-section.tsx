import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Settings2, CircuitBoard, Gauge } from "lucide-react";
import subLogo from "@assets/Sub_logo_1764461211902.png";

const capabilities = [
  {
    icon: Code2,
    title: "LabVIEW 전문가",
    description: "National Instruments LabVIEW 기반 자동화 소프트웨어 개발 경험",
  },
  {
    icon: Settings2,
    title: "맞춤형 솔루션",
    description: "고객 요구사항에 맞는 Custom Software & System 개발",
  },
  {
    icon: CircuitBoard,
    title: "계측 시스템",
    description: "DAQ, SMU, DMM, Oscilloscope 등 다양한 계측 장비 연동",
  },
  {
    icon: Gauge,
    title: "테스트 자동화",
    description: "ATE/Instrument 테스트 및 측정 장비 소프트웨어 개발",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-muted/30"
      ref={ref}
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4" data-testid="badge-about">
              About Us
            </Badge>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              data-testid="text-about-title"
            >
              미래의 테스트 솔루션을
              <br />
              <span className="text-primary">창조합니다</span>
            </h2>
            <p
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              data-testid="text-about-description"
            >
              JCK Innovation은 2025년 설립된 LabVIEW 기반 자동화 소프트웨어 및
              시스템 계측 솔루션 전문 기업입니다. 계측 자동화를 간단하고 명확하게,
              고객 요구에 맞는 신뢰성 있는 장비와 소프트웨어를 제공합니다.
            </p>

            <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
              <img
                src={subLogo}
                alt="JCK Innovation Logo"
                className="h-16 w-16 object-contain"
                data-testid="img-about-logo"
              />
              <div>
                <p className="font-semibold text-foreground">JCK Innovation</p>
                <p className="text-sm text-muted-foreground">
                  Just Creating tomorrow's Key test solutions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate transition-all duration-300"
                  data-testid={`card-capability-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
