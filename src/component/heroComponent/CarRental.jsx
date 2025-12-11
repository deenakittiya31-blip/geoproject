import React from 'react'
import { IoSearch } from 'react-icons/io5'
import DropdownCalender from '../form/DropdownCalender'
import Dropdown from '../form/Dropdown'

const CarRental = () => {
    return (
        <div className='w-full gap-3 grid grid-cols-2 md:flex'>
            <div className="md:flex-1">
                <Dropdown name='Pickup From' />
            </div>
            <div className="md:flex-1">
                <Dropdown name='Drop To' />
            </div>
            <div className="col-span-2 md:flex-1">
                <DropdownCalender />
            </div>
            <button className='col-span-2 py-3.5 px-5 bg-bluepr text-white rounded-md font-jost text-lg flex items-center gap-2'><IoSearch /> Search</button>
        </div>
    )
}

export default CarRental