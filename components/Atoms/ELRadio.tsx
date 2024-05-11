import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
interface RadioOption {
    label: string;
    value: string;
    addedValue?: string
    iconRight?:any
}

interface RadioProps {
    name: string;
    options: RadioOption[];
    className?: any
    buttonStyle?: any
    handleRadioButtonClick: any

}

interface FormData {
    [key: string]: string;
}

export const ELRadio: React.FC<RadioProps> = ({ name, options, className, buttonStyle, handleRadioButtonClick }) => {
    return (
        <div className={className}>
            {options.map((option, index) => (
                <label key={index} className={buttonStyle} onClick={handleRadioButtonClick}>
                    <div className='flex gap-3 items-center'>
                        <input type="radio" value={option.value} name={name} />
                        {option.label}
                    </div>
                    {option.addedValue}
                    {option.iconRight  && <Image src={option.iconRight} alt="Right Icon" />}
                </label>
            ))}
        </div>
    );
};

