"use client"

import ELText from "../Atoms/ELText"
import AddIcon from '@/public/assets/icons/add icon.svg'
import SubIcon from '@/public/assets/icons/minu sign.svg'
import Image from "next/image"
import { ELRadio } from "../Atoms/ELRadio"
import ELButton from "../Atoms/ELButton"
import PromoIcon from '@/public/assets/icons/promoIcon.svg'
import ELInput from "../Atoms/ELInput"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { decreaseQuantity, increaseQuantity } from "@/lib/features/cart/cartSlice"
import { useState } from "react"

interface CartItemProps {
    CartItem: any
    handleButtonClick: any
}

type DeliveryType = {
    id: number, label: string, value: number, addedValue: string
}

const CartItems = (props: CartItemProps) => {
    const { register } = useForm();
    const dispatch = useDispatch<AppDispatch>()

    const cartItems = useSelector((state: RootState) => state.cart.items)

    const deliveryType: DeliveryType[] = [
        { id: 0, label: 'Free shipping', value: 0.00, addedValue: '$0.00' },
        { id: 1, label: 'Express shipping', value: 15.00, addedValue: '+$15.00' },
        { id: 2, label: 'Pick Up', value: 21.00, addedValue: '$21.00' }
    ]

    const [selectedDelivery, setSelectedDelivery] = useState<number>(deliveryType[0].value);

    const handleDeliveryChange = (value: number) => {
        setSelectedDelivery(value);
        console.log(selectedDelivery)
    };


    // Calculate subtotal and total amount
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCharge = selectedDelivery;
    const totalAmount = subtotal + deliveryCharge;

    // const totalAmount = subtotal; // You can add delivery charges based on selected option here

    const handleIncreaseQuantity = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id: number) => {
        dispatch(decreaseQuantity(id));
    };

    return (
        <>
            <div className="md:flex mt-[70px] justify-between">
                <div className="md:w-[60%]">
                    <div className="flex justify-between w-full">
                        <div className="w-[45%]">
                            <ELText text='Product' />
                        </div>
                        <div className="w-[15%] text-center md:flex hidden">
                            <ELText text='Quantity' />
                        </div>
                        <ELText text='Size' className={'md:flex hidden'} />
                        <ELText text='Subtotal' className={'md:flex hidden'} />
                    </div>
                    <div className="my-6">
                        <hr className="border-black " />
                    </div>
                    <div>
                        <div>
                            {cartItems.map((item: any, index: number) => {
                                return (
                                    <>
                                        <main className="flex justify-between w-full items-start md:items-center mb-8" key={index}>
                                            <div className="w-[45%]">
                                                <div className="flex gap-2">
                                                    <div className="w-[80px] h-[100px]">
                                                        <Image
                                                            src={item.product_image[0]}
                                                            alt={`${item.product_name} image`}
                                                            className="bg-gray-200 object-cover h-full w-full"
                                                            width={80}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <div className="md:mt-0 mt-3">
                                                        <ELText text={item.product_name} className={'font-semibold'} />
                                                        <div className="md:my-1 my-3">
                                                        </div>
                                                        <div className="md:flex gap-2 hidden">
                                                            <Image src={AddIcon} alt="Add Icon" className="rotate-45" onClick={() => handleIncreaseQuantity(item.id)} />
                                                            <ELText text='Remove' className={'text-gray-500'} />
                                                        </div>
                                                        <div className="flex justify-around border-2 rounded-lg py-2 md:hidden">
                                                            <Image src={SubIcon} onClick={() => handleDecreaseQuantity(item.id)} alt="Sub Icon" className="cursor-pointer" />
                                                            <ELText text={item.quantity} />
                                                            <Image src={AddIcon} alt="Add Icon" className="cursor-pointer" onClick={() => handleIncreaseQuantity(item.id)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[15%] hidden md:flex justify-around border-2 rounded-lg py-2">
                                                <Image src={SubIcon} onClick={() => handleDecreaseQuantity(item.id)} alt="Sub Icon" className="cursor-pointer" />
                                                <ELText text={item.quantity} />
                                                <Image src={AddIcon} alt="Add Icon" className="cursor-pointer" onClick={() => handleIncreaseQuantity(item.id)} />
                                            </div>
                                            <div className="md:flex hidden">
                                                <ELText text={`$${item.price}`} className={'font-normal'} />
                                            </div>
                                            <div className="flex flex-col items-end mt-3 md:mt-0">
                                                <ELText text={`$${item.price * item.quantity}`} className={'font-semibold'} />
                                                <Image src={AddIcon} alt="Add Icon" className="rotate-45 md:hidden block" width={30} onClick={() => handleIncreaseQuantity(item.id)} />
                                            </div>
                                        </main>
                                        <hr className="my-3" />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="my-9 md:hidden">
                    <ELText text='Have a coupon?' className={'font-semibold text-[20px]'} />
                    <ELText text='Add your code for an instant cart discount' className={'font-medium text-gray-500 text-[20px] mt-2'} />
                    <div className="flex justify-between border border-black px-4 mt-3">
                        <div className="flex gap-2 items-center">
                            <Image src={PromoIcon} alt="Promo Icon" />
                            <ELInput name="coupon" placeholder="Coupon code" register={register} />
                        </div>
                        <ELButton name='Apply' />
                    </div>
                </div>
                <div className="md:w-[30%] border border-black rounded-lg p-6">
                    <ELText text='Cart summary' className={'font-semibold mb-4 text-[20px]'} />
                    <div className="">
                        <ELRadio
                            name='delivery'
                            options={deliveryType}
                            className={'flex flex-col gap-4 '}
                            buttonStyle={'flex gap-4 justify-between border-[2px] rounded-md p-[17px] border-black '}
                            handleRadioButtonClick={handleDeliveryChange}
                        />
                    </div>
                    <div className="mt-[16px]">
                        <div className="flex justify-between">
                            <ELText text='Subtotal' className={'text-[18px]'} />
                            <ELText text={`$${subtotal.toFixed(2)}`} className={'font-semibold'} />
                        </div>
                        <hr className="my-[13px]" />
                        <div className="flex justify-between">
                            <ELText text='Total' className={'font-semibold text-[20px]'} />
                            <ELText text={`$${totalAmount.toFixed(2)}`} className={'font-semibold text-[20px]'} />
                        </div>
                    </div>
                    <div className="mt-[35px]">
                        <ELButton name="Checkout" className="text-white bg-black w-full py-[15px] rounded-lg " handleClick={props.handleButtonClick} />
                    </div>
                </div>
            </div>

            <div className="w-[30%] hidden md:block ">
                <ELText text='Have a coupon?' className={'font-semibold  text-[20px]'} />
                <ELText text='Add your code for an instant cart discount' className={'font-medium text-gray-500  text-[20px] mt-2'} />
                <div className="flex justify-between border border-black px-4 mt-3">
                    <div className="flex gap-2 items-center">
                        <Image src={PromoIcon} alt="Promo Icon" />
                        <ELInput name="coupon" placeholder="Coupon code" register={register} />
                    </div>
                    <ELButton name='Apply' />
                </div>
            </div>
        </>
    )
}

export default CartItems
