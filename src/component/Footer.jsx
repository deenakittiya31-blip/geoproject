import React from 'react'
import { FaFacebook, FaLinkedin, FaGooglePlus, FaTwitter, FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#0e243a]'>
            <div className=''>
                <footer className='px-5 py-15 gap-15 grid lg:grid-cols-5 lg:px-20'>
                    <div>
                        <img src='https://geotrip-shreethemes.netlify.app/assets/logo-2-CayjBkWv.png' width={160} className='mb-3' />
                        <p className='text-white text-xs/6 font-medium tracking-wide'>We make your dream more beautiful & enjoyful with lots of happiness.</p>
                        <ul className='flex gap-3 mt-6'>
                            <li>
                                <a href='#' className='w-9 h-9 bg-gray1/10 hover:bg-bluepr rounded-sm flex justify-center items-center transition duration-400 ease-in-out'>
                                    <FaFacebook size={17} fill='white' />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='w-9 h-9 bg-gray1/10 hover:bg-bluepr rounded-sm flex justify-center items-center transition duration-400 ease-in-out'>
                                    <FaLinkedin size={17} fill='white' />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='w-9 h-9 bg-gray1/10 hover:bg-bluepr rounded-sm flex justify-center items-center transition duration-400 ease-in-out'>
                                    <FaGooglePlus size={17} fill='white' />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='w-9 h-9 bg-gray1/10 hover:bg-bluepr rounded-sm flex justify-center items-center transition duration-400 ease-in-out'>
                                    <FaTwitter size={17} fill='white' />
                                </a>
                            </li>
                            <li>
                                <a href='#' className='w-9 h-9 bg-gray1/10 hover:bg-bluepr rounded-sm flex justify-center items-center transition duration-400 ease-in-out'>
                                    <FaDribbble size={17} fill='white' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:pl-10'>
                        <p className='font-bold text-sm text-white mb-5'>The Navigation</p>
                        <ul className='text-white text-[13px] font-semibold flex flex-col gap-4'>
                            <li><a href='#' className='hover:underline'>Talent Marketplace</a></li>
                            <li><a href='#' className='hover:underline'>Payroll Services</a></li>
                            <li><a href='#' className='hover:underline'>Direct Contracts</a></li>
                            <li><a href='#' className='hover:underline'>Hire Worldwide</a></li>
                            <li><a href='#' className='hover:underline'>Hire in the USA</a></li>
                            <li><a href='#' className='hover:underline'>How to Hire</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold text-sm text-white mb-5'>Our Resources</p>
                        <ul className='text-white text-[13px] font-semibold flex flex-col gap-4'>
                            <li><a href='#' className='hover:underline'>Free Business tools</a></li>
                            <li><a href='#' className='hover:underline'>Affiliate Program</a></li>
                            <li><a href='#' className='hover:underline'>Success Stories</a></li>
                            <li><a href='#' className='hover:underline'>Upwork Reviews</a></li>
                            <li><a href='#' className='hover:underline'>Resources</a></li>
                            <li><a href='#' className='hover:underline'>Help & Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold text-sm text-white mb-5'>The Company</p>
                        <ul className='text-white text-[13px] font-semibold flex flex-col gap-4'>
                            <li><a href='#' className='hover:underline'>About Us</a></li>
                            <li><a href='#' className='hover:underline'>Leadership</a></li>
                            <li><a href='#' className='hover:underline'>Contact Us</a></li>
                            <li><a href='#' className='hover:underline'>Investor Relations</a></li>
                            <li><a href='#' className='hover:underline'>Trust, Safety & Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold text-sm text-white mb-5'>Payment Methods</p>
                        <div>
                            <img src='https://geotrip-shreethemes.netlify.app/assets/payment-jUek1u3t.png' className='w-full h-auto md:w-[261px] md:h-[25px]' />
                        </div>
                        <div className='mt-4'>
                            <p className='text-white text-[13px] font-semibold mb-5'>Our Partners</p>
                            <div className='grid grid-cols-3 gap-5'>
                                <img src='https://geotrip-shreethemes.netlify.app/assets/mytrip-DnYo34Bh.png' />
                                <img src='https://geotrip-shreethemes.netlify.app/assets/tripadv-C4cVwSEZ.png' />
                                <img src='https://geotrip-shreethemes.netlify.app/assets/goibibo-DHBEBq09.png' />
                            </div>
                        </div>
                    </div>
                </footer>
                <hr className="border-0 h-px bg-[#ffffff1a]/60" />
                <div className='sm:px-20 py-5 md:flex justify-between text-sm'>
                    <div>
                        <p className="mb-0 text-paragraphColor font-medium">© 2025  GeoTrip. Develop By <a className="text-[#a5b2c4] font-semibold" href="https://shreethemes.in/" target="blank">Shreethemes</a></p>
                    </div>
                    <div className="flex justify-start text-end text-white font-medium">
                        <p ><a href="/home-2" data-discover="true">Terms of services</a></p>
                        <p ><a href="/home-2" data-discover="true">Privacy Popcies</a></p>
                        <p ><a href="/home-2" data-discover="true">Cookies</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer