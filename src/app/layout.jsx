
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
  title: "Pandi Web",
  description: "Pandi Web - Your One-Stop Shop for Automotive Spare Parts",
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
      </body>
    </html>
  );
}
