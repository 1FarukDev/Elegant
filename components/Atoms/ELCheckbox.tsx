import React from 'react';
import { useForm } from 'react-hook-form';

function ELCheckBox({ name, label, rightLabel, rightLabelClassName, className }:any) {
    const { register } = useForm();

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
