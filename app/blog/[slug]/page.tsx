'use client'
import ELText from '@/components/Atoms/ELText'
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from 'next/image'
import ProfileIcon from '@/public/assets/icons/profileicon.svg'
import Calender from '@/public/assets/icons/calendar.svg'
import DetailImage from '@/public/assets/images/blogdetailImage.svg'
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
import BlogCard from '@/components/card/BlogCard'
import ArticleImage from '@/public/assets/images/article image.svg'
import NewsLetter from '@/components/screenComponent/HomePage/NewsLetter'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchBlogPostDetails } from '@/api/blog/blogBySlug'
import { PortableText } from "@portabletext/react";
import { fetchBlogPosts } from '@/api/blog/blog'



const BlogDetails = () => {
    const router = useRouter()
    const params = useParams();
    const { slug } = params;
    const [blog, setBlog] = useState([])
    const [blogDetail, setBlogDetail] = useState<any>('');
    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await fetchBlogPosts();
            setBlog(fetchedPosts.slice(0, 3))
        };

        getPosts();
    }, [])

    useEffect(() => {
        const getBlogDetail = async () => {
            if (!slug) return;
            try {
                const fetchedBlogDetail = await fetchBlogPostDetails(slug);
                setBlogDetail(fetchedBlogDetail);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };

        getBlogDetail();
    }, [slug]);


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
    ]
    return (
        <section>
            <main className='container mx-auto px-8 md:px-0'>
                <div className='md:flex hidden gap-2 items-center'>
                    <ELText text={`Home`} className={'text-gray-400 cursor-pointer'} handleClick={() => router.push('/', { scroll: false })} />
                    <Image src={ArrorRight} alt='Arrow right' />
                    <ELText text='Blog' className={'text-gray-400 cursor-pointer'} handleClick={() => router.push('/blog', { scroll: false })} />
                    <Image src={ArrorRight} alt='Arrow right' />
                    <ELText text={slug} className={'text-black font-semibold'} />
                </div>
                <div className='md:mt-14 mt-10'>
                    <ELText text='Article' className={'text-[15px] font-semibold'} />
                    <ELText text={blogDetail.title} className={'text-[20px] md:text-[35px] font-semibold my-4'} />
                    <div className='flex gap-4 flex-col md:flex-row '>
                        <div className='flex gap-2'>
                            <Image src={ProfileIcon} alt='Profile Icon' />
                            <ELText text={blogDetail?.author?.name} className={'text-gray-400'} />
                        </div>
                        <div className='flex gap-2'>
                            <Image src={Calender} alt='Profile Icon' />
                            <ELText text='October 16, 2023' className={'text-gray-400'} />
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <Image
                        src={blogDetail?.mainImage?.asset?.url}
                        alt='blog image'
                        className='w-full h-auto'
                        width={800}
                        height={0}
                        layout="responsive"
                    />
                </div>

                <div className='my-4'>
                    <ELText text={blogDetail.title} className={'text-[20px] md:text-[25px] font-semibold'} />
                    <PortableText value={blogDetail.body} />
                </div>


                <div className='flex justify-between my-6 md:mt-56 mt-20'>
                    <ELText text='You might also like' className={'font-semibold  md:text-[20px]'} />
                    <div className="md:flex hidden items-center gap-2 border-b w-max border-black cursor-pointer mb-3">
                        <ELText text='Show more' className={'font-normal text-[15px]'} />
                        <Image src={ArrowRight} alt="Arrow Icon" />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-5 mb-7'>
                    {blog.map((blog: any, index: number) => {
                        return (
                            <div className=" gap-6 md:mb-0 mb-7" key={index}>
                                <BlogCard title={blog.title} image={blog.mainImage.asset.url} date={blog.date} slug={blog.slug.current} />
                            </div>
                        )
                    })}
                </div>
                <div className="flex float-right items-center gap-2 border-b w-max border-black cursor-pointer mb-3">
                    <ELText text='Show more' className={'font-normal text-[15px]'} />
                    <Image src={ArrowRight} alt="Arrow Icon" />
                </div>
            </main>
            <NewsLetter />
        </section>
    )
}

export default BlogDetails