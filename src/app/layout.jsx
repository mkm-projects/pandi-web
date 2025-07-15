import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"], // Add any weights you use
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Pandi Web",
  description: "Pandi Web - Your One-Stop Shop for Automotive Spare Parts",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <div
          style={{
            // backgroundColor: "#fff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NextIntlClientProvider locale={locale}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
