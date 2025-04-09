import "./globals.css";
import {
  PT_Sans,
  Poiret_One,
  Rajdhani,
  Josefin_Sans,
} from "next/font/google";
import NavBar from "./components/Navbar";
import Image from "next/image";
const backgroundImgLight =
  "https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80";

const josefin = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  subsets: ["latin"],
  preload: false,
});
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
  className={`min-h-screen bg-[url('https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')] 
  bg-repeat-y bg-top bg-[length:100%_100vh] relative overflow-x-hidden ${josefin.variable} ${pt.variable} ${raj.variable} ${poiret.variable}`}
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        rgba(239,240,229,0.8),
        rgba(236,202,202,0.5),
        rgba(239,240,229,0.8) 100vh
      ),
      url('https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')
    `,
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100% 100vh',
    backgroundPosition: 'top',
  }}
>
  <NavBar />
  <main className="relative z-10">{children}</main>
</body>


    </html>
  );
}
