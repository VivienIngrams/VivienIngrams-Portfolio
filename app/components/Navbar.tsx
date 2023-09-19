"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20  z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/logo-V.png"
          alt="Vivien logo"
          height={50}
          width={50}
        ></Image>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color="#064e3b" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 w-full h-screen md:hidden bg-emerald-950/80 ease-in duration-500" : ""
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
            <div className="flex w-full items-center justify-between">
              <Image
                src="/logo-V.png"
                alt="Vivien logo"
                height={30}
                width={30}
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-neutral-500 p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="#064e3b" />
              </div>
            </div>
            <div className="text-sm m-3">
              <p>Bringing Creativity into Code for Elevating Web Experiences</p>
              <p>Elevating Code with Creativity for Dynamic Web Solutions</p>
            </div>
          </div>
          <div className="p-5 flex-col">
            <ul>
              <Link href="/">
                <li className="p-3 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="p-3 text-sm uppercase hover:border-b">About</li>
              </Link>
              <Link href="/">
                <li className="p-3 text-sm uppercase hover:border-b">Skills</li>
              </Link>
              <Link href="/">
                <li className="p-3 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="p-3 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 flex item-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-md shadow-neutral-500 p-2 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-md shadow-neutral-500 p-2 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-md shadow-neutral-500 p-2 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-md shadow-neutral-500 p-2 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
