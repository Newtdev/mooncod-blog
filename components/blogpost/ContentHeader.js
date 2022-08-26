import { Fragment } from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const ContentHeader = ({ title, author, poster }) => {
  return (
    <Fragment>
      <div className='my-4 h-36 flex flex-col items-start justify-evenly mb-6'>
        <p className='font-bold text-3xl lg:text-4xl'>{title}</p>
        <div className='flex items-center justify-center'>
          <p className='text-md py-2 lg:text-lg'>{`By ${author}`}</p>
        </div>
      </div>
      <div className='relative h-[20rem] lg:h-[30rem] w-full pt-6'>
        <Image
          src={urlFor(poster.asset._ref).url()}
          layout='fill'
          className=' w-full h-full object-contain'
          alt='blog images'
        />
      </div>
    </Fragment>
  );
};

export default ContentHeader;
