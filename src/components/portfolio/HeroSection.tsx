import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown } from "lucide-react";

const profileImg = "https://i.postimg.cc/vmz9Sqx0/Chat-GPT-Image-Mar-8-2026-10-07-07-AM.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(192 100% 50%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(210 100% 60%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-slide-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-xs font-medium text-cyan tracking-wider uppercase">
                Available for Opportunities
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              Prasad
              <br />
              <span className="text-gradient-cyan">Sunil</span>
              <br />
              Jadhav<span className="text-cyan">.</span>
            </h1>

            <p className="text-muted-foreground text-lg font-medium mt-4 mb-6">
              Computer Science Student &nbsp;
              <span className="text-cyan">|</span>
              &nbsp; Data Science &nbsp;
              <span className="text-cyan">|</span>
              &nbsp; AI & ML Enthusiast
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
              Third-year CS student at A. P. Shah Institute of Technology, Thane, specializing in
              Data Science and pursuing Honors in Artificial Intelligence & Machine Learning.
              Strong in mathematics and analytical problem-solving — building intelligent systems one model at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-cyan text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-glow-cyan hover:scale-105"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-cyan hover:text-cyan transition-all duration-200"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-cyan/50 hover:text-foreground transition-all duration-200"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Find me on</span>
              <div className="w-12 h-px bg-border" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/prasad1055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center border border-border text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/prasad-jadhav-aab016326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center border border-border text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:prasadsjadhav1@gmail.com"
                  className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center border border-border text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-cyan opacity-20 blur-2xl scale-110 animate-pulse-glow" />
              {/* Ring border */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-cyan animate-float">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <img
                    src={profileImg}
                    alt="Prasad Sunil Jadhav"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating badge - Stats */}
              <div className="absolute -bottom-4 -left-4 card-glass rounded-xl px-4 py-3 shadow-card">
                <p className="text-xs text-muted-foreground">Current Focus</p>
                <p className="text-sm font-semibold text-cyan">AI & ML Research</p>
              </div>
              <div className="absolute -top-4 -right-4 card-glass rounded-xl px-4 py-3 shadow-card">
                <p className="text-xs text-muted-foreground">Year</p>
                <p className="text-sm font-semibold text-foreground">3rd Year B.E.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
