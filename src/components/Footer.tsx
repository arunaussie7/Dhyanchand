import { Link } from "@tanstack/react-router";
import { Leaf, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.22_0.03_150)] text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-[oklch(0.22_0.03_150)]">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl">Gowda Farmer Ventures</span>
            </Link>
            <p className="mt-5 max-w-md text-sm text-cream/70 leading-relaxed">
              Professional plantation management and global agricultural export
              solutions for landowners and producers. {SITE.tagline}.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-cream/60 mb-4 font-sans">Explore</h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/80 hover:text-gold transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-cream/60 mb-4 font-sans">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {SITE.address}</li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[oklch(0.22_0.03_150)] font-medium hover:scale-[1.03] transition-transform"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Gowda Farmer Ventures. All rights reserved.</p>
          <p className="font-display italic">From Farmland to Global Markets.</p>
        </div>
      </div>
    </footer>
  );
}
