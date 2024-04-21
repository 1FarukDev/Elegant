"use client"
import ELText from '@/components/Atoms/ELText'
import ShopHeader from '@/public/assets/images/shop header.svg'
import FilterIcon from '@/public/assets/icons/filter.svg'
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from 'next/image'
import { useState } from 'react'
import ELCheckBox from '@/components/Atoms/ELCheckbox'

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All Rooms')
    const [category, setCategory] = useState(activeCategory)
    const handleChangeCategory = (tabName:string) => {
        setActiveCategory(tabName)
        setCategory(tabName)
        console.log(activeCategory);
    }
    const shopCategroy = [
        {
            id:'0',
            name:'All Rooms'
        },
        {
            id:'1',
            name:'Living Room'
        },
        {
            id:'2',
            name:'Bedroom'
        },
        {
            id:'3',
            name:'Kitchen'
        },
        {
            id:'4',
            name:'Bathroom'
        },
        {
            id:'5',
            name:'Dinning'
        },
        {
            id:'5',
            name:'Outdoors'
        }
    ]
    const priceCategory = [
        {
            id:'0',
            name:'All Price'
        },
        {
            id:'1',
            name:'$0.00 - 99.99'
        },
        {
            id:'2',
            name:'$100.00 - 199.99'
        },
        {
            id:'3',
            name:'$200.00 - 299.99'
        },
        {
            id:'4',
            name:'$300.00 - 399.99'
        },
        {
            id:'5',
            name:'$400.00+'
        },
    ]
    return (
        <main>
            <section className='container mx-auto  '>
                <div className='relative w-full'>
                    <Image src={ShopHeader} alt='Shop Header Image' className='w-[100%]' />
                  <div className='flex flex-col place-items-center absolute top-[30%] left-[40%]'>
                        <div className='flex gap-3'>
                            <ELText text='Home' className={'text-[10px] text-gray-600'} />
                            <Image src={ArrorRight} alt='Arrow right' />
                            <ELText text='Shop' className={'text-[10px]'} />
                        </div>
                        <div className='flex flex-col place-items-center'>
                            <ELText text='Shop Page' className={'text-[30px] my-4'} />
                            <ELText text='Let’s design the place you always imagined.' className={'text-[15px] '} />
                        </div>
                  </div>
               </div>
               <div className='flex my-16 justify-between'>
                <div className='w-[15%]'>
                    <div className='flex gap-2'>
                            <Image src={FilterIcon} alt='FilterIcon' className='w-[15px]'/>
                            <ELText text='Filter' className={'font-semibold text-[15px]'} />
                    </div>
                    <div className='mt-8'>
                            <ELText text='CATEGORIES' className={'font-semibold text-[15px]'}/>
                            <div className='mt-3'>
                                {shopCategroy.map((category:any) => {
                                    return(
                                        <main key={category.id} onClick={() => handleChangeCategory(category.name)} className='w-max'>
                                            <ELText text={category.name} className={`${activeCategory === category.name ? 'text-black border-b border-black' : 'text-gray-500'}  text-[15px] mb-2 hover:text-black cursor-pointer`} />
                                        </main>
                                    )
                                })}
                            </div>
                    </div>
                    <div className='mt-8'>
                            <ELText text='PRICE' className={'font-semibold text-[15px]'}/>
                            <div className='mt-3'>
                                {priceCategory.map((category:any) => {
                                    return(
                                        <main key={category.id} className='flex justify-between'>
                                            <ELText text={category.name} className={'text-gray-500 text-[15px] mb-2 hover:text-black cursor-pointer'}/>
                                            <ELCheckBox name='checkbox' label=''/>
                                        </main>
                                    )
                                })}
                            </div>
                    </div>
                </div>
                    <div className='w-[80%]'>{category}</div>
               </div>
            </section>
        </main>
    )
}

export default Shop 