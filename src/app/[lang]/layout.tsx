import "@/styles/globals.css";
import { Locale, i18n } from "../../config/i18n-config";
import { Lato } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CursorEffect from "@/components/CursorEffect";
import dynamic from "next/dynamic";

const NoSSRProviders = dynamic(
  () => import("../../components/Providers/Providers"),
  {
    ssr: false,
  }
);

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Paulo Edney | Software Engineer",
  description: "Portfolio created by Paulo Edney with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={lato.className}>
        <NoSSRProviders>
          <Navbar lang={params.lang as Locale} />
          {children}
          <CursorEffect />
        </NoSSRProviders>
      </body>
    </html>
  );
}

// import localFont from "next/font/local";

// export const virtousSlab = localFont({
//   src: "../../../public/fonts/Virtuous-Slab.otf",
// });
