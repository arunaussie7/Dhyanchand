import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Tractor,
  Sprout,
  Leaf,
  FileBarChart,
  Wallet,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Landmark,
  FlaskConical,
  BookOpen,
  ArrowRight,
  Construction,
  Sun,
  Droplets,
  Mountain,
  ShieldAlert,
  ScanSearch,
  PackageCheck,
  TowerControl,
} from "lucide-react";
import heroImg from "@/assets/hero-plantation.jpg";
import parallaxImg from "@/assets/parallax-fields.jpg";
import soilImg from "@/assets/soil-hands.jpg";
import coffeeImg from "@/assets/crop-coffee.jpg";
import pepperImg from "@/assets/crop-pepper.jpg";
import cardamomImg from "@/assets/crop-cardamom.jpg";
import arecaImg from "@/assets/crop-areca.jpg";
import tractorImg from "@/assets/tractor-field.jpg";
import { Section, Eyebrow } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gowda Farmer Ventures" },
      { name: "description", content: "Premium plantation management, cultivation, export support, land analysis and agricultural investment guidance." },
      { property: "og:title", content: "Services" },
      { property: "og:description", content: "Premium agricultural services for serious owners." },
    ],
  }),
  component: ServicesPage,
});

const flagship = [
  {
    icon: Tractor,
    title: "Managed plantation operations",
    description:
      "Daily field execution, labour direction, input planning and weekly owner visibility handled as one disciplined managed service.",
    image: tractorImg,
    tone: "Estate command",
    to: "/agricultural-inquiry",
  },
  {
    icon: Construction,
    title: "JCB & Road Works",
    description:
      "Heavy-equipment execution for terrain shaping, internal roads, leveling and large-format estate access improvements.",
    image: parallaxImg,
    tone: "Terrain build-out",
    to: "/agricultural-inquiry",
  },
  {
    icon: Globe2,
    title: "Export support",
    description:
      "Buyer alignment, documentation, product positioning and route coordination for internationally market-ready supply.",
    image: coffeeImg,
    tone: "Trade desk",
    to: "/export-inquiry",
  },
];

const supportServices = [
  { icon: Sun, title: "Agricultural Solar Systems", description: "Power resilience for pumps and farm infrastructure using premium solar planning.", image: heroImg },
  { icon: Droplets, title: "Water Management Solutions", description: "Irrigation mapping, storage planning and water efficiency tuned to the estate.", image: soilImg },
  { icon: Mountain, title: "Land Development", description: "Preparation of agricultural land for stable long-term cultivation and movement.", image: parallaxImg },
  { icon: Sprout, title: "Crop Cultivation", description: "Crop selection and cultivation strategy informed by climate, soil and market timing.", image: cardamomImg },
  { icon: Leaf, title: "Plantation Maintenance", description: "Seasonal pruning, shade, nutrition and operational care for plantation health.", image: pepperImg },
  { icon: FileBarChart, title: "Weekly Reporting", description: "Structured operational updates that keep owners closely informed without being on-site.", image: tractorImg },
  { icon: Wallet, title: "Budget Planning", description: "Transparent cultivation budgets, labour planning and cost control frameworks.", image: arecaImg },
  { icon: ShieldCheck, title: "Crop Protection", description: "Practical pest and disease prevention using modern sustainable management.", image: soilImg },
  { icon: ShieldAlert, title: "Crop & Land Security", description: "Boundary awareness and harvest-window vigilance included with managed estates.", image: heroImg },
  { icon: TrendingUp, title: "Investment Guidance", description: "Long-horizon agricultural wealth planning rooted in productive land performance.", image: coffeeImg },
  { icon: Landmark, title: "Farmland Purchase", description: "Sourcing and evaluating agricultural land with operational viability in mind.", image: parallaxImg },
  { icon: FlaskConical, title: "Land Health Analysis", description: "Soil, water and climate analysis translated into clear cultivation decisions.", image: soilImg },
  { icon: BookOpen, title: "Land Consultation", description: "Strategic advice for current owners and buyers entering plantation agriculture.", image: arecaImg },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Agriculture, managed like a premium operations portfolio."
        description="Cinematic field execution, disciplined reporting and export-minded strategy — built to make your land perform."
        image={tractorImg}
        imageAlt="Modern agricultural field operations at golden hour"
        metrics={[
          { value: "16", label: "Integrated service lines" },
          { value: "150+", label: "Managed estates" },
          { value: "24 hrs", label: "Consultation response" },
          { value: "5", label: "Export regions" },
        ]}
        actions={[
          { label: "Start agricultural inquiry", to: "/agricultural-inquiry" },
          { label: "Speak on WhatsApp", href: SITE.whatsapp, variant: "ghost" },
        ]}
      />

      <Section className="section-band !py-24">
        <div className="reveal max-w-3xl">
          <Eyebrow>Flagship services</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.03] text-balance sm:text-5xl lg:text-6xl">
            Wide-format service stories, not plain cards.
          </h2>
        </div>

        <div className="mt-16 grid gap-6">
          {flagship.map((service, index) => (
            <article
              key={service.title}
              className="reveal group overflow-hidden rounded-[2rem] premium-card"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className={`grid gap-0 lg:grid-cols-[1.05fr_0.95fr] ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <Link to={service.to} className="relative block min-h-[340px] overflow-hidden lg:min-h-[460px]">
                  <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover image-zoom-hover" loading="lazy" width={1600} height={1200} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.02_150/0.82)] via-[oklch(0.18_0.02_150/0.2)] to-transparent lg:bg-gradient-to-t" />
                  <div className="absolute left-6 top-6 rounded-full bg-[oklch(0.18_0.02_150/0.78)] px-4 py-1.5 text-[10px] tracking-[0.24em] uppercase text-gold">
                    {service.tone}
                  </div>
                </Link>
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shadow-[var(--shadow-soft)]">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-display text-4xl leading-[1.04] text-balance">{service.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{service.description}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link to={service.to} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
                      Enquire Now <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to={service.to} className="text-sm font-medium text-primary hover:underline">
                      Open service inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-band section-dark overflow-hidden">
        <Section className="relative !py-24 lg:!py-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal">
              <Eyebrow>Premium service layers</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.03] text-balance text-cream sm:text-5xl lg:text-6xl">
                Infrastructure, analytics and trade support in one ecosystem.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/76 sm:text-lg">
                The company operates like a modern agricultural platform: site intelligence, field execution and export readiness moving together instead of in silos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 reveal">
              {[
                { icon: ScanSearch, label: "Field diagnostics", value: "Soil · climate · access" },
                { icon: PackageCheck, label: "Harvest readiness", value: "Packing · grading · movement" },
                { icon: TowerControl, label: "Trade coordination", value: "Buyer routing · documentation" },
              ].map((item) => (
                <div key={item.label} className="premium-dark-card rounded-[1.6rem] p-6">
                  <item.icon className="h-6 w-6 text-gold" />
                  <p className="mt-6 font-display text-2xl text-cream">{item.label}</p>
                  <p className="mt-2 text-sm text-cream/72">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <Section className="!py-24">
        <div className="reveal max-w-3xl">
          <Eyebrow>Specialist capabilities</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.03] text-balance sm:text-5xl lg:text-6xl">
            Detailed capabilities for estates that need more than standard farm support.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {supportServices.map((service, index) => (
            <article
              key={service.title}
              className="reveal group overflow-hidden rounded-[2rem] premium-card"
              style={{ transitionDelay: `${(index % 4) * 60}ms` }}
            >
              <Link to="/agricultural-inquiry" className="relative block aspect-[16/10] overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover image-zoom-hover" loading="lazy" width={1400} height={900} />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.02_150/0.85)] via-[oklch(0.18_0.02_150/0.16)] to-transparent" />
                <div className="absolute left-6 top-6 grid h-11 w-11 place-items-center rounded-2xl bg-[oklch(0.18_0.02_150/0.75)] text-gold backdrop-blur-sm">
                  <service.icon className="h-5 w-5" />
                </div>
              </Link>
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-3xl leading-tight">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                <Link to="/agricultural-inquiry" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="reveal rounded-[2rem] gradient-forest p-10 sm:p-16 text-primary-foreground">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl leading-tight text-balance">
                Not sure which service best fits your land, crop or export goal?
              </h2>
              <p className="mt-4 max-w-2xl text-cream/82 leading-relaxed">
                Share the land, crop type or operational challenge and we will recommend the right service path.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/agricultural-inquiry" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-foreground hover:bg-gold transition-colors">
                Agricultural Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/export-inquiry" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors">
                Export Inquiry
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
