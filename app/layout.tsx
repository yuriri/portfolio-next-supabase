import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Sakai Portfolio site.",
  description: "My Job History and Works.",
};

const NotoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${NotoSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
