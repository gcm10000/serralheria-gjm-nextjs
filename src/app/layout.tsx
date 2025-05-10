// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Serralheria GJM",
  "description": "Estamos prontos para atender às suas necessidades em serralheria. Entre em contato para solicitar um orçamento sem compromisso ou esclarecer qualquer dúvida.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Canal das Tachas, 54",
    "addressLocality": "Terreirão – Recreio",
    "addressRegion": "RJ",
    "addressCountry": "BR"
  },
  "telephone": "+55-21-99348-9060",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
    "keywords": [
    "serralheiro",
    "serraleiro",
    "serralero",
    "seralheiro",
    "serraleiro"
  ],
  "alternateName": [
    "Serraleiro GJM",
    "Serralero GJM",
    "Seralheiro GJM",
    "Serralherio GJM",
    "Serralleiro GJM"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-21-99348-9060",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  }
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serralheria GJM",
  description: "Especialista em portão de aço, portas, galpões, grades, mezaninos e coberturas."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Aqui dentro do <head> vai o seu JSON-LD */}
        <Script
          id="ld-json-localBusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
