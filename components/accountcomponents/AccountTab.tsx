"use client"
import React, { useState } from "react";
import Image from "next/image";
import Avatar from '@/public/assets/images/avatar_placeholder.svg';
import Camera from '@/public/assets/icons/camera.svg';
import ELText from "../Atoms/ELText";
import ELDropdown from "../Atoms/ELDropdown";
import { useSelector } from 'react-redux';
interface TabName {
    id: number;
    name: string;
}

interface AccountTabProps {
    activeTab: (newTab: string) => void;
    profileImage:any
    handleImageChange:any
}

const AccountTab: React.FC<AccountTabProps> = ({ activeTab, profileImage, handleImageChange }) => {
    const user = useSelector((state: any) => state.user);
    // const [profileImage, setProfileImage] = useState(user?.userOtherProfile?.profile_image || Avatar);

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
            <div className="relative w-max mx-auto">
                <Image
                    src={profileImage}
                    alt="Avatar Image"
                    width={180}
                    height={100}
                    className="w-[80px] h-[80px] rounded-full"
                />
                <div className="absolute bottom-0 left-10">
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-[100]"
                    />
                    <Image
                        src={Camera}
                        alt="Camera icon"
                        width={30}
                        height={30}
                        className="z-0"
                    />
                </div>
            </div>
            <div className="text-center mt-2 mx-auto flex gap-2 justify-center">
                <ELText text={user?.userOtherProfile?.first_name} className="font-semibold text-[25px]" />
                <ELText text={user?.userOtherProfile?.last_name} className="font-semibold text-[25px]" />
            </div>

            <div className="mt-10 hidden md:flex flex-col gap-4 px-4">
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
                    borderClassName="border-black border-2 bg-white"
                />
            </div>
        </main>
    );
};

export default AccountTab;
