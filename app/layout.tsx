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
        className={`min-h-screen bg-[#560a01] ${pt.variable} ${raj.variable} ${poiret.variable}`}
      >
        <NavBar />
        
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-gradient-to-b from-[rgba(223,206,206,0.5)] via-[rgba(219,248,207,0.5)] to-[rgba(219,248,207,0.1)] h-full"></div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
