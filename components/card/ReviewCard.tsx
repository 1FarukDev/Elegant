"use client"

import ELText from "../Atoms/ELText"
import Star from '@/public/assets/icons/Rating Group.svg'
import Image from "next/image"
import ELInput from "../Atoms/ELInput"
import { useForm } from "react-hook-form"
import ELButton from "@/components/Atoms/ELButton"
import ArrowRight from '@/public/assets/icons/arrow right 2.svg'
import ELDropdown from "@/components/Atoms/ELDropdown"
import StarRating from "../Atoms/ELStarRating"



interface ReviewDetailsProps {
    numberOfReviews: string
    itemName: string
    Review: any
    totalStars:number
    starRating:number
}
const ReviewCard: React.FC<ReviewDetailsProps> = ({ numberOfReviews, itemName, Review, totalStars, starRating }) => {
    const { register, handleSubmit } = useForm()
    const dropdownItems = [
        {
            id: '0',
            name: 'Lastest Review'
        },
        {
            id: '1',
            name: 'Old Review'
        },

    ]
    return (
        <main>
            <ELText text='Customer Review ' className={'font-medium text-[20px] md:text-[28px]'} />
            <div className="flex gap-6 mt-4 md:mt-0">
                {/* <Image src={Star} alt="Review card" /> */}
                <StarRating totalStars={totalStars} starRating={starRating}/>
                <ELText text={`${numberOfReviews} Reviews`} className={'font-normal text-[15px]'} />
            </div>
            <ELText text={itemName} className={'font-medium text-[15px] mt-8 text-center md:text-start'} />
            <div className="border flex item-center md:py-3 py-2 rounded-3xl mt-8">
                <ELInput name="Review" placeholder="" register={register} className={'h-[full]'} />
                <ELButton name='Write Review' className="bg-black py-2 px-6 text-white w-[20%] rounded-3xl mr-3 hidden md:block" />
                <Image src={ArrowRight} alt="Arrow right" className="bg-black py-2 px-6 text-white w-[20%] rounded-full mr-3 md:hidden flex" />
            </div>
            <div className="mt-10 md:flex justify-between items-center mb-8">
                <ELText text={`${numberOfReviews} Reviews`} className={'font-medium text-[] md:text-[20px]'} />
                <div className="md:w-[15%] w-[100%]">
                    <ELDropdown options={dropdownItems} title="Latest Review" />
                </div>
            </div>
            {Review.map((comment: any, index: number) => {
                return (
                    <div key={index}>
                        <div className="md:flex gap-6 items-start" >
                            <div className="flex gap-4 items-start mb-6">
                                <Image src={comment.imageOfReview} alt="Avatar Image" />
                                <div className="md:hidden block">
                                    <ELText text={comment.nameOfReviewer} className={'font-medium'} />
                                    <Image src={Star} alt="Rating" className="my-4" />
                                </div>
                            </div>
                            <div >
                                <ELText text={comment.nameOfReviewer} className={'font-medium hidden md:block'} />
                                <Image src={Star} alt="Rating" className="my-4 hidden md:block" />
                                <ELText text={comment.reviewerComment} className={'font-normal text-[15px] text-gray-600'} />
                                <div className="flex gap-6 mt-4">
                                    <ELText text='Like' />
                                    <ELText text='Reply' />
                                </div>
                            </div>
                        </div>
                        <hr className="my-6" />
                    </div>
                )
            })}
            <div className="flex justify-center ">
                <ELButton name="Load More" className="border py-2 px-8 border-black rounded-full" />
            </div>

        </main>
    )
}

export default ReviewCard