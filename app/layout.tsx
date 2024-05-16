import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const default_font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['800', '700', '600', '500', '400', '300', '200',] });

export const metadata: Metadata = {
  title: "Professional Accounting Group | Home",
  description: "We are your trusted team for tax & accounting services here in Kosovo. Whether you need assistance with tax planning, financial reporting, or bookkeeping, we are here to support your financial success journey every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={default_font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
