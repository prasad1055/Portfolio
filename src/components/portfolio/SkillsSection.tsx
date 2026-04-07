import { useState } from "react";

const primarySkills = [
  { name: "Python", level: 80, icon: "🐍" },
  { name: "Data Analysis", level: 75, icon: "📊" },
  { name: "Mathematics", level: 90, icon: "∑" },
  { name: "Problem Solving", level: 88, icon: "🧩" },
  { name: "SQL", level: 70, icon: "🗄️" },
  { name: "Statistics", level: 75, icon: "📈" },
];

const developingSkills = [
  { name: "Machine Learning", icon: "🤖", tags: ["Scikit-learn", "SVM", "Random Forest"] },
  { name: "Artificial Intelligence", icon: "🧠", tags: ["Neural Networks", "Deep Learning"] },
  { name: "Data Science", icon: "🔬", tags: ["NumPy", "Pandas", "Matplotlib"] },
  { name: "Computer Vision", icon: "👁️", tags: ["OpenCV", "Image Processing"] },
  { name: "NLP / OCR", icon: "📝", tags: ["Tesseract", "Text Extraction"] },
  { name: "Data Visualization", icon: "📉", tags: ["Seaborn", "Plotly"] },
];

function SkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs text-cyan font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden border border-border">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${level}%`,
            background: hovered
              ? "linear-gradient(90deg, hsl(192 100% 50%), hsl(210 100% 65%))"
              : "linear-gradient(90deg, hsl(192 80% 40%), hsl(210 80% 55%))",
            boxShadow: hovered ? "0 0 8px hsl(192 100% 50% / 0.5)" : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Technical Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills &{" "}
            <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary Skills with bars */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan inline-block shadow-glow-cyan-sm" />
              Core Skills
            </h3>
            <div className="space-y-5">
              {primarySkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Developing Skills as cards */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-muted-foreground inline-block" />
              Developing Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {developingSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-xl border border-border bg-surface hover:border-cyan/40 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-sm text-foreground">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-cyan/10 text-cyan/80 border border-cyan/20 group-hover:border-cyan/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools row */}
        <div className="mt-14 p-6 rounded-2xl border border-border bg-surface">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Tools & Environments</p>
          <div className="flex flex-wrap gap-3">
            {["VS Code", "Jupyter Notebook", "Git", "GitHub", "Google Colab", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "Tesseract OCR", "MySQL", "Linux"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-muted-foreground hover:border-cyan/40 hover:text-foreground transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
