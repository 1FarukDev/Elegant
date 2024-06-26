"use client"
import Image from "next/image"
import ELButton from "../Atoms/ELButton"
import Link from "next/link"
import LoveIcon from '@/public/assets/icons/wishlistadd.svg'
import ELText from "../Atoms/ELText"
import { FC } from "react"
import { MdStarRate } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";


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
    handleDetailsClick?:any
    discountPercentage?:any
    productCondition?:boolean
}

const ProductCard: FC<CardInputFieldProps> = ({ id, image, handleClick, showButton = false, onMouseEnter, onMouseLeave, starRating, name, price, discountPrice, handleDetailsClick, discountPercentage, productCondition }) => {

    return (
        <Link href={`/shoppage/${id}`}>
            <div className="bg-gray-200 flex-shrink-0 relative cursor-pointer w-100% rounded-lg flex justify-center">
                <div className="h-[349px] w-[262px] rounded-md">
                    <Image src={image} alt={`${name} image`} className="absolute top-0 left-0 object-cover rounded-md"
                        layout="fill" />
                </div>
                <div className="flex justify-between items-start absolute top-3 w-full md:px-4 px-2" >
                    <div className="">
                        {productCondition && <ELText text='NEW' className={'bg-white text-[10px] md:text-[20px]  py-1 px-5 rounded-lg mb-2'} />}
                        {discountPercentage && <ELText text={`-${discountPercentage}`} className={'bg-green-400 text-[10px] md:text-[20px] py-1 px-5 rounded-lg'} />}
                        
                    </div>
                    <div className="flex justify-end  w-full ">
                        <Image src={LoveIcon} alt="Icon for add to wishlist" />
                    </div>
                </div>
                
                    <div  className="absolute w-full bottom-0 bg-gray-100 md:p-4 p-2 ">
                        <ELButton name="Add to cart" className="bg-black text-white w-full md:p-2 p-[2px]  text-[15px] rounded-lg" handleClick={handleClick} />
                    </div>

            </div>
            <div className="mt-4">
                <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <MdStarRate
                            key={index}
                            className={`star ${index < starRating ? 'text-black' : 'text-gray-400'}`}
                        />
                    ))}
                </div>
                <ELText text={name} />
                {discountPercentage && <div className="flex gap-4">
                    <ELText text={`$${discountPrice}`} className={'text-[15px]'} />
                    <div className="relative">
                        <ELText text={`$${price}`} className={'text-[15px] font-medium text-gray-500'} />
                        <hr className="absolute top-[10px] text-gray-500 border w-full font-medium " />
                    </div>
                </div>}
                {!discountPercentage && <div className="flex gap-4">
                    <div className="relative">
                        <ELText text={`$${price}`} className={'text-[15px] font-medium text-gray-500'} />
                    </div>
                </div>}
             
            </div>
        </Link>
    )
}

export default ProductCard