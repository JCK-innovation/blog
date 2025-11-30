import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Settings,
  Shield,
  TestTube,
  Wrench,
  ClipboardList,
  Cable,
  Thermometer,
} from "lucide-react";

const services = [
  {
    id: "software",
    title: "Custom Software",
    subtitle: "계측 자동화를 간단하고 명확하게",
    description: "LabVIEW 기반으로 자동화 프로그램 개발",
    icon: Code2,
    features: [
      {
        title: "데이터 수집 및 제어 시스템",
        items: ["DAQ (Data Acquisition)", "SMU (Source Measure Unit)", "DMM (Digital Multimeter)", "Oscilloscope"],
        icon: Database,
      },
      {
        title: "테스트/측정 장비 소프트웨어",
        items: ["ATE (Automatic Test Equipment)", "Instrument Control", "Test Sequence Automation"],
        icon: TestTube,
      },
    ],
  },
  {
    id: "instrument",
    title: "System Instrument",
    subtitle: "고객 요구에 맞는 신뢰성 있는 장비",
    description: "맞춤형 시스템 구성 및 제공",
    icon: Cpu,
    categories: [
      {
        title: "Control",
        icon: Settings,
        items: ["계측 장비 랙 구성", "TEST JIG 제작", "Test Sequence", "Equipment Control", "JIG Control"],
      },
      {
        title: "Data Report",
        icon: FileText,
        items: ["Real-time Log", "MES Connection", "Automation Report"],
      },
      {
        title: "Safety / Quality",
        icon: Shield,
        items: ["배선 (Wiring)", "접지 (Grounding)", "열관리 (Thermal Management)"],
      },
      {
        title: "Document",
        icon: ClipboardList,
        items: ["Plan & Scheduling", "Manual", "Automation Report"],
      },
    ],
  },
];

function ServiceCard({
  service,
  isInView,
  delay,
}: {
  service: (typeof services)[0];
  isInView: boolean;
  delay: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden"
        data-testid={`card-service-${service.id}`}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                {service.title}
              </CardTitle>
              <p className="text-primary font-medium mb-2">{service.subtitle}</p>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {"features" in service && service.features ? (
            <div className="space-y-6">
              {service.features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-lg bg-muted/50 border border-border"
                  data-testid={`feature-${service.id}-${idx}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {feature.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.categories?.map((category, idx) => (
                <div
                  key={category.title}
                  className="p-4 rounded-lg bg-muted/50 border border-border"
                  data-testid={`category-${service.id}-${idx}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section
      id="services"
      className="py-20 md:py-32"
      ref={ref}
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-services">
            Services
          </Badge>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            전문 서비스
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-services-description"
          >
            LabVIEW 기반 자동화 소프트웨어부터 맞춤형 시스템 계측 장비까지,
            <br className="hidden md:block" />
            모든 테스트 솔루션을 제공합니다.
          </p>
        </motion.div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8"
          data-testid="tabs-services"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all" data-testid="tab-all">
              전체
            </TabsTrigger>
            <TabsTrigger value="software" data-testid="tab-software">
              Software
            </TabsTrigger>
            <TabsTrigger value="instrument" data-testid="tab-instrument">
              Instrument
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isInView={isInView}
                  delay={0.2 + idx * 0.1}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                service={services[0]}
                isInView={isInView}
                delay={0.2}
              />
            </div>
          </TabsContent>

          <TabsContent value="instrument" className="mt-0">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                service={services[1]}
                isInView={isInView}
                delay={0.2}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
