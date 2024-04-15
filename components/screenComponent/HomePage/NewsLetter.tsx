"use client"

import Image from "next/image"
import NewsLetterImage from '@/public/assets/images/Newsletter.svg'
import ELText from "@/components/Atoms/ELText"

const NewsLetter = () => {
    return (
        <main className="newsletter mt-20">
            <div className=" py-24 h-[100%]">
                <div className="flex justify-center ">
                    <ELText text='Join Our Newsletter' className={'font-medium text-[35px] '} />
                </div>
                <div className="flex justify-center ">
                    <ELText text='Sign up for deals, new products and promotions' className={'font-medium text-[20px]'} />
                </div>
            </div>
        </main>
    )
}

export default NewsLetter