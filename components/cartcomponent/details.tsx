import React from "react";
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

interface CartItemProps {
    CartItem: any
    handlePlaceOrderButton:any
}

const DeliveryDetails = (props: CartItemProps) => {
    const { CartItem, handlePlaceOrderButton } = props
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
        { id: 0, label: 'Pay by credit card', value: '$0.00', iconRight: Card },
        { id: 1, label: 'Paypal', value: '+$15.00' },
    ]
    const { register, handleSubmit } = useForm()
    return (
        <main className="md:flex items-start justify-between mt-[70px]">
            <div className="md:w-[60%] ">
                <div className=" border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                    <ELText text='Contact Information' className={'text-[20px] font-medium mb-6'} />
                    <div className="flex  gap-6">
                        <ELInput name="fname" placeholder="First name" register={register} label="FIRST NAME" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                        <ELInput name="lname" placeholder="Last name" register={register} label="LAST NAME" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="mt-6">
                        <ELInput name="number" placeholder="Phone number" type="number" register={register} label="PHONE NUMBER" labelClassName=" font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="mt-6">
                        <ELInput name="address" placeholder="Email Address" register={register} label="EMAIL ADDRESS" labelClassName=" font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                </div>
                <div className="mt-6 border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                    <ELText text='Shipping Address' className={'text-[20px] font-medium mb-6'} />

                    <div className="mt-6">
                        <ELInput name="streetaddress" placeholder="Street Address" register={register} label="STREET ADDRESS *" required={true} labelClassName=" font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="mt-6">
                        <ELDropdown options={shopCategroy} title={'Country'} Label="COUNTRY *" labelClassName="font-semibold text-gray-500 text-[12px]" />
                    </div>
                    <div className="mt-6">
                        <ELInput name="town" placeholder="Town / City" register={register} label="TOWN / CITY *" required={true} labelClassName=" font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="flex mt-6 gap-6">
                        <ELInput name="state" placeholder="State" register={register} label="STATE" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                        <ELInput name="zipcode" placeholder="Zip Code" register={register} label="ZIP CODE" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="flex gap-4 items-center mt-6">
                        <ELCheckBox name='different address' />
                        <ELText text='Use a different billing address (optional)' className={'font-semibold text-gray-500 text-[15px]'} />
                    </div>
                </div>
                <div className="mt-6 border-2 border-gray-400 rounded-lg px-[24px] py-[40px]">
                    <ELText text='Payment Method' className={'text-[20px] font-medium mb-6'} />
                    <div className="">
                        <ELRadio name='' options={deliveryType} className={'flex flex-col gap-4 '} buttonStyle={'flex gap-4 justify-between border-[2px] rounded-md p-[17px] border-black '}
                            handleRadioButtonClick={() => console.log(deliveryType)}
                        />
                    </div>
                    <hr className="border border-black my-8" />
                    <div className="flex  gap-6">
                        <ELInput name="cardNumber" placeholder="1234 1234 1234" register={register} label="CARD NUMBER *" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                        <ELInput name="zipcode" placeholder="Zip Code" register={register} label="ZIP CODE" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>
                    <div className="flex mt-6 gap-6">
                        <ELInput name="date" placeholder="MM/YY" register={register} label="EXPIRATION DATE" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                        <ELInput name="cvv" placeholder="CVV code" register={register} label="CVV" labelClassName="font-semibold text-gray-500 text-[12px]" className={'border rounded-md'} />
                    </div>

                </div>
                <div className="mt-[35px] hidden md:block">
                    <ELButton name="Place Order" className="text-white bg-black w-full py-[15px] rounded-lg " handleClick={handlePlaceOrderButton}/>
                </div>
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
                                                <Image src={item.image} alt="Cart Item" className="bg-gray-200" />
                                            </div>
                                            <div>
                                                <ELText text='Tray Table' className={'font-semibold'} />
                                                <div className="my-1">
                                                    <ELText text={`Color: ${item.color}`} className={'text-[15px] text-gray-400'} />
                                                </div>
                                                <div className=" flex justify-around border-2 rounded-lg py-2">
                                                    <Image src={SubIcon} alt="Sub Icon" className="cursor-pointer" />
                                                    <ELText text={item.quantity} />
                                                    <Image src={AddIcon} alt="Add Icon" className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end  md:mt-0">
                                        <ELText text={item.subtotal} className={'font-semibold'} />
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
                        <ELText text='Free' className={'font-normal'} />
                    </div>
                    <hr className="my-[13px]" />
                    <div className="flex justify-between">
                        <ELText text='Subtotal' className={'text-[18px]'} />
                        <ELText text='$1234.00' className={'font-semibold'} />
                    </div>
                    <hr className="my-[13px]" />
                    <div className="flex justify-between">
                        <ELText text='Total' className={'font-semibold text-[20px]'} />
                        <ELText text='$1234.00' className={'font-semibold text-[20px]'} />
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