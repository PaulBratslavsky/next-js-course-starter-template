import type { Metadata } from "next";
import "./globals.css";

import { globalData } from "@/app/fake-data";

import TopNav from "@/app/components/TopNav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayoutRoute({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body className="wrapper">
        <TopNav data={globalData.topNav} />
        <main>{children}</main>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
