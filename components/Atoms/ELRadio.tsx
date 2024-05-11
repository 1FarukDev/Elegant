import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RadioOption {
    label: string;
    value: string;
    addedValue?: string
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
                </label>
            ))}
        </div>
    );
};

// const MyForm: React.FC = () => {
//     const { handleSubmit } = useForm<FormData>();

//     const onSubmit: SubmitHandler<FormData> = (data) => {
//         console.log(data);
//     };

//     const radioOptions: RadioOption[] = [
//         { label: 'Option 1', value: 'option1' },
//         { label: 'Option 2', value: 'option2' },
//     ];

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <RadioGroup name="choice" options={radioOptions} />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default MyForm;
