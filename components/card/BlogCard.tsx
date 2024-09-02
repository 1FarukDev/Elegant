"use client"
import Image from "next/image"

import ELText from "../Atoms/ELText"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import { FC } from "react"
import Link from "next/link"

interface BLogCardFieldProps {
    image: string
    title: string
    date?: string
    readMore?: boolean
    slug?:string
}

const BlogCard: FC<BLogCardFieldProps> = ({
    image,
    title,
    date,
    readMore,
    slug
}) => {
    return (
        <Link className=" w-full cursor-pointer" href={`/blog/${slug}`} passHref>
                <Image
                    src={image}
                    alt='Article Image'
                    width={500}
                    height={0} 
                    layout="responsive"
                    
                />
            <ELText text={title} className={'text-[20px] font-medium my-4'} />
            <div>
                {date && <ELText text={date} className={'text-[15px] text-gray-400'}/>}
                {readMore &&
                    <div className="flex items-center gap-2 w-max  cursor-pointer border-b border-black" >
                        <ELText text='Read more' className={'font-normal text-[10px]'} />
                        <Image src={ArrowRight} alt="Arrow Icon" className="" />
                    </div>
                }
            </div>
        </Link>
    )
}

export default BlogCard