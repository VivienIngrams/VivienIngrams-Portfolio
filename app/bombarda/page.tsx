import Image from "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Bombarda: React.FC = () => {
    return ( <div className="w-full bg-[#ded8ca] font-raj ">
    <div className="w-screen h-[50vh] relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src="/assets/Projects/bombarda.png"
        alt="/"
      />
      <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
        <h2 className="uppercase font-poiret p-2">Bombarda</h2>
      </div>
    </div>

    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
      <div className="col-span-4 py-4">

        <p className="pb-4">
        Built in June 2024 with Next.js and hosted on Vercel, this app brings together all of the places of interest in the Bombarda Art District in Porto, Portugal. For ease of use and organisation, the places are seperated into three categories: Art, Food and Drink and Shops. It is also possible to filter throught the different options with tagsso that users can find what they are interested in. The main page also displays a random selection to help users discover new places in the neighbourhood.  Sanity is used as a headless CMS. The app was designed on Figma.
        </p>
        <a
          href="https://github.com/VivienIngrams/Bombarda"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </a>
        <a
          href="https://bombarda-app.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
        </a>
        <a
        href="https://www.figma.com/design/NgxKSrPCzHglqWXHGAgRxd/Bombarda-Digital-Lab?node-id=1625-3626&t=J5jfEZI2K7L9M6rZ-1"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Design</button>
          </a>
      </div>
      <div className="col-span-4 md:col-span-1 uppercase bg-gradient-to-r from-[rgba(174,36,36,0.92)] to-[#842f0b] shadow-md shadow-gray-400 py-4">
        <div className="p-2">
          <p className="text-center text-[#E6E3DE] font-poiret font-bold uppercase tracking-widest pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
           
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Typescript
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Vercel
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Sanity
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Figma
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> React
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> NextJS
            </p>
            <p className="text-[#E6E3DE] py-1 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="uppercase font-poiret font-bold cursor-pointer -mt-16"> - Back</p>
      </Link>
    </div>
  </div> );
}
 
export default Bombarda;