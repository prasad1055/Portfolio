import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60 px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-foreground">
            PSJ<span className="text-cyan">.</span>
          </span>
          <span className="text-muted-foreground text-sm">© 2025 Prasad Sunil Jadhav. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          Made with <Heart className="w-3 h-3 text-cyan mx-1 fill-cyan" /> and lots of data.
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/prasad1055"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/prasad-jadhav-aab016326"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:prasadsjadhav1@gmail.com"
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
