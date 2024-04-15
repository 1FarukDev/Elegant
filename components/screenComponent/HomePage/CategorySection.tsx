"use client"
import Image from "next/image"
import Kitchen from '@/public/assets/images/kitchen.svg'
import LivingRoom from '@/public/assets/images/livingroom.svg'
import BedRoom from '@/public/assets/images/bedroom.svg'
import ELText from "@/components/Atoms/ELText"
import ArrowRight from '@/public/assets/icons/arrowRightBlack.svg'


const CategorySection = () => {
    return (
        <main className="md:flex justify-between gap-6 my-10">
            <div className="md:w-1/2 relative">
                <Image src={LivingRoom} alt='Image Of A Sofa' className="w-[100%]" />
                <div className="absolute top-[48px] left-[48px] ">
                    <ELText text='Living Room' className={'font-medium text-[35px]'} />
                    <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer">
                        <ELText text='Show more' className={'font-normal text-[15px]'} />
                        <Image src={ArrowRight} alt="Arrow Icon" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 relative">
                <div className="w-full relative my-5 md:my-0">
                    <Image src={BedRoom} alt="Image of a Drawer" className="w-[100%] h-[50%]" />
                    <div className="absolute bottom-[40px] left-[48px] ">
                        <ELText text='Bedroom' className={'font-medium text-[35px]'} />
                        <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer">
                            <ELText text='Show more' className={'font-normal text-[15px]'} />
                            <Image src={ArrowRight} alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:absolute bottom-0">
                    <Image src={Kitchen} alt="Image of a Toaster" className="w-[100%] h-[50%]" />
                    <div className="absolute bottom-[40px] left-[48px] ">
                        <ELText text='Kitchen' className={'font-medium text-[35px]'} />
                        <div className="flex items-center gap-2 border-b w-max border-black cursor-pointer">
                            <ELText text='Show more' className={'font-normal text-[15px]'} />
                            <Image src={ArrowRight} alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CategorySection