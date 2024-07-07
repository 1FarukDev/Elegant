"use client"
import ELText from '@/components/Atoms/ELText'
import FilterIcon from '@/public/assets/icons/filter.svg'
import ArrorRight from '@/public/assets/icons/arrow right 3.svg'
import Image from 'next/image'
import { useEffect, useState, useMemo } from 'react'
import ELCheckBox from '@/components/Atoms/ELCheckbox'
import ProductCard from '@/components/card/ProductCard'
import ELDropdown from '@/components/Atoms/ELDropdown'
import ELButton from '@/components/Atoms/ELButton'
import { fetchProducts } from "@/lib/actions/product"
import calculateDiscountedPrice from '@/utils/helpers/DiscountCalculator'
import ProductCardSkeleton from '@/components/card/ProductCardSkeleton'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { addItemToCart } from '@/lib/features/cart/cartSlice'
import { toast } from 'react-toastify'

interface Product {
    id: string
    product_name: string
    product_image: string
    product_price: number
    product_discount: number
    product_condition: string
    product_rating: number
}
interface Category {
    id: string
    name: string
}
interface CartItem {
    id: string | any;
    price: number;
    quantity: number;
    totalPrice: number;
    product_name: string;
    product_image: string;
    product_price: string;

}

interface ProductProps {
    item: CartItem
}
const Shop: React.FC<ProductProps> = () => {
    const [showButtonMap, setShowButtonMap] = useState<{ [id: string]: boolean }>({});
    const [activeCategory, setActiveCategory] = useState<string>('All Rooms')
    const [category, setCategory] = useState<string>(activeCategory)
    const [product, setProduct] = useState<Product[]>([])
    const [limit, setLimit] = useState<number>(9)
    const [productLoading, setProductLoading] = useState<boolean>(false)
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const { register, handleSubmit, watch } = useForm();
    const dispatch: AppDispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    console.log(cart);

    const handleChangeCategory = (tabName: string) => {
        setActiveCategory(tabName)
        setCategory(tabName)
        console.log(category)
    }

    const shopCategory: Category[] = useMemo(() => [
        { id: '0', name: 'All Rooms' },
        { id: '1', name: 'Living Room' },
        { id: '2', name: 'Bedroom' },
        { id: '3', name: 'Kitchen' },
        { id: '4', name: 'Bathroom' },
        { id: '5', name: 'Dining' },
        { id: '6', name: 'Outdoors' },
    ], []);
    const priceCategory: Category[] = useMemo(() => [
        { id: '0', name: 'All Price' },
        { id: '1', name: '$0.00 - 99.99' },
        { id: '2', name: '$100.00 - 199.99' },
        { id: '3', name: '$200.00 - 299.99' },
        { id: '4', name: '$300.00 - 399.99' },
        { id: '5', name: '$400.00+' },
    ], []);

    const watchAll = watch(priceCategory.map(category => category.name));

    useEffect(() => {
        const updatedCheckedValues = priceCategory
            .filter((category, index) => watchAll[index])
            .map(category => category.name);

        if (JSON.stringify(updatedCheckedValues) !== JSON.stringify(checkedValues)) {
            setCheckedValues(updatedCheckedValues);
        }
    }, [watchAll, priceCategory, checkedValues]);

    useEffect(() => {
        // Handle checkbox value changes here
        console.log("Checked values: ", checkedValues);
    }, [checkedValues]);
    const handleShowMore = () => {
        setLimit(prevLimit => prevLimit + 10); // Increase limit by 10
    }

    const handleAddToCart = (product: Product) => {
        const cartItem: CartItem = {
            id: product.id,
            price: product.product_price,
            quantity: 1,
            totalPrice: product.product_price,
            product_name: product.product_name,
            product_image: product.product_image,
            product_price: product.product_price.toString(),
        };
        dispatch(addItemToCart(cartItem));
        toast.success('You just added this item to cart')
    };

    useEffect(() => {
        const fetchProduct = async () => {
            setProductLoading(true)
            try {
                const response = await fetchProducts(limit, 0, activeCategory === 'All Rooms' ? undefined : activeCategory, checkedValues);
                setProductLoading(false)
                setProduct(response.data || []);
            } catch (error) {
                setProductLoading(false)
                console.error(error);
            }
        }
        fetchProduct();
    }, [limit, activeCategory, checkedValues]);

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


    const memoizedProducts = useMemo(() => {
        return product.map((product: any, index: number) => {
            const id = product.id;
            return (
                <div className="cursor-pointer" key={index}>
                    <ProductCard
                        image={product.product_image[0]}
                        handleClick={() => handleAddToCart(product)}
                        id={product.id}
                        onMouseEnter={() => handleShowDetails(id)}
                        onMouseLeave={() => handleHideDetails(id)}
                        showButton={showButtonMap[id]}
                        discountPrice={calculateDiscountedPrice(product.product_price, product.product_discount)}
                        discountPercentage={product.product_discount}
                        productCondition={product.product_condition}
                        price={product.product_price}
                        name={product.product_name}
                        starRating={product.product_rating}
                    />
                </div>
            )
        });
    }, [product, showButtonMap]);

    return (
        <main>
            <section className='container mx-auto'>
                <section className='px-8 md:px-0'>
                    <div className='w-full shop_header flex justify-center items-center px-4'>
                        <div className='flex flex-col place-items-center'>
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
                    <div className='md:w-[20%] w-[100%]'>
                        <div className='hidden md:flex gap-2'>
                            <Image src={FilterIcon} alt='FilterIcon' className='w-[15px]' />
                            <ELText text='Filter' className={'font-semibold text-[15px]'} />
                        </div>
                        <div className='md:mt-0 mt-0'>
                            <ELText text='CATEGORIES' className={'font-semibold text-[15px]'} />
                            <div className='mt-3 hidden md:block'>
                                {shopCategory.map((category: any) => (
                                    <main key={category.id} onClick={() => handleChangeCategory(category.name)} className='w-max'>
                                        <ELText text={category.name} className={`${activeCategory === category.name ? 'text-black border-b border-black' : 'text-gray-500'} text-[15px] md:text-[10px] mb-2 hover:text-black cursor-pointer`} />
                                    </main>
                                ))}
                            </div>
                            <div className='md:hidden'>
                                <ELDropdown options={shopCategory} title={category} />
                            </div>
                        </div>
                        <div className='md:mt-0 mt-0'>
                            <ELText text='PRICE' className={'font-semibold text-[15px]'} />
                            <div className='mt-3 hidden md:block'>
                                {priceCategory.map((category: any) => (
                                    <main key={category.id} className='flex justify-between'>
                                        <ELText text={category.name} className={'text-gray-500 text-[15px] md:text-[10px] mb-2 hover:text-black cursor-pointer'} />
                                        <ELCheckBox name={category.name} label='' register={register} />
                                    </main>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[75%] w-[100%] mt-8 md:mt-0'>
                        {/* { md:w-[80%] w-[100%] mt-8 md:mt-0} */}
                        {category}
                        <div className='grid md:grid-cols-3 gap-6 md:mt-10 mt-4 grid-cols-2'>
                            {productLoading ?
                                Array.from({ length: 9 }).map((_, index) => (
                                    <ProductCardSkeleton key={index} />
                                )) :
                                memoizedProducts
                            }
                        </div>

                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <ELButton name='Show more' className='px-4 py-2 border border-black text-black rounded-full' handleClick={handleShowMore} loading={productLoading} />
                </div>
            </section>
        </main>
    )
}

export default Shop
