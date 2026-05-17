import { Mail, MessageCircle } from "lucide-react";
import {
  collectInquiryMessage,
  openMailInquiry,
  openWhatsAppInquiry,
  type InquiryFormType,
} from "@/lib/inquiry-redirect";

type Props = {
  formId: string;
  formType: InquiryFormType;
  extraFields?: Record<string, string>;
  emailLabel?: string;
  whatsappLabel?: string;
};

export function InquirySubmitActions({
  formId,
  formType,
  extraFields = {},
  emailLabel = "Submit to Gmail / Email",
  whatsappLabel = "Submit to WhatsApp",
}: Props) {
  const handleEmail = () => {
    const form = document.getElementById(formId) as HTMLFormElement | null;
    if (!form) return;
    const message = collectInquiryMessage(form, formType, extraFields);
    if (!message) return;
    openMailInquiry(message.subject, message.body);
  };

  const handleWhatsApp = () => {
    const form = document.getElementById(formId) as HTMLFormElement | null;
    if (!form) return;
    const message = collectInquiryMessage(form, formType, extraFields);
    if (!message) return;
    openWhatsAppInquiry(message.body);
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <button
          type="button"
          onClick={handleEmail}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform"
        >
          <Mail className="h-4 w-4" />
          {emailLabel}
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white hover:scale-[1.02] transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          {whatsappLabel}
        </button>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed rounded-xl bg-secondary/50 border border-border px-4 py-3">
        <strong className="text-foreground font-medium">Note:</strong> Either button
        opens your mail or WhatsApp app with your inquiry already written. Review the
        message and tap <strong className="text-foreground font-medium">Send</strong> to
        reach us. We will contact you within 2 business days.
      </p>
    </div>
  );
}
