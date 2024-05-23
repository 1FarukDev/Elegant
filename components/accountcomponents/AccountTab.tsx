"use client"
import React, { useState } from "react";
import Image from "next/image";
import Avatar from '@/public/assets/images/avatar_placeholder.svg';
import Camera from '@/public/assets/icons/camera.svg';
import ELText from "../Atoms/ELText";
import ELDropdown from "../Atoms/ELDropdown";

interface TabName {
    id: number;
    name: string;
}

interface AccountTabProps {
    activeTab: (newTab: string) => void;
}

const AccountTab: React.FC<AccountTabProps> = ({ activeTab }) => {
    const [activeAccountTab, setActiveAccountTab] = useState<string>('Account');

    const handleChangeAccountTab = (newAccountTab: string) => {
        setActiveAccountTab(newAccountTab);
        activeTab(newAccountTab);
    };

    const accountTabs: TabName[] = [
        { id: 0, name: 'Account' },
        { id: 1, name: 'Address' },
        { id: 2, name: 'Orders' },
        { id: 3, name: 'Wishlist' },
        { id: 4, name: 'Log Out' }
    ];

    const handleTabChange = (option: TabName) => {
        console.log('Selected option:', option.name);
        setActiveAccountTab(option.name);
        activeTab(option.name);
    };

    return (
        <main className="py-10 bg-gray-200 rounded-lg">
            <div className="w-max relative mx-auto">
                <Image src={Avatar} alt="Avatar Image" className="w-[80px] h-[80px]" />
                <Image src={Camera} alt="Camera icon" className="absolute bottom-0 right-0" />
            </div>
            <div className="text-center mt-2 mx-auto">
                <ELText text="Sofia Havertz" className="font-semibold text-[25px]" />
            </div>

            <div className="mt-10 hidden md:flex flex-col gap-4 px-4 ">
                {accountTabs.map((tab) => (
                    <main
                        key={tab.id}
                        onClick={() => handleChangeAccountTab(tab.name)}
                        className="cursor-pointer"
                    >
                        <ELText
                            text={tab.name}
                            className={`${activeAccountTab === tab.name
                                ? 'border-b-2 border-black text-black'
                                : 'border-b-2 text-gray-400'
                                } text-[20px] pb-2`}
                        />
                    </main>
                ))}
            </div>
            <div className="md:hidden mt-10 px-4">
                <ELDropdown
                    options={accountTabs}
                    title={accountTabs[0].name}
                    handleChangeTab={handleTabChange}
                    borderClassName={'border-black border-2 bg-white'}
                // Label="Account Options"
                // labelClassName="text-lg"
                />
            </div>
        </main>
    );
};

export default AccountTab;
