import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frekans Organizasyon | Lüks Düğün ve Kişiye Özel Davet Tasarımı",
  description: "Frekans Organizasyon; lüks düğün, kına, nişan ve kurumsal etkinlikleriniz için kişiye özel konsept tasarımı ve kusursuz planlama hizmeti sunar.",
  keywords: ["Düğün Organizatörü", "Lüks Davet Planlama", "Özel Gün Tasarımı", "Kına Gecesi Yapan Yerler", "Nişan Konsepti", "İzmir Organizasyon", "Kurumsal Etkinlik"],
  authors: [{ name: "Frekans Organizasyon" }],
  creator: "Frekans",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://frekansorganizasyon.com",
    title: "Frekans Organizasyon | Lüks Düğün ve Kişiye Özel Davet Tasarımı",
    description: "Kusursuz planlama ve 'Maximalist Luxury' konseptiyle hayalinizdeki daveti tasarlıyoruz.",
    siteName: "Frekans Organizasyon",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frekans Organizasyon Lüks Düğün",
      }
    ]
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
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
