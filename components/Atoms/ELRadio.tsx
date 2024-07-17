import React, { useState } from 'react';
import Image from 'next/image';

interface RadioOption {
    label: string;
    value: number;  // Update value type to number
    addedValue?: string;
    iconRight?: any;
}

interface RadioProps {
    name: string;
    options: RadioOption[];
    className?: string;
    buttonStyle?: string;
    handleRadioButtonClick: (value: number) => void;  
}

export const ELRadio: React.FC<RadioProps> = ({
    name,
    options,
    className,
    buttonStyle,
    handleRadioButtonClick,
}) => {
    const [selectedValue, setSelectedValue] = useState<number>(options[0]?.value || 0);  // Update type to number

    const handleChange = (value: number) => {
        setSelectedValue(value);
        handleRadioButtonClick(value);  // Call the handler with the selected option value
    };

    return (
        <div className={className}>
            {options.map((option, index) => (
                <label
                    key={index}
                    className={`${buttonStyle} ${selectedValue === option.value ? 'bg-gray-200' : ''}`}  // Highlight selected option
                    onClick={() => handleChange(option.value)}  // Update the selected option on click
                >
                    <div className='flex gap-3 items-center'>
                        <input
                            type="radio"
                            value={option.value}
                            name={name}
                            checked={selectedValue === option.value}  // Check if the radio button is selected
                            readOnly  // Make the radio button read-only to prevent default behavior
                        />
                        <span>{option.label}</span>
                    </div>
                    {option.addedValue && <span>{option.addedValue}</span>}
                    {option.iconRight && <Image src={option.iconRight} alt="Right Icon" />}
                </label>
            ))}
        </div>
    );
};
