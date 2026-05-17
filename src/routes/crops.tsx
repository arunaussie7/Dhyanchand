import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Sun, Mountain, Thermometer } from "lucide-react";
import coffeeImg from "@/assets/crop-coffee.jpg";
import pepperImg from "@/assets/crop-pepper.jpg";
import cardamomImg from "@/assets/crop-cardamom.jpg";
import arecaImg from "@/assets/crop-areca.jpg";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crops — Gowda Farmer Ventures" },
      { name: "description", content: "Coffee, pepper, cardamom, areca nut and many more plantation crops, cultivated and managed professionally." },
      { property: "og:title", content: "Plantation Crops" },
      { property: "og:description", content: "Premium plantation crops we cultivate and manage." },
    ],
  }),
  component: CropsPage,
});

const crops = [
  {
    name: "Coffee",
    img: coffeeImg,
    desc: "Arabica and Robusta varieties grown in the misty hill estates of the Western Ghats, managed for cup quality and export-grade beans.",
    climate: "Cool, 15–28°C",
    rain: "1500–2500 mm",
    altitude: "800–1600 m",
    soil: "Well-drained loam",
  },
  {
    name: "Black Pepper",
    img: pepperImg,
    desc: "High-yield pepper vines trained on shade trees, producing premium-grade peppercorns for international spice markets.",
    climate: "Warm humid, 20–32°C",
    rain: "2000–3000 mm",
    altitude: "0–1200 m",
    soil: "Red lateritic loam",
  },
  {
    name: "Cardamom",
    img: cardamomImg,
    desc: "Green cardamom cultivated under natural forest canopy, valued globally for aroma, oil content and capsule quality.",
    climate: "Cool humid, 10–25°C",
    rain: "2000–3500 mm",
    altitude: "600–1500 m",
    soil: "Forest loam, rich in humus",
  },
  {
    name: "Areca Nut",
    img: arecaImg,
    desc: "Tall, long-yielding areca palms managed for steady multi-decade returns and consistent harvest quality.",
    climate: "Warm humid, 14–36°C",
    rain: "1500–4500 mm",
    altitude: "0–1000 m",
    soil: "Deep, well-drained loam",
  },
];

const more = ["Vanilla", "Cocoa", "Ginger", "Turmeric", "Mango", "Coconut", "Cashew", "Nutmeg", "Cloves", "Tamarind"];

function CropsPage() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cardamomImg} alt="Cardamom plantation under forest canopy" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.02_150/0.85)] via-[oklch(0.18_0.02_150/0.65)] to-[oklch(0.22_0.04_150/0.55)]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28 lg:pt-48 lg:pb-40">
          <div className="max-w-3xl reveal text-cream">
            <Eyebrow><span className="text-gold">Crops & plantations</span></Eyebrow>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance text-glow">
              Premium plantation crops, cultivated with care.
            </h1>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed text-pretty">
              Each crop demands its own discipline — climate, soil, timing and patience.
              We manage every variable so your land delivers its full potential.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-28 lg:!pt-36 space-y-28 lg:space-y-36">
        {crops.map((c, i) => (
          <div key={c.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="reveal overflow-hidden rounded-3xl">
              <img src={c.img} alt={c.name} loading="lazy" width={1280} height={1280} className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="reveal">
              <Eyebrow>0{i + 1} / Plantation crop</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">{c.name}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">{c.desc}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Thermometer, k: "Climate", v: c.climate },
                  { icon: Droplets, k: "Rainfall", v: c.rain },
                  { icon: Mountain, k: "Altitude", v: c.altitude },
                  { icon: Sun, k: "Soil", v: c.soil },
                ].map((p) => (
                  <div key={p.k} className="rounded-2xl border border-border bg-card p-5">
                    <p.icon className="h-4 w-4 text-accent" />
                    <dt className="mt-3 text-[10px] tracking-widest uppercase text-muted-foreground">{p.k}</dt>
                    <dd className="mt-1 text-sm font-medium">{p.v}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/agricultural-inquiry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
                Discuss this crop <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-secondary/60 p-10 sm:p-14 reveal">
          <Eyebrow>Many more</Eyebrow>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl">Beyond our headline crops.</h3>
          <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
            We work across a wide range of plantation and horticulture crops based on land, climate and market opportunity.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {more.map((m) => (
              <span key={m} className="rounded-full bg-card border border-border px-4 py-2 text-sm">{m}</span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
