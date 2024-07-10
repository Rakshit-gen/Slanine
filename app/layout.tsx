import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProv";

const inter = Rajdhani({ subsets: ["latin"], weight:['300','400','600'] });

export const metadata: Metadata = {
  title: "Slanine",
  description: "Generate anything using Gemini AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" >
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
