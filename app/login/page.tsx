'use client';

import Image from "next/image";
import AuthImage from '@/public/assets/images/authImage.svg';
import AuthLogo from '@/public/assets/icons/3legantAuth.svg';
import ELText from "@/components/Atoms/ELText";
import ELInput from "@/components/Atoms/ELInput";
import { useForm } from 'react-hook-form';
import ELCheckBox from "@/components/Atoms/ELCheckbox";
// import ELButton from "@/components/Atoms/ELButton';
import ELButton from "@/components/Atoms/ELButton";
import { useRouter } from "next/navigation";
import { login } from "./action";
import { useState } from "react";
import getUserProfile from "@/api/users/user";
import { useAppDispatch } from "@/lib/hook";
import { loginSuccess, saveUserProfile } from "@/lib/features/authentication/user_slice";

const LoginPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData: any) => {
        console.log(formData);
        setLoading(true);
        try {
            await login(formData)
                .then((response: any) => {
                    console.log(response);
                    const { user, session } = response
                    const { id, email: userEmail, phone } = user;
                    const token = session.access_token;
                    dispatch(loginSuccess({ user: { id, email: userEmail, phone }, token }));
                    // const { id } = user
                    FetchUserProfile(id)
                    console.log(id, 'user');
                    // fetchUserProfile(userId)
                })

            setLoading(false);
            router.push("/");
        } catch (error) {
            setLoading(false);
            console.error(error);
            // router.push("/error");/
        }
    };

    const FetchUserProfile = async (id:any) => {

        try {
            const profile = await getUserProfile(id);
            console.log(profile); // Access user profile data here
            // You can perform actions based on the profile data
            router.push("/");
        } catch (error) {
            setLoading(false);
            console.error(error);
            router.push("/error");
        }
        
    }
        
    // }

    return (
        <main className="container mx-auto md:flex items-center gap-24">
            <div className="md:w-1/2 relative">
                <div className="overflow-hidden">
                    <Image src={AuthImage} alt="Chair Image" className="w-full" />
                    <Image src={AuthLogo} alt="Auth Logo" className="absolute top-7 left-[290px]" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 flex flex-col gap-3 px-8 md:px-0 my-10">
                <ELText text='Sign In' className="font-semibold text-[30px]" />
                <div className="flex gap-3">
                    <ELText text='Don’t have an account yet?' className="font-normal text-gray-400" />
                    <ELText text='Sign Up' className="font-normal text-green-500 cursor-pointer" handleClick={() => router.push('/signup', { scroll: false })} />
                </div>
                <div className="md:w-[80%]">
                    <div>
                        <ELInput name="email" register={register} placeholder="Your username or email address" className="border-b border-bottom-left-radius" />
                        <ELInput name="password" register={register} placeholder="Password" type="password" className="border-b border-bottom-left-radius" />
                    </div>
                    <div className="flex justify-between mt-7 items-center">
                        <ELCheckBox name='remember' rightLabel='Remember me' rightLabelClassName="text-gray-500 text-[15px]" className="flex gap-2 cursor-pointer" />
                        <ELText text='Forgot Password?' className="font-semibold cursor-pointer" />
                    </div>
                    <ELButton name='Sign In' className="bg-black text-white rounded-lg py-3 w-full mt-7" loading={loading} disabled={loading} />
                </div>
            </form>
        </main>
    );
};

export default LoginPage;
