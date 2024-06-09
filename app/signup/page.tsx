'use client'
import Image from "next/image"
import AuthImage from '@/public/assets/images/authImage.svg'
import AuthLogo from '@/public/assets/icons/3legantAuth.svg'
import ELText from "@/components/Atoms/ELText"
import ELInput from "@/components/Atoms/ELInput"
import { useForm } from 'react-hook-form'
import ELCheckBox from "@/components/Atoms/ELCheckbox"
import ELButton from "@/components/Atoms/ELButton"
import { useRouter } from "next/navigation"
import { signup } from "./action"
import { supabase } from "@/utils/supabase/client"
import { toast } from "react-toastify";
import { useState } from "react"
import { loginSuccess, saveUserOtherProfile, logout } from "@/lib/features/authentication/user_slice";

const SignUpPage = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)

    const handleSignup = async (formData: any) => {
        console.log(formData);
        setLoading(true);
        try {
            const response = await signup(formData);
            setLoading(false);
            if (response && response.user) {
                const { id } = response.user; // Access user id correctly
                console.log(id);
                const { password, ...additionalData } = formData;
                additionalData.user_id = id; // Ensure user_id is correctly set
                const { data, error } = await supabase
                    .from('user_profile')
                    .insert([additionalData]);

                if (error) {
                    setLoading(false);
                    console.error('Error saving additional user data:', error);
                    return;
                }
                setLoading(false);
                toast.success("You are logged in");
                router.push("/");

            } else {
                setLoading(false);
                console.error('No user information returned from signup.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error during signup or saving additional data:', error);
            toast.error("Error during signup or saving additional data");
            // router.push("/error");
        }
    };

    return (
        <main className="container mx-auto md:flex items-center gap-24 ">
            <div className="md:w-1/2 relative">
                <div className=" overflow-hidden">
                    <Image src={AuthImage} alt="Chair Image" className="w-full" />
                    <Image src={AuthLogo} alt="Chair Image" className="absolute top-7 left-[290px]" />
                </div>
            </div>
            <div className="md:w-1/2  flex flex-col gap-3 px-8 md:px-0 my-10">
                <ELText text='Sign Up' className={'font-semibold text-[30px]'} />
                <div className="flex gap-3">
                    <ELText text='Already have an account? ' className={'font-normal text-gray-400'} />
                    <ELText text='Sign in' className={'font-normal text-green-500 cursor-pointer'} handleClick={() => router.push('/login', { scroll: false })} />
                </div>
                <form onSubmit={handleSubmit(handleSignup)} className="md:w-[80%]">
                    <div >
                        <ELInput name="name" register={register} placeholder="Your name" className={'border-b border-bottom-left-radius'} />
                        <ELInput name="username" register={register} placeholder="Username" className={'border-b border-bottom-left-radius'} />
                        <ELInput name="email" register={register} placeholder="Email" className={'border-b border-bottom-left-radius'} />
                        <ELInput name="password" register={register} placeholder="Password" type="password" className={'border-b border-bottom-left-radius'} />
                    </div>
                    <div className="flex justify-between  mt-7 items-center">
                        <ELCheckBox name='remember' rightLabel='I agree with Privacy Policy and Terms of Use' rightLabelClassName={'text-gray-500 text-[15px]'} className='flex gap-2 cursor-pointer' />
                    </div>
                    <ELButton name='Sign Up' className="bg-black text-white rounded-lg py-3 w-full mt-7" loading={loading} />
                </form>
            </div>

        </main>
    )
}

export default SignUpPage