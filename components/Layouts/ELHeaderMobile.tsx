"use client"
import ElegantLogo from '@/public/assets/icons/3legant..svg'
import Image from 'next/image'
import CloseIcon from '@/public/assets/icons/close.svg'
import SearchIcon from '@/public/assets/icons/search.svg'
import facebook from '@/public/assets/icons/facebook black.svg'
import instagram from '@/public/assets/icons/instagram black.svg'
import youtube from '@/public/assets/icons/instagram black.svg'
import ELInput from '../Atoms/ELInput'
import { useForm } from 'react-hook-form'
import ELButton from '../Atoms/ELButton'
import Link from 'next/link'

interface MobileMenuProps {
    handleClose: any
}

const ELHeaderMobile = (props: MobileMenuProps) => {
    const { handleClose } = props
    const headerMenu = [
        {
            id: 0,
            name: 'Home',
            to: '/'
        },
        {
            id: 0,
            name: 'Shop',
            to: '/shoppage'
        },
        {
            id: 0,
            name: 'Blog',
            to: '/blog'
        },
        {
            id: 0,
            name: 'Contact Us',
            to: '/header'
        },
    ]
    const bottomMenu = [
        {
            id: 0,
            name: 'Cart',
            to: '/cart'
        },
        {
            id: 1,
            name: 'Wishlist',
            to: '/account'
        },

    ]
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <main className=' fixed top-0 w-[90%] bg-white h-screen p-6 z-[100]'>
            <div className="flex w-full justify-between item-center ">
                <Image src={ElegantLogo} alt="Elegant logo" className="w-[70px] md:w-[105px]" />
                <Image src={CloseIcon} alt="Close Icon" className="w-[30px] md:w-[105px]" onClick={handleClose} />
            </div>
            <div className='border flex border-black rounded-lg pl-4 mt-5'>
                <Image src={SearchIcon} alt="Close Icon" className="w-[30px] md:w-[105px]" />
                <ELInput name='Hello' placeholder='Search' register={register} />
            </div>
            <div className='flex flex-col gap-3 mt-4'>
                {headerMenu.map((menu: any, index: number) => {
                    return (
                        <Link href={menu.to} key={index}>
                            <ul className='mb-4' >
                                <li>{menu.name}</li>
                            </ul>
                            <hr className='bg-gray-400' />
                        </Link>
                    )
                })}
            </div>
            <div className='absolute bottom-[24px] w-full '>
                <div className='flex flex-col gap-3 mt-4 w-[85%]'>
                    {bottomMenu.map((menu: any, index: number) => {
                        return (
                            <Link href={menu.to} key={index}>
                                <ul>
                                    <li className='mb-4' >
                                        {menu.name}
                                    </li>
                                </ul>
                                <hr className='bg-gray-400' />
                            </Link>

                        )
                    })}
                </div>
                <div className='mt-5'>
                    <ELButton name='Sign In' className='bg-black py-3 w-[85%] text-white text-[20px] rounded-lg' />
                </div>
                <div className="flex gap-5 mt-5">
                    <Image src={instagram} alt="Instagram" />
                    <Image src={facebook} alt="facebook" />
                    <Image src={youtube} alt="youtube" />
                </div>
            </div>
        </main>
    )
}

export default ELHeaderMobile