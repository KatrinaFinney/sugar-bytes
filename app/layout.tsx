import type { Metadata } from "next";
import "./globals.css";
import "./editorial.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Sugar Bytes | Developer Education & Advocacy",
  description:
    "Practical experiments, developer conversations, and technical education about APIs, AI, developer experience, and the tools we build with.",
  icons: {
    icon: "/sugar-bytes-mark.png",
    shortcut: "/sugar-bytes-mark.png",
    apple: "/sugar-bytes-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
