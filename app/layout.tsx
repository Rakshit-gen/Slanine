import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProv";
import { Toaster } from "@/components/ui/toaster";

const inter = Rajdhani({ subsets: ["latin"], weight: ['300', '400', '600', '700'] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://slanine-s4bi.vercel.app/' ;

export const metadata: Metadata = {
  title: "Slanine | Tasks Simplified",
  description: "Generate anything using Gemini AI",
  
  openGraph: {
    title: "Slanine | Tasks Simplified",
    description: "An AI solution for everything, powered by Gemini 1.5 Flash. Uses templates to do all your tasks.",
    url: baseUrl,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Slanine | Tasks Simplified",
    description: "Generate anything using Gemini AI, powered by Gemini 1.5 Flash.",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

