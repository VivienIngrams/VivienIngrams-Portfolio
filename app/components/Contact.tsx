import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact: React.FC = () => {
  return (
    <div id='contact' className="w-full lg:h-screen font-raj">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className=" pb-10 tracking-widest uppercase font-poiret font-bold text-3xl text-center">
          Contact
        </div>
        {/* left */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full  ">
            <div className="relative m-2 bg-[#7f1d1d] hover:scale-105 ease-in duration-300">
              <Image
                className="p-1"
                src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                height={500}
                width={800}
                alt=""
              />
              <div className=" font-bold text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p>Get in touch</p>
              </div>
            </div>
            <div className="m-4 lg:my-12">
              <h3 className="pt-3 font-poiret font-bold text-xl uppercase tracking-wider">
                <span className="text-4xl">V</span>ivien{" "}
                <span className="text-4xl">I</span>ngrams
              </h3>
              <p className="pt-1 font-pt font-bold text-md">Frontend Web Developer</p>
              <p className="pt-6 font-pt">
                I am available for part-time work or free-lance projects.
              </p>
              <p className="py-2 font-pt">
                {" "}
                Contact me and we can talk about collaborating.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-start p-3">
                <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full m-2 bg-[#e5e7eb] shadow-md shadow-neutral-500 p-1">
            <div className="p-6 bg-[#eeece5]">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2  rounded border-neutral-300 p-3"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2  rounded border-neutral-300 p-3"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2  rounded border-neutral-300 p-3"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2  rounded border-neutral-300 p-3"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded border-neutral-300 p-3"
                    rows={10}
                  />
                </div>
                <button className="w-full p-4 mt-4 text">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
              <HiOutlineChevronDoubleUp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
