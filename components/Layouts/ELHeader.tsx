"use client"

import ELText from "../Atoms/ELText"
import Image from "next/image"
import PromoIcon from '@/public/assets/icons/promoIcon.svg'
import ArrowRight from '@/public/assets/icons/arrow-right.svg'
import ElegantLogo from '@/public/assets/icons/3legant..svg'
import SearchIcon from '@/public/assets/icons/search.svg'
import Profile from '@/public/assets/icons/profile.svg'
import BagIcon from '@/public/assets/icons/shopping bag.svg'
interface HeaderMenu {
    id: number
    name: string
    to: string
}
const ELHeader = () => {
    const headerMenu = [
        {
            id: 0,
            name: 'Home',
            to: '/'
        },
        {
            id: 0,
            name: 'Shop',
            to: '/'
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
            <div className="flex bg-gray-300 justify-center items-center py-2">
                <Image src={PromoIcon} alt="Promo Icon" />
                <ELText text='30% off storewide — Limited time!' className={'pl-3 text-black text-[20px]'} />
                <div className="text-blue-500 flex items-center border-blue-500 border-b ml-3">
                    <ELText text='Shop Now' className={''} />
                    <Image src={ArrowRight} alt="Promo Icon" />
                </div>
            </div>
            <div className="container mx-auto my-5 flex items-center justify-between">
                <Image src={ElegantLogo} alt="Elegant logo" />
                <div className="flex gap-10">
                    {headerMenu.map((menu: HeaderMenu) => {
                        return (
                            <ul className="flex cursor-pointer hover:text-black text-gray-500">
                                <li>{menu.name}</li>
                            </ul>
                        )
                    })}
                </div>
                <div className="flex gap-4">
                    <Image src={SearchIcon} alt="Search Icon" />
                    <Image src={Profile} alt="Profile Icon" />
                    <div className="flex gap-2">
                        <Image src={BagIcon} alt="Bag Icon" />
                        <ELText text='2' className={'bg-black text-white rounded-full px-2'} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ELHeader