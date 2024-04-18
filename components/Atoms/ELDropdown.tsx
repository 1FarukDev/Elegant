import React, { useState } from "react";
import DropdownIcon from '@/public/assets/icons/arrow down.svg'
import Image from "next/image";

interface DropDownOption {
    name: string;
    id: string;
    path?: string;
}

interface DropDownItem {
    options: Array<DropDownOption>;
    title?: string;
    Label?: string;
}

const ELDropdown: React.FC<DropDownItem> = ({ title, options, Label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="">
            <div className="font-bold text-[15px] text-primaryColor mb-2">
                {Label}
            </div>
            <div className="relative w-full border border-[#2525253b] rounded-[12px]">

                <button
                    onClick={toggleDropdown}
                    className="text-black font-semibold h-[52px] px-3 rounded w-full flex gap-4 justify-between items-center"
                >
                    <div className="font-normal text-[14px] text-primaryColor ">
                        {title}
                    </div>

                    <Image src={DropdownIcon} alt="DropDown Icon" className={` ${isOpen ? "transform rotate-180" : ""
                        }`} />
                </button>
                {isOpen && (
                    <ul className="absolute text-gray-700 pt-1 z-[100]" >
                        {options.map(({ id, name, path }) => (
                            <li key={id}>
                                <a
                                    className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                                    href={path}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default ELDropdown;
