import React from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';

interface checkboxProps {
    name: string
    label?: string
    rightLabel?: string
    rightLabelClassName?: string
    className?: string
    register: UseFormRegister<any>;
}

const ELCheckBox: React.FC<checkboxProps> = ({ name, label, rightLabel, rightLabelClassName, className, register }) => {
    

    return (
        <div className='cursor-pointer'>
            <label htmlFor={name}>{label}</label>
            <div className={className}>
                <input type="checkbox" id={name} {...register(name)} />
                <label htmlFor={name} className={rightLabelClassName}>{rightLabel}</label>
            </div>
        </div>
    );
}

export default ELCheckBox;
