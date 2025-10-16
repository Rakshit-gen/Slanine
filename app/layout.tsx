import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/components/ThemeProv";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Script from "next/script";

const inter = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.slanine.online";

export const metadata: Metadata = {
  title: "Slanine | Tasks Simplified",
  description: "Generate anything using Gemini AI",
  openGraph: {
    title: "Slanine | Tasks Simplified",
    description:
      "An AI solution for everything, powered by Gemini 2.5 Flash. Uses templates to do all your tasks.",
    url: baseUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slanine | Tasks Simplified",
    description:
      "Generate anything using Gemini AI, powered by Gemini 2.5 Flash.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider      appearance={{
        baseTheme: [dark],
      }}>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
            <ScrollToTopButton />

            {/* Chatbase Config Script */}
            <Script
              id="chatbase-config"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.embeddedChatbotConfig = {
                    chatbotId: "Ll7vSI4Hj5lvzfYz-FAec",
                    domain: "www.chatbase.co"
                  };
                `
              }}
            />
            
            {/* Chatbase Embed Script */}
            <Script
              id="chatbase-script"
              src="https://www.chatbase.co/embed.min.js"
              defer
              data-chatbot-id="Ll7vSI4Hj5lvzfYz-FAec"
              data-domain="www.chatbase.co"
            />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}