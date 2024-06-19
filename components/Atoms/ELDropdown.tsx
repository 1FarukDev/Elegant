import React, { useState } from "react";
import DropdownIcon from '@/public/assets/icons/arrow down.svg'
import Image from "next/image";

interface DropDownOption {
    name: string;
    id: string | number;
    path?: string;
}

interface DropDownItem {
    options: Array<DropDownOption>;
    title?: string;
    Label?: string;
    labelClassName?: string
    handleChangeTab?:any
    borderClassName?:any
}

const ELDropdown: React.FC<DropDownItem> = ({ title, options, Label, labelClassName, handleChangeTab, borderClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropDownOption | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: DropDownOption) => {
        setSelectedOption(option);
        handleChangeTab(option)
        setIsOpen(false);
    };

    return (
        <section className="">
            <div className={`${labelClassName} font-bold text-[12px] text-primaryColor mb-2`}>
                {Label}
            </div>
            <div className={`${borderClassName} relative w-full border border-[#2525253b] rounded-[12px]`}>
                <buttonin
                    onClick={toggleDropdown}
                    className="text-black font-semibold h-[52px] px-3 rounded w-full flex gap-4 justify-between items-center"
                >
                    <div className="font-normal text-[14px] text-primaryColor">
                        {selectedOption ? selectedOption.name : title}
                    </div>

                    <Image src={DropdownIcon} alt="DropDown Icon" className={`${isOpen ? "transform rotate-180" : ""}`} />
                </button>
                {isOpen && (
                    <ul className="absolute text-gray-700 pt-1 z-[100] bg-white w-full rounded-lg border border-[#2525253b]">
                        {options.map(({ id, name, path }) => (
                            <li key={id}>
                                <a
                                    className="hover:bg-gray-200 py-4 px-4 block whitespace-no-wrap cursor-pointer"
                                    onClick={() => handleOptionClick({ id, name, path })}
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
