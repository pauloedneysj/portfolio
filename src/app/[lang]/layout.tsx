import "@/styles/globals.css";
import { Locale, i18n } from "../../config/i18n-config";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import JotaiProvider from "./jotai-provider";
import { ThemeProvider } from "./theme-provider";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <JotaiProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar lang={params.lang as Locale} />
            {children}
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Paulo Edney | Software Engineer",
  description: "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};
