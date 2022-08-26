import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logomoon.webp";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  // handling mobile dropdown
  const [mobileDrop, setMobileDrop] = useState(true);
  const handleMobileDrop = () => setMobileDrop(!mobileDrop);

  //second mobile dropdown
  const [mobileDrop1, setMobileDrop1] = useState(true);
  const handleMobileDrop1 = () => setMobileDrop1(!mobileDrop1);

  return (
    <Fragment>
      <div
        className='bg-[181e25] fixed w-screen z-50'
        style={{ backdropFilter: "blur(85px)" }}
        onMouseLeave={() => {
          setShow(false);
          setShowDropdown(false);
        }}>
        <div className='bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-6 flex justify-between items-center top-0 right-0'>
          <div className='flex justify-between w-full py-2 lg:py-0 lg:w-1/4 px-6 lg:px-0'>
            <Link href='/' className=' text-red-700 '>
              <Image src={logo} alt='Mooncod' className='w-32 md:w-full' />
            </Link>
            <div className='lg:hidden' onClick={handleClick}>
              {nav ? (
                <MenuIcon className='text-[#fff] w-7 cursor-pointer' />
              ) : null}
            </div>
          </div>
          <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
            <ul className='flex w-full justify-between items-center lg:px-6'>
              <li>
                <a
                  href='https://mooncod.io/explore'
                  target={"blank"}
                  rel='noreferrer'
                  className='hover:text-[#008AED] active:[#008AED] transition ease duration-300'>
                  Explore
                </a>
              </li>

              <li>
                <a
                  href='https://mooncod.io/wallet'
                  target={"blank"}
                  rel='noreferrer'
                  className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                  Wallet
                </a>
              </li>
              <li>
                <a
                  href='https://mooncod.io/faq'
                  target={"blank"}
                  rel='noreferrer'
                  className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='https://mooncod.io/about'
                  target={"_blank"}
                  rel='noreferrer'
                  className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                  About us
                </a>
              </li>
            </ul>
          </div>
          <button className='hidden lg:block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white '>
            <a
              href='https://mooncod.io/download'
              target={"_blank"}
              rel='noreferrer'>
              DOWNLOAD
            </a>
          </button>
        </div>
        <div
          className={
            nav
              ? "absolute left-0 translate-x-[200rem] transition linear duration-300"
              : "w-full h-screen top-0 translate-x-0 absolute z-[100000] flex lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2 transition ease-in-out duration-500"
          }>
          <XIcon
            className='text-white cursor-pointer w-7 absolute right-8 top-4'
            onClick={closeNav}
          />
          <ul className='flex flex-col h-full py-16 justify-evenly transition linear duration-300 items-center text-center px-6 '>
            <li className=' py-2 my-2 w-full' onClick={closeNav}>
              <a
                href='https://mooncod.io/explore'
                target={"_blank"}
                rel='noreferrer'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                Explore
              </a>
            </li>

            <li className=' py-2 my-2 w-full'>
              <a
                href='https://mooncod.io/wallet'
                target={"_blank"}
                rel='noreferrer'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                Mooncod Wallet
              </a>
            </li>
            <li className=' py-2 my-2 w-full'>
              <a
                href='https://mooncod.io/faq'
                target={"_blank"}
                rel='noreferrer'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                FAQ
              </a>
            </li>
            <li className=' py-2 my-2 w-full'>
              <a
                href='https://mooncod.io/about'
                target={"_blank"}
                rel='noreferrer'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                About us
              </a>
            </li>

            <ul className='py-2 mt-2 w-full'>
              {/* <li
                href='/'
                className='flex items-center justify-center text-white font-bold cursor-pointer hover:text-[#008AED] active:text-[#008AED]'
                onClick={handleMobileDrop1}>
                Company <DownOutlined className='text-xs ml-1' />
              </li> */}
              {/* <li
                className={
                  mobileDrop1
                    ? "hidden"
                    : "transition ease-out duration-300 mt-4 py-6 rounded-l"
                }>
                <span className='block mb-3'>
                  <Link
                    href='/about'
                    className='block py-3 w-full hover:bg-[#008AED] hover:sext-black transition ease duration-300'>
                    About
                  </Link>
                </span>
                <span className='block'>
                  <Link
                    href='/faq'
                    className='block py-3 w-full hover:bg-[#008AED] hover:text-black transition ease duration-300'>
                    FAQ
                  </Link>
                </span>
              </li> */}
            </ul>
            <button className='lg:hidden bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-4 rounded-full text-white w-64 mx-auto text-center '>
              <a
                href='https://mooncod.io/downloads'
                target={"_blank"}
                rel='noreferrer'>
                DOWNLOAD
              </a>
            </button>
          </ul>
        </div>
      </div>

      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Navigation;
