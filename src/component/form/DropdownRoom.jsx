import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";

const DropdownRoom = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 px-3 py-4 border border-gray-300 rounded-md transition-colors bg-white"
            >
                <FaCircleUser className="w-5 h-5 text-blue-500" />
                <div className="text-left flex-1">
                    <div className="font-medium font-jost text-headingColor">{name}</div>
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-15 left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto p-4">
                    <div className='border border-gray-300 rounded-md p-2'>
                        <p className='font-semibold'>Room 1</p>
                        <div className='mt-1'>
                            <p className='text-xs mb-1'>Adults</p>
                            <div className='flex items-center gap-5'>
                                <button className='border w-8 h-8 flex justify-center items-center'>-</button>
                                <span>1</span>
                                <button className='border w-8 h-8 flex justify-center items-center'>+</button>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <p className='text-xs mb-1'>Chidren</p>
                            <div className='flex items-center gap-5'>
                                <button className='border w-8 h-8 flex justify-center items-center'>-</button>
                                <span>0</span>
                                <button className='border w-8 h-8 flex justify-center items-center'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 flex gap-2'>
                        <button className='w-full py-3.5 px-5 bg-bluese text-bluepr rounded-md font-jost text-sm'>Add Room</button>
                        <button className='w-full py-3.5 px-5 bg-bluepr text-white rounded-md font-jost text-sm'>Apply</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropdownRoom