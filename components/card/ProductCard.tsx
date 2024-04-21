"use client"
import Image from "next/image"
import ELButton from "../Atoms/ELButton"
import Link from "next/link"
import LoveIcon from '@/public/assets/icons/wishlistadd.svg'
import ELText from "../Atoms/ELText"
import { FC } from "react"



interface CardInputFieldProps {
    id?: string;
    image?: any;
    handleClick?: any
    showButton?: any
    onMouseEnter?:any
    onMouseLeave?:any
}

const ProductCard: FC<CardInputFieldProps> = ({ id, image, handleClick, showButton = false, onMouseEnter, onMouseLeave }) => {
    return (
        <main>
            <div className="bg-gray-200 flex-shrink-0 relative cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Image src={image} alt="Image" />
                <div className="flex justify-between absolute top-3 w-full px-4" >
                    <div>
                        <ELText text='NEW' className={'bg-white py-1 px-5 rounded-lg mb-2'} />
                        <ELText text='-50%' className={'bg-green-400 py-1 px-5 rounded-lg'} />
                    </div>
                    <div className="">
                        <Image src={LoveIcon} alt="Icon for add to wishlist" />
                    </div>
                </div>
                {showButton && (
                    <Link href={'/productpage'} className="absolute w-full bottom-0 bg-gray-100 p-4">
                        <ELButton name="Add to cart" className="bg-black text-white w-full p-2 rounded-lg" handleClick={handleClick} />
                    </Link>
                )}
            </div>
        </main>
    )
}

export default ProductCard