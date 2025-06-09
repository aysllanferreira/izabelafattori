import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Izabela Fattori – UI/UX Designer & QA Engineer",
  description:
    "UI/UX Designer and QA Engineer with 3+ years of experience creating intuitive, accessible digital experiences and ensuring product quality through automation and testing.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "UI/UX Designer, QA Engineer, Portfolio, Web Design, User Experience, Test Automation, Accessibility, Cypress, Figma, Izabela Fattori",
  authors: [{ name: "Izabela Fattori" }],
  openGraph: {
    title: "Izabela Fattori – UI/UX Designer & QA Engineer",
    description:
      "UI/UX Designer and QA Engineer with 3+ years of experience designing user-centered interfaces and implementing robust QA strategies.",
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
