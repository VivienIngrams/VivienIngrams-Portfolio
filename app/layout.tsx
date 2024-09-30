import "./globals.css";
import { PT_Sans, Poiret_One, Rajdhani } from "next/font/google";
import NavBar from "./components/Navbar";

const pt = PT_Sans({
  weight: ["400"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
  preload: false,
});
const raj = Rajdhani({
  weight: ["500"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
  preload: false,
});
const poiret = Poiret_One({
  weight: ["400"],
  variable: "--font-poiret-one",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Vivien Ingrams",
  description: "Frontend web developper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  // bg-[#ded8ca]
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#ded8ca] ${pt.variable} ${raj.variable} ${poiret.variable}`}
      >
        <NavBar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
