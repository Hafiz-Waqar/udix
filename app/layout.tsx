import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Udix.",
  description: "udix is the world’s first smart workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.variable,
          raleway.variable,
          "font-montserrat",
        )}
      >
        {children}
      </body>
    </html>
  );
}
