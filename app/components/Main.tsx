import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="z-[2] w-full h-screen ">
      <div className="h-[90%] flex items-center justify-center text-center">
        <div className="max-w-[1240px] p-2">
          <div className=" text-xl font-raj tracking-widest text-stone-300 mt-5">
            <p> Coding with Creativity for Dynamic Web Experiences</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[330px] m-auto">
        <div className="rounded-full bg-[rgba(219,248,207,0.1)] shadow-md shadow-[rgba(219,248,207,0.5)] ml-1 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <a href="https://www.linkedin.com/in/vivien-ingrams">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="rounded-full bg-[rgba(219,248,207,0.1)] shadow-md shadow-[rgba(219,248,207,0.5)] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <a href="https://github.com/VivienIngrams">
            <FaGithub />
          </a>
        </div>
        <div className="rounded-full bg-[rgba(219,248,207,0.1)] shadow-md shadow-[rgba(219,248,207,0.5)] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <a href="mailto:vivieningrams@hotmail.com" target="_blank">
            <AiOutlineMail />
          </a>
        </div>
        <div className="rounded-full bg-[rgba(219,248,207,0.1)] shadow-md shadow-[rgba(219,248,207,0.5)] mr-1 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <Link href="/#contact">
            <BsFillPersonLinesFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
