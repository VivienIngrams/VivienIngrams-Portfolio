import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Photography: React.FC = () => {
  return (
    <div className="w-full bg-[#ded8ca] font-raj ">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/Projects/2regards.png"
          alt="/"
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2 className="uppercase font-poiret p-2">
            Professional Photography and art gallery
          </h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 py-4">
          <p className="pb-4">
            The app was entirely designed for responsivity using Figma. The
            logos and favicon were made with Canva. The vertical scrool effect is acheived with the react-horizintal-scroll package. The app was built using Next
            JS and is hosted on Vercel. A Newsletter mailing list. Framer motion is
            used to smoothly animate the texts and page transitions and the splash page.
          </p>
          <a
            href="https://github.com/VivienIngrams/2regards"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://2regards.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://www.figma.com/file/stff81bEWbHdr8KgWwGetb/2regards?type=design&node-id=503%3A441&mode=design&t=SPvNx0u1ND4oCBST-1"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Design</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 uppercase bg-gradient-to-r from-[rgba(174,36,36,0.92)] to-[#842f0b] shadow-md shadow-gray-400 py-4">
          <div className="p-2">
            <p className="text-center text-[#E6E3DE] font-poiret font-bold uppercase tracking-widest pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Canva
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-[#E6E3DE] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="uppercase font-poiret font-bold cursor-pointer">
            {" "}
            - Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Photography;
