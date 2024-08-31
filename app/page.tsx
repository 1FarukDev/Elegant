'use client'
import ArticleSection from "@/components/screenComponent/HomePage/ArticlesSection";
import CategorySection from "@/components/screenComponent/HomePage/CategorySection";
import HeroSection from "@/components/screenComponent/HomePage/HeroSection";
import NewArrival from "@/components/screenComponent/HomePage/NewArrival";
import NewsLetter from "@/components/screenComponent/HomePage/NewsLetter";
import SalesSection from "@/components/screenComponent/HomePage/SalesSection";
import { useSelector } from 'react-redux';
import { fetchProducts } from "@/lib/actions/product";
import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "@/api/blog/blog";



export default function Home() {
  const user = useSelector((state: any) => state.user);
  const [product, setProduct] = useState([])
  const [blog, setBlog] = useState([])
  const [productLoading, setProductLoading] = useState<boolean>(false)

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchBlogPosts();
      setBlog(fetchedPosts)
      console.log(fetchedPosts, 'blog')
    };

    getPosts();
  }, [])
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
        console.error(error);
      }
    }
    fetchProduct()
  }, [])

  return (
    <section className="z-0">
      <main className="container mx-auto px-8 md:px-0">
        <HeroSection />
        <CategorySection />
        <NewArrival newArrival={product} loading={productLoading} />
      </main>
      <SalesSection />
      <div className="px-8 md:px-0">
        <ArticleSection blog={blog} />
      </div>
      <NewsLetter />
    </section>
  );
}
