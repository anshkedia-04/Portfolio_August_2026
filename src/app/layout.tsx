import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import { CursorProvider } from "@/providers/CursorProvider";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ansh Kedia - Portfolio",
  description: "Software engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <CursorProvider>
            <LenisProvider>
              <CustomCursor />
              <Header />
              <main className="flex flex-col min-h-screen">
                {children}
              </main>
              <Footer />
            </LenisProvider>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
