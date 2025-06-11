import Connected from "@/components/connected";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { ModeToggle } from "@/components/theme-toggle";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drug Smuggler - Le jeu de contrebande en ligne",
  description: "Devenez le plus grand contrebandier dans ce jeu de stratégie en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <div className="fixed bottom-4 right-4 z-50">
              <ModeToggle />
            </div>
            <Connected />
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
