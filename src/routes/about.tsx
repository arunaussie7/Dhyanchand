import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Target, Award } from "lucide-react";
import darshanImg from "@/assets/founder-darshan.png";
import deekshitImg from "@/assets/founder-deekshit.png";
import fieldsImg from "@/assets/parallax-fields.jpg";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gowda Farmer Ventures" },
      { name: "description", content: "Founded by Darshan and Deekshit — young, experienced farmers building professional plantation management and global export from the Western Ghats." },
      { property: "og:title", content: "About Gowda Farmer Ventures" },
      { property: "og:description", content: "Young farmers. Deep experience. Premium plantation management and global export." },
    ],
  }),
  component: AboutPage,
});

const founders = [
  {
    name: "Darshan",
    role: "Co-Founder",
    img: darshanImg,
    bio: "A young farmer with hands-on plantation experience across the Western Ghats. Darshan leads on-ground operations, crop discipline and the day-to-day management that keeps every estate running with clarity.",
  },
  {
    name: "Deekshit",
    role: "Co-Founder",
    img: deekshitImg,
    bio: "An experienced young farmer focused on modern estate systems, export coordination and transparent reporting. Deekshit brings energy, accountability and practical field knowledge to every client relationship.",
  },
];

const timeline = [
  { y: "2015", t: "Roots in the field", d: "Hands-on plantation work begins across coffee, areca and mixed crops in Karnataka." },
  { y: "2019", t: "Multi-estate operations", d: "Management expands to pepper, cardamom and larger mixed plantation portfolios." },
  { y: "2022", t: "Export relationships", d: "Direct buyer connections established across the Middle East and Southeast Asia." },
  { y: "2024", t: "Building the team", d: "Darshan and Deekshit formalise a shared operating model for professional estate management." },
  { y: "2026", t: "Gowda Farmer Ventures", d: "A unified brand serving landowners and producers with management and export support." },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="reveal">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Young farmers.<br />Serious discipline.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Gowda Farmer Ventures is a professional plantation management and agricultural
              export company built by Darshan and Deekshit — young, experienced farmers who
              combine on-ground expertise with a modern, globally-minded operating philosophy.
            </p>
          </div>
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl">
              <img src={darshanImg} alt="Darshan in a tea plantation" loading="lazy" width={1280} height={1600} className="w-full aspect-[4/5] object-cover object-top" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 max-w-[240px] hidden sm:block">
              <p className="font-display text-3xl">Field-first</p>
              <p className="text-xs text-muted-foreground mt-1">Experienced farmers leading every estate we manage</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Founders" title="The people behind the work." />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {founders.map((p, i) => (
            <div key={p.name} className="reveal hover-lift overflow-hidden rounded-3xl bg-card border border-border" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xl font-medium">{p.name}</p>
                <p className="text-xs tracking-widest uppercase text-accent mt-1">{p.role}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/50">
        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Target, t: "Our Mission", d: "To help every plantation owner unlock the full long-term value of their land through professional management." },
              { icon: Eye, t: "Our Vision", d: "An India where farmland is managed with global discipline, and producers are connected directly to global markets." },
              { icon: Award, t: "Our Values", d: "Honesty, transparency, sustainable practice, and respect for the people and land we work with." },
            ].map((b, i) => (
              <div key={b.t} className="reveal hover-lift rounded-3xl bg-card border border-border p-10" style={{ transitionDelay: `${i * 80}ms` }}>
                <b.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-6 text-2xl">{b.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <SectionHeading eyebrow="Our journey" title="Built carefully, over time." />
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
          <ol className="space-y-12">
            {timeline.map((t, i) => (
              <li key={t.y} className={`reveal relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>div:first-child]:order-2" : ""}`}>
                <div className={`${i % 2 ? "sm:text-left sm:pl-12" : "sm:text-right sm:pr-12"} pl-12 sm:pl-0`}>
                  <p className="font-display text-4xl text-accent">{t.y}</p>
                  <h4 className="mt-2 text-xl">{t.t}</h4>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t.d}</p>
                </div>
                <div />
                <span className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background" />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <section className="relative h-[50vh] overflow-hidden">
        <img src={fieldsImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[oklch(0.18_0.02_150/0.6)]" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-cream">
          <div className="max-w-3xl reveal">
            <Compass className="h-7 w-7 text-gold mx-auto" />
            <p className="mt-6 font-display text-3xl sm:text-5xl leading-tight text-balance">
              "We measure success in seasons, not quarters."
            </p>
            <Link to="/agricultural-inquiry" className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-foreground hover:bg-gold transition-colors">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
