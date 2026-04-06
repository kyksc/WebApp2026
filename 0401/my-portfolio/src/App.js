import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

const Header = () => (
  <header className="header" style={{ padding: '20px 0', borderBottom: '1px solid #eee' }}>
    <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</div>
    <nav className="nav">
      <a href="https://github.com/kyksc" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', borderRadius: '24px', marginTop: '40px' }}>
    <h1 className="hero-title" style={{ fontSize: '2.5rem', margin: 0 }}>Antigravity Concept Site</h1>
  </section>
);

const About = () => (
  <section className="hero" style={{ padding: '40px 0', textAlign: 'left' }} id="about">
    <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>About Me</h3>
    <p className="hero-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>개발자 되고싶은 김상철.</p>
  </section>
);

const Footer = () => (
  <footer className="footer" style={{ padding: '20px', marginTop: '50px', fontSize: '0.8rem' }}>
    <div style={{ marginBottom: "16px" }}>
      <a href="https://github.com/kyksc" target="_blank" rel="noopener noreferrer" style={{ color: "#1A73E8", textDecoration: "none", fontWeight: "600", fontSize: '1rem' }}>
        👉 GitHub 방문하기
      </a>
    </div>
    <p>© 2026 My Portfolio.</p>
  </footer>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <section className="project-list" style={{ padding: '20px 0' }} id="projects">
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>My Projects</h3>
          <div className="projects-grid">
            <ProjectCard
              title="AI 여행 플래너"
              tech="React, Firebase"
              description="팀 프로젝트로 진행 중인 AI 기반 여행 일정 관리 앱입니다."
            />
            <ProjectCard
              title="정보처리기사 스터디 노트"
              tech="HTML, CSS"
              description="자격증 공부 내용을 정리한 정적 사이트입니다."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
