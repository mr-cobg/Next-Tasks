import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies as getCookies } from "next/headers";

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
  const cookies = getCookies();
  const theme = cookies.get("theme")?.value ?? "coffee";

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
