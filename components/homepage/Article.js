import { ConsoleSqlOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanity";

function Article({ description, poster, title, slug, author }) {
  function OnClick() {
    const router = useRouter();
    router.push();
  }

  function limitSizeOfDesc(data, limit = 32) {
    let newData = data.split(" ");
    if (newData.length > limit) {
      return data.slice(0, 300) + "...";
      // return (data = data.join().slice(0, 200) + "...")
    } else {
      return data;
    }
  }
  return (
    <div className=' h-[476.16px] px-4 py-4 rounded hover:shadow-2xl hover:bg-[#080A0C] cursor-pointer'>
      <div className='h-[197.17px] w-full rounded-md'>
        <img
          src={urlFor(poster.asset._ref).url()}
          alt='post image'
          // height={198.3}
          // width={345.17}
          className='rounded-md w-full h-full object-contain'
        />
      </div>
      <div className='h-full'>
        <div className='py-3'>
          <Link href={`/${encodeURIComponent(slug.current)}`}>
            <h1 className='font-bold md:text-lg lg:text-[23px] leading-7 text-[#fff] cursor-pointer'>
              {title}
            </h1>
          </Link>
        </div>
        <p className='md:text-sm text-[15px] pb-1 text-[#fff]'>
          {limitSizeOfDesc(description)}
        </p>
        <small className='text-[10px] text-[#fff]'>{author}</small>
      </div>
    </div>
  );
}

export default Article;
