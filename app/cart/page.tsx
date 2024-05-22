"use client"

import ELText from "@/components/Atoms/ELText"
import CartItems from "@/components/cartcomponent/items"
import { useState } from "react"
import TrayTable from '@/public/assets/images/Tray table.png'
import DeliveryDetails from "@/components/cartcomponent/details"
import CheckoutComplete from "@/components/cartcomponent/checkoutcomplete"

type steps = {
    tag: string
    text: string
}
const CartPage = () => {
    const [activeSteps, setActiceSteps] = useState('1')
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSteps = (newStep: string) => {
        setActiceSteps(newStep)
    }
    const cartItem = [
        {
            id: '0',
            image: TrayTable,
            color: 'black',
            quantity: '2',
            size: '$19.00',
            subtotal: '$39.00'
        },
        {
            id: '1',
            image: TrayTable,
            color: 'black',
            quantity: '2',
            size: '$19.00',
            subtotal: '$39.00'
        },
        {
            id: '2',
            image: TrayTable,
            color: 'black',
            quantity: '2',
            size: '$19.00',
            subtotal: '$39.00'
        },

    ]

    const handleButtonClick = () => {
        setCurrentIndex(1)
        setActiceSteps('2')
    }
    const handlePlaceOrderButton = () => {
        setCurrentIndex(2)
        setActiceSteps('3')
    }
    const cartStepsArray = [
        {
            key:0,
            component: <CartItems CartItem={cartItem} handleButtonClick={handleButtonClick} />
        },
        {
            key:1,
            component: <DeliveryDetails CartItem={cartItem} handlePlaceOrderButton={handlePlaceOrderButton} />,
        },
        {
            key:2,
            component: <CartItems CartItem={cartItem} handleButtonClick={handleButtonClick} />
        },
        {
            key:3,
            component: <CheckoutComplete />
        },
    ]


    const steps = [
        {
            tag: '1',
            text: "Shopping cart"
        },
        {
            tag: '2',
            text: "Checkout details"
        },
        {
            tag: '3',
            text: "Order complete"
        },
    ]
    return (
        <main className="container mx-auto px-8 md:px-0">
            <section className="my-[70px]">
                <div className="text-center"><ELText text='Cart' className={'text-[30px] font-bold'} /></div>

                <div className="md:flex justify-center gap-8 mt-10">
                    {steps.map((step: steps, index: number) => {
                        return (
                            <ul key={index} className={`
                            ${activeSteps === step.tag ? 'border-black border-b-2' : 'border-gray-200 border-b-2'}
                             ${activeSteps > step.tag ? 'border-green-500 border-b-2' : ''} 
                             flex justify-start items-center gap-4  pb-6 pr-[100px] cursor-pointer`
                            } onClick={() => handleSteps(step.tag)}>
                                <li className={`
                                ${activeSteps === step.tag ? 'bg-black' : 'bg-gray-200'}
                                 ${activeSteps > step.tag ? 'bg-green-500' : ''} 
                                  text-white p-2 px-4 rounded-full`
                                }>
                                    {step.tag}
                                </li>
                                <li className={`
                                ${activeSteps === step.tag ? 'text-black' : 'text-gray-200'}
                                 ${activeSteps > step.tag ? 'text-green-500' : ''}
                                 `}>
                                    {step.text}
                                </li>
                            </ul>
                        )
                    })}
                </div>
                {
                    cartStepsArray[currentIndex].component
                }

            </section>
        </main>
    )
}

export default CartPage