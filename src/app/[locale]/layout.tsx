import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "../../utils/ThemeProvider";
import FloatingSidebar from "../../components/sections/FloatingSidebar";
import BackgroundEffects from "../../components/ui/sidebar-tools/BackgroundEffects";
import CustomCursor from "../../components/ui/sidebar-tools/CustomCursor";
import { routing } from "../../i18n/routing";
import { generateMetadata as getPageMetadata } from "@/src/utils/generateMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return getPageMetadata({ params });
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <div
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <BackgroundEffects />
          <CustomCursor />
          {children}
          <FloatingSidebar />
        </ThemeProvider>
      </NextIntlClientProvider>
    </div>
  );
}
