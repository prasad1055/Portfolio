import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_177grt5";
const EMAILJS_TEMPLATE_ID = "template_gl4fivq";
const EMAILJS_PUBLIC_KEY = "j40H8v3NGfP3LPv6U";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "prasadsjadhav1@gmail.com",
    href: "mailto:prasadsjadhav1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9827888890",
    href: "tel:+919827888890",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/prasad1055",
    href: "https://github.com/prasad1055",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "prasad-jadhav-aab016326",
    href: "https://linkedin.com/in/prasad-jadhav-aab016326",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Failed to send message. Please try again or contact me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan text-sm font-medium uppercase tracking-widest mb-2">— Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Any Type of Query &{" "}
            <span className="text-gradient-cyan">Discussion</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-cyan rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm open to discussing data science projects, AI/ML collaborations, internship
              opportunities, or any interesting problem you're working on. Let's connect!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-cyan/40 hover:bg-surface/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors flex-shrink-0">
                    <item.icon className="w-4 h-4 text-cyan" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground truncate group-hover:text-cyan transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border border-cyan/30 bg-cyan/5">
                <CheckCircle className="w-14 h-14 text-cyan" />
                <h3 className="font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl border border-border bg-surface space-y-5"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Estimate your project?{" "}
                  <span className="text-cyan">Let me know here.</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="What's your name?"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your fancy email"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is it about?"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-cyan text-primary-foreground font-semibold text-sm hover:shadow-glow-cyan hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
