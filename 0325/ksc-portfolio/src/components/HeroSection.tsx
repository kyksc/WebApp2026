import { ArrowDown, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(170 80% 50%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-15 blur-[100px]" style={{ background: "hsl(200 95% 55%)" }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase">Software Engineer</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          안녕하세요,{" "}
          <span className="text-gradient">백엔드 개발자</span>
          <br />
          김상철입니다.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          안정적인 서버 아키텍처와 효율적인 데이터베이스 설계에 깊은 관심을 가진 예비 개발자입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground glow-primary hover:scale-105 transition-transform duration-200"
          >
            내 프로젝트 보기
            <ArrowDown size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
          >
            GitHub 방문
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
