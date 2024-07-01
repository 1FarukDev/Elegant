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
  const [productLoading, setProductLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true)
      try {
        await fetchProducts()
          .then((response: any) => {
            setProductLoading(false)
            console.log(response)
            const filteredProducts = response.data.filter((product: { product_condition: boolean }) => product.product_condition === true).slice(0, 10);
            setProduct(filteredProducts);
          })
      } catch (error) {
        setProductLoading(false)
        // setLoading(false);
        console.error(error);
        // router.push("/error");
      }
    }
    fetchProduct()
  }, [])
 
  return (
    <section className="z-0">
      <main className="container mx-auto px-8 md:px-0">
        <HeroSection />
        <CategorySection />
        <NewArrival newArrival={product} loading={productLoading}/>
      </main>
      <SalesSection />
      <div className="px-8 md:px-0">
        <ArticleSection />
      </div>
      <NewsLetter />
    </section>
  );
}
