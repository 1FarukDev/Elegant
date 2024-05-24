'use client'
import ELText from "@/components/Atoms/ELText"
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import SalesImage from '@/public/assets/images/sales image.svg'
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import mail from '@/public/assets/icons/mail.svg'
import call from '@/public/assets/icons/call2.svg'
import store from '@/public/assets/icons/store 01.svg'
import ELInput from "@/components/Atoms/ELInput"
import { useForm } from 'react-hook-form';
import map from '@/public/assets/images/map.svg'
import ELButton from "@/components/Atoms/ELButton"
import shipping from '@/public/assets/icons/fast delivery.svg'
import money from '@/public/assets/icons/money.svg'
import lock from '@/public/assets/icons/lock 01.svg'

const ContactPage = () => {
    const { register } = useForm()
    const Options = [
        {
            id: '0',
            image: store,
            head: 'Free Shipping',
            text: '234 Hai Trieu, Ho Chi Minh City, Viet Nam'
        },
        {
            id: '1',
            image: call,
            head: 'Money-back',
            text: '+84 234 567 890'
        },
        {
            id: '2',
            image: mail,
            head: 'Secure payment',
            text: 'ajibadefarukyoungprof02@gmail.com'
        },
    ]
    const secondOption = [
        {
            id: '0',
            image: shipping,
            head: 'Free Shipping',
            text: 'Order above $200'
        },
        {
            id: '1',
            image: money,
            head: 'Money-back',
            text: '30 days guarantee'
        },
        {
            id: '2',
            image: lock,
            head: 'Secure payment',
            text: 'Secured by strpe'
        },
        {
            id: '3',
            image: call,
            head: '24/7 Support',
            text: 'Phone and Email support'
        },
    ]
    const router = useRouter()
    return (
        <main className="container mx-auto px-8 md:px-0">
            <div className='flex gap-2 items-center my-10 '>
                <ELText text='Home' className={'text-gray-400 cursor-pointer'} handleClick={() => router.push('/', { scroll: false })} />
                <Image src={ArrorRight} alt='Arrow right' />
                <ELText text='Contact us' className={'text-black font-semibold'} />
            </div>
            <ELText text='We believe in sustainable decor. We’re passionate about life at home.' className={'font-semibold text-[30px] md:text-[50px] md:w-1/2 mb-6'} />
            <ELText text='Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present' className={'font-normal  md:w-1/2'} />

            <main className='my-10 bg-gray-100 pb-6 md:pb-0'>
                <section className='md:flex items-center'>
                    <div className="md:w-2/3">
                        <Image src={SalesImage} alt='Sales Image' className='' />
                    </div>
                    <div>
                        <div className="md:ml-20 mt-6 md:mt-0 px-8 md:px-0">
                            <ELText text='About Us' className={'text-black font-semibold text-[25px] flex items-center'} />
                            <p className='font-medium md:w-1/2'>
                                3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                                Our customer service is always prepared to support you 24/7
                            </p>

                            <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer mt-6 ">
                                <ELText text='Shop Now' className={'font-normal text-[15px]'} />
                                <Image src={ArrowRight} alt="Arrow Icon" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="flex flex-col place-content-center items-center">
                <ELText text='Contact Us' className={'text-black font-semibold text-[25px] flex items-center'} />

                <section className="w-full my-12 flex justify-between gap-6  flex-col md:flex-row">
                    {Options.map((option: any, index: any) => {
                        return (
                            <div className="bg-gray-100 md:w-[30%] flex flex-col gap-2 items-center py-12 rounded-lg md:pl-8 pl-4" key={index}>
                                <Image src={option.image} alt="" />
                                <ELText text={option.head} className={'font-medium text-gray-500 text-[15px] '} />
                                <ELText text={option.text} className={'font-semibold text-[15px] '} />
                            </div>
                        )
                    })}
                </section>
            </div>

            <div className="flex md:flex-row flex-col-reverse gap-3 justify-between items-stretch">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <ELInput name="Full name" placeholder="Your Name" register={register} label="FULL NAME" className={'border border-gray-400'} labelClassName="text-gray-400 text-[13px]"/>
                    <ELInput name="emailAddress" placeholder="Your Email" register={register} label="EMAIL ADDRESS" className={'border border-gray-400'} labelClassName="text-gray-400 text-[13px]" />
                    <ELInput name="message" placeholder="Your Message" register={register} type="textarea" label="MESSAGE" className={'border border-gray-400 min-h-[100px]'} labelClassName="text-gray-400 text-[13px]" />
                <div className="flex md:justify-start justify-center">
                        <ELButton name="Send Message" className="bg-black text-white py-3 px-10 rounded-lg" />
                </div>
                </div>
                <div className="md:w-1/2">
                    <Image src={map} alt="Map" className="w-full"/>
                </div>
            </div>
            <section className="my-12 md:flex justify-between  grid grid-cols-2 bg-gray-100 rounded-lg">
                {secondOption.map((option: any, index: any) => {
                    return (
                        <div className=" md:w-[30%] py-12  md:pl-8 pl-4" key={index}>
                            <Image src={option.image} alt="" />
                            <ELText text={option.head} className={'font-bold text-[15px] '} />
                            <ELText text={option.text} className={'font-normal text-[10px] '} />
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default ContactPage