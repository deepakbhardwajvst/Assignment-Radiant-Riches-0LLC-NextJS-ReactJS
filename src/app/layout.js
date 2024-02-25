import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs/ReactJs Assignment – Figma",
  description: "NextJs/ReactJs Assignment from Radiant Riches LLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      </Head>
      <body className={inter.className}><Header />{children}<Footer /></body>
    </html>
  );
}
