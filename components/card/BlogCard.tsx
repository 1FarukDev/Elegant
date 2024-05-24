"use client"
import Image from "next/image"

import ELText from "../Atoms/ELText"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import { FC } from "react"

interface BLogCardFieldProps {
    image: string
    title: string
    handleClick?: any
    date?: string
    readMore?: boolean
}

const BlogCard: FC<BLogCardFieldProps> = ({
    image,
    title,
    handleClick,
    date,
    readMore
}) => {
    return (
        <main className=" w-full cursor-pointer" onClick={handleClick}>
            <Image src={image} alt="Article Image" className="w-full" />
            <ELText text={title} className={'text-[20px] font-medium my-4'} />
            <div>
                {date && <ELText text={date} className={'text-[15px] text-gray-400'}/>}
                {readMore &&
                    <div className="flex items-center gap-2 w-max  cursor-pointer border-b border-black" onClick={handleClick}>
                        <ELText text='Read more' className={'font-normal text-[10px]'} />
                        <Image src={ArrowRight} alt="Arrow Icon" className="" />
                    </div>
                }
            </div>
        </main>
    )
}

export default BlogCard