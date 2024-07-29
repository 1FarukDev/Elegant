import React from "react";
import ELText from "../Atoms/ELText";
import TrayTable from '@/public/assets/images/Tray table.png'
import Image from "next/image";
import ELButton from "../Atoms/ELButton";


interface itemsTypes {
    quantity: number
    image: string
}
interface checkoutProps {
    items: any
    total:number
}
const CheckoutComplete = (props: checkoutProps) => {
    const { items, total } = props
    const itemDetail = [
        { quantity: 2, image: TrayTable },
        { quantity: 3, image: TrayTable },
        { quantity: 1, image: TrayTable },
    ]
    return (
        <>
            <main className="flex flex-col md:justify-center md:items-center md:text-center mt-[70px] px-8 md:px-[130px] bg-white shadow-md rounded-lg w-max mx-auto md:pt-[40px]">
                <ELText text='Thank you 🎉' className={'text-[25px] text-gray-400'} />
                <p className="text-[35px]">Your order has been <br /> received</p>
                <div className="flex justify-between md:gap-9 mt-10">
                    {items.map((item: any, index: number) => {
                        return (
                            <main key={index}>
                                <div className="w-[80px] bg-gray-200 relative">
                                    <div className="w-[80px] h-[96px]">
                                        <Image
                                            src={item.product_image[0]}
                                            alt="Cart Item"
                                            className="bg-gray-200 object-cover h-full w-full"
                                            width={80}
                                            height={100}
                                        />
                                    </div>
                                    <ELText text={item.quantity} className={'absolute -top-2 -right-3 bg-black rounded-full px-2 text-white'} />
                                </div>
                            </main>
                        );
                    })}
                </div>
                <div className="md:flex text-start gap-16 mt-10 hidden">
                    <div>
                        <ELText text='Order code:' className={'text-gray-400'} />
                        <ELText text='Date:' className={'text-gray-400'} />
                        <ELText text='Total:' className={'text-gray-400'} />
                        <ELText text='Payment method:' className={'text-gray-400'} />
                    </div>
                    <div>
                        <ELText text='#0123_45678' className={'text-black font-semibold'} />
                        <ELText text='October 19, 2023' className={'text-black font-semibold'} />
                        <ELText text={`$${total}`} className={'text-black font-semibold'} />
                        <ELText text='Credit Card' className={'text-black font-semibold'} />
                    </div>
                </div>
                <div className="mt-10 md:hidden">
                    <div>
                        <ELText text='Order code:' className={'text-gray-400'} />
                        <ELText text='#0123_45678' className={'text-black font-semibold mt-2'} />
                        <hr className="my-3" />
                    </div>
                    <div>
                        <ELText text='Date:' className={'text-gray-400'} />
                        <ELText text='October 19, 2023' className={'text-black font-semibold mt-2'} />
                        <hr className="my-3" />
                    </div>
                    <div>
                        <ELText text='Total:' className={'text-gray-400'} />
                        <ELText text={`$${total}`} className={'text-black font-semibold mt-2'} />
                        <hr className="my-3" />
                    </div>
                    <div>
                        <ELText text='Payment method:' className={'text-gray-400'} />
                        <ELText text='Credit Card' className={'text-black font-semibold mt-2'} />
                        <hr className="my-3" />
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <ELButton name='Purchase history' className='md:px-4 px-6 py-3 md:py-2 border border-black bg-black text-white rounded-full' />
                </div>
            </main>
        </>
    )
}

export default CheckoutComplete