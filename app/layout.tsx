import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sugar Bytes | Developer Education & Advocacy",
  description:
    "Practical experiments, developer conversations, and technical education about APIs, AI, developer experience, and the tools we build with.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
