import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, MessageCircle, Sprout, Tractor, FileBarChart, Wallet,
  ShieldCheck, Globe2, Landmark, LineChart, Compass, ChevronDown,
  Sparkles, Users, Clock, BarChart3, Quote, ShieldAlert,
  Construction, Sun, Droplets, Mountain, Eye, Activity, ScanSearch, PackageCheck, TowerControl,
} from "lucide-react";
import heroImg from "@/assets/hero-plantation.jpg";
import parallaxImg from "@/assets/parallax-fields.jpg";
import soilImg from "@/assets/soil-hands.jpg";
import coffeeImg from "@/assets/crop-coffee.jpg";
import pepperImg from "@/assets/crop-pepper.jpg";
import cardamomImg from "@/assets/crop-cardamom.jpg";
import arecaImg from "@/assets/crop-areca.jpg";
import tractorImg from "@/assets/tractor-field.jpg";
import solarImg from "@/assets/solar-agriculture.svg";
import financeImg from "@/assets/investment-guidance.svg";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { SITE } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowda Farmer Ventures — Premium Plantation Management & Global Export" },
      { name: "description", content: "Professional agricultural management and global export solutions. We help landowners manage plantations and connect with international markets." },
      { property: "og:title", content: "Gowda Farmer Ventures" },
      { property: "og:description", content: "From Farmland to Global Markets." },
    ],
  }),
  component: HomePage,
});

  const services = [
  { icon: Tractor, title: "Farm Management", desc: "On-ground estate operations, labour supervision, crop planning and weekly owner reporting.", to: "/agricultural-inquiry", img: tractorImg, tone: "Operational command" },
  { icon: Construction, title: "JCB & Road Works", desc: "Internal roads, contour shaping, clearing and heavy-equipment execution for productive terrain.", to: "/agricultural-inquiry", img: parallaxImg, tone: "Terrain transformation" },
  { icon: Sun, title: "Agricultural Solar", desc: "Modern solar systems for pumps, power resilience and lower long-term operating costs.", to: "/agricultural-inquiry", img: solarImg, tone: "Energy independence" },
  { icon: Droplets, title: "Water Management", desc: "Irrigation mapping, source planning and water efficiency for climate-resilient estates.", to: "/agricultural-inquiry", img: soilImg, tone: "Water intelligence" },
  { icon: Globe2, title: "Export Support", desc: "Documentation, buyer matching and trade coordination for international agricultural supply.", to: "/export-inquiry", img: coffeeImg, tone: "Global trade desk" },
  { icon: LineChart, title: "Investment Guidance", desc: "Agricultural wealth strategy shaped by land health, crop cycles and market timing.", to: "/agricultural-inquiry", img: financeImg, tone: "Long-horizon planning" },
];

const crops = [
  { name: "Coffee", img: coffeeImg, desc: "Premium Arabica and Robusta managed across hill-station estates." },
  { name: "Pepper", img: pepperImg, desc: "High-yield black pepper vines cultivated under shade canopy." },
  { name: "Cardamom", img: cardamomImg, desc: "Aromatic green cardamom grown in mist-laden plantation belts." },
  { name: "Areca Nut", img: arecaImg, desc: "Tall areca palms managed for consistent multi-year yields." },
];

const why = [
  { icon: Clock, n: "20+", l: "Years of plantation expertise" },
  { icon: Users, n: "150+", l: "Estates under management" },
  { icon: Globe2, n: "5", l: "Active export geographies" },
  { icon: BarChart3, n: "Weekly", l: "Transparent on-ground reporting" },
];

const exportDestinations = [
  { flag: "🇺🇸", name: "United States", note: "Specialty coffee & spices" },
  { flag: "🇦🇪", name: "UAE", note: "Pepper, rice & fresh produce" },
  { flag: "🇩🇪", name: "Germany", note: "Premium plantation crops" },
  { flag: "🇬🇧", name: "United Kingdom", note: "Cardamom & tea blends" },
  { flag: "🇸🇬", name: "Singapore", note: "Spice trade corridor" },
  { flag: "🇯🇵", name: "Japan", note: "Specialty Arabica" },
  { flag: "🇫🇷", name: "France", note: "Gourmet spice imports" },
  { flag: "🇸🇦", name: "Saudi Arabia", note: "Bulk plantation supply" },
  { flag: "🇦🇺", name: "Australia", note: "Cardamom & cocoa" },
  { flag: "🇨🇦", name: "Canada", note: "Coffee & nuts" },
  { flag: "🇳🇱", name: "Netherlands", note: "EU spice gateway" },
  { flag: "🇲🇾", name: "Malaysia", note: "Regional spice trade" },
];

const workflow = [
  "Consultation", "Land Assessment", "Budget Planning", "Cultivation Strategy",
  "Farm Management", "Weekly Reporting", "Harvest & Market", "Export Support",
];

const testimonials = [
  { name: "Ravi kumar BANALU", role: "Plantation Owner", quote: "Their weekly reporting and on-ground management gave us complete clarity. Yield has improved noticeably over two seasons." },
  { name: "K M PRASANA kanchur", role: "SRI devi estate", quote: "Professional, calm and methodical. They treat the land with the seriousness it deserves." },
  { name: "Umesh vajige", role: "Estate Owner", quote: "From cultivation strategy to export coordination, the team handled everything end to end." },
  { name: "Lokesh gowda", role: "Landowner", quote: "Honest pricing, honest reports, honest results. That is rare in this industry." },
];

const routeMetrics = [
  { label: "Live export corridors", value: "05" },
  { label: "Managed estates", value: "150+" },
  { label: "Weekly reporting cadence", value: "7 Days" },
  { label: "Avg. response window", value: "24 Hrs" },
];

const jcbStory = [
  { title: "Survey & marking", text: "Contours, gradients and future crop access routes are plotted before machines enter the site." },
  { title: "Road shaping", text: "Internal movement corridors are cut cleanly for labour, logistics, irrigation and harvest access." },
  { title: "Final plantation prep", text: "Land is handed over ready for trenching, planting, utilities and long-term estate operations." },
];

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="-mt-20">
      {/* HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 parallax-layer"
          style={{ ["--parallax-shift" as string]: `${scrollY * 0.35}px`, ["--parallax-scale" as string]: 1.08 }}
        >
          <img
            src={heroImg}
            alt="Aerial view of premium coffee plantation"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[oklch(0.18_0.02_150)] to-transparent" />
        <div className="relative z-10 flex min-h-[100vh] items-center">
          <div className="mx-auto max-w-7xl px-6 w-full text-cream">
            <div className="grid gap-10 xl:grid-cols-[1.3fr_0.7fr] xl:items-end">
              <div className="max-w-3xl reveal">
              <Eyebrow>From Farmland to Global Markets</Eyebrow>
              <h1 className="mt-5 text-glow font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-balance">
                Professional Agricultural Management & Export Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-cream/85 leading-relaxed text-pretty">
                We help landowners, plantation owners, and agricultural businesses manage farms
                professionally and connect with global market opportunities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/agricultural-inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-foreground hover:bg-gold transition-colors"
                >
                  Get Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/export-inquiry"
                  className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-medium text-cream hover:bg-white/10 transition-colors"
                >
                  Export Inquiry
                </Link>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Now
                </a>
              </div>
              </div>
              <div className="reveal xl:justify-self-end">
                <div className="premium-dark-card rounded-[2rem] p-6 backdrop-blur-md">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Global operations signal</p>
                  <div className="mt-6 space-y-4">
                    {routeMetrics.map((metric) => (
                      <div key={metric.label} className="flex items-end justify-between gap-5 border-b border-cream/10 pb-4 last:border-b-0 last:pb-0">
                        <div>
                          <p className="font-display text-3xl text-cream">{metric.value}</p>
                          <p className="mt-1 text-sm text-cream/65">{metric.label}</p>
                        </div>
                        <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_60%,transparent)] animate-shimmer-float" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="relative h-10 w-px bg-cream/30 overflow-hidden">
              <span className="absolute top-0 left-0 h-3 w-px bg-cream animate-scroll-hint" />
            </div>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* SECURITY MONITORING BANNER */}
      <section className="relative overflow-hidden bg-[oklch(0.18_0.02_150)] text-cream">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-16">
          <div className="reveal flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="relative shrink-0">
              <span className="absolute inset-0 rounded-3xl bg-gold/30 blur-2xl" />
              <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-gold to-[oklch(0.62_0.14_70)] text-[oklch(0.18_0.02_150)] shadow-[0_20px_60px_-20px_oklch(0.78_0.12_85_/_0.7)]">
                <ShieldAlert className="h-9 w-9" />
              </span>
            </div>
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold">
                <Eye className="h-3.5 w-3.5" /> Complimentary protection
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance">
                Free crop & land security monitoring — included with every managed estate.
              </h2>
              <p className="mt-4 max-w-3xl text-cream/75 leading-relaxed text-pretty">
                We provide additional security and monitoring support for crops and plantations managed by our team — boundary checks, harvest-window vigilance and on-ground oversight at no extra cost.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/agricultural-inquiry" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-[oklch(0.18_0.02_150)] hover:scale-[1.03] transition-transform">
                Enroll Your Land <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors">
                <MessageCircle className="h-4 w-4" /> Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY CTA — moved up for engagement */}
      <Section className="!py-16 lg:!py-20">
        <div className="reveal relative overflow-hidden rounded-[2rem] gradient-forest p-10 sm:p-14 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <Sparkles className="h-6 w-6 text-gold" />
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
                Own farmland but don't have time to manage it?
              </h2>
              <p className="mt-4 text-cream/85 text-pretty leading-relaxed">
                Hand operations to a team that treats your land as carefully as you would — agronomy, labour, reporting and harvest, end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/agricultural-inquiry" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-foreground hover:bg-gold transition-colors">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section className="!pt-16 !pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title="Premium services for serious agricultural owners."
            description="From cultivation strategy to export coordination, we handle every layer of plantation operations with measurable transparency."
          />
          <Link to="/services" className="reveal inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-[2rem] premium-card flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Link to={s.to} className="relative block aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover image-zoom-hover" width={1400} height={900} />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.02_150/0.78)] via-[oklch(0.18_0.02_150/0.15)] to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-[oklch(0.18_0.02_150/0.78)] px-3 py-1 text-[10px] tracking-[0.24em] uppercase text-gold backdrop-blur-sm">
                  {s.tone}
                </div>
                <span className="absolute right-5 top-5 font-display text-xs tracking-[0.3em] text-cream/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary shadow-[var(--shadow-soft)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link to={s.to} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
                    Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to={s.to} className="text-xs font-medium text-primary hover:underline">
                    Explore service
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* MAIN CROPS */}
      <Section className="!py-0">
        <div className="rounded-[2rem] bg-secondary/60 px-6 py-20 lg:p-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeading
              eyebrow="Main crops"
              title="Cultivated with discipline. Managed with care."
            />
            <Link to="/crops" className="reveal inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              View all crops <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {crops.map((c, i) => (
              <div
                key={c.name}
                className="reveal group relative overflow-hidden rounded-3xl bg-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1280}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
            <div className="reveal sm:col-span-2 lg:col-span-4 rounded-3xl gradient-forest p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-primary-foreground">
              <div>
                <Eyebrow><span className="text-gold">And many more</span></Eyebrow>
                <h3 className="mt-3 text-3xl">Vanilla, ginger, turmeric, cocoa, areca, mango & more.</h3>
              </div>
              <Link to="/crops" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-foreground hover:bg-gold transition-colors">
                Explore Crops <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* PARALLAX QUOTE */}
      <section className="relative h-[60vh] overflow-hidden section-band section-dark">
        <div
          className="absolute inset-0 parallax-layer"
          style={{ ["--parallax-shift" as string]: `${(scrollY - 1800) * 0.15}px`, ["--parallax-scale" as string]: 1.1 }}
        >
          <img src={parallaxImg} alt="" className="h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-[oklch(0.18_0.02_150/0.55)]" />
        <div className="relative z-10 mx-auto max-w-4xl h-full px-6 flex items-center text-center text-cream">
          <p className="font-display text-3xl sm:text-5xl leading-tight text-balance reveal">
            “Land is patient capital. Treated well, it returns generously — for generations.”
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section>
        <SectionHeading
          eyebrow="Why choose us"
          title="Decades of expertise. Built for global standards."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <div
              key={w.l}
              className="reveal hover-lift rounded-3xl bg-card border border-border p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <w.icon className="h-6 w-6 text-accent" />
              <p className="mt-6 font-display text-5xl">{w.n}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal rounded-3xl overflow-hidden">
            <img src={tractorImg} alt="Modern farming operations" loading="lazy" width={1600} height={1080} className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div className="reveal space-y-5">
            {[
              "Experienced agricultural professionals on every estate.",
              "Weekly reporting system with full operational transparency.",
              "Active crop monitoring, protection and harvest planning.",
              "Disciplined budget planning and cost control.",
              "Direct access to verified global market channels.",
              "Trusted guidance on agricultural land acquisition.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="text-base leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPORT SUPPORT */}
      <section className="relative overflow-hidden gradient-night text-cream section-band section-dark">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <WorldDots />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="reveal max-w-3xl">
            <Eyebrow><span className="text-gold">Global reach</span></Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              From Indian soil to global wholesale markets.
            </h2>
            <p className="mt-5 text-cream/75 text-pretty leading-relaxed text-lg">
              Our trade desk routes verified produce from estates across the Western Ghats to
              wholesale buyers in five active export corridors — coordinated end to end.
            </p>
          </div>

          <div className="relative mt-14 rounded-[2rem] premium-dark-card p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold">Active export destinations</p>
                <h3 className="mt-3 font-display text-2xl text-cream sm:text-3xl">
                  We export across 12+ countries on 5 continents.
                </h3>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-cream/15 bg-white/5 px-4 py-2 text-xs text-cream/80">
                <span className="text-base">🇮🇳</span>
                <span className="tracking-[0.2em] uppercase text-gold">Origin · India</span>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exportDestinations.map((d, i) => (
                <div
                  key={d.name}
                  className="reveal flex items-center gap-4 rounded-2xl border border-cream/10 bg-white/5 px-4 py-4 transition-all hover:border-gold/40 hover:bg-white/10"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span className="text-3xl leading-none">{d.flag}</span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-cream">{d.name}</p>
                    <p className="mt-0.5 truncate text-xs text-cream/65">{d.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Activity, label: "Live route monitoring", value: "12 nodes" },
                { icon: PackageCheck, label: "Verified outbound lots", value: "24 active" },
                { icon: TowerControl, label: "Trade desk coverage", value: "24/7" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl border border-cream/10 bg-white/5 px-4 py-3 text-sm text-cream/78">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-gold" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-gold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link to="/export-inquiry" className="reveal hover-lift group relative overflow-hidden rounded-3xl glass-dark p-10">
              <Globe2 className="h-7 w-7 text-gold" />
              <h3 className="mt-6 font-display text-3xl">I Already Have Agricultural Products</h3>
              <p className="mt-3 text-cream/75 leading-relaxed">
                For farmers and growers looking to export fruits, vegetables, spices, or plantation crops.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-[oklch(0.22_0.03_150)]">
                Export My Products <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/agricultural-inquiry" className="reveal hover-lift group relative overflow-hidden rounded-3xl glass-dark p-10">
              <Sprout className="h-7 w-7 text-gold" />
              <h3 className="mt-6 font-display text-3xl">I Want Complete Farm Management</h3>
              <p className="mt-3 text-cream/75 leading-relaxed">
                For landowners seeking cultivation, plantation management, crop planning, and agricultural consultation.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-foreground">
                Get Agricultural Consultation <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band section-dark overflow-hidden">
        <Section className="relative !py-24 lg:!py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal">
              <Eyebrow>JCB & road works</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.03] text-balance text-cream sm:text-5xl lg:text-6xl">
                Terrain preparation told like a premium operations story.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/76 sm:text-lg">
                Heavy equipment work is planned like infrastructure, not improvisation — so estates get access, stability and clean foundations for decades of productive use.
              </p>
              <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-[oklch(0.18_0.02_150)] hover:scale-[1.03] transition-transform">
                Explore JCB services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="reveal relative min-h-[420px] overflow-hidden rounded-[2rem] premium-dark-card p-6 sm:p-8">
              <img src={parallaxImg} alt="Road works and land shaping across agricultural terrain" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" width={1600} height={1000} />
              <div className="absolute inset-x-0 bottom-16 h-1 rounded-full bg-white/10" />
              <div className="absolute left-0 right-0 bottom-12">
                <div className="animate-jcb-drive w-[240px] text-gold drop-shadow-[0_20px_40px_color-mix(in_oklab,var(--gold)_22%,transparent)]">
                  <JcbSilhouette />
                </div>
              </div>
              <div className="relative z-10 ml-auto grid max-w-sm gap-4 pt-6">
                {jcbStory.map((item, index) => (
                  <div key={item.title} className="premium-dark-card reveal rounded-[1.4rem] p-5" style={{ transitionDelay: `${index * 120}ms` }}>
                    <p className="text-[10px] tracking-[0.24em] uppercase text-gold">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-2xl text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* AGRICULTURAL WEALTH AWARENESS */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden">
              <img src={soilImg} alt="Hands holding fertile soil" loading="lazy" width={1600} height={1080} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 glass rounded-2xl p-5 max-w-[220px] hidden sm:block">
              <p className="font-display text-3xl">+38%</p>
              <p className="text-xs text-muted-foreground mt-1">Global agri-commodity demand projected by 2035</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Agricultural Wealth"
              title="Don't sell the land. Let it work for generations."
              description="Agricultural land is one of the few assets that appreciates while producing income. With professional management, your land becomes a long-term wealth engine — not a one-time transaction."
            />
            <div className="mt-10 space-y-5">
              {[
                { t: "Long-term agricultural value", d: "Productive land compounds in both yield and asset value over decades." },
                { t: "Plantation income potential", d: "Coffee, pepper and cardamom estates generate recurring multi-season income." },
                { t: "Rising global food demand", d: "Premium spices and plantation crops face structurally rising international demand." },
                { t: "Sustainable agricultural wealth", d: "Well-managed estates leave a stronger inheritance than liquidated land ever can." },
              ].map((p) => (
                <div key={p.t} className="reveal rounded-2xl border border-border bg-card p-5">
                  <h4 className="text-lg">{p.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* GLOBAL MARKET INTELLIGENCE */}
      <section className="bg-secondary/50">
        <Section>
          <SectionHeading
            eyebrow="Market intelligence"
            title="Trade the season. Time the market."
            description="We track international demand cycles, weather windows and harvest timing so your produce reaches markets when they pay best."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                t: "Coffee Demand Cycles",
                m: "Q4 — Q1",
                d: "Northern hemisphere retail buyers stockpile premium beans ahead of winter.",
                bars: [40, 55, 45, 70, 90, 80, 60, 50, 55, 70, 85, 95],
              },
              {
                t: "Pepper Export Window",
                m: "Mar — Jun",
                d: "Middle East and Europe pepper demand peaks ahead of summer trade.",
                bars: [30, 35, 60, 80, 95, 85, 50, 40, 38, 35, 32, 30],
              },
              {
                t: "Fruit Export Seasons",
                m: "Apr — Aug",
                d: "Mango and tropical fruit windows align with strong UAE and EU buying.",
                bars: [25, 30, 40, 65, 90, 95, 80, 70, 50, 35, 28, 22],
              },
            ].map((c, i) => (
              <div key={c.t} className="reveal hover-lift rounded-3xl bg-card border border-border p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl">{c.t}</h4>
                  <span className="text-xs tracking-widest uppercase text-accent">{c.m}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                <div className="mt-8 flex items-end gap-1.5 h-28">
                  {c.bars.map((h, j) => (
                    <div key={j} className="flex-1 rounded-t-md bg-gradient-to-t from-accent/40 to-primary transition-all duration-700" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] tracking-widest uppercase text-muted-foreground">
                  <span>Jan</span><span>Jun</span><span>Dec</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* PROCESS WORKFLOW */}
      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A clear, disciplined process — from land to global market."
        />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />
          <ol className="grid gap-8 lg:grid-cols-8 sm:grid-cols-2">
            {workflow.map((step, i) => (
              <li key={step} className="reveal relative" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="relative grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
                  {i + 1}
                </div>
                <h4 className="mt-4 text-base font-medium">{step}</h4>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50">
        <Section>
          <SectionHeading eyebrow="Trusted by landowners" title="Quiet results. Spoken plainly." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="reveal hover-lift rounded-3xl bg-card border border-border p-8" style={{ transitionDelay: `${i * 60}ms` }}>
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-5 font-display text-2xl leading-snug text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full gradient-forest text-cream font-medium">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </section>

      {/* FINAL CONTACT STRIP */}
      <Section className="!py-20">
        <div className="reveal rounded-[2rem] border border-border bg-card p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-balance">
              Ready when you are.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Share your land details or produce — our team responds within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/agricultural-inquiry" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform">
              Agricultural Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/export-inquiry" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-secondary transition-colors">
              Export Inquiry
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

function WorldDots({ stroke = "currentColor" }: { stroke?: string }) {
  return (
    <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <g fill={stroke}>
        {Array.from({ length: 700 }).map((_, i) => {
          const x = (i * 13.37) % 100;
          const y = (i * 7.77) % 50;
          if (((Math.sin(i) + 1) * 50) % 7 < 4) return null;
          return <circle key={i} cx={x} cy={y} r={0.2} />;
        })}
      </g>
    </svg>
  );
}


function JcbSilhouette() {
  return (
    <svg viewBox="0 0 300 120" className="h-auto w-full" fill="currentColor" aria-hidden="true">
      <rect x="34" y="68" width="128" height="22" rx="8" />
      <rect x="88" y="34" width="58" height="34" rx="8" />
      <rect x="108" y="20" width="14" height="18" rx="4" />
      <path d="M150 52h34l18 18h-52z" />
      <path d="M183 58h30l38-24 11 13-28 18 19 13-9 14-34-23h-27z" />
      <path d="M28 86h145l27 9H36z" opacity="0.7" />
      <circle cx="78" cy="96" r="20" fill="oklch(0.15 0.01 150)" />
      <circle cx="78" cy="96" r="9" fill="currentColor" />
      <circle cx="164" cy="96" r="20" fill="oklch(0.15 0.01 150)" />
      <circle cx="164" cy="96" r="9" fill="currentColor" />
    </svg>
  );
}

