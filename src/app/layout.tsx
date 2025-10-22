import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vineeth C. Vijayan — QA / DevOps",
  description: "Portfolio of QA engineering projects and writing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}