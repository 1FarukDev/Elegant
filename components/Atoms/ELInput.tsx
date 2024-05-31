import React, { useState } from 'react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
    name: string;
    label?: string;
    placeholder: string;
    type?: string;
    register: any;
    required?: boolean;
    errors?: any;
    className?: any;
    labelClassName?: string;
}

const ELInput: React.FC<InputProps> = ({
    name,
    label,
    placeholder,
    type = 'text',
    register,
    required = false,
    errors,
    className,
    labelClassName
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={name} className={`font-bold text-primaryColor mb-4 ${labelClassName}`}>
                    {label}
                </label>
            )}
            <div className="relative">
                {type === 'textarea' ? (
                    <textarea
                        placeholder={placeholder}
                        {...register(name, { required })}
                        className={`${className} mt-1 outline-none w-full px-6 py-4 h-[100%] rounded-l-[12px] rounded-r-[12px] font-normal text-[14px] text-primaryColor`}
                    />
                ) : (
                    <input
                        type={type === 'password' && !showPassword ? 'password' : 'text'}
                        placeholder={placeholder}
                        {...register(name, { required })}
                        className={`${className} mt-1 outline-none w-full px-6 py-4 h-[100%] rounded-l-[12px] rounded-r-[12px] font-normal text-[14px] text-primaryColor`}
                    />
                )}
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 py-2 text-gray-400 focus:outline-none"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>
            {errors && errors[name] && <span className="text-red-500">{errors[name].message}</span>}
        </div>
    );
};

export default ELInput;
