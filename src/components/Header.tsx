import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import HeaderItem from './HeaderItem'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome,
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            name: "WATCHLIST",
            icon: HiPlus,
        },
        {
            name: "ORIGINALS",
            icon: HiStar,
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle,
        },
        {
            name: "SERIES",
            icon: HiTv,
        },
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center justify-between gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8 mt-5'>
                    {menu.map((item) => {
                        return (
                            <HeaderItem name={item.name} Icon={item.icon} />
                        )
                    })}
                </div>
                <div className='flex gap-5 md:hidden mt-5'>
                    {menu.map((item, index) => {
                        return (
                            index < 3 && <HeaderItem name={""} Icon={item.icon} />
                        )
                    })}
                </div>
                <div className='md:hidden mt-5' onClick={()=> setShowMenu(!showMenu)}>
                    <HeaderItem name={""} Icon={HiDotsVertical} />
                    {showMenu && <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4 right-10'>
                        {menu.map((item, index) => {
                            return (
                                index > 2 && <HeaderItem name={item?.name} Icon={item.icon} />
                            )
                        })}
                    </div>}
                </div>
            </div>
            <div>
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[40px] rounded-full' />
            </div>
        </div>
    )
}

export default Header