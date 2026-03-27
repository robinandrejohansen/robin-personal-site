import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robin — Builder",
  description: "Building AI-native products that feel like they belong in the real world.",
  openGraph: {
    title: "Robin — Builder",
    description: "AI-native apps: Dimora, Pep Football, SwingCoach.",
    url: "https://robin.vercel.app",
    siteName: "Robin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
