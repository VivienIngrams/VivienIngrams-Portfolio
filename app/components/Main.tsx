"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/legacy/image"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

 

  return (
    <div id="home" className="w-full min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div
          className={`grid md:grid-cols-3 gap-8 items-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {/* Left column - Text content */}
          <div className="order-2 col-span-2 space-y-8 ">
            <div className="space-y-6 ">
              <h2 className="text-2xl lg:text-3xl  font-raj  text-stone-500 font-lighter">
                Coding with Creativity for Dynamic Web Experiences
              </h2>

              <p className="text-sm md:text-md text-stone-500  max-w-lg">
              I am a web developer bringing both artistry and technical skill to every project, ensuring a personalized experience from start to finish.
              </p>

              
            </div>

            {/* Social links */}
            <div className=" flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/in/vivien-ingrams"
                className="text-red-900 hover:text-stone-900 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/VivienIngrams"
                className="text-red-900 hover:text-stone-900 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="mailto:vivieningrams@hotmail.com"
                className="text-red-900 hover:text-stone-900 transition-colors duration-300"
                aria-label="Email"
              >
                <AiOutlineMail className="h-6 w-6" />
              </a>
              <Link
                href="/#contact"
                className="text-red-900 hover:text-stone-900 transition-colors duration-300"
                aria-label="Contact"
              >
                <BsFillPersonLinesFill className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="order-1 pt-12 md:pt-0 flex justify-center md:justify-end">
            <div className="relative">
           
              {/* Image container */}
              <div className="relative  w-32 h-48 md:w-44 md:h-64 2xl:w-52 2xl:h-72 overflow-hidden rounded-full border-2 border-red-900/70 shadow-sm">
                <Image
                  src="/Vivien.jpg"
                  fill
                  sizes="(max-width: 768px) 12rem, 16rem"
                  className="object-cover"
                  alt="Vivien Ingrams"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
