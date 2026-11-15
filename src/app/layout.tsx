import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Real You",
  description: "💈 TheRealYou web app: find a hair salon or barbershop " +
      "in Côte d'Ivoire and book in a few clicks. " +
      "Client space to book appointments, pro dashboard to manage schedule," +
      " services and bookings. Next.js · TypeScript · Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <header> Mon application perso</header>
        <main> {children} </main>
      </body>
    </html>
  );
}
