import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/app/providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animesh",
  description:
    "Hi I am Animesh. I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-fit`}>
        <Provider>
          {children}
          <Navbar />
        </Provider>

        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "7f40528c1ccd4af1805e86b865ec7b47"}'
        />
      </body>
    </html>
  );
}
