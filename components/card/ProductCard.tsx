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
    onMouseEnter?: any
    onMouseLeave?: any
    starRating?:any
    name?:string
    price?:string
    discountPrice:string
}

const ProductCard: FC<CardInputFieldProps> = ({ id, image, handleClick, showButton = false, onMouseEnter, onMouseLeave, starRating, name, price, discountPrice }) => {
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
            <div>
                <Image src={starRating} alt="Star Rating"/>
                <ELText text={name} />
              <div className="flex gap-4">
                    <ELText text={discountPrice} className={'text-[15px]'}/>
                    <div className="relative">
                        <ELText text={price} className={'text-[15px] font-medium text-gray-500'} />
                        <hr className="absolute top-[10px] text-gray-500 border w-full font-medium " />
                    </div>
              </div>
            </div>
        </main>
    )
}

export default ProductCard