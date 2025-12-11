import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from '../form/Dropdown';
import DropdownCalender from '../form/DropdownCalender';
import DropdownRoom from '../form/DropdownRoom';
import { IoSearch } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";

const Flights = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center font-jost'>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-3'>
                        <input type="radio" className='w-5 h-5 text-neutral-primary border  border-gray-400 bg-neutral-secondary-medium rounded-full checked:border-4 checked:border-bluepr focus:ring-4 focus:border-4 focus:outline-none focus:ring-bluese  appearance-none' name="flightType" />
                        <p>Return</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type="radio" className='w-5 h-5 text-neutral-primary border  border-gray-400 bg-neutral-secondary-medium rounded-full checked:border-4 checked:border-bluepr focus:ring-4 focus:border-4 focus:outline-none focus:ring-bluese  appearance-none' name="flightType" />
                        <p>One Way</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border rounded-full w-40 p-2 text-xs font-medium'>
                    <p>Economy</p>
                    <IoMdArrowDropdown />
                </div>
            </div>
            <div className='flex flex-col gap-3 lg:flex-row  items-stretch'>
                <div className='flex flex-col sm:flex-row gap-3 lg:flex-1 items-center w-full relative'>
                    <div className='flex-1 w-full'>
                        <Dropdown name='Leaving From' />
                    </div>

                    <button className='absolute left-58 z-20 w-12 h-12 bg-white border border-gray-300 rounded-full flex justify-center items-center hover:bg-gray-50 hover:border-bluepr transition shadow-sm shrink-0'>
                        <FaExchangeAlt className='fill-bluepr' />
                    </button>

                    <div className='flex-1 w-full'>
                        <Dropdown name='Going To' />
                    </div>
                </div>

                <div className='lg:w-56'>
                    <DropdownCalender />
                </div>

                <div className='lg:w-48'>
                    <DropdownRoom name='1 Adult' />
                </div>

                <button className='py-3.5 px-8 bg-bluepr text-white rounded-md font-jost text-lg flex items-center justify-center gap-2 sm:h-full lg:w-auto lg:h-14.5 shrink-0'>
                    <IoSearch className='text-xl' />
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}

export default Flights