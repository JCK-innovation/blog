import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Gauge,
  Cpu,
  BarChart3,
  Zap,
  Monitor,
  Settings,
} from "lucide-react";

const projects = [
  {
    id: "silicon-thickness",
    title: "반사율을 통한 실리콘 두께측정 장비",
    titleEn: "Silicon Thickness Measurement via Reflectance",
    category: "Customize Program",
    description:
      "LAB 환경에서 반사율 기반의 정밀한 실리콘 두께 측정 프로그램. 광학 센서 기반 측정 및 실시간 데이터 분석 기능 포함.",
    technologies: ["LabVIEW", "DAQ", "광학 센서", "신호 처리"],
    icon: Activity,
  },
  {
    id: "film-thickness",
    title: "투과율을 통한 차량용 필름 두께측정 장비",
    titleEn: "Vehicle Film Thickness Measurement via Transmittance",
    category: "Customize Program",
    description:
      "차량용 필름의 생산 공정에 최적화된 투과율 기반 두께 측정 시스템. 생산 라인 통합 및 품질 관리 자동화 기능.",
    technologies: ["LabVIEW", "DAQ", "광학 센서", "MES 연동"],
    icon: Zap,
  },
  {
    id: "esd-monitoring",
    title: "ESD 실시간 모니터링 프로그램",
    titleEn: "ESD Real-time Monitoring System",
    category: "Customize Program",
    description:
      "정전기 위험 관리를 위한 실시간 모니터링 및 경보 시스템. 제조 현장의 정전기 환경 측정 및 안전성 강화.",
    technologies: ["LabVIEW", "센서 네트워크", "경보 시스템", "데이터 로깅"],
    icon: Monitor,
  },
  {
    id: "semiconductor-inspection",
    title: "반도체 품질 검사 System Instrument",
    titleEn: "Semiconductor Quality Inspection",
    category: "검사 자동화",
    description:
      "반도체 칩과 패키지의 전기적 특성 및 기능성을 검증하는 통합 검사 시스템. 고속 테스트 및 정확한 판정 기능.",
    technologies: ["LabVIEW", "SMU", "DAQ", "자동 판정"],
    icon: Cpu,
  },
  {
    id: "ev-battery-case",
    title: "EV 배터리 케이스 검사 System Instrument",
    titleEn: "EV Battery Case Inspection System",
    category: "검사 자동화",
    description:
      "전기차 배터리 케이스의 외형 검사 및 기계적 특성 검증 시스템. 자동 치수 측정 및 결함 감지 기능.",
    technologies: ["LabVIEW", "비전 검사", "기계 센서", "자동 로딩"],
    icon: Zap,
  },
  {
    id: "ev-pcb-inspection",
    title: "EV 자동차 ICCU 및 Inverter PCB 검사",
    titleEn: "EV Vehicle ICCU & Inverter PCB Inspection",
    category: "검사 자동화",
    description:
      "전기차 제어 보드(ICCU)와 인버터 PCB의 전기적 기능 검사 및 안전성 검증. 고전압 안전 기준 준수.",
    technologies: ["LabVIEW", "고전압 테스트", "패턴 검사", "안전 인증"],
    icon: Settings,
  },
  {
    id: "railway-display",
    title: "철도 Display PCB 생산용 검사",
    titleEn: "Railway Display PCB Inspection",
    category: "검사 자동화",
    description:
      "철도 차량 내 디스플레이 PCB의 기능 및 신뢰성 검사 시스템. 국제 철도 안전 기준 준수.",
    technologies: ["LabVIEW", "패턴 테스트", "내구성 검사", "기록 시스템"],
    icon: Monitor,
  },
  {
    id: "settop-box-test",
    title: "Set-Top Box 생산용 검사 System",
    titleEn: "Set-Top Box Production Test System",
    category: "검사 자동화",
    description:
      "디지털 방송 수신기(Set-Top Box)의 기능성 및 호환성 검사 자동화 시스템. 방송 신호 수신 및 출력 검증.",
    technologies: ["LabVIEW", "신호 테스트", "호환성 검사", "자동 배분"],
    icon: Cpu,
  },
];

const categoryColors: Record<string, string> = {
  "Customize Program": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "검사 자동화": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
};

function ProjectCard({
  project,
  isInView,
  delay,
}: {
  project: (typeof projects)[0];
  isInView: boolean;
  delay: number;
}) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Card
        className="h-full overflow-visible hover-elevate transition-all duration-300"
        data-testid={`card-project-${project.id}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <Badge
              variant="outline"
              className={`${categoryColors[project.category] || ""} text-xs font-medium`}
              data-testid={`badge-category-${project.id}`}
            >
              {project.category}
            </Badge>
          </div>

          <h3
            className="text-xl font-bold text-foreground mb-3"
            data-testid={`text-title-${project.id}`}
          >
            {project.title}
          </h3>
          <p
            className="text-muted-foreground text-sm leading-relaxed mb-4"
            data-testid={`text-description-${project.id}`}
          >
            {project.description}
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                기술 스택
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies && project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono"
                    data-testid={`badge-technology-${project.id}-${techIndex}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 md:py-32 bg-muted/30"
      data-testid="section-portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            프로젝트 사례
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            JCK Innovation이 완료한 LabVIEW 기반 자동화 솔루션 및<br className="hidden md:inline" />
            테스트 시스템 구축 사례를 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isInView={isInView}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            더 많은 프로젝트 사례와 상세 정보가 필요하시면{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="link-portfolio-contact"
            >
              문의하기
            </a>
            를 통해 연락해 주세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
