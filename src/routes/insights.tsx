import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar, ArrowRight, BookOpen } from "lucide-react";
import coffeeImg from "@/assets/crop-coffee.jpg";
import pepperImg from "@/assets/crop-pepper.jpg";
import cardamomImg from "@/assets/crop-cardamom.jpg";
import arecaImg from "@/assets/crop-areca.jpg";
import soilImg from "@/assets/soil-hands.jpg";
import exportImg from "@/assets/export-crates.jpg";
import fieldsImg from "@/assets/parallax-fields.jpg";
import tractorImg from "@/assets/tractor-field.jpg";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Gowda Farmer Ventures" },
      { name: "description", content: "Agricultural insights, plantation management, export intelligence and modern farming techniques." },
      { property: "og:title", content: "Agricultural Insights" },
      { property: "og:description", content: "Premium editorial coverage of plantation crops, market timing and farming practice." },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", "Plantation", "Export", "Soil & Climate", "Market", "Sustainability"] as const;

const posts = [
  { t: "Why Farmland Is the Most Patient Wealth You Can Own", c: "Sustainability", d: "Apr 2026", img: soilImg, x: "Long-term land value, generational wealth, and why selling productive soil is almost never the right move." },
  { t: "The Global Coffee Demand Cycle, Decoded", c: "Market", d: "Mar 2026", img: coffeeImg, x: "How northern hemisphere buying patterns shape pricing for Indian Arabica and Robusta growers." },
  { t: "Black Pepper: Export Windows That Pay Best", c: "Export", d: "Mar 2026", img: pepperImg, x: "Pepper pricing is seasonal. Understanding Middle East and EU buying cycles changes your annual income." },
  { t: "Cardamom Cultivation in Shade-Canopy Estates", c: "Plantation", d: "Feb 2026", img: cardamomImg, x: "Why cardamom rewards patience, micro-climate management, and a deep respect for forest canopy." },
  { t: "Reading Your Soil: Red, Black, Sandy and Loam", c: "Soil & Climate", d: "Feb 2026", img: soilImg, x: "A practical guide to interpreting soil type before you choose a crop." },
  { t: "Areca Nut: The Quiet, Long-Yielding Plantation", c: "Plantation", d: "Jan 2026", img: arecaImg, x: "Why areca remains one of the most stable, multi-decade plantation choices in coastal Karnataka." },
  { t: "Weather Windows and Harvest Timing", c: "Market", d: "Jan 2026", img: fieldsImg, x: "Monsoon patterns, harvest readiness and how timing transforms pricing." },
  { t: "Export-Grade Quality: What International Buyers Look For", c: "Export", d: "Dec 2025", img: exportImg, x: "Moisture, sorting, certification and presentation — the small details that unlock global pricing." },
  { t: "Sustainable Farming Is Just Better Farming", c: "Sustainability", d: "Dec 2025", img: tractorImg, x: "Cover cropping, soil health and natural pest balance — practices that pay back season after season." },
];

function InsightsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");

  const featured = posts[0];
  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchC = cat === "All" || p.c === cat;
      const matchQ = q.trim() === "" || (p.t + p.x).toLowerCase().includes(q.toLowerCase());
      return matchC && matchQ;
    });
  }, [cat, q]);

  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={fieldsImg} alt="Sweeping plantation fields" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.02_150/0.88)] via-[oklch(0.18_0.02_150/0.7)] to-[oklch(0.22_0.04_150/0.55)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-16 lg:pt-48 lg:pb-20">
          <div className="max-w-3xl reveal text-cream">
            <Eyebrow><span className="text-gold">Agricultural insights</span></Eyebrow>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance text-glow">
              Knowledge for landowners who play the long game.
            </h1>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed text-pretty">
              Editorial coverage of plantation crops, soil and climate, export markets and the
              craft of running an agricultural business well.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-10 !pb-10">

        <div className="mt-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 reveal">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  cat === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full bg-card border border-border pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </Section>

      {/* Featured */}
      <Section className="!pt-0">
        <article className="reveal group grid lg:grid-cols-5 gap-8 rounded-3xl bg-card border border-border overflow-hidden hover-lift">
          <div className="lg:col-span-3 overflow-hidden">
            <img src={featured.img} alt={featured.t} loading="lazy" width={1600} height={1080} className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-105 transition-transform duration-[1.2s]" />
          </div>
          <div className="lg:col-span-2 p-10 flex flex-col justify-center">
            <span className="text-xs tracking-widest uppercase text-accent">{featured.c} · Featured</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">{featured.t}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.x}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {featured.d}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Read article <ArrowRight className="h-3.5 w-3.5" /></span>
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(1).map((p, i) => (
            <article key={p.t} className="reveal hover-lift group rounded-3xl bg-card border border-border overflow-hidden flex flex-col" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={1280} height={1080} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] tracking-widest uppercase text-accent">{p.c}</span>
                <h3 className="mt-3 text-xl leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{p.x}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-3 w-3" /> {p.d}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-primary"><BookOpen className="h-3 w-3" /> 5 min</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 1 && (
          <p className="mt-16 text-center text-muted-foreground">No articles match your search.</p>
        )}
      </Section>
    </>
  );
}
