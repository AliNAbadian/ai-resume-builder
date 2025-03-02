import { NextFont } from "next/dist/compiled/@next/font";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`antialiased bg-slate-700 ${inter.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
