"use client"
import React, { useState } from "react";
import Avatar from '@/public/assets/images/avatar_placeholder.svg'
import Image from "next/image";
import Camera from '@/public/assets/icons/camera.svg'
import ELText from "../Atoms/ELText";

type TabName = {
    id: number,
    name: string
}
interface AccountTabProps {
    activeTab: any
}

const AccountTab = (props: AccountTabProps) => {
    const [activeAccountTab, setActiveAccountTab] = useState<any>('Account')
    const { activeTab } = props
    const handleChangeAccountTab = (newAccountTab: string) => {
        setActiveAccountTab(newAccountTab)
        activeTab(newAccountTab)
    }
    const AccountTab = [
        {
            id: 0,
            name: 'Account'
        },
        {
            id: 1,
            name: 'Address'
        },
        {
            id: 2,
            name: 'Orders'
        },
        {
            id: 3,
            name: 'Wishlist'
        },
        {
            id: 4,
            name: 'Log Out'
        }
    ]
    return (
        <main className="py-10 bg-gray-200 rounded-lg">
            <div className="w-max relative  mx-auto">
                <Image src={Avatar} alt="Avatar Image" className="w-[80px] h-[80px]" />
                <Image src={Camera} alt="Camera icon" className="absolute bottom-0 right-0" />
            </div>
            <div className="text-center mt-2 mx-auto">
                <ELText text='Sofia Havertz' className={'font-semibold text-[25px]'} />
            </div>

            <div className="mt-10 flex flex-col gap-4 px-4">
                {AccountTab.map((tab: TabName, index: number) => {
                    return (
                        <main key={index} onClick={() => handleChangeAccountTab(tab.name)} className="cursor-pointer">
                            <ELText text={tab.name} className={`${activeAccountTab === tab.name ? 'border-b-2 border-black text-black' : 'border-b-2 text-gray-400'} text-[20px]  pb-2`} />
                        </main>
                    )
                })}
            </div>
        </main>
    )
}

export default AccountTab