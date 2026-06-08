import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoRec — Record Browser Actions, Replay as Automation",
  description: "Chrome extension records user interactions and generates Playwright/Puppeteer scripts. Schedule automated replays for QA and testing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a39ac6a4-8f37-40e2-810f-e4205634b148"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
