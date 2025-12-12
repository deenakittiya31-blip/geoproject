import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMenu } from 'react-icons/io5';
import MobileNavbar from './MobileNavbar';
import { BsGlobe } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import TabNavbar from './TabNavbar';

const Navbar2 = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);

    const hdlOpenDropdown = () => {
        setMobileDropdown(!mobileDropdown)
    }
    return (
        <nav className='fixed z-50 bg-white w-full flex justify-between shadow-xs px-5 py-3 lg:px-20'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-3'>
                    <div className='lg:hidden'>
                        <button
                            onClick={hdlOpenDropdown}
                            className='shrink-0'>
                            <IoMenu className='size-7 text-sky' />
                        </button>
                    </div>
                    <img src={Logo} className='w-24 sm:w-28 md:w-32 shrink-0' />
                </div>

                {/* mobile navbar */}
                <MobileNavbar
                    isOpen={mobileDropdown}
                    onClose={() => setMobileDropdown(false)}
                />

                <TabNavbar />
            </div>
            <div className='flex gap-5'>
                <a href='#' className='flex items-center gap-1 hover:text-bluepr text-sm text-black'>
                    <span>INR</span>
                    <span>|</span>
                    <BsGlobe />
                </a>
                <button className='flex md:hidden justify-center items-center'>
                    <FaCircleUser className=' fill-bluepr size-7' />
                </button>
                <button className='hidden md:flex items-center gap-1 bg-bluepr px-3 py-3 rounded-sm text-white'>
                    <FaRegUserCircle /> Sign In / Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar2