import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animesh",
  description: "Hi I am Animesh. I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#fefedc] min-h-fit`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
