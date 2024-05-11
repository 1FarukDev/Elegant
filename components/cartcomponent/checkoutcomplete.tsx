import React from "react";
import ELText from "../Atoms/ELText";
import TrayTable from '@/public/assets/images/Tray table.png'
import Image from "next/image";
import ELButton from "../Atoms/ELButton";
const CheckoutComplete = () => {
    const itemDetail = [
        { quantity: 2, image: TrayTable },
        { quantity: 3, image: TrayTable },
        { quantity: 1, image: TrayTable },
    ]
    return (
        <>
        <main className="flex flex-col justify-center items-center text-center mt-[70px] px-[130px] bg-white shadow-md rounded-lg w-max mx-auto py-[80px]">
            <ELText text='Thank you 🎉' className={'text-[25px] text-gray-400'} />
            <p className="text-[35px]">Your order has been <br /> received</p>
            <div className="flex gap-9 mt-10">
                {itemDetail.map((item: any) => {
                    return (
                        <main>
                            <div className="w-[80px] bg-gray-200 relative">
                                <Image src={item.image} alt="Image" />
                                <ELText text={item.quantity} className={'absolute -top-2 -right-3 bg-black rounded-full px-2 text-white'} />
                            </div>
                        </main>
                    );
                })}
            </div>
            <div className="flex text-start gap-16 mt-10">
                <div>
                    <ELText text='Order code:' className={'text-gray-400'} />
                    <ELText text='Date:' className={'text-gray-400'} />
                    <ELText text='Total:' className={'text-gray-400'} />
                    <ELText text='Payment method:' className={'text-gray-400'} />
                </div>
                <div>
                    <ELText text='#0123_45678' className={'text-black font-semibold'} />
                    <ELText text='October 19, 2023' className={'text-black font-semibold'} />
                    <ELText text='$1,345.00' className={'text-black font-semibold'} />
                    <ELText text='Credit Card' className={'text-black font-semibold'} />
                </div>
            </div>
        </main><div className='flex justify-center my-8'>
                <ELButton name='Purchase history' className='px-4 py-2 border border-black bg-black text-whiterounded-full' />
            </div>
            </>
    )
}

export default CheckoutComplete