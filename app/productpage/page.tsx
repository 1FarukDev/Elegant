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
            <section className="flex gap-16">
                <div className="mt-2 w-1/2 relative">
                    <Image src={ProductImage[currentIndex].image} alt="Image" className="bg-gray-200 w-full" />
                    <div className="flex items-center justify-between absolute top-[30%] w-full">
                        <Image src={Arrow} alt="Arrow Back" className="cursor-pointer" onClick={handlePrevForm}/>
                        <Image src={Arrow} alt="Arrow Back" className="rotate-180 -mt-5 cursor-pointer" onClick={handleNextImage} />
                    </div>
                  <div className="flex gap-6 justify-between mt-6">
                        {ProductImage.slice(1).map((image: productImage) => {
                            return (
                                <main key={image.image} className="w-1/3 border">
                                    <Image src={image.image} alt={`${image.id} image`} className="w-full"/>
                                </main>
                            )
                        })}
                  </div>
                </div>
                <div className="w-1/2">sda</div>
            </section>
        </main>
    )
}

export default productpage