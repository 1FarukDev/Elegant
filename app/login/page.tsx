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
const LoginPage = () => {
    const router = useRouter()
    const { register } = useForm()
    return (
        <main className="container mx-auto md:flex items-center gap-24 ">
            <div className="md:w-1/2 relative">
                <div className=" overflow-hidden">
                    <Image src={AuthImage} alt="Chair Image" className="w-full" />
                    <Image src={AuthLogo} alt="Chair Image" className="absolute top-7 left-[290px]" />
                </div>
            </div>
            <div className="md:w-1/2  flex flex-col gap-3 px-8 md:px-0 my-10">
                <ELText text='Sign In' className={'font-semibold text-[30px]'} />
                <div className="flex gap-3">
                    <ELText text='Don’t have an accout yet? ' className={'font-normal text-gray-400'} />
                    <ELText text='Sign Up' className={'font-normal text-green-500 cursor-pointer'} handleClick={() => router.push('/signup', { scroll: false })} />
                </div>
                <div className="md:w-[80%]">
                    <div >
                        <ELInput name="usernameOrEmail" register={register} placeholder="Your username or email address" className={'border-b border-bottom-left-radius'} />
                        <ELInput name="password" register={register} placeholder="Password" type="password" className={'border-b border-bottom-left-radius'} />
                    </div>
                    <div className="flex justify-between  mt-7 items-center">
                        <ELCheckBox name='remember' rightLabel='Remeber me' rightLabelClassName={'text-gray-500 text-[15px]'} className='flex gap-2 cursor-pointer' />
                        <ELText text='Forgot Password?' className={'font-semibold cursor-pointer'} />
                    </div>
                    <ELButton name='Sign In' className="bg-black text-white rounded-lg py-3 w-full mt-7" />
                </div>
            </div>

        </main>
    )
}

export default LoginPage