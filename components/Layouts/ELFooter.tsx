"use client"
import Image from "next/image"
import Logo from '@/public/assets/icons/Logo2.svg'
import ELText from "../Atoms/ELText"
import facebook from '@/public/assets/icons/facebook.svg'
import instagram from '@/public/assets/icons/instagram.svg'
import youtube from '@/public/assets/icons/instagram.svg'
const ELFooter = () => {
    const FooterMenu = [
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
            name: 'Blog',
            to: '/'
        },
        {
            id: 0,
            name: 'Contact Us',
            to: '/'
        },
    ]
    return (
        <main className="bg-black">
            <div className="container mx-auto py-20">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Image src={Logo} alt="Elegant Logo" />
                        <div className="w-[1px] h-6 bg-gray-500 mx-8"></div>
                        <div><ELText text='Gift & Decoration Store' className={'text-white'} /></div>
                    </div>
                    <div className="flex gap-10">
                        {FooterMenu.map((menu: any) => {
                            return (
                                <ul className="cursor-pointer">
                                    <li className="text-white font-normal">{menu.name}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-12">
                    <hr className="text-[gray]" />
                    <div className="mt-4 flex justify-between">
                        <div className="flex gap-10 ">
                            <ELText text='Copyright © 2023 3legant. All rights reserved' className={'text-white'} />
                            <ELText text='Privacy' className={'text-white'} />
                            <ELText text='Terms of use' className={'text-white'} />
                        </div>
                        <div className="flex gap-5">
                            <Image src={instagram} alt="Instagram" />
                            <Image src={facebook} alt="facebook" />
                            <Image src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ELFooter