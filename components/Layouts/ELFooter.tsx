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
                <div className="md:flex md:justify-between justify-center">
                    <div className="md:flex items-center justify-center  grid place-items-center">
                        <Image src={Logo} alt="Elegant Logo" />
                        <div className="md:w-[1px] md:h-6 w-6 h-[1px] bg-gray-500 mx-8 my-4 md:my-0"></div>
                        <div><ELText text='Gift & Decoration Store' className={'md:text-white text-gray-300'} /></div>
                    </div>
                    <div className="md:flex gap-10 grid place-items-center mt-10">
                        {FooterMenu.map((menu: any, index:any) => {
                            return (
                                <ul className="cursor-pointer" key={index}>
                                    <li className="md:text-white text-gray-300 font-normal">{menu.name}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-12">
                    <hr className="text-[gray]" />
                    <div className="md:mt-4 mt-12 flex justify-between md:flex-row flex-col-reverse">
                        <div className="flex gap-10 flex-col-reverse md:flex-row place-items-center">
                            <ELText text='Copyright © 2023 3legant. All rights reserved' className={'md:text-white text-gray-300'} />
                            <div className="gap-7 flex text-center ">
                                <ELText text='Privacy' className={'text-white'} />
                                <ELText text='Terms of use' className={'text-white'} />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center mb-6 md:mb-0">
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