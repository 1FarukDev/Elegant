"use client"

import ELText from "@/components/Atoms/ELText"
import ArrowRight from '@/public/assets/icons/chevron-right.svg'
import Image from "next/image"
import Link from "next/link"
import TrayTable from '@/public/assets/images/Tray table.png'
import firstImage from '@/public/assets/images/Paste Image 1.svg'
import secondImage from '@/public/assets/images/Paste Image 2.svg'
import thirdImage from '@/public/assets/images/Paste Image 3.svg'
import Arrow from '@/public/assets/icons/Previous Button.svg'
import { useState } from "react"
import star from '@/public/assets/icons/Rating Group.svg'
import Minus from '@/public/assets/icons/minu sign.svg'
import Add from '@/public/assets/icons/add icon.svg'
import Love from '@/public/assets/icons/love icon.svg'
import ELButton from "@/components/Atoms/ELButton"

type menu = {
    name: string
    id: any
    to: any
}

type productImage = {
    id: any,
    image: string
}

const productpage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const Menu = [
        {
            id: '0',
            name: 'Home',
            to: '/'
        },
        {
            id: '1',
            name: 'Shop',
            to: '/'
        },
        {
            id: '2',
            name: 'Product',
            to: '/'
        },
    ]
    const ProductImage = [
        {
            id: '0',
            image: TrayTable
        },
        {
            id: '1',
            image: firstImage
        },
        {
            id: '2',
            image: secondImage
        },
        {
            id: '3',
            image: thirdImage
        },
    ]
    const handleNextImage = () => {
        if (currentIndex < ProductImage.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrevForm = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <main className="container mx-auto">
            <div className="flex gap-4">
                {Menu.map((menu: menu, index: number) => {
                    return (
                        <div key={menu.id} >
                            <Link href={menu.to} className="flex items-center gap-2">
                                <ELText text={menu.name} />
                                {index !== Menu.length - 1 && <Image src={ArrowRight} alt="Arrow right" />}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <section className="flex gap-16 mt-5">
                <div className=" w-1/2 relative">
                    <Image src={ProductImage[currentIndex].image} alt="Image" className="bg-gray-200 w-full" />
                    <div className="absolute top-8 left-8">
                        <ELText text='NEW' className={'bg-white py-1 px-5 rounded-lg mb-2'} />
                        <ELText text='-50%' className={'bg-green-400 py-1 px-5 rounded-lg'} />
                    </div>
                    <div className="flex items-center justify-between absolute top-[30%] w-full">
                        <Image src={Arrow} alt="Arrow Back" className="cursor-pointer" onClick={handlePrevForm} />
                        <Image src={Arrow} alt="Arrow Back" className="rotate-180 -mt-5 cursor-pointer" onClick={handleNextImage} />
                    </div>
                    <div className="flex gap-6 justify-between mt-6">
                        {ProductImage.slice(1).map((image: productImage) => {
                            return (
                                <main key={image.image} className="w-1/3 border">
                                    <Image src={image.image} alt={`${image.id} image`} className="w-full" />
                                </main>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex gap-3">
                        <Image src={star} alt="Rating" />
                        <ELText text='11 Reviews' />
                    </div>
                    <div>
                        <ELText text='Tray Table' className={'font-medium text-[35px] my-4'} />
                    </div>
                    <div>
                        <ELText text='Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks. ' className={'text-[20px] text-gray-500'} />
                    </div>
                    <div className="flex gap-3 my-4 items-end">
                        <ELText text='$199.00' className={'text-[25px] font-medium'} />
                        <div className="relative">
                            <ELText text='$400.00' className={'text-[22px] font-medium text-gray-500'} />
                            <hr className="absolute top-4 text-gray-500 border w-full font-medium" />
                        </div>
                    </div>
                    <hr />
                    <div className="my-4">
                        <ELText text='Offer expires in:' className={'text-[15px] font-normal '} />
                        <div className="flex gap-6 mt-3">
                            <div className="flex flex-col text-center w-max">
                                <ELText text='02' className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                                <ELText text='Days' className={'text-gray-500 font-normal'} />
                            </div>
                            <div className="flex flex-col text-center w-max">
                                <ELText text='02' className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                                <ELText text='Days' className={'text-gray-500 font-normal'} />
                            </div>
                            <div className="flex flex-col text-center w-max">
                                <ELText text='02' className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                                <ELText text='Days' className={'text-gray-500 font-normal'} />
                            </div>
                            <div className="flex flex-col text-center w-max">
                                <ELText text='02' className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                                <ELText text='Days' className={'text-gray-500 font-normal'} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-4">
                        <ELText text='Measurements' className={'text-gray-500 font-normal text-[15px]'} />
                        <ELText text='17 1/2x20 5/8 "' className={'text-black font-medium text-[20px]'} />
                    </div>
                    <div className="flex gap-6 my-8">
                        <div className="flex items-center gap-9 rounded-lg bg-gray-200 w-[max] py-3">
                            <Image src={Minus} alt="Minus sign" className="ml-7"/>
                            <ELText text='1' />
                            <Image src={Add} alt="Add sign" className="mr-8 "/>
                        </div>
                        <div className="flex gap-2 border-2 border-black w-[80%] py-4 px-16 rounded-lg justify-center">
                            <Image src={Love} alt="love icon" />
                            <ELText text="Wishlist" />
                        </div>
                    </div>
                    <div className="flex gap-2 border-2 bg-black text-white py-4 px-16 rounded-lg justify-center">
                        <Image src={Love} alt="love icon" />
                        <ELText text="Add to cart" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default productpage