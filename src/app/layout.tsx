import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Izabela Fattori - UI/UX Designer Portfolio",
  description:
    "UI/UX Designer with 3 years of experience creating intuitive and beautiful digital experiences.",
  keywords:
    "UI/UX Designer, Portfolio, Web Design, User Experience, User Interface, Izabela Fattori",
  authors: [{ name: "Izabela Fattori" }],
  openGraph: {
    title: "Izabela Fattori - UI/UX Designer Portfolio",
    description:
      "UI/UX Designer with 3 years of experience creating intuitive and beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
