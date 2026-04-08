import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Suspense } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Brynnnn12",
  description: "My Portofolio",
  icons: {
    icon: "/favicon.ico",
  },
  variable: "--font-jetBrainsMono",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
