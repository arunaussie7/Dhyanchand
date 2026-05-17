import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Section";

type HeroMetric = {
  value: string;
  label: string;
};

type HeroAction = {
  label: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  metrics = [],
  actions = [],
  align = "left",
  dark = true,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics?: HeroMetric[];
  actions?: HeroAction[];
  align?: "left" | "center";
  dark?: boolean;
  compact?: boolean;
}) {
  const contentAlign = align === "center" ? "mx-auto text-center items-center" : "";
  const contentMax = compact ? "min-h-[68vh] py-24 lg:py-32" : "min-h-[82vh] py-28 lg:py-36";

  return (
    <section className="relative -mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover parallax-layer" style={{ ["--parallax-scale" as string]: 1.08 }} width={1920} height={1280} />
        <div className={`absolute inset-0 ${dark ? "hero-scrim" : "bg-[oklch(0.18_0.02_150/0.38)]"}`} />
      </div>

      <div className={`relative z-10 mx-auto flex max-w-7xl px-6 ${contentMax}`}>
        <div className={`flex w-full flex-col justify-end ${contentAlign}`}>
          <div className={`max-w-4xl reveal ${align === "center" ? "mx-auto" : ""} ${dark ? "text-cream" : "text-foreground"}`}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-glow font-display text-5xl leading-[0.96] text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className={`mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg ${align === "center" ? "mx-auto" : ""} ${dark ? "text-cream/82" : "text-muted-foreground"}`}>
              {description}
            </p>

            {actions.length > 0 && (
              <div className={`mt-8 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
                {actions.map((action) => {
                  const common = `inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                    action.variant === "secondary"
                      ? dark
                        ? "glass-dark text-cream hover:bg-white/10"
                        : "premium-card text-foreground hover:bg-secondary"
                      : action.variant === "ghost"
                        ? dark
                          ? "border border-cream/25 text-cream hover:bg-cream/10"
                          : "border border-border text-foreground hover:bg-secondary"
                        : dark
                          ? "bg-gold text-[oklch(0.18_0.02_150)] hover:scale-[1.03]"
                          : "bg-primary text-primary-foreground hover:scale-[1.03]"
                  }`;

                  if (action.to) {
                    return (
                      <Link key={action.label} to={action.to} className={common}>
                        {action.label} {action.icon ?? <ArrowRight className="h-4 w-4" />}
                      </Link>
                    );
                  }

                  return (
                    <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className={common}>
                      {action.icon}
                      {action.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {metrics.length > 0 && (
            <div className={`mt-12 grid gap-4 reveal sm:grid-cols-2 xl:grid-cols-4 ${align === "center" ? "mx-auto w-full max-w-5xl" : "max-w-5xl"}`}>
              {metrics.map((metric) => (
                <div key={metric.label} className="premium-dark-card rounded-[1.75rem] px-6 py-5 backdrop-blur-sm">
                  <p className="font-display text-3xl text-cream">{metric.value}</p>
                  <p className="mt-1 text-sm text-cream/68">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
