import "./globals.css";
import { PT_Sans, Poiret_One, Rajdhani } from "next/font/google";
import Image from "next/image";
import NavBar from "./components/Navbar";

const backgroundImg =
  "https://images.unsplash.com/photo-1547499417-0b7889e0f147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
const backgroundImgLight =
  "https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80";

const pt = PT_Sans({
  weight: ["400"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
});
const raj = Rajdhani({
  weight: ["500"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});
const poiret = Poiret_One({
  weight: ["400"],
  variable: "--font-poiret-one",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vivien Ingrams",
  description: "Frontend web developper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-[#ded8ca] ${pt.variable} ${raj.variable} ${poiret.variable}`}
      >
        <NavBar/>
        <Image
          className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src={backgroundImgLight}
          width={1000}
          height={1500}
          alt="Sand"
          />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-gradient-to-b from-[rgba(247,205,205,0.5)] via-[rgba(219,248,207,0.4)] to-[#cec8ba] h-full"></div>{" "}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
