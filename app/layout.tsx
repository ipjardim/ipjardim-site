import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mosk = localFont({
  src: [
    { path: "../public/fonts/Mosk Thin 100.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Mosk Extra-Light 200.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Mosk Light 300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Mosk Normal 400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Mosk Medium 500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Mosk Semi-Bold 600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Mosk Bold 700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Mosk Extra-Bold 800.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Mosk Ultra-Bold 900.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-mosk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igreja Presbiteriana do Jardim",
  description:
    "Bem-vindo à Igreja Presbiteriana do Jardim — uma comunidade de fé, amor e esperança fundada na Palavra de Deus.",
  keywords: ["igreja", "presbiteriana", "jardim", "culto", "cristã", "evangélica"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={mosk.variable}>
      <body className="font-mosk antialiased">{children}</body>
    </html>
  );
}
