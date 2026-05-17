import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  heading?: string;
};

export function DirectContact({
  className,
  heading = "Prefer to reach us directly?",
}: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/60 p-6",
        className,
      )}
    >
      <p className="text-sm text-muted-foreground">{heading}</p>
      <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white hover:scale-[1.02] transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors break-all"
        >
          <Mail className="h-4 w-4 shrink-0" />
          {SITE.email}
        </a>
      </div>
    </div>
  );
}
