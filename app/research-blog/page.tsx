import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ResearchBlog: React.FC = () => {
  return (
    <div className="w-full bg-[#ded8ca] font-raj ">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/Projects/AlexSiteResearch1.png"
          alt="/"
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2 className="uppercase font-poiret p-2">Research Blog</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 py-4">

          <p className="pb-4">
            This app was built in September 2023 using Next JS and hosted on Vercel. The data is
            stored in Firebase realtime database. User authentication is
            available through the Firebase SDK. This enable authorised
            administrators to sign in with an email address. Input forms in turn
            enable authorized users to add, update and delete blog data.
          </p>
          <a
            href="https://github.com/VivienIngrams/AlexIngrams"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-red-800">Code</button>
          </a>
          <a
            href="https://alex-ingrams.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 text-red-800">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 uppercase bg-gradient-to-r from-[rgba(174,36,36,0.92)] to-[#842f0b] shadow-md shadow-stone-400 py-4">
          <div className="p-2">
            <p className="text-center text-[#E6E3DE] font-poiret font-bold uppercase tracking-widest pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
              <p className="text-[#E6E3DE] py-1 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="uppercase font-poiret font-bold cursor-pointer -mt-12"> - Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ResearchBlog;
