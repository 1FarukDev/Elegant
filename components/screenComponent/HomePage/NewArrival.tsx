"use client"

import ELText from "@/components/Atoms/ELText"
import Image from "next/image"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import Star from '@/public/assets/icons/Rating Group.svg'
import ProductImage from '@/public/assets/images/product.png'
import LoveIcon from '@/public/assets/icons/wishlistadd.svg'
import ELButton from "@/components/Atoms/ELButton"
import React, { useState } from "react"
import shipping from '@/public/assets/icons/fast delivery.svg'
import money from '@/public/assets/icons/money.svg'
import lock from '@/public/assets/icons/lock 01.svg'
import call from '@/public/assets/icons/call.svg'

interface ProductDetail {
    id: string
    name: string
    discountPrice: string
    price: string
    new: boolean
    discount: string
    rating: string
    image: string
}
const NewArrival = () => {
    const [showDetailsId, setShowDetailsId] = useState<string | null>(null);
    const productDetails = [
        {
            id: '0',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '1',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '2',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '3',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '4',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '5',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '6',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '7',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '8',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '9',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },

    ]
    const Options = [
        {
            id: '0',
            image: shipping,
            head: 'Free Shipping',
            text: 'Order above $200'
        },
        {
            id: '1',
            image: money,
            head: 'Money-back',
            text: '30 days guarantee'
        },
        {
            id: '2',
            image: lock,
            head: 'Secure payment',
            text: 'Secured by strpe'
        },
        {
            id: '3',
            image: call,
            head: '24/7 Support',
            text: 'Phone and Email support'
        },
    ]
    const handleShowDetails = (id: string) => {
        setShowDetailsId(id); // Set the id of the product to show details
    }
    const handleHideDetails = () => {
        setShowDetailsId(null); // Reset the id to hide details
    }
    return (
        <main>
            <section className="flex justify-between items-end">
                <div>
                    <ELText text='New' className={'font-medium text-[30px]'} />
                    <ELText text='Arivals' className={'font-medium text-[30px]'} />
                </div>
                <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer mb-3">
                    <ELText text='Show more' className={'font-normal text-[15px]'} />
                    <Image src={ArrowRight} alt="Arrow Icon" />
                </div>
            </section>

            <section className="flex gap-6 w-full overflow-x-scroll overflow-hidden scrollbar">
                {productDetails.map((product: any) => {
                    return (
                        <div className="bg-gray-200 flex-shrink-0 relative cursor-pointer" onMouseEnter={() => handleShowDetails(product.id)} onMouseLeave={handleHideDetails}>
                            <Image src={product.image} alt="Image" />
                            {showDetailsId === product.id && <>  <div className="flex justify-between absolute top-3 w-full px-4" >
                                <div>
                                    {product.new && <ELText text='NEW' className={'bg-white py-1 px-5 rounded-lg mb-2'} />}
                                    <ELText text='-50%' className={'bg-green-400 py-1 px-5 rounded-lg'} />
                                </div>
                                <div className="">
                                    <Image src={LoveIcon} alt="Icon for add to wishlist" />
                                </div>
                            </div>
                                <div className="absolute w-full bottom-0 bg-gray-100 p-4">
                                    <ELButton name="Add to cart" className="bg-black text-white w-full p-2 rounded-lg" />
                                </div>
                            </>}
                        </div>
                    )
                })}
            </section>

            <section className="mt-12 flex justify-between gap-6">
                {Options.map((option: any) => {
                    return (
                        <div className="bg-gray-100 w-[30%] py-12 rounded-lg pl-8">
                            <Image src={option.image} alt="" />
                            <ELText text={option.head} className={'font-bold text-[15px] '} />
                            <ELText text={option.text} className={'font-normal text-[10px] '} />
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default NewArrival 