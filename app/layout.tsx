import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lsdb.or.tz"),
  title: "LSDB - Learning & Skills Development Bureau",
  description:
    "Learning and Skills Development Bureau supports guidance, employability, learning design, and institutional skills development through practical, people-centered services.",
  keywords: [
    "career guidance",
    "skills development",
    "employability support",
    "training design",
    "institutional advisory",
    "workforce readiness",
  ],
  authors: [{ name: "LSDB" }],
  creator: "LSDB",
  publisher: "LSDB",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/brand/lsdb-icon.png",
    apple: "/images/brand/lsdb-icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsdb.or.tz",
    title: "LSDB - Learning & Skills Development Bureau",
    description:
      "Practical guidance, employability support, and institutional learning solutions.",
    siteName: "LSDB",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSDB - Learning & Skills Development Bureau",
    description:
      "Practical guidance, employability support, and institutional learning solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[color:var(--shell)] text-[color:var(--ink)]">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-2">{children}</main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
