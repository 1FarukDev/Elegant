"use client"
import ELText from '@/components/Atoms/ELText'
import SalesImage from '@/public/assets/images/sales image.svg'
import Image from 'next/image'
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'
const SalesSection = () => {
    return (
        <main className='my-10 bg-gray-100 pb-6 md:pb-0'>
            <section className='md:flex items-center'>
                <div>
                    <Image src={SalesImage} alt='Sales Image' className='' />
                </div>
                <div>
                    <div className="md:ml-20 mt-6 md:mt-0 px-8 md:px-0">
                        <ELText text='SALE UP TO 35% OFF' className={'text-blue-500 text-[12px] flex items-center'} />
                        <p className='text-[20px] font-medium'>
                            HUNDREDS of <br />
                            New lower prices!
                        </p>
                        <p className='text-[12px] font-normal'>
                            It’s more affordable than ever to give every <br /> room in your home a stylish makeover
                        </p>
                        <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer mt-6 ">
                            <ELText text='Shop more' className={'font-normal text-[15px]'} />
                            <Image src={ArrowRight} alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SalesSection