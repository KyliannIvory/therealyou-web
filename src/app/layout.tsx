import type { Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400","500", "600", "700"],
})

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
      <body>
        {children}
      </body>
    </html>
  );
}
