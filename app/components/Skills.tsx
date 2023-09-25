import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 font-raj'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase'>
          Skills
        </p>
     
        <div className='grid uppercase grid-cols-2 lg:grid-cols-4 gap-10'>
    
          <div className='p-6 shadow-xl border-[#843A0B] border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/javascript.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  border-[#843A0B]  border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/canva.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>Canva</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  border-[#843A0B]  border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/react.png' width={50}height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>React</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  border-[#843A0B]  border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/tailwind.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl border-[#843A0B]   border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/firebase.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  border-[#843A0B]  border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/github.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>Github</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl border-[#843A0B] border-2  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/next.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>NextJS</p>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl   border-2 border-[#843A0B]
           hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/typescript.png' width={50} height={50} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p>Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;