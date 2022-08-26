// import Navigation from "../Navigation";
import { Fragment } from "react";
import Image from "next/image";
// import Link from "next/link";
// import { Fragment, useState } from "react";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logomoon.webp";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Wallet from "../../assets/walletIcon.webp";
// import Logo from "../../assets/faviconlogo.webp";

function Header() {
  return (
    <Fragment>
      <div
        className='bg-[181e25] fixed w-screen z-50'
        style={{ backdropFilter: "blur(85px)" }}>
        <div className='bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-6 flex justify-between items-center top-0 right-0'>
          <div className='flex justify-between w-full py-2 lg:py-0 lg:w-1/4'>
            <Link href='/' className=' text-red-700 '>
              <Image src={logo} alt='Mooncod' className='w-32 md:w-full' />
            </Link>
            <div className='lg:hidden'>
              <MenuIcon className='text-[#fff] w-7 cursor-pointer' />
              {/* <X className='text-[#fff] w-7' /> */}
            </div>
          </div>
          <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
            <ul className='flex w-full justify-between items-center '>
              <li>
                <Link
                  href='/explore'
                  className='hover:text-[#008AED] active:[#008AED] transition ease duration-300'>
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='relative hover:text-[#008AED] active:text-[#008AED]'
                  id='individual'>
                  <span>
                    Individuals
                    <DownOutlined className='text-xs ' />
                  </span>
                </Link>
              </li>
              {/* <DropDownLink dropdownState={showDropdown} /> */}
              <li>
                <Link
                  href='/wallet'
                  className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  // id='company'
                  className='relative hover:text-[#008AED] active:text-[#008AED]'>
                  <span>
                    Company
                    <DownOutlined className='text-xs ' />
                  </span>
                </Link>
                {/* <CompanyDropdown dropdownState={show} /> */}
              </li>
            </ul>
          </div>
          <button className='hidden lg:block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white '>
            <Link href='/download'>DOWNLOAD</Link>
          </button>
        </div>
        <div
          className={
            "w-full h-screen top-0 translate-x-0 absolute z-[100000] flex lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2 transition ease-in-out duration-500"
          }>
          {/* <XIcon
            className='text-white cursor-pointer w-7 absolute right-4 top-4'
            onClick={closeNav}
          /> */}
          <ul className='flex flex-col h-full py-16 justify-evenly transition linear duration-300 items-center text-center px-6 '>
            <li className=' py-2 my-2 w-full'>
              <Link
                href='/explore'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                Explore
              </Link>
            </li>

            <li className='py-2 my-2 w-full'>
              <span className='flex items-center justify-center text-white font-bold cursor-pointer text-center hover:text-[#008AED] active:text-[#008AED]'>
                Individuals <DownOutlined className='text-xs ml-1' />
              </span>
              <span
                className={
                  "transition ease-out duration-300 mt-4 py-6 rounded-l"
                }>
                <span className='block mb-3'>
                  <Link
                    href='/'
                    className='block py-3 w-full hover:bg-[#008AED] hover:shadow-lg  transition ease duration-300'>
                    Buy and Sell
                  </Link>
                </span>
                <span className='block'>
                  <Link
                    href='/wallet'
                    className='block py-3 w-full hover:bg-[#008AED] hover:shadow-lg  transition ease duration-300'>
                    Mooncod Wallet
                  </Link>
                </span>
              </span>
            </li>

            <li className=' py-2 my-2 w-full'>
              <Link
                href='/'
                className='hover:text-[#008AED] active:[#008AED
] transition ease duration-300'>
                Wallet
              </Link>
            </li>

            <ul className='py-2 mt-2 w-full'>
              <li
                href='/'
                className='flex items-center justify-center text-white font-bold cursor-pointer hover:text-[#008AED] active:text-[#008AED]'>
                Company <DownOutlined className='text-xs ml-1' />
              </li>
              <li
                className={
                  "transition ease-out duration-300 mt-4 py-6 rounded-l"
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
              </li>
            </ul>
            <Link
              href='/download'
              className='lg:hidden bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-4 rounded-full text-white w-64 mx-auto text-center '>
              DOWNLOAD
            </Link>
          </ul>
        </div>
      </div>

      {/* <Outlet /> */}
    </Fragment>
  );
}

export default Header;
