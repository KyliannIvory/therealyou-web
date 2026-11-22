import type { Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400","500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Real You",
  description: "The Real You : trouvez les meilleurs salons de coiffure, " +
      "barbiers et instituts de beauté en Côte d'Ivoire et réservez " +
      "votre rendez-vous en quelques clics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
          lang="fr"
          className={`${bodoniModa.variable} ${plusJakartaSans.variable} h-full antialiased`}
      >
        <body className="relative isolate flex min-h-full flex-col bg-glacier-50 font-body text-ice-dark selection:bg-glacier-200 selection:text-glacier-900">

          {/* Fond décoratif */}
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -left-20 size-[650px] rounded-full bg-linear-to-br from-white via-glacier-100 to-glacier-200/40 blur-[110px]" />
            <div className="absolute top-[25%] -right-24 size-[700px] rounded-full bg-linear-to-bl from-white via-cyan-50 to-glacier-200/35 blur-[130px]" />
            <div className="absolute -bottom-20 left-1/4 size-[550px] rounded-full bg-linear-to-t from-glacier-100/60 to-transparent blur-[100px]" />
            <div className="absolute inset-0 bg-dots opacity-30" />
          </div>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
  );
}
