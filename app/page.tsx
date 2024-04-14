import CategorySection from "@/components/screenComponent/HomePage/CategorySection";
import HeroSection from "@/components/screenComponent/HomePage/HeroSection";
import NewArrival from "@/components/screenComponent/HomePage/NewArrival";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <CategorySection />
      <NewArrival />
    </main>
  );
}
