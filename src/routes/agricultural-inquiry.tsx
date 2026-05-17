import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Upload } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { DirectContact } from "@/components/DirectContact";
import { InquirySubmitActions } from "@/components/InquirySubmitActions";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/agricultural-inquiry")({
  head: () => ({
    meta: [
      { title: "Agricultural Inquiry — Gowda Farmer Ventures" },
      { name: "description", content: "Request a professional plantation consultation. Our team will reach out to assess your land and goals." },
      { property: "og:title", content: "Agricultural Inquiry" },
    ],
  }),
  component: AgriInquiryPage,
});

const crops = ["Coffee", "Pepper", "Cardamom", "Areca Nut", "Other"];
const reqs = [
  "Farm Management", "Crop Cultivation", "Budget Planning", "Plantation Maintenance",
  "Export Guidance", "Investment Consultation", "Crop Protection", "Farmland Purchase Assistance",
];

const process = [
  { n: "01", t: "Submit Inquiry", d: "Share your land details and goals through the form." },
  { n: "02", t: "Discovery Call", d: "Our team reaches out within 2 business days to understand your needs." },
  { n: "03", t: "On-ground Assessment", d: "We visit and study soil, water and existing crops." },
  { n: "04", t: "Custom Strategy", d: "You receive a tailored cultivation and management plan." },
  { n: "05", t: "Operations & Reporting", d: "Active management begins with weekly transparent reports." },
];

const faqs = [
  { q: "Do I need to own a large farm to work with you?", a: "No. We work with plantation owners of every scale, from family-owned estates to large multi-acre holdings." },
  { q: "How often will I receive updates?", a: "All clients receive structured weekly reports covering operations, costs and on-ground progress." },
  { q: "Do you handle crop sales and export?", a: "Yes. We support harvest sale strategy and connect produce with verified international buyers." },
  { q: "How quickly can you start?", a: "Most engagements begin within 2–4 weeks of consultation and land assessment." },
];

function AgriInquiryPage() {
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);

  const toggle = (c: string) =>
    setSelectedCrops((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const cropExtra = {
    cropInterest: selectedCrops.length > 0 ? selectedCrops.join(", ") : "Not specified",
  };

  return (
    <>
      <Section className="!pb-12">
        <div className="max-w-3xl reveal">
          <Eyebrow>Agricultural inquiry</Eyebrow>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Tell us about your land. We'll take it from there.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Share a few details, then choose Gmail or WhatsApp to send your inquiry.
            Our consultation team will reach out within 2 business days.
          </p>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <form
              id="agricultural-inquiry-form"
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
                <Field label="Farm Location">
                  <input name="farmLocation" className={inp} placeholder="District, State" />
                </Field>
                <Field label="Total Land Size">
                  <input name="landSize" className={inp} placeholder="e.g. 5 acres" />
                </Field>
                <Field label="Soil Type">
                  <input name="soilType" className={inp} placeholder="Example: Red Soil, Black Soil, Sandy Soil" />
                </Field>
                <Field label="Current Crops">
                  <input name="currentCrops" className={inp} placeholder="e.g. Coffee, Areca" />
                </Field>
                <Field label="Water Availability">
                  <input name="waterAvailability" className={inp} placeholder="Borewell, Stream, Rain-fed..." />
                </Field>
              </Grid2>

              <Field label="Agricultural Requirements">
                <select name="requirement" className={inp} defaultValue="">
                  <option value="">Select a requirement</option>
                  {reqs.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </Field>

              <Field label="Crop Interest">
                <div className="flex flex-wrap gap-2 pt-1">
                  {crops.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => toggle(c)}
                      className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                        selectedCrops.includes(c)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Additional Details">
                <textarea name="additionalDetails" rows={5} className={inp} placeholder="Describe your farmland, agricultural goals, existing crops, or consultation requirements..." />
              </Field>

              <Field label="Optional Image Upload">
                <label className="flex items-center gap-3 rounded-2xl border border-dashed border-border p-5 cursor-pointer hover:border-primary transition-colors">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Photos cannot be attached via email or WhatsApp from here — share them after we connect.</span>
                  <input type="file" multiple className="hidden" disabled />
                </label>
              </Field>

              <InquirySubmitActions
                formId="agricultural-inquiry-form"
                formType="agricultural"
                extraFields={cropExtra}
              />
            </form>

            <DirectContact />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl gradient-forest p-8 text-primary-foreground reveal">
              <h4 className="font-display text-2xl">Prefer a direct conversation?</h4>
              <p className="mt-2 text-cream/80 text-sm leading-relaxed">Reach our consultation team on WhatsApp, phone, or email.</p>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-[oklch(0.22_0.03_150)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
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
        <h2 className="font-display text-4xl reveal">Process timeline</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <div key={p.n} className="reveal rounded-3xl bg-card border border-border p-6" style={{ transitionDelay: `${i * 60}ms` }}>
              <p className="font-display text-3xl text-accent">{p.n}</p>
              <h4 className="mt-3 text-lg">{p.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="font-display text-4xl reveal">Frequently asked</h2>
        <div className="mt-8 divide-y divide-border rounded-3xl bg-card border border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
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
