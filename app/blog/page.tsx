'use client'
import ELText from '@/components/Atoms/ELText'
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from 'next/image'
import { useState } from 'react'
import twoBytwo from '@/public/assets/icons/2x2.svg'
import threeBythree from '@/public/assets/icons/3x3.svg'
import BlogCard from '@/components/card/BlogCard'
import ArticleImage from '@/public/assets/images/article image.svg'
import ELButton from '@/components/Atoms/ELButton'
import NewsLetter from '@/components/screenComponent/HomePage/NewsLetter'
import { useRouter } from 'next/navigation'
type TabType = {
    id: string,
    name: string
}
const Blog = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('All Blog')
    const [layout, setLayout] = useState('twoBytwo')
    const BlogTab = [
        {
            id: '0',
            name: 'All Blog'
        },
        {
            id: '1',
            name: 'Featured'
        },
    ]
    const handleBlogTabChange = (name: string) => {
        setActiveTab(name)
    }
    const handlayoutChange = (layoutName: string) => {
        setLayout(layoutName)
    }
    const BLogPosts = [
        {
            id: '0',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '1',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },
        {
            id: '2',
            image: ArticleImage,
            title: '7 ways to decor your home',
            handleClick: () => console.log('Hello'),
            date: 'October 16, 2023'
        },

    ]
    return (
        <section>
            <main className="container mx-auto">
                <div className=' w-full  blog_header flex justify-center items-center px-4 '>
                    <div className='flex flex-col place-items-center '>
                        <div className='flex md:gap-3 gap-2'>
                            <ELText text='Home' className={'text-[10px] text-gray-600'} />
                            <Image src={ArrorRight} alt='Arrow right' />
                            <ELText text='Blog' className={'text-[10px] font-semibold'} />
                        </div>
                        <div className='flex flex-col place-items-center text-center'>
                            <ELText text='Our Blog' className={'text-[30px] my-4'} />
                            <ELText text='Home ideas and design inspiration' className={'text-[15px] '} />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-6 text-[15px] my-8 ' >
                        {BlogTab.map((tab: TabType, index: number) => {
                            return (
                                <main key={tab.id}
                                    onClick={() => handleBlogTabChange(tab.name)}
                                    className={`cursor-pointer ${activeTab === tab.name ? 'text-black border-b border-black' : 'text-gray-400'}`}>
                                    <ELText text={tab.name} />
                                </main>
                            )
                        })}
                    </div>
                    <div className='flex gap-4 items-center'>
                        <ELText text='Orientation' className={'font-medium'} />
                        <Image src={threeBythree} className={'cursor-pointer'} alt='3by3' onClick={() => handlayoutChange(threeBythree)} />
                        <Image src={twoBytwo} className='cursor-pointer' alt='2by2' onClick={() => handlayoutChange(twoBytwo)} />
                    </div>
                </div>
                <div
                    className={layout === twoBytwo ? 'grid grid-cols-2 gap-6' : 'grid grid-cols-3 gap-6'}
                >
                    {BLogPosts.map((blog: any, index: number) => {
                        return (
                            <div className=" gap-6 md:mb-0 mb-7" key={index}>
                                <BlogCard title={blog.title} image={blog.image} handleClick={() => router.push('/blogdetails', { scroll: false })} date={blog.date} />
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center items-center my-10'>
                    <ELButton name='Show more' className='text-black border px-8 py-2 rounded-full border-black' />
                </div>
            </main>
            <NewsLetter />
        </section>
    )
}

export default Blog