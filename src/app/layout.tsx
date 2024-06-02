import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" data-theme="dark">
        <body className={`${inter.className} max-w-full overflow-hidden`}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
