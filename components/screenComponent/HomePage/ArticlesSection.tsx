"use client"

import ELText from "@/components/Atoms/ELText"
import BlogCard from "@/components/card/BlogCard"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import Image from "next/image"
import ArticleImage from '@/public/assets/images/article image.svg'
import { useRouter } from 'next/navigation'
const ArticleSection = () => {
    const router = useRouter()
    const BLogPosts = [
        {
            id: '0',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello')
        },
        {
            id: '1',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello')
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello')
        }

    ]
    return (
        <main className="container mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <ELText text='Articles' className={'font-medium text-[30px]'} />
                </div>
                <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer mb-3" onClick={() => router.push('/blog', { scroll: false })}>
                    <ELText text='Show more' className={'font-normal text-[15px]'} />
                    <Image src={ArrowRight} alt="Arrow Icon" />
                </div>
            </div>

            <div className="md:flex gap-3 justify-between mt-10">
                {BLogPosts.map((blog: any, index: number) => {
                    return (
                        <div className="md:w-1/3 gap-6 md:mb-0 mb-7" key={index}>
                            <BlogCard title={blog.title} image={blog.image} handleClick={blog.handleClick} />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default ArticleSection