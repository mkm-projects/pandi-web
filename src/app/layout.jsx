
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"], // Add any weights you use
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL("https://pandi-web.vercel.app"),
  title: {
    default: "Best Quality Spare Parts in Malappuram, Kerala",
  },
  description:
    "Best Quality Spare Parts Malappuram, Kerala. Trusted brands, fast delivery, competitive prices, and expert support to keep your vehicle running reliably.",
  keywords: [
    "car spare parts",
    "auto parts Malappuram",
    "OEM parts Kerala",
    "aftermarket parts",
    "vehicle spare parts",
    "Malappuram car parts",
    "trusted car parts Kerala",
  ],
  authors: [{ name: "Pandi Auto Spare" }],
  openGraph: {
    title: "Best Quality Spare Parts in Malappuram, Kerala",
    description:
      "Best Quality Spare Parts Malappuram, Kerala. Trusted brands, fast delivery, competitive prices, and expert support to keep your vehicle running reliably.",
    url: "https://pandi-web.vercel.app",
    siteName: "Pandi Web",
    images: [
      {
        url: "/images/PandiMetadataImage.webp",
        width: 1200,
        height: 630,
        alt: "Pandi Auto Spare Parts Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Quality Spare Parts in Malappuram, Kerala",
    description:
      "Trusted OEM & aftermarket car spare parts in Malappuram, Kerala.",
    images: ["/images/PandiMetadataImage.webp"],
    site: "@pandiweb",
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
  alternates: {
    canonical: "https://pandi-web.vercel.app",
  },
};


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased debug-screens`}>
        <div
          style={{
            // backgroundColor: "#fff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
            <Header />
            {children}
            <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Auto Parts Store",
              "name": "Pandi Auto Spare",
              "image": "/images/PandiMetadataImage.webp",
              "url": "https://pandi-web.vercel.app",
              "telephone": "+91 8606449640",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street, Perinthalmanna",
                "addressLocality": "Malappuram",
                "addressRegion": "Kerala",
                "postalCode": "676509",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": [
                "https://www.facebook.com/pandiweb",
                "https://www.instagram.com/pandiweb"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
