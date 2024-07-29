"use client"

import ELText from "@/components/Atoms/ELText"
import Image from "next/image"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'

import React, { useState } from "react"
import shipping from '@/public/assets/icons/fast delivery.svg'
import money from '@/public/assets/icons/money.svg'
import lock from '@/public/assets/icons/lock 01.svg'
import call from '@/public/assets/icons/call.svg'
import ProductCard from "@/components/card/ProductCard"
import calculateDiscountedPrice from "@/utils/helpers/DiscountCalculator"
import ProductCardSkeleton from "@/components/card/ProductCardSkeleton"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { addItemToCart } from '@/lib/features/cart/cartSlice'
import { toast } from 'react-toastify'

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
interface CartItem {
    id: string | any;
    price: number;
    quantity: number;
    totalPrice: number;
    product_name: string;
    product_image: string;
    product_price: string;

}
interface Product {
    id: string
    product_name: string
    product_image: string
    product_price: number
    product_discount: number
    product_condition: string
    product_rating: number
}

interface NewArrivalProps {
    newArrival: any
    loading: boolean
}
const NewArrival: React.FC<NewArrivalProps> = ({ newArrival, loading }) => {
    const [showButtonMap, setShowButtonMap] = useState<{ [id: string]: boolean }>({});

    const dispatch: AppDispatch = useDispatch();
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
        setShowButtonMap(prevState => ({
            ...prevState,
            [id]: true
        }));
    }
    const handleHideDetails = (id: string) => {
        setShowButtonMap(prevState => ({
            ...prevState,
            [id]: false
        }));
    }
    const handleAddToCart = (product: Product) => {
        const cartItem: CartItem = {
            id: product.id,
            price: product.product_price,
            quantity: 1,
            totalPrice: product.product_price,
            product_name: product.product_name,
            product_image: product.product_image,
            product_price: product.product_price.toString(),
        };
        dispatch(addItemToCart(cartItem));
        toast.success('You just added this item to cart')
    };
    return (
        <main>
            <section className="flex justify-between items-end">
                <div>
                    <ELText text='New' className={'font-medium text-[30px]'} />
                    <ELText text='Arivals' className={'font-medium text-[30px]'} />
                </div>
                <div className="md:flex hidden items-center gap-2 border-b w-max border-black cursor-pointer mb-3 ">
                    <ELText text='Show more' className={'font-normal text-[15px]'} />
                    <Image src={ArrowRight} alt="Arrow Icon" />
                </div>
            </section>

            <section className="flex gap-6 w-full overflow-x-scroll overflow-hidden scrollbar">
                {loading ? <section className="flex gap-6 w-full overflow-x-scroll overflow-hidden scrollbar">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </section> : <section className="flex gap-6 w-full overflow-x-scroll overflow-hidden scrollbar">
                    {newArrival.map((product: any, index: number) => {
                        const id = product.id;
                        return (
                            <div className=" flex-shrink-0 relative cursor-pointer" key={index}>
                                <ProductCard
                                    image={product.product_image[0]}
                                    handleClick={() => handleAddToCart(product)}
                                    id={product.id}
                                    onMouseEnter={() => handleShowDetails(id)}
                                    onMouseLeave={() => handleHideDetails(id)}
                                    showButton={showButtonMap[id]}
                                    discountPrice={calculateDiscountedPrice(product.product_price, product.product_discount)}
                                    discountPercentage={product.product_discount}
                                    productCondition={product.product_condition}
                                    price={product.product_price}
                                    name={product.product_name}
                                    starRating={product.product_rating}
                                />
                            </div>
                        )
                    })}
                </section>}

            </section>
            <div className="flex items-center md:hidden gap-2 border-b w-max border-black cursor-pointer my-3 ">
                <ELText text='More product' className={'font-normal text-[15px]'} />
                <Image src={ArrowRight} alt="Arrow Icon" />
            </div>

            <section className="mt-12 md:flex justify-between gap-6 grid grid-cols-2">
                {Options.map((option: any, index: any) => {
                    return (
                        <div className="bg-gray-100 md:w-[30%] py-12 rounded-lg md:pl-8 pl-4" key={index}>
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


