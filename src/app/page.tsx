import HeroSection from "@/components/HeroSection";
import FeaturedCard from "@/components/FeaturedCard";
import { div } from "framer-motion/client";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
      <div className="h-screen" >
        <HeroSection />
        <FeaturedCard />
        <WhyChooseUs />
      </div>
  );
}
