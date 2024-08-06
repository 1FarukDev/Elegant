"use client"

import ELText from "@/components/Atoms/ELText"
import CartItems from "@/components/cartcomponent/items"
import { useEffect, useState } from "react"
import TrayTable from '@/public/assets/images/Tray table.png'
import DeliveryDetails from "@/components/cartcomponent/details"
import { usePaystackPayment } from 'react-paystack';
import CheckoutComplete from "@/components/cartcomponent/checkoutcomplete"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { applyCoupon } from "@/lib/actions/coupon"


type steps = {
    tag: string
    text: string
}

const CartPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const { register } = useForm();
    const [activeSteps, setActiceSteps] = useState<string>('1')
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);  // State for discount
    const [couponError, setCouponError] = useState<string>(''); 

    const { push } = useRouter()
    const cart = useSelector((state: RootState) => state.cart);
    const user = useSelector((state: RootState) => state.user);

    const [selectedDelivery, setSelectedDelivery] = useState<number>(0);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCharge = selectedDelivery;
    const totalAmount = subtotal + deliveryCharge - discount;  // Subtract discount from total

    const handleDeliveryChange = (value: number) => {
        setSelectedDelivery(value);
    };

    const handleButtonClick = () => {
        setCurrentIndex(1)
        setActiceSteps('2')
    }

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;
    const amount = totalAmount;
    const email = 'ajibadefarukyoungprof02@gmail.com';

    const onSuccess = (reference: any) => {
        console.log(reference);
        setCurrentIndex(2)
        setActiceSteps('3')
    };

    const onClose = () => {
        console.log('Payment closed');
    };

    const config = {
        email,
        amount,
        publicKey,
    };

    const initializePayment = usePaystackPayment(config);

    const handlePlaceOrderButton = (data: any) => {
        initializePayment({ onSuccess, onClose });
        console.log(data);
    }

    const handleCouponSubmit = async (data: any) => {
        const discountValue = await applyCoupon(data.coupon);
        if (discountValue) {
            setDiscount((subtotal * discountValue) / 100);  // Update discount state based on the percentage
        }
        else {
            setCouponError("Invalid coupon code. Please try again.");
            setDiscount(totalAmount); // Reset the total to original if the coupon is invalid
        }
        console.log(discountValue, 'discount');
    }

    const cartStepsArray = [
        {
            key: 0,
            component:
                <CartItems
                    handleDeliveryChange={handleDeliveryChange}
                    subTotal={subtotal}
                    totalAmount={totalAmount}
                    CartItem={cartItems}
                    handleButtonClick={handleButtonClick}
                    handleCouponSubmit={handleCouponSubmit}
                    couponError={couponError}
                />
        },
        {
            key: 1,
            component:
                <DeliveryDetails
                    CartItem={cartItems}
                    handlePlaceOrderButton={handlePlaceOrderButton}
                    shippingAmount={selectedDelivery}
                    subTotal={subtotal}
                    totalAmount={totalAmount}
                />,
        },
        {
            key: 2,
            component:
                <CheckoutComplete
                    total={totalAmount}
                    items={cartItems}
                />
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

    useEffect(() => {
        if (!user?.isAuthenticated) {
            push("/login");
        }
    }, [user?.isAuthenticated, push]);

    if (!user?.isAuthenticated) {
        return null;
    }

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
                            } >
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
