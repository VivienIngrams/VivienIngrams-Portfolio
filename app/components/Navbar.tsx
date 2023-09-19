import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="fixed w-full h-20  z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/logo-V.png"
          alt="Vivien logo"
          height={50}
          width={50}
        ></Image>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} color="#064e3b" />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-emerald-950/80">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:hidden h-screen ease-in duration-500 bg-orange-50">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/logo-V.png"
                alt="Vivien logo"
                height={30}
                width={30}
              ></Image>
              <div className="rounded-full shadow-md shadow-neutral-500 p-1 m-2 cursor-pointer">
                <AiOutlineClose size={25} color="#064e3b" />
              </div>
            </div>
            <div className="text-sm m-2">
              <p>Bringing Creativity into Code for Elevating Web Experiences</p>
              <p>Elevating Code with Creativity for Dynamic Web Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
