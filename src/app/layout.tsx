import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "appjusto",
  description: "Somos um movimento por relações mais justas no delivery ✊",
  itunes: { appId: "1569067601" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={hanken.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
