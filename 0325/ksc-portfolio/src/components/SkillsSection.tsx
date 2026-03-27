import FadeInSection from "./FadeInSection";
import { Code2, Database, Layout, Wrench } from "lucide-react";

const categories = [
  {
    title: "Backend",
    icon: Code2,
    skills: ["Java", "PHP"],
    color: "primary",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["Oracle SQL", "PL/SQL"],
    color: "accent",
  },
  {
    title: "Frontend / Mobile",
    icon: Layout,
    skills: ["React", "Flutter"],
    color: "primary",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Android Studio", "Git", "VS Code"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Code2 className="text-accent" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Tech Skills</h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <FadeInSection key={cat.title} delay={i * 100}>
              <div className="rounded-xl bg-card border border-border p-6 card-hover h-full">
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className={cat.color === "primary" ? "text-primary" : "text-accent"} size={22} />
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-lg text-sm font-mono font-medium ${
                        cat.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-accent/10 text-accent border border-accent/20"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
