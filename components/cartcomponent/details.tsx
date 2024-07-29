import React, { useState } from "react";
import ELText from "../Atoms/ELText";
import ELInput from "../Atoms/ELInput";
import { useForm } from "react-hook-form"
import ELDropdown from "../Atoms/ELDropdown";
import ELCheckBox from "../Atoms/ELCheckbox";
import { ELRadio } from "../Atoms/ELRadio";
import Card from '@/public/assets/icons/card.svg'
import ELButton from "../Atoms/ELButton";
import Image from "next/image";
import AddIcon from '@/public/assets/icons/add icon.svg'
import SubIcon from '@/public/assets/icons/minu sign.svg'
import PromoIcon from '@/public/assets/icons/promoIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { decreaseQuantity, increaseQuantity } from "@/lib/features/cart/cartSlice"

interface CartItemProps {
    CartItem: any
    handlePlaceOrderButton: any
    shippingAmount: number
    subTotal: number
    totalAmount: number

}


const DeliveryDetails = (props: CartItemProps) => {
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const { CartItem, handlePlaceOrderButton, shippingAmount, subTotal, totalAmount } = props
    const shopCategroy = [
        {
            id: '0',
            name: 'All Rooms'
        },
        {
            id: '1',
            name: 'Living Room'
        },
        {
            id: '2',
            name: 'Bedroom'
        },
        {
            id: '3',
            name: 'Kitchen'
        },
        {
            id: '4',
            name: 'Bathroom'
        },
        {
            id: '5',
            name: 'Dinning'
        },
        {
            id: '5',
            name: 'Outdoors'
        }
    ]
    const deliveryType = [
        { id: 0, label: 'Pay by credit card', value: 0.00, iconRight: Card },
        { id: 1, label: 'Paypal', value: 15.00 },
    ]
    const { register, control, handleSubmit, watch, formState: { touchedFields, errors } } = useForm()

    const handleIncreaseQuantity = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id: number) => {
        dispatch(decreaseQuantity(id));
    };
    const submitCardDetails = (data:any) => {
        handlePlaceOrderButton(data)
    }
    return (
        <main className="md:flex items-start justify-between mt-[70px]">
            <div className="md:w-[60%] ">
                <form onSubmit={handleSubmit(submitCardDetails)}>
                    <div className="border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                        <ELText text='Contact Information' className='text-[20px] font-medium mb-6' />
                        <div className="flex gap-6">
                            <ELInput name="fname" placeholder="First name" register={register} required={'first name address is needed'} errors={errors} label="FIRST NAME" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                            <ELInput name="lname" placeholder="Last name" register={register} required={'last name address is needed'} errors={errors} label="LAST NAME" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="mt-6">
                            <ELInput name="number" placeholder="Phone number" type="number" register={register} required={'phone number address is needed'} errors={errors} label="PHONE NUMBER" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="mt-6">
                            <ELInput name="address" placeholder="Email Address" register={register} required={'email address address is needed'} errors={errors} label="EMAIL ADDRESS" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                    </div>
                    <div className="mt-6 border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                        <ELText text='Shipping Address' className='text-[20px] font-medium mb-6' />
                        <div className="mt-6">
                            <ELInput name="streetaddress" placeholder="Street Address" register={register} required={'address address is needed'} errors={errors} label="STREET ADDRESS *" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>

                        <div className="mt-6">
                            <ELInput name="Country" placeholder="Country" register={register} required={'country address is needed'} errors={errors} label="COUNTRY*" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="mt-6">
                            <ELInput name="town" placeholder="Town / City" register={register} required={'city address is needed'} errors={errors} label="TOWN / CITY *" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="flex mt-6 gap-6">
                            <ELInput name="state" placeholder="State" register={register} required={'state address is needed'} errors={errors} label="STATE" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                            <ELInput name="zipcode" placeholder="Zip Code" register={register} required={'zip code is needed'} errors={errors} label="ZIP CODE" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="flex gap-4 items-center mt-6">
                            <ELCheckBox name='different address' register={register} />
                            <ELText text='Use a different billing address (optional)' className='font-semibold text-gray-500 text-[15px]' />
                        </div>
                    </div>
                    <div className="mt-6 border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                        <ELText text='Payment Method' className='text-[20px] font-medium mb-6' />
                        <div>
                            <ELRadio name='' options={deliveryType} className='flex flex-col gap-4' buttonStyle='flex gap-4 justify-between border-[2px] rounded-md p-[17px] border-black' handleRadioButtonClick={() => console.log(deliveryType)} />
                        </div>
                        <hr className="border border-black my-8" />
                        <div className="flex gap-6">
                            <ELInput name="cardNumber" placeholder="1234 1234 1234" register={register} required={'card number is needed'} errors={errors} label="CARD NUMBER *" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                            <ELInput name="zipcode" placeholder="Zip Code" register={register} required={'zip code is needed'} errors={errors} label="ZIP CODE" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                        <div className="flex mt-6 gap-6">
                            <ELInput name="date" placeholder="MM/YY" register={register} required={'date is needed'} errors={errors} label="EXPIRATION DATE" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                            <ELInput name="cvv" placeholder="CVV code" register={register} required={'cvv is needed'} errors={errors} label="CVV" labelClassName="font-semibold text-gray-500 text-[12px]" className='border rounded-md' />
                        </div>
                    </div>
                    <div className="mt-[35px] hidden md:block">
                        <ELButton name="Place Order" className="text-white bg-black w-full py-[15px] rounded-lg" type="submit" />
                    </div>
                </form>
                <div>

                </div>
            </div>
            <div className="md:w-[35%] mt-6 md:mt-0 rounded-lg border-2 border-gray-400 px-[24px] py-[40px]">
                <div className="mb-6">
                    {CartItem.map((item: any) => {
                        return (
                            <>
                                <main className="flex justify-between w-full items-start mb-8">
                                    <div className="md:w-[45%]">
                                        <div className="flex gap-2 items-start">
                                            <div className="w-[80px] h-[96px]">
                                                <Image
                                                    src={item.product_image[0]}
                                                    alt="Cart Item"
                                                    className="bg-gray-200 object-cover h-full w-full"
                                                    width={80}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <ELText text={item.product_name} className={'font-semibold'} />
                                                <div className=" flex justify-around border-2 rounded-lg py-2">
                                                    <Image src={SubIcon} alt="Sub Icon" className="cursor-pointer" onClick={() => handleDecreaseQuantity(item.id)} />
                                                    <ELText text={item.quantity} />
                                                    <Image src={AddIcon} alt="Add Icon" className="cursor-pointer" onClick={() => handleIncreaseQuantity(item.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end  md:mt-0">
                                        <ELText text={`$${item.product_price * item.quantity}`} className={'font-semibold'} />
                                        <Image src={AddIcon} alt="Add Icon" className="rotate-45 md:hidden block" width={30} />
                                    </div>
                                </main>
                                <hr className="mb-11" />
                            </>
                        )
                    })}
                </div>
                <div className="flex gap-4 ">
 <ELInput name="coupon" placeholder="Input" register={register} className={'border w-[90%]'} />
                    <div className="md:w-[30%] w-[50%]">
                        <ELButton name="Appy" className="text-white bg-black w-full  py-[15px] rounded-xl  " />
                    </div>
                </div>
                <div className="pt-[40px]">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <Image src={PromoIcon} alt="Card" />
                            <ELText text='JenkateMW' className={'text-[18px]'} />
                        </div>
                        <ELText text='-$25.00 [Remove]' className={'font-semibold text-green-400'} />
                    </div>
                    <hr className="my-[13px]" />
                    <div className="flex justify-between">
                        <ELText text='Shipping' className={'text-[18px]'} />
                        <ELText text={`$${shippingAmount.toFixed(2)}`} className={'font-normal'} />
                    </div>
                    <hr className="my-[13px]" />
                    <div className="flex justify-between">
                        <ELText text='Subtotal' className={'text-[18px]'} />
                        <ELText text={`$${subTotal.toFixed(2)}`} className={'font-semibold'} />
                    </div>
                    <hr className="my-[13px]" />
                    <div className="flex justify-between">
                        <ELText text='Total' className={'font-semibold text-[20px]'} />
                        <ELText text={`$${totalAmount.toFixed(2)}`} className={'font-semibold text-[20px]'} />
                    </div>
                </div>
            </div>
            <div className="mt-[35px] md:hidden">
                <ELButton name="Place Order" className="text-white bg-black w-full py-[15px] rounded-lg " />
            </div>
        </main>
    )
}

export default DeliveryDetails