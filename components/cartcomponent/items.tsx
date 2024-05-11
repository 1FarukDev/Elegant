"use cient"

import ELText from "../Atoms/ELText"
import AddIcon from '@/public/assets/icons/add icon.svg'
import SubIcon from '@/public/assets/icons/minu sign.svg'
import Image from "next/image"
import { ELRadio } from "../Atoms/ELRadio"
import ELButton from "../Atoms/ELButton"

interface CartItemProps {
    CartItem: any
}
type deliveryType = {
    id: number, label: string, value: string
}

const CartItems = (props: CartItemProps) => {
    const deliveryType = [
        { id: 0, label: 'Free shipping', value: '$0.00', addedValue: '$0.00' },
        { id: 1, label: 'Express shipping', value: '+$15.00', addedValue:'+$15.00' },
        { id: 2, label: 'Pick Up', value: '%21.00', addedValue:'%21.00' }
    ]
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
                                        <Image src={SubIcon} alt="Sub Icon" className="cursor-pointer" />
                                        <ELText text={item.quantity} />
                                        <Image src={AddIcon} alt="Add Icon" className="cursor-pointer" />
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
            <div className="w-[30%] border border-black rounded-lg p-6">
                <ELText text='Cart summary' className={'font-semibold mb-4 text-[20px]'}/>
                <div className="">
                    <ELRadio name='' options={deliveryType} className={'flex flex-col gap-4 '} buttonStyle={'flex gap-4 justify-between border-[2px] rounded-md p-[17px] border-black '}
                    handleRadioButtonClick={() => console.log(deliveryType)}
                    />
                </div>
             <div className="mt-[16px]">
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
             <div className="mt-[35px]">
                <ELButton name="Checkout" className="text-white bg-black w-full py-[15px] rounded-lg "/>
             </div>
            </div>
        </div>
    )
}

export default CartItems