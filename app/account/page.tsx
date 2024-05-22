"use client"
import ELText from "@/components/Atoms/ELText"
import AccountDetails from "@/components/accountcomponents/AccountDetails"
import AccountTab from "@/components/accountcomponents/AccountTab"
import AddressDetails from "@/components/accountcomponents/AddressDetails"
import OrderHistory from "@/components/accountcomponents/OrderHistory"
import Wishist from "@/components/accountcomponents/Wishlist"
import { useState } from "react"

const Account = () => {
    const [type, setType] = useState('Account')
    return (
        <main className="container mx-auto py-20">
            <div className="flex justify-center">
                <ELText text='My Account' className={'text-[35px] md:mb-20 mb-10 font-extrabold'} />
            </div>
            <section className="md:flex gap-20 items-start px-8 md:px-0">
                <div className="md:w-[35%]">
                    <AccountTab activeTab={(type: string) => setType(type)} />
                </div>
                <div className="w-full mt-9 md:mt-0">
                    {type === 'Account' && <AccountDetails />}
                    {type === 'Address' && <AddressDetails />}
                    {type === 'Orders' && <OrderHistory />}
                    {type === 'Wishlist' && <Wishist />}
                </div>
            </section>
        </main>
    )
}

export default Account