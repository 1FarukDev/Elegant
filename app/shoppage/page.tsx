"use client"
import ELText from '@/components/Atoms/ELText'
import FilterIcon from '@/public/assets/icons/filter.svg'
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from 'next/image'
import { useState } from 'react'
import ELCheckBox from '@/components/Atoms/ELCheckbox'
import Star from '@/public/assets/icons/Rating Group.svg'
import ProductImage from '@/public/assets/images/product.png'
import ProductCard from '@/components/card/ProductCard'
import ELDropdown from '@/components/Atoms/ELDropdown'
import ELButton from '@/components/Atoms/ELButton'

const Shop = () => {
    const [showButtonMap, setShowButtonMap] = useState<{ [id: string]: boolean }>({});
    const [activeCategory, setActiveCategory] = useState('All Rooms')
    const [category, setCategory] = useState(activeCategory)
    const handleChangeCategory = (tabName: string) => {
        setActiveCategory(tabName)
        setCategory(tabName)
        console.log(activeCategory);
    }
    const shopCategroy = [
        {
            id: '0',
            name: 'All Rooms'
        },
        {
            id: '1',
            name: 'Living Room'
        },
        {
            id: '2',
            name: 'Bedroom'
        },
        {
            id: '3',
            name: 'Kitchen'
        },
        {
            id: '4',
            name: 'Bathroom'
        },
        {
            id: '5',
            name: 'Dinning'
        },
        {
            id: '5',
            name: 'Outdoors'
        }
    ]
    const priceCategory = [
        {
            id: '0',
            name: 'All Price'
        },
        {
            id: '1',
            name: '$0.00 - 99.99'
        },
        {
            id: '2',
            name: '$100.00 - 199.99'
        },
        {
            id: '3',
            name: '$200.00 - 299.99'
        },
        {
            id: '4',
            name: '$300.00 - 399.99'
        },
        {
            id: '5',
            name: '$400.00+'
        },
    ]
    const productDetails = [
        {
            id: '0',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '1',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '2',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '3',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '4',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '5',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '6',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '7',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '8',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },
        {
            id: '9',
            name: 'Loveseat Sofa',
            discountPrice: '$199.00',
            price: '$400.00',
            new: true,
            discount: '-50%',
            rating: Star,
            image: ProductImage
        },

    ]
    const handleShowDetails = (id: string) => {
        setShowButtonMap(prevState => ({
            ...prevState,
            [id]: true
        }));
    }
    const handleHideDetails = (id: string) => {
        setShowButtonMap(prevState => ({
            ...prevState,
            [id]: false
        }));
    }
    return (
        <main>
            <section className='container mx-auto  '>
                <section className='px-8 md:px-0'>
                    <div className=' w-full  shop_header flex justify-center items-center px-4 '>
                        <div className='flex flex-col place-items-center '>
                            <div className='flex md:gap-3 gap-2'>
                                <ELText text='Home' className={'text-[10px] text-gray-600'} />
                                <Image src={ArrorRight} alt='Arrow right' />
                                <ELText text='Shop' className={'text-[10px]'} />
                            </div>
                            <div className='flex flex-col place-items-center text-center'>
                                <ELText text='Shop Page' className={'text-[30px] my-4'} />
                                <ELText text='Let’s design the place you always imagined.' className={'text-[15px] '} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='md:flex md:my-16 mb-16 md:mb-0 justify-between px-8 md:px-0'>
                    <div className='md:w-[15%] w-[100%]'>
                        <div className='hidden md::flex gap-2'>
                            <Image src={FilterIcon} alt='FilterIcon' className='w-[15px]' />
                            <ELText text='Filter' className={'font-semibold text-[15px]'} />
                        </div>
                        <div className='md:mt-0 mt-0'>
                            <ELText text='CATEGORIES' className={'font-semibold text-[15px]'} />
                            <div className='mt-3 hidden md:block'>
                                {shopCategroy.map((category: any) => {
                                    return (
                                        <main key={category.id} onClick={() => handleChangeCategory(category.name)} className='w-max'>
                                            <ELText text={category.name} className={`${activeCategory === category.name ? 'text-black border-b border-black' : 'text-gray-500'}  text-[15px] md:text-[10px] mb-2 hover:text-black cursor-pointer`} />
                                        </main>
                                    )
                                })}
                            </div>
                            <div className='md:hidden'>
                                <ELDropdown options={shopCategroy} title={category} />
                            </div>
                        </div>
                        <div className='md:mt-0 mt-0'>
                            <ELText text='PRICE' className={'font-semibold text-[15px]'} />
                            <div className='mt-3 hidden md:block'>
                                {priceCategory.map((category: any) => {
                                    return (
                                        <main key={category.id} className='flex justify-between'>
                                            <ELText text={category.name} className={'text-gray-500 text-[15px] md:text-[10px] mb-2 hover:text-black cursor-pointer'} />
                                            <ELCheckBox name={category.name} label='' />
                                        </main>
                                    )
                                })}
                            </div>
                            <div className='md:hidden'>
                                <ELDropdown options={priceCategory} title={priceCategory[0].name} />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[80%] w-[100%] mt-8 md:mt-0'>
                        {category}
                        <div className='grid md:grid-cols-3 gap-6 md:mt-10 mt-4 grid-cols-2'>
                            {productDetails.map((product: any, index: number) => {
                                const id = product.id;
                                return (
                                    <div className=" cursor-pointer" key={index}>
                                        <ProductCard
                                            image={product.image}
                                            handleClick={() => console.log('Hello')}
                                            onMouseEnter={() => handleShowDetails(id)}
                                            onMouseLeave={() => handleHideDetails(id)}
                                            showButton={showButtonMap[id]}
                                            discountPrice={product.discountPrice}
                                            price={product.price}
                                            name={product.name}
                                            starRating={product.rating}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <ELButton name='Show more' className='px-4 py-2 border border-black text-black rounded-full'/>
                </div>
            </section>
        </main>
    )
}

export default Shop 