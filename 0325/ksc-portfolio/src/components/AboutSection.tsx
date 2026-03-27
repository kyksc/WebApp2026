import FadeInSection from "./FadeInSection";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="text-primary" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="rounded-xl bg-card border border-border p-8 md:p-10 card-hover">
            <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground">
              경성대학교 소프트웨어학과에 재학 중이며, 백엔드 중심의 웹/앱 서비스 개발을 주력으로 학습하고 있습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["경성대학교", "소프트웨어학과", "백엔드 개발"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;
