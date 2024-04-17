"use client"

import ELText from "@/components/Atoms/ELText"
import ArrowRight from '@/public/assets/icons/chevron-right.svg'
import Image from "next/image"
import Link from "next/link"



type menu = {
    name: string
    id: any
    to: any
}

const productpage = () => {
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
        </main>
    )
}

export default productpage