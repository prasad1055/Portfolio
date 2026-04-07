import { Brain, Calculator, Target, Lightbulb } from "lucide-react";

const traits = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Deep interest in AI systems and their real-world applications, from neural networks to intelligent automation.",
  },
  {
    icon: Calculator,
    title: "Mathematics & Logic",
    desc: "Strong foundation in mathematical reasoning — linear algebra, statistics, calculus, and probability theory.",
  },
  {
    icon: Target,
    title: "Analytical Problem Solving",
    desc: "Preference for calculation-heavy, data-driven challenges. Comfortable breaking down complex problems into structured solutions.",
  },
  {
    icon: Lightbulb,
    title: "Machine Learning",
    desc: "Actively developing ML skills — building models, improving algorithms, and applying them to real-world datasets.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Introduction</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Data-Driven Thinker &{" "}
              <span className="text-cyan">Intelligent Systems Builder</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Prasad Sunil Jadhav, a third-year Computer Science student at{" "}
                <span className="text-foreground font-medium">A. P. Shah Institute of Technology, Thane</span>,
                specializing in Data Science and pursuing an Honors program in Artificial Intelligence
                and Machine Learning.
              </p>
              <p>
                My academic journey is defined by a{" "}
                <span className="text-cyan font-medium">strong mathematical foundation</span> and
                a genuine passion for solving analytical problems. I prefer work that involves deep
                calculation, logical reasoning, and pattern recognition across complex datasets.
              </p>
              <p>
                I'm currently focused on improving my machine learning skills and applying them
                to real-world problems — from document forgery detection using SVM classifiers
                to automation systems that streamline institutional workflows.
              </p>
              <p>
                My goal is to bridge the gap between raw data and actionable intelligence, building
                systems that learn, adapt, and solve problems that matter.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { number: "3rd", label: "Year Student" },
                { number: "4+", label: "Projects Built" },
                { number: "2027", label: "Expected Grad." },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-cyan">{stat.number}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait) => (
              <div
                key={trait.title}
                className="group p-5 rounded-xl border border-border bg-surface hover:border-cyan/40 hover:bg-surface/80 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-3 group-hover:bg-cyan/20 transition-colors">
                  <trait.icon className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{trait.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
