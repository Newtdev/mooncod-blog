import { SearchOutlined } from "@ant-design/icons";
import wave from "../../assets/wave.png";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = ({ getText }) => {
  let val = useRef();

  return (
    <article className='container  h-full w-full md:px-16 xl:px-20 mx-auto w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 md:mt-0 '>
      <div className='w-full pb-4 md:mb-0 mt-20 lg:mt-36 px-4 lg:px-12 lg:w-2/3  '>
        <div className='relative '>
          <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center z-[10]'>
            Never miss a minute of news and ecosystem information
          </h2>
          <div className='w-14 mx-auto my-3 absolute bottom-6 lg:bottom-4 right-[65%] '>
            <Image src={wave} alt='wave' />
          </div>
          <p className='text-sm mt-6 font-body text-center font-normal text-white'>
            Learn about the latest trends, global news blockbuster partnerships
            and overall project strides.
          </p>
        </div>
      </div>

      <div className='w-full h-full relative py-4 lg:px-4 px-16'>
        <div className='w-full md:w-80 h-10 mx-auto bg[#080A0C] border border-1 border-white flex items-center justify-center rounded-lg px-1'>
          <SearchOutlined className='text-[#fff] w-7' />
          <input
            type='search'
            className='py-1 w-full bg-transparent focus:outline-none text-white text-xs'
            id='search-question'
            placeholder='Search for an assets'
            onChange={() => {
              getText(val.current.value);
            }}
            ref={val}
          />
          {/* {console.log(blogPost)} */}
        </div>
        {/* HELP */}
        {/* <Help /> */}
      </div>
    </article>
  );
};

export default HeroSection;
