import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="z-[2] w-full h-screen flex items-center justify-center text-center">
    <div className="max-w-[1240px] p-2">
      <div className=" text-xl font-raj tracking-widest text-slate-600 mt-5">
            <p> Coding with Creativity for Dynamic Web Experiences</p>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
            <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-md shadow-neutral-500 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Main;
