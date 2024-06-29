'use client'
import ArticleSection from "@/components/screenComponent/HomePage/ArticlesSection";
import CategorySection from "@/components/screenComponent/HomePage/CategorySection";
import HeroSection from "@/components/screenComponent/HomePage/HeroSection";
import NewArrival from "@/components/screenComponent/HomePage/NewArrival";
import NewsLetter from "@/components/screenComponent/HomePage/NewsLetter";
import SalesSection from "@/components/screenComponent/HomePage/SalesSection";
import { useSelector } from 'react-redux';
import Star from '@/public/assets/icons/Rating Group.svg'
import ProductImage from '@/public/assets/images/product.png'
import { fetchProducts } from "@/lib/actions/product";
import React, { useEffect, useState } from "react";

export default function Home() {
  const user = useSelector((state: any) => state.user);
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await fetchProducts()
          .then((response: any) => {
            console.log(response)
            const filteredProducts = response.data.filter((product: { product_condition: boolean }) => product.product_condition === true).slice(0, 10);
            setProduct(filteredProducts);
          })
      } catch (error) {
        // setLoading(false);
        console.error(error);
        // router.push("/error");/
      }
    }
    fetchProduct()
  }, [])
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
  return (
    <section className="z-0">
      <main className="container mx-auto px-8 md:px-0">
        <HeroSection />
        <CategorySection />
        <NewArrival newArrival={product} />
      </main>
      <SalesSection />
      <div className="px-8 md:px-0">
        <ArticleSection />
      </div>
      <NewsLetter />
    </section>
  );
}
