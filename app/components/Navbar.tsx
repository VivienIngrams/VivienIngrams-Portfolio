"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import {  useState } from "react";


import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const backgroundImgLight = "https://images.unsplash.com/photo-1608114759160-ad0b1bac35b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80";
const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
     
      className="fixed w-full h-100 font-poiret  font-bold text-red-900 z-[100] "
    >
<div
  className="absolute inset-0 z-[-1] bg-repeat-y bg-top  bg-[length:100%_100vh]"
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        rgba(239,240,229,0.8),
        rgba(217,224,198,0.7),
        rgba(239,240,229,0.8),
        rgba(224,203,198,0.7),
        rgba(239,240,229,0.8) 100vh
      ),
      url('${backgroundImgLight}')
    `
  }}
></div>
      <div>
        <ul className="hidden md:flex justify-between items-center w-screen h-full px-2 md:px-32 2xl:px-44 md:py-4 ">
          <Link href="/">
            <li className=" font-josefin font-medium text-2xl uppercase  tracking-tighter">
              <span className="text-3xl font-josefin tracking-tighter">V</span>
              ivien <span className="text-3xl font-josefin">I</span>ngrams
            </li>
          </Link>
          {/* <Link href="/#about">
            <li className=" text-base uppercase  tracking-[0.1em] hover:border-b">About</li>
          </Link> */}
         <div className="flex space-x-16">
          <Link href="/#projects">
            <li className=" text-base tracking-[0.1em] uppercase hover:border-b">Projects</li>
          </Link>
           <Link href="/#skills">
            <li className=" text-base tracking-[0.1em] uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/#contact">
            <li className=" text-base tracking-[0.1em] uppercase hover:border-b">
              Contact
            </li>
          </Link>
          </div>
        </ul>
        <div className="md:hidden flex justify-between items-center w-full px-4 py-2">
          <Link href="/">
            <h2 className="mt-2 font-josefin font-medium text-lg uppercase tracking-tighter">
              <span className=" text-xl font-josefin tracking-tighter">V</span>
              ivien <span className="text-xl font-josefin">I</span>ngrams
            </h2>
          </Link>
          <div onClick={handleNav} className="p-2 cursor-pointer">
            <AiOutlineMenu size={20} color="#7f1d1d" />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%]  h-screen ease-in duration-500 bg-[#eff0e5]"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full p-2 items-center uppercase text-lg  justify-between">
              <Link href="/" onClick={handleNav}>
              <h2 className="pt-1 font-josefin font-medium text-lg uppercase tracking-tighter">
              <span className="text-xl font-josefin tracking-tighter">V</span>
              ivien <span className="text-xl font-josefin">I</span>ngrams
            </h2>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-2 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="#7f1d1d" />
              </div>
            </div>
          </div>
          <div className="p-5 flex-col mt-10 text-center">
            <ul>
              <Link href="/">
                <li
                  className="p-5 text-base uppercase tracking-[0.1em]  hover:border-b"
                  onClick={handleNav}
                >
                  Home
                </li>
              </Link>
              {/* <Link href="/#about">
                <li
                  className="p-5 text-base uppercase tracking-[0.1em]  hover:border-b"
                  onClick={handleNav}
                >
                  About
                </li>
              </Link> */}
              
              <Link href="/#projects">
                <li
                  className="p-5 text-base uppercase tracking-[0.1em]  hover:border-b"
                  onClick={handleNav}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  className="p-5 text-base uppercase tracking-[0.1em]  hover:border-b"
                  onClick={handleNav}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  className="p-3 text-base uppercase tracking-[0.1em]  hover:border-b"
                  onClick={handleNav}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className=" p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://www.linkedin.com/in/vivien-ingrams">
                  <FaLinkedinIn onClick={handleNav} />
                </a>
              </div>
              <div className=" p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://github.com/VivienIngrams">
                  <FaGithub onClick={handleNav} />
                </a>
              </div>
              <div className=" p-2  cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="mailto:vivieningrams@hotmail.com" target="_blank">
                  <AiOutlineMail onClick={handleNav} />
                </a>
              </div>
              <div className=" p-2  cursor-pointer hover:scale-105 ease-in duration-300">
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
