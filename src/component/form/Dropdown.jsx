import React, { useState } from 'react'
import { TbMapPinFilled } from "react-icons/tb";

const Dropdown = ({ name }) => {
    const data = [
        {
            county: 'Canada',
            day: '3 Days & 2 Nights'
        },
        {
            county: 'India',
            day: '5 Days & 4 Nights'
        },
        {
            county: 'Thailand',
            day: '4 Days & 3 Nights'
        },
        {
            county: 'United Kingdom',
            day: '2 Days & 1 Nights'
        },
        {
            county: 'Singapore',
            day: '3 Days & 2 Nights'
        },
        {
            county: 'Dubai',
            day: '4 Days & 2 Nights'
        },
        {
            county: 'Australia',
            day: '6 Days & 5 Nights'
        },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState(null);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 px-3 py-4 border border-gray-300 rounded-md transition-colors bg-white"
            >
                <TbMapPinFilled className="w-5 h-5 text-blue-500" />
                <div className="text-left flex-1">
                    {!selectedDestination && (
                        <div className="font-medium font-jost text-headingColor">{name}</div>
                    )}
                    {selectedDestination && (
                        <div className="text-gray-900 font-semibold">{selectedDestination.county}</div>
                    )}
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
                    {data.map((i, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedDestination(i);
                                setIsOpen(false);
                            }}
                            className="w-full flex items-start gap-3 p-4 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                            <TbMapPinFilled className="w-5 h-5 text-gray-400 mt-1" />
                            <div className="text-left">
                                <div className="text-gray-900 font-semibold">{i.county}</div>
                                <div className="text-sm text-gray-500">
                                    {i.day}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown