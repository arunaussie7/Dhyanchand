import { readFormString } from "@/lib/inquiry-form";
import { SITE } from "@/lib/site";

export type InquiryFormType = "agricultural" | "export";

const FORM_TITLES: Record<InquiryFormType, string> = {
  agricultural: "Agricultural Inquiry",
  export: "Export Inquiry",
};

const FIELD_LABELS: Record<string, string> = {
  farmLocation: "Farm location",
  landSize: "Total land size",
  soilType: "Soil type",
  currentCrops: "Current crops",
  waterAvailability: "Water availability",
  requirement: "Agricultural requirements",
  cropInterest: "Crop interest",
  countryState: "Country / state",
  productCategory: "Product category",
  productName: "Product name",
  quantity: "Quantity available",
  exportDestination: "Export destination",
  harvestAvailability: "Harvest availability",
  additionalDetails: "Additional details",
};

export function collectInquiryMessage(
  form: HTMLFormElement,
  formType: InquiryFormType,
  extraFields: Record<string, string> = {},
): { subject: string; body: string } | null {
  if (!form.reportValidity()) return null;

  const fd = new FormData(form);
  const name = readFormString(fd, "name");
  const phone = readFormString(fd, "phone");
  const email = readFormString(fd, "email");

  const fieldKeys =
    formType === "agricultural"
      ? [
          "farmLocation",
          "landSize",
          "soilType",
          "currentCrops",
          "waterAvailability",
          "requirement",
          "cropInterest",
          "additionalDetails",
        ]
      : [
          "countryState",
          "productCategory",
          "productName",
          "quantity",
          "exportDestination",
          "harvestAvailability",
          "additionalDetails",
        ];

  const fields: Record<string, string> = { ...extraFields };
  for (const key of fieldKeys) {
    if (fields[key]) continue;
    const value = readFormString(fd, key);
    if (value) fields[key] = value;
  }

  const title = FORM_TITLES[formType];
  const lines = [
    `${title} — ${SITE.name}`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    "",
    "--- Details ---",
    ...fieldKeys.map((key) => {
      const label = FIELD_LABELS[key] ?? key;
      return `${label}: ${fields[key] || "—"}`;
    }),
    "",
    "Sent via Gowda Farmer Ventures website.",
  ];

  return {
    subject: `${title} from ${name}`,
    body: lines.join("\n"),
  };
}

export function openMailInquiry(subject: string, body: string): void {
  const url = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export function openWhatsAppInquiry(body: string): void {
  const url = `${SITE.whatsapp}?text=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
