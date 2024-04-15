import ArticleSection from "@/components/screenComponent/HomePage/ArticlesSection";
import CategorySection from "@/components/screenComponent/HomePage/CategorySection";
import HeroSection from "@/components/screenComponent/HomePage/HeroSection";
import NewArrival from "@/components/screenComponent/HomePage/NewArrival";
import NewsLetter from "@/components/screenComponent/HomePage/NewsLetter";
import SalesSection from "@/components/screenComponent/HomePage/SalesSection";
import Image from "next/image";

export default function Home() {
  return (
    <section>

      <main className="container mx-auto">
        <HeroSection />
        <CategorySection />
        <NewArrival />
      </main>
      <SalesSection />
      <ArticleSection />
      <NewsLetter />
    </section>
  );
}
