import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="bg-black space-y-32">
        <About />
        <Services />
        <Portfolio />
        <HomeTestimonials />
        <FAQ />
        <Booking />
      </div>
    </div>
  );
}
