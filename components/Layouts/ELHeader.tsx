"use client"

import ELText from "../Atoms/ELText"
import Image from "next/image"
import PromoIcon from '@/public/assets/icons/promoIcon.svg'
import ArrowRight from '@/public/assets/icons/arrow-right.svg'
import ElegantLogo from '@/public/assets/icons/3legant..svg'
import SearchIcon from '@/public/assets/icons/search.svg'
import Profile from '@/public/assets/icons/profile.svg'
import BagIcon from '@/public/assets/icons/shopping bag.svg'
import CloseIcon from '@/public/assets/icons/close.svg'
import menuIcon from '@/public/assets/icons/menu-line-horizontal.svg'
import React, { useState } from "react"
import ELHeaderMobile from "./ELHeaderMobile"
import Link from "next/link"
interface HeaderMenu {
    id: number
    name: string
    to: string
}
const ELHeader = () => {
    const [promo, setPromo] = useState<Boolean>(true)
    const [mobileHeader, setMobileHeader] = useState<Boolean>(false)
    const handleClosePromo = () => {
        setPromo(false)
    }
    const headerMenu = [
        {
            id: 0,
            name: 'Home',
            to: '/'
        },
        {
            id: 0,
            name: 'Shop',
            to: '/shop'
        },
        {
            id: 0,
            name: 'Products',
            to: '/'
        },
        {
            id: 0,
            name: 'Contact Us',
            to: '/'
        },
    ]
    return (
        <main>
            {promo && <div className=" bg-gray-300 ">
                <div className="flex justify-between items-center py-2 md:container mx-auto w-4/5">
                    <div className="hidden md:block">
                    </div>
                    <div className="flex">
                        <Image src={PromoIcon} alt="Promo Icon" />
                        <ELText text='30% off storewide — Limited time!' className={'pl-3 text-black text-[15px] md:text-[20px]'} />
                        <div className="text-blue-500 md:flex items-center border-blue-500 border-b ml-3 hidden ">
                            <ELText text='Shop Now' className={''} />
                            <Image src={ArrowRight} alt="Promo Icon" />
                        </div>
                    </div>
                    <div className="">
                        <Image src={CloseIcon} alt="CloseIcon" onClick={handleClosePromo} />
                    </div>
                </div>
            </div>
            }
            <div className="container mx-auto my-5 flex items-center justify-between px-8 md:px-0">
                <div className="flex">
                    <Image src={menuIcon} alt="Menu Icon" className="md:hidden mb-1 w-7" onClick={() => setMobileHeader(true)} />
                    <Image src={ElegantLogo} alt="Elegant logo" className="w-[70px] md:w-[105px]" />
                </div>
                <div className="md:flex gap-10 hidden">
                    {headerMenu.map((menu: HeaderMenu, index: number) => {
                        return (
                            <Link href={menu.to} key={index}>
                                <ul className="flex cursor-pointer hover:text-black text-gray-500" key={index}>
                                    <li>{menu.name}</li>
                                </ul>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex gap-4 ">
                    <div className="hidden md:flex gap-4">
                        <Image src={SearchIcon} alt="Search Icon" />
                        <Image src={Profile} alt="Profile Icon" />
                    </div>
                    <div className="flex gap-2">
                        <Image src={BagIcon} alt="Bag Icon" />
                        <ELText text='2' className={'bg-black text-white rounded-full px-2'} />
                    </div>
                </div>

            </div>
            {mobileHeader && <ELHeaderMobile handleClose={() => setMobileHeader(false)} />}

        </main>
    )
}

export default ELHeader