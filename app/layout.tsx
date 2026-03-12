import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const termina = localFont({
  src: [
    {
      path: "../public/Termina Test/TerminaTest-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Termina Test/TerminaTest-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-termina",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "MC Daniel Oceans | Elite Master of Ceremony",
  description: "Experience world-class orchestration for corporate galas and elite weddings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${termina.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans selection:bg-gold selection:text-emerald`}
      >
        {/* SVG High-Precision Noise Overlay */}
        <div className="noise-overlay" />

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
