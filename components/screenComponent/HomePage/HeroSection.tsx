"use client"
import Image from "next/image"
import HeroImage from '@/public/assets/images/HeroImage.svg'
import ELText from "@/components/Atoms/ELText"


const HeroSection = () => {
    return (
        <main className="">
            <Image src={HeroImage} alt="Hero Image" className="w-[100%]" />
            <div className="flex items-center justify-between">
                <div className="mt-4">
                    <ELText text='Simply Unique/' className={'font-medium text-[76px]'} />
                    <ELText text='Simply Better.' className={'font-medium text-[76px]'} />
                </div>  
                <div>
                    <p>
                        <span className={'font-medium'}>3legant</span> is a gift & decorations store based in HCMC, <br /> Vietnam. Est since 2019.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default HeroSection