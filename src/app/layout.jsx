import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL("https://pandi-web.vercel.app"),
  title: {
    default: "High Quality Spare Parts in Perinthalmanna Malappuram",
  },
  description:
    "High Quality Spare Parts in Perinthalmanna Malappuram. Trusted brands, fast delivery, competitive prices, expert support to keep your vehicle running reliably.",
  keywords: [
    "car spare parts in Perinthalmanna",
    "auto parts in Malappuram",
    "OEM parts Kerala",
    "aftermarket parts",
    "vehicle spare parts",
    "Malappuram car parts",
    "trusted car parts Kerala",
  ],
  authors: [{ name: "Pandi Auto Spare" }],
  openGraph: {
    title: "High Quality Spare Parts in Perinthalmanna Malappuram",
    description:
      "High Quality Spare Parts Perinthalmanna Malappuram. Trusted brands, fast delivery, competitive prices, and expert support to keep your vehicle running reliably.",
    url: "https://pandi-web.vercel.app",
    siteName: "Pandi Web",
    images: [
      {
        url: "https://pandi-web.vercel.app/images/PandiMetadataImage.webp",
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
    title: "High Quality Spare Parts in Perinthalmanna Malappuram",
    description:
      "Trusted OEM & aftermarket car spare parts in Perinthalmanna Malappuram",
    images: ["https://pandi-web.vercel.app/images/PandiMetadataImage.webp"],
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
    languages: {
      "x-default": "https://pandi-web.vercel.app/",
      en: "https://pandi-web.vercel.app/",
    },
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased debug-screens`}>
        {/* Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
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

        {/* Optional: Usability & Core Web Vitals Hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </body>
    </html>
  );
}
