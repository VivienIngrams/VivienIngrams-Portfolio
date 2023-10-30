import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ArtFacilitation: React.FC = () => {
    return ( <div className="w-full bg-[#ded8ca] font-raj ">
    <div className="w-screen h-[50vh] relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
      <Image
        className="absolute pt-20 z-1"
        layout="fill"
        objectFit="cover"
        src="/assets/Projects/CelesteSite.png"
        alt="/"
      />
      <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
        <h2 className="uppercase font-poiret p-2">Art Facilitation</h2>
      </div>
    </div>

    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
      <div className="col-span-4 py-4">

        <p className="pb-4">
        This website, developed using WordPress, Elementor, and CSS, serves as a platform for an art facilitator. It seamlessly blends aesthetics with functionality, providing a canvas for the artist&apos;s work and their exploration of the profound connections between art, health, culture, and human relationships through various mediums.
        </p>
        <a
          href="https://github.com/VivienIngrams"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </a>
        <a
          href="https://celesteingrams.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-2 mt-4">Demo</button>
        </a>
      </div>
      <div className="col-span-4 md:col-span-1 uppercase bg-gradient-to-r from-[rgba(174,36,36,0.92)] to-[#842f0b] shadow-xl shadow-gray-400 py-4">
        <div className="p-2">
          <p className="text-center text-[#E6E3DE] font-poiret font-bold uppercase tracking-widest pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-[#E6E3DE] py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Wordpress
            </p>
            <p className="text-[#E6E3DE] py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Elementor
            </p>
            <p className="text-[#E6E3DE] py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> CSS
            </p>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="uppercase font-poiret font-bold cursor-pointer"> - Back</p>
      </Link>
    </div>
  </div> );
}
 
export default ArtFacilitation;