import Image from "next/legacy/image";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="w-full lg:h-screen font-raj py-20">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className=" pb-12 tracking-widest uppercase font-poiret font-bold text-3xl text-center">
          Contact
        </div>
        {/* left */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full  ">
            <div className="relative pt-12 px-4 hover:scale-105 ease-in duration-300">
              <Image
                className="object-cover "
                src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                height={600}
                width={700}
                alt=""
                priority={false}
              />
              <div className="uppercase mt-6 text-red-900 font-bold text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p>Get in touch</p>
              </div>
            </div>
            <div className="m-4 lg:my-12">
              <h3 className="pt-3 font-poiret font-semi-bold text-xl uppercase tracking-wider">
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
        <div className="flex justify-center py-12 ">
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
