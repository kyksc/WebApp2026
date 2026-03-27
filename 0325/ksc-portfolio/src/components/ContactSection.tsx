import FadeInSection from "./FadeInSection";
import { Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-10">함께 일하고 싶으시다면 연락주세요.</p>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:endwl2510@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
              <span className="font-mono text-sm">endwl2510@gmail.com</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <Github size={20} />
              <span className="font-mono text-sm">GitHub</span>
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <p className="mt-16 text-sm text-muted-foreground">
            © 2026 김상철. All rights reserved.
          </p>
        </FadeInSection>
      </div>
    </footer>
  );
};

export default ContactSection;
