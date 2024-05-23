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
import { useRouter } from 'next/navigation'
const BlogDetails = () => {
    const router = useRouter()



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
            <main className='container mx-auto'>
                <div className='flex gap-2 items-center'>
                    <ELText text='Home' className={'text-gray-400 cursor-pointer'} handleClick={() => router.push('/', { scroll: false })} />
                    <Image src={ArrorRight} alt='Arrow right' />
                    <ELText text='Blog' className={'text-gray-400 cursor-pointer'} handleClick={() => router.push('/blog', { scroll: false })} />
                    <Image src={ArrorRight} alt='Arrow right' />
                    <ELText text='How to make a busy bathroom a place to relax' className={'text-black font-semibold'} />
                </div>
                <div className='mt-14'>
                    <ELText text='Article' className={'text-[15px] font-semibold'} />
                    <ELText text='How to make a busy bathroom a place to relax' className={'text-[35px] font-semibold my-4'} />
                    <div className='flex gap-4'>
                        <div className='flex gap-2'>
                            <Image src={ProfileIcon} alt='Profile Icon' />
                            <ELText text='Faruk Ajibade' className={'text-gray-400'} />
                        </div>
                        <div className='flex gap-2'>
                            <Image src={Calender} alt='Profile Icon' />
                            <ELText text='October 16, 2023' className={'text-gray-400'} />
                        </div>
                    </div>
                </div>
                <div className='mt-10 '>
                    <Image src={DetailImage} alt='blog image' className='w-full' />
                </div>
                <div className='my-4'>
                    <ELText text='A cleaning hub with built-in ventilation' className={'text-[25px] font-semibold'} />
                    <ELText text='Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation.
A cleaning hub with built-in ventilation
Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness. Storage with a calming effect
Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).
Kit your clutter for easy access
Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.' className={'text-[20px] font-medium'} />
                </div>


                <div className='flex justify-between my-6 mt-56'>
                    <ELText text='You might also like' className={'font-semibold text-[20px]'} />
                    <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer mb-3">
                        <ELText text='Show more' className={'font-normal text-[15px]'} />
                        <Image src={ArrowRight} alt="Arrow Icon" />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 mb-7'>
                    {BLogPosts.map((blog: any, index: number) => {
                        return (
                            <div className=" gap-6 md:mb-0 mb-7" key={index}>
                                <BlogCard title={blog.title} image={blog.image} handleClick={blog.handleClick} date={blog.date} />
                            </div>
                        )
                    })}
                </div>
            </main>
            <NewsLetter />
        </section>
    )
}

export default BlogDetails