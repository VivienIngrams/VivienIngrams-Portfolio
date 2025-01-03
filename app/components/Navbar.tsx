"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === "/research-blog" ||
      pathname === "/model-portfolio" ||
      pathname === "/landing-page" ||
      pathname === "/psychologist" ||
      pathname === "/mathilde" ||
      pathname === "/bombarda" ||
      pathname === "/photography" ||
      pathname === "/art-facilitation"
    ) {
      setNavBg("#ded8ca");
    } else if (pathname === "/") { 
      setNavBg("transparent");
        const handleNavBg = () => {
      if (window.scrollY >= 400) {
        setNavBg("rgba(222,216,202,0.5)")
      } else {
        setNavBg('transparent')
      }
    }
    window.addEventListener('scroll', handleNavBg)
    return () => {
      window.removeEventListener('scroll', handleNavBg);
    }
  }
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
      className="fixed w-full h-100 font-poiret font-bold text-red-900 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-8 md:pt-2">
      <div className="relative w-[120px] h-[60px] md:w-[150px] md:h-[70px]"><Link href="/"><Image
          src='/Logo.png'
          alt="Vivien logo"
          layout="fill"
          priority={true}
          sizes="15vw"
          className="w-full h-auto"
        ></Image> </Link></div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-base uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-base uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-base uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-base uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color="#7f1d1d" />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen md:hidden bg-slate-600/80 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%]  h-screen ease-in duration-500 bg-orange-50"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full p-2 items-center justify-between">
              <Link href="/" onClick={handleNav}>
                <Image
                  src='/Logo.png'
                  alt="Vivien logo"
                  height={60}
                  width={100}
                ></Image>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="#7f1d1d" />
              </div>
            </div>
          </div>
          <div className="p-5 flex-col mt-10 text-center">
            <ul>
              <Link href="/">
                <li
                  className="p-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  className="p-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  className="p-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  className="p-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  className="p-3 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-md shadow-stone-400 p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://www.linkedin.com/in/vivien-ingrams">
                  <FaLinkedinIn onClick={handleNav} />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-stone-400 p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://github.com/VivienIngrams">
                  <FaGithub onClick={handleNav} />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-stone-400 p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="mailto:vivieningrams@hotmail.com" target="_blank">
                  <AiOutlineMail onClick={handleNav} />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-stone-400 p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <Link href="/#contact">
                  <BsFillPersonLinesFill onClick={handleNav} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
