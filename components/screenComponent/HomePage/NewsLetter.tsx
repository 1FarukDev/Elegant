"use client"

import Image from "next/image"
import mail from '@/public/assets/icons/email.svg'
import ELText from "@/components/Atoms/ELText"
import ELInput from "@/components/Atoms/ELInput"
import { useForm } from 'react-hook-form'
import ELButton from "@/components/Atoms/ELButton"
const NewsLetter = () => {
    const { register } = useForm()
    return (
        <main className="newsletter mt-20">
            <div className=" py-24 h-[100%]">
                <div className="flex justify-center items-center ">
                    <ELText text='Join Our Newsletter' className={'font-medium text-[35px] '} />
                </div>
                <div className="flex justify-center items-center text-center">
                    <ELText text='Sign up for deals, new products and promotions' className={'font-medium text-[20px]'} />
                </div>
                <div className="flex justify-center items-center text-center mx-8  md:w-1/2 md:mx-auto border-b border-gray-500 text-gray-500 mt-10">
                    <Image src={mail} alt="mail icon" />
                    <ELInput name="email" placeholder="Email address" register={register} className={'!bg-transparent'}/>
                    <ELButton name="Sign up" className="w-[30%]"/>
                </div>

            </div>
        </main>
    )
}

export default NewsLetter