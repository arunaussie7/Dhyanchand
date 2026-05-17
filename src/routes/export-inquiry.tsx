import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe2, MessageCircle, Phone, Upload } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { DirectContact } from "@/components/DirectContact";
import { InquirySubmitActions } from "@/components/InquirySubmitActions";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/export-inquiry")({
  head: () => ({
    meta: [
      { title: "Export Inquiry — Gowda Farmer Ventures" },
      { name: "description", content: "Connect your agricultural produce with global wholesale buyers in the USA, Europe, UAE, Singapore and Japan." },
      { property: "og:title", content: "Export Inquiry" },
    ],
  }),
  component: ExportInquiryPage,
});

const categories = ["Fruits", "Vegetables", "Spices", "Plantation Crops", "Other Agricultural Products"];
const harvest = ["Ready for Export", "Harvesting Soon", "Seasonal Supply", "Continuous Supply"];

const steps = [
  { n: "01", t: "Submit Inquiry", d: "Share product, quantity and destination preferences." },
  { n: "02", t: "Product Review", d: "Our export desk evaluates quality and documentation needs." },
  { n: "03", t: "Quality Discussion", d: "We align on grading, packaging and certification." },
  { n: "04", t: "Market Matching", d: "We match your product with verified international buyers." },
  { n: "05", t: "Export Coordination", d: "End-to-end coordination through shipment and payment." },
];

function ExportInquiryPage() {
  return (
    <>
      <Section className="!pb-12">
        <div className="max-w-3xl reveal">
          <Eyebrow>Export inquiry</Eyebrow>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Your produce. The world's wholesale buyers.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Share what you grow and where you'd like it to go, then send your inquiry
            via Gmail or WhatsApp.
          </p>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <form
              id="export-inquiry-form"
              onSubmit={(e) => e.preventDefault()}
              className="reveal rounded-3xl bg-card border border-border p-8 sm:p-10 space-y-6"
            >
              <Grid2>
                <Field label="Full Name">
                  <input required name="name" className={inp} placeholder="Your full name" />
                </Field>
                <Field label="Phone Number">
                  <input required type="tel" name="phone" className={inp} placeholder={SITE.phone} />
                </Field>
                <Field label="Email Address">
                  <input type="email" name="email" className={inp} placeholder={SITE.email} />
                </Field>
                <Field label="Country / State">
                  <input name="countryState" className={inp} placeholder="Where are you based?" />
                </Field>
              </Grid2>

              <Field label="Product Category">
                <select name="productCategory" className={inp} defaultValue="">
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <Grid2>
                <Field label="Product Name">
                  <input name="productName" className={inp} placeholder="Example: Coffee Beans, Black Pepper, Cardamom, Mango..." />
                </Field>
                <Field label="Quantity Available">
                  <input name="quantity" className={inp} placeholder="Example: 500 KG, 2 Tons, Seasonal Supply..." />
                </Field>
                <Field label="Preferred Export Destination">
                  <input name="exportDestination" className={inp} placeholder="USA, UAE, Europe, Japan..." />
                </Field>
                <Field label="Harvest Availability">
                  <select name="harvestAvailability" className={inp} defaultValue="">
                    <option value="">Select availability</option>
                    {harvest.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </Field>
              </Grid2>

              <Field label="Additional Details">
                <textarea name="additionalDetails" rows={5} className={inp} placeholder="Describe your products, quantity, packaging details, harvest timeline, or export requirements..." />
              </Field>

              <Field label="Optional Product Image Upload">
                <label className="flex items-center gap-3 rounded-2xl border border-dashed border-border p-5 cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Photos cannot be attached via email or WhatsApp from here — share them after we connect.</span>
                  <input type="file" multiple className="hidden" disabled />
                </label>
              </Field>

              <InquirySubmitActions
                formId="export-inquiry-form"
                formType="export"
                emailLabel="Submit to Gmail / Email"
                whatsappLabel="Submit to WhatsApp"
              />
            </form>

            <DirectContact />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl gradient-forest p-8 text-primary-foreground reveal">
              <Globe2 className="h-6 w-6 text-gold" />
              <h4 className="mt-4 font-display text-2xl">Active export geographies</h4>
              <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-cream/85">
                {["USA", "Europe", "UAE", "Singapore", "Japan"].map((c) => (
                  <li key={c} className="rounded-full glass-dark px-4 py-2 text-center">{c}</li>
                ))}
              </ul>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-[oklch(0.22_0.03_150)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp Export Desk
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm text-cream">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm text-cream break-all">
                {SITE.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="reveal max-w-2xl">
            <Eyebrow>The journey</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
              From your harvest to the buyer's warehouse.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Five disciplined steps — coordinated by a single export desk so nothing falls between the cracks.
            </p>
          </div>
          <span className="reveal hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-accent">
            <span className="h-px w-8 bg-accent" /> 5-stage protocol
          </span>
        </div>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((p, i) => (
              <li
                key={p.n}
                className="reveal group relative rounded-3xl bg-card border border-border p-7 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--forest)_35%,transparent)] transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-display text-base shadow-lg shadow-primary/20 ring-8 ring-background relative">
                  {i + 1}
                </span>
                <p className="mt-5 text-[11px] tracking-[0.28em] uppercase text-accent">Step {p.n}</p>
                <h4 className="mt-2 font-display text-2xl leading-tight">{p.t}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-14 h-4 w-4 text-accent/70" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}

const inp = "w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest uppercase text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
function Grid2({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}
