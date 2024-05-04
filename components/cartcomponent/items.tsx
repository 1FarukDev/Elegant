"use cient"

import ELText from "../Atoms/ELText"
import AddIcon from '@/public/assets/icons/add icon.svg'
import SubIcon from '@/public/assets/icons/minu sign.svg'
import Image from "next/image"

interface CartItemProps {
    CartItem: any
}

const CartItems = (props: CartItemProps) => {
    const { CartItem } = props
    return (
        <div className="flex mt-[70px]  justify-between">
            <div className="w-[60%]">
                <div className="flex justify-between w-full">
                    <div className="w-[45%]">
                        <ELText text='Product' />
                    </div>
                    <div className="w-[15%] text-center">
                        <ELText text='Quantity' />
                    </div>
                    <ELText text='Size' />
                    <ELText text='Subtotal' />
                </div>
                <div className="my-6">
                    <hr className="border-black " />
                </div>
                <div >
                    <div>
                        {CartItem.map((item: any) => {
                            return (
                                <main className="flex justify-between w-full items-center mb-8">
                                    <div className="w-[45%]">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-[80px] h-[96px]">
                                                <Image src={item.image} alt="Cart Item" className="bg-gray-200" />
                                            </div>
                                            <div>
                                                <ELText text='Tray Table' className={'font-semibold'} />
                                                <div className="my-1">
                                                    <ELText text={`Color: ${item.color}`} className={'text-[15px] text-gray-400'} />
                                                </div>
                                                <div className="flex gap-2 ">
                                                    <Image src={AddIcon} alt="Add Icon" className="rotate-45" />
                                                    <ELText text='Remove' className={'text-gray-500'} />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[15%] flex justify-around border-2 rounded-lg py-2">
                                        <Image src={SubIcon} alt="Sub Icon" />
                                        <ELText text={item.quantity} />
                                        <Image src={AddIcon} alt="Add Icon" />
                                    </div>
                                    <div>
                                        <ELText text={item.size} className={'font-normal'} />
                                    </div>
                                    <div>
                                        <ELText text={item.subtotal} className={'font-semibold'} />
                                    </div>
                                </main>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-[30%]">dad</div>
        </div>
    )
}

export default CartItems