import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Tasks",
  description: "Tasks App built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={`${inter.className} no-scrollbar`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
