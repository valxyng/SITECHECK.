import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SITECHECK — Проверка сайта", description: "Бесплатно проверьте сайт на ошибки SEO, скорости, мобильной адаптации и технические проблемы." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
