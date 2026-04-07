import { GraduationCap, Star, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-surface/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Academic Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Education <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-cyan/30 to-transparent hidden md:block" />

          <div className="space-y-10 md:pl-20">
            {/* Main Degree */}
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[3.25rem] top-6 w-5 h-5 rounded-full border-2 border-cyan bg-background hidden md:flex items-center justify-center shadow-glow-cyan-sm">
                <div className="w-2 h-2 rounded-full bg-cyan" />
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface hover:border-cyan/40 transition-all duration-300 shadow-card">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-5 h-5 text-cyan" />
                      <span className="text-xs font-medium text-cyan uppercase tracking-wider">Current</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      Bachelor of Engineering (B.E.)
                    </h3>
                    <p className="text-cyan font-medium mt-1">Computer Science — Data Science</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20">
                    <Calendar className="w-3.5 h-3.5 text-cyan" />
                    <span className="text-xs text-cyan font-medium">2023 – 2027</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground/60" />
                  <span className="text-sm">A. P. Shah Institute of Technology, Thane, Maharashtra</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Focused on data structures, algorithms, database systems, machine learning fundamentals,
                  and statistical analysis. Building a strong foundation in both theoretical computer science
                  and practical data science applications.
                </p>

                {/* Honors badge */}
                <div className="relative overflow-hidden rounded-xl border border-cyan/30 bg-gradient-to-r from-cyan/5 to-cyan/10 p-4">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan/5 blur-xl" />
                  <div className="relative flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-cyan flex items-center justify-center flex-shrink-0 shadow-glow-cyan-sm">
                      <Star className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-cyan uppercase tracking-wider bg-cyan/20 px-2 py-0.5 rounded-full">
                          Honors Program
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold text-foreground mt-1">
                        Artificial Intelligence & Machine Learning
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Additional academic program that deepens expertise in AI/ML theory, neural networks,
                        deep learning architectures, and applied intelligent systems — significantly
                        enhancing academic and professional credibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schooling */}
            <div className="relative group">
              <div className="absolute -left-[3.25rem] top-6 w-5 h-5 rounded-full border-2 border-border bg-background hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface hover:border-border/80 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Completed</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-muted-foreground font-medium mt-1">Science — Mathematics & Physics</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-medium">2023</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strong performance in mathematics and science subjects, building the analytical
                  foundation that drives current research interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
