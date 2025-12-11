import React from 'react'
import DropdownRoom from '../form/DropdownRoom'
import DropdownCalender from '../form/DropdownCalender'
import Dropdown from '../form/Dropdown'
import { IoSearch } from 'react-icons/io5'

const Activity = () => {
    return (
        <div className='w-full gap-3 grid grid-cols-2 md:flex '>
            <div className="md:flex-1">
                <Dropdown name='Going To' />
            </div>
            <div className="md:flex-1">
                <DropdownCalender />
            </div>
            <div className="col-span-2 md:flex-1">
                <DropdownRoom name='1 Adult' />
            </div>
            <button className='col-span-2 not-odd:py-3.5 px-5 bg-bluepr text-white rounded-md font-jost text-lg flex items-center gap-2'><IoSearch /> Search</button>
        </div>
    )
}

export default Activity