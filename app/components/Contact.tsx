import Image from "next/legacy/image";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="w-full lg:h-screen font-raj md:py-20">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className=" py-12 tracking-widest uppercase font-poiret font-bold text-3xl md:text-4xl text-center">
          Contact
        </div>
        {/* left */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full  ">
                     <div className="m-4 lg:my-16">
              <h3 className=" md:pt-12 font-poiret font-semibold text-xl uppercase tracking-wider">
                <span className="text-4xl font-medium tracking-tighter">V</span>
                ivien <span className="text-4xl font-medium">I</span>ngrams
              </h3>
              <p className="pt-1 font-pt font-bold text-md">
                Frontend Web Developer
              </p>
              <p className="pt-6 font-pt">
                I am available for part-time work or freelance projects.
              </p>
              <p className="py-2 font-pt">
                {" "}
                Contact me and we can talk about collaborating.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-start p-3">
                <div className="rounded-full shadow-md shadow-stone-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2 bg-[rgba(219,248,207,0.1)] ">
                  <a href="https://www.linkedin.com/in/vivien-ingrams">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-stone-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2 bg-[rgba(219,248,207,0.1)] ">
                  <a href="https://github.com/VivienIngrams">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-stone-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2 bg-[rgba(219,248,207,0.1)] ">
                  <a href="mailto:vivieningrams@hotmail.com" target="_blank">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-stone-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2 bg-[rgba(219,248,207,0.1)] ">
                  <Link href="/#contact">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full ">
            <div className="p-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12 ">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-stone-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
              <HiOutlineChevronDoubleUp />
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
