export type ContentKind = "learn" | "lab" | "dev-voice" | "developer-tea" | "dx-check" | "talk";

export type ContentItem = {
  slug: string;
  kind: ContentKind;
  title: string;
  summary: string;
  status: "published" | "coming-soon";
  tags: string[];
  href: string;
};

export const contentItems: ContentItem[] = [
  {
    slug: "webhook-worked-twice",
    kind: "learn",
    title: "Your webhook worked. Then it worked again.",
    summary: "A practical guide to signature verification, idempotency, duplicate events, retries, and safer webhook handlers.",
    status: "published",
    tags: ["webhooks", "APIs", "reliability", "Node.js"],
    href: "/learn/webhook-worked-twice",
  },
  {
    slug: "show-ready-checkout",
    kind: "lab",
    title: "Show-Ready Checkout",
    summary: "A webhook reliability demo using HMAC verification, idempotency, automated tests, and CI.",
    status: "coming-soon",
    tags: ["Node.js", "HMAC", "idempotency", "CI"],
    href: "/lab",
  },
  {
    slug: "dev-voices-001",
    kind: "dev-voice",
    title: "Dev Voices #001",
    summary: "A working developer on what actually makes a developer experience useful.",
    status: "coming-soon",
    tags: ["community", "developer experience"],
    href: "/dev-voices",
  },
  {
    slug: "developer-tea-001",
    kind: "developer-tea",
    title: "Developer Tea #001",
    summary: "One question. No corporate answer.",
    status: "coming-soon",
    tags: ["meetups", "interviews"],
    href: "/developer-tea",
  },
];
