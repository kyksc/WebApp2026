import FadeInSection from "./FadeInSection";
import { FolderOpen } from "lucide-react";
import routemasterImg from "@/assets/routemaster-preview.jpg";

const ProjectsSection = () => {
  const techTags = ["Flutter", "Firebase", "Gemini API", "Dart"];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderOpen className="text-primary" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="rounded-xl bg-card border border-border overflow-hidden card-hover group">
            <div className="relative overflow-hidden">
              <img
                src={routemasterImg}
                alt="루트마스터 프로젝트 미리보기"
                className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                width={800}
                height={512}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-primary tracking-wider uppercase">캡스톤 프로젝트</span>
                <span className="text-xs text-muted-foreground">• 4인 팀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                루트마스터 <span className="text-muted-foreground font-normal text-lg">(RouteMaster)</span>
              </h3>
              <p className="text-secondary-foreground leading-relaxed mb-5">
                사용자의 취향을 분석하여 최적의 여행 코스를 추천하는 AI 기반 맞춤형 여행 플래너 서비스.
                Flutter와 Firebase를 활용한 모바일 앱으로 개발하였으며, Gemini API를 통해 사용자 맞춤 여행 코스를 생성합니다.
              </p>
              <a
                href="https://github.com/Sungdo-Noh/RouteMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-5"
              >
                <FolderOpen size={14} />
                GitHub Repository →
              </a>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
