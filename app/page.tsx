'use client'
import ArticleSection from "@/components/screenComponent/HomePage/ArticlesSection";
import CategorySection from "@/components/screenComponent/HomePage/CategorySection";
import HeroSection from "@/components/screenComponent/HomePage/HeroSection";
import NewArrival from "@/components/screenComponent/HomePage/NewArrival";
import NewsLetter from "@/components/screenComponent/HomePage/NewsLetter";
import SalesSection from "@/components/screenComponent/HomePage/SalesSection";
import { useSelector } from 'react-redux';
import Image from "next/image";

export default function Home() {
  const user = useSelector((state: any) => state.user);
  console.log(user);
  
  return (
    <section className="z-0">
      <main className="container mx-auto px-8 md:px-0">
        <HeroSection />
        <CategorySection />
        <NewArrival />
      </main>
      <SalesSection />
      <div className="px-8 md:px-0">
        <ArticleSection />
      </div>
      <NewsLetter />
    </section>
  );
}
