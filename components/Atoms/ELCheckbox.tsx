import React from 'react';
import { useForm } from 'react-hook-form';

function ELCheckBox({ name, label }:any) {
    const { register } = useForm();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="checkbox" id={name} {...register(name)} />
        </div>
    );
}

export default ELCheckBox;
