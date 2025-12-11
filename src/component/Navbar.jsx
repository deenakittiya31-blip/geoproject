import React from 'react'
import Logo from '../assets/logo.png'
import { BsGlobe } from "react-icons/bs";
import { FaDropbox, FaEye, FaHotel, FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { homeLink } from '../Link/LinkNav';
import { IoAirplane } from 'react-icons/io5';
import { FaCircleUser, FaPersonWalkingLuggage } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className='fixed z-50 w-full bg-white md:px-20 flex justify-between p-3.5 font-jost font-medium text-black shadow-xs'>
            <div className='flex gap-5 items-center text-sm'>
                <img src={Logo} width={130} />
                {/* home box */}
                <div className='h-full hidden md:flex items-center gap-5'>
                    <div className='group relative h-full flex items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-headingColor group-hover:text-bluepr'>Home </p>
                            <IoIosArrowDown className='fill-headingColor group-hover:fill-bluepr transition duration-300 group-hover:rotate-180' />
                        </div>

                        <ul className='hidden absolute top-12 bg-white z-51 w-50 p-3 border border-gray-100 shadow rounded-lg group-hover:block'>
                            {
                                homeLink.map((i, idx) => (
                                    <li key={idx} className='li'>
                                        {i}
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                ))
                            }
                            <li className='text-sm transition duration-300 hover:translate-x-2 '>Home version 06</li>
                        </ul>
                    </div>

                    {/* list box */}
                    <div className='group relative h-full flex items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-headingColor group-hover:text-bluepr'>Listing </p>
                            <IoIosArrowDown className='fill-headingColor group-hover:fill-bluepr transition duration-300 group-hover:rotate-180' />
                        </div>
                        <ul className='hidden absolute top-12 bg-white z-50 w-60 p-3 border border-gray-100 shadow rounded-lg group-hover:block'>
                            <li className='group/hotel relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Hotel</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/hotel:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Hotel list 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Hotel list 2</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Hotel list 3</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Hotel Detail 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Hotel Detail 1</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li className='group/flight relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Flight</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/flight:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Flight List 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Flight List 2</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Flight Detail</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li className='group/rental relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Rental</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/rental:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Rental List 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Rental List 2</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Rental List 3</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Rental Detail</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li className='group/car relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Car</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/car:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Car List 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Car List 2</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Car List 3</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Car Detail</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li className='group/destination relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Destination</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/destination:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Destination List 1</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Destination List 2</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Destination List 3</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Destination Detail</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Join with GeoTrip</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Add Listing</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Compare Listing</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Bookink Page</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>User Dashboard</p>
                            </li>
                        </ul>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-headingColor group-hover:text-bluepr'>Page </p>
                            <IoIosArrowDown className='fill-headingColor group-hover:fill-bluepr transition duration-300 group-hover:rotate-180' />
                        </div>
                        <ul className='hidden absolute top-12 bg-white z-50 w-60 p-3 border border-gray-100 shadow rounded-lg group-hover:block'>
                            <li className='group/blog relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Blog</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/blog:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Classic Blog</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Blog Grid Style</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Single Blog</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li className='group/auth relative'>
                                <div className='flex justify-between items-center pr-3'>
                                    <span className='li'>Authentication</span>
                                    <IoIosArrowForward className='fill-gray-300 group-hover:fill-bluepr' />
                                </div>
                                <ul className='hidden group-hover/auth:block absolute top-0 left-full bg-white z-51 w-60 p-3 border border-gray-100 shadow rounded-lg '>
                                    <li>
                                        <p className='li'>Sign In</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Sign Up</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Forget Password</p>
                                        <hr className='text-gray-200 my-4' />
                                    </li>
                                    <li>
                                        <p className='li'>Two factor authentication</p>
                                    </li>
                                </ul>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>About Us</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Career Page</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Help Center</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>FAQ's</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Error Page</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Pricing</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Privacy Policy</p>
                                <hr className='text-gray-200 my-4' />
                            </li>
                            <li>
                                <p className='li'>Contact Us</p>
                            </li>
                        </ul>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-headingColor group-hover:text-bluepr'>Menu </p>
                            <IoIosArrowDown className='fill-headingColor group-hover:fill-bluepr transition duration-300 group-hover:rotate-180' />
                        </div>
                        <ul className='hidden absolute top-12 bg-white w-[350px] z-50 p-3 border border-gray-100 shadow rounded-lg group-hover:block'>
                            <li className='flex items-center gap-3 p-3 mb-1 rounded-md hover:shadow-lg shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md'>
                                    <img src='https://images.squarespace-cdn.com/content/v1/671fbc8cbb291458553afdc8/a2c9b817-4148-44ab-9040-4bf7b8e4b14b/wellness-solid.png?format=1000w' />
                                </div>
                                <div>
                                    <h3>HOME STAYS</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 p-3 mb-1 rounded-md hover:shadow-lg shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md flex justify-center items-center'>
                                    <FaHotel fill='#F6C344' size={25} />
                                </div>
                                <div>
                                    <h3>HOME HOTEL</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 p-3 mb-1 rounded-md hover:shadow-lg shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md flex justify-center items-center'>
                                    <IoAirplane fill='#2B64C1' size={25} />
                                </div>
                                <div>
                                    <h3>HOME Fligth</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 p-3 mb-1 rounded-md hover:shadow-lg shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md flex justify-center items-center'>
                                    <FaEye fill='#6363EC' size={25} />
                                </div>
                                <div>
                                    <h3>HOME RENTAL</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 p-3 mb-1 rounded-md hover:shadow-lg shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md flex justify-center items-center'>
                                    <FaDropbox fill='#337460' size={25} />
                                </div>
                                <div>
                                    <h3>HOME CABS</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 p-3 rounded-md hover:shadow-md shadow-bluese'>
                                <div className='bg-[#F2F5F8] w-13 h-13 rounded-md flex justify-center items-center'>
                                    <FaPersonWalkingLuggage className='fill-bluepr' size={25} />
                                </div>
                                <div>
                                    <h3>HOME DESTINATION</h3>
                                    <p className='text-xs text-gray3'>Beautiful Place for stays</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <a href='#' className='flex items-center gap-1 hover:text-bluepr text-sm text-black'>
                    <span>INR</span>
                    <span>|</span>
                    <BsGlobe />
                </a>
                <button className='flex sm:hidden justify-center items-center'><FaCircleUser className=' fill-bluepr size-7' /></button>
                <button className='hidden md:flex items-center gap-1 bg-bluepr px-3 py-3 rounded-sm text-white'><FaRegUserCircle /> Sign In / Register</button>
            </div>
        </nav>
    )
}

export default Navbar