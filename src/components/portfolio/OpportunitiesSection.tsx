import { BarChart2, Cpu, Database, BookOpen } from "lucide-react";

const opportunities = [
  {
    icon: BarChart2,
    title: "Data Analysis Projects",
    description:
      "Collaborating on projects involving exploratory data analysis, statistical modeling, and deriving insights from structured/unstructured datasets.",
    tags: ["EDA", "Statistics", "Visualization"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning Projects",
    description:
      "Building intelligent systems — classification models, prediction engines, and AI-powered applications using Python and ML frameworks.",
    tags: ["Scikit-learn", "SVM", "Classification"],
  },
  {
    icon: Database,
    title: "Data Science Internships",
    description:
      "Actively seeking internship opportunities where I can apply data science skills to solve real business problems and gain industry exposure.",
    tags: ["Internship", "Full-time", "Part-time"],
  },
  {
    icon: BookOpen,
    title: "ML Research Collaboration",
    description:
      "Open to academic and applied research collaborations in machine learning, computer vision, and NLP — contributing rigorous mathematical analysis.",
    tags: ["Research", "Academia", "Papers"],
  },
];

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Looking For</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Interests &{" "}
            <span className="text-gradient-cyan">Opportunities</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl">
            Open to collaboration, internships, and projects in the data science and AI/ML space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-border bg-surface hover:border-cyan/40 hover:bg-surface/80 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4 group-hover:bg-cyan/20 group-hover:shadow-glow-cyan-sm transition-all duration-300">
                <item.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-cyan/5 text-cyan/70 border border-cyan/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 relative overflow-hidden rounded-2xl p-8 md:p-10 border border-cyan/30 bg-cyan/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan/5 blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Let's work on something great together.
              </h3>
              <p className="text-muted-foreground text-sm max-w-lg">
                Whether you have a data problem, a research idea, or an internship opening — I'd love to connect.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-cyan text-primary-foreground font-semibold text-sm hover:shadow-glow-cyan hover:scale-105 transition-all duration-200"
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
