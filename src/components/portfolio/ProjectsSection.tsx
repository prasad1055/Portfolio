import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "Document Forgery Detection",
    tag: "Current Project",
    tagColor: "cyan",
    description:
      "A system for detecting forged documents using grayscale image processing and OCR to extract features. Extracted data is classified using SVM and Random Forest models to identify possible forgery.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "SVM", "Random Forest", "Scikit-learn"],
    highlights: ["Grayscale image processing", "OCR feature extraction", "ML classification"],
    icon: "🔍",
  },
  {
    title: "Blood Bank Management System",
    tag: "Academic Project",
    tagColor: "default",
    description:
      "A full management system for blood banks that handles donor records, blood inventory tracking, and blood request management. Enables efficient coordination between donors and hospitals.",
    tech: ["Python", "MySQL", "Database Design"],
    highlights: ["Donor record management", "Blood inventory tracking", "Request fulfillment system"],
    icon: "🩸",
  },
  {
    title: "Donation Management System",
    tag: "Academic Project",
    tagColor: "default",
    description:
      "A system that tracks donation records and manages donor information comprehensively. Built to streamline the process of recording, categorizing, and retrieving donation-related data.",
    tech: ["Python", "SQL", "Data Management"],
    highlights: ["Record tracking", "Donor data management", "Report generation"],
    icon: "💝",
  },
  {
    title: "College Documentation Automation",
    tag: "Academic Project",
    tagColor: "default",
    description:
      "A system designed to automate documentation processes within a college environment. Reduces manual work, standardizes formats, and accelerates document workflows for administrative staff.",
    tech: ["Python", "Automation", "PDF Processing"],
    highlights: ["Process automation", "Template management", "Workflow optimization"],
    icon: "📄",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-surface/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-gradient-cyan">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Projects focused on data analysis, AI/ML applications, and intelligent automation systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-cyan/40 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1 cursor-default overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-cyan blur-3xl" />

              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <span
                      className={`text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        project.tagColor === "cyan"
                          ? "bg-cyan/15 text-cyan border border-cyan/30"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                {project.tagColor === "cyan" && (
                  <Zap className="w-4 h-4 text-cyan animate-pulse" />
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-cyan transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-1">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan/60 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted-foreground group-hover:border-cyan/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action row */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/prasad1055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 ml-auto" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/prasad1055"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:border-cyan/50 hover:text-cyan text-sm font-medium transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
