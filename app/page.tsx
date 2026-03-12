import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Booking from "@/components/sections/Booking";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="bg-black space-y-32">
        <About />
        <Services />
        <Portfolio />
        <Booking />
      </div>
    </div>
  );
}
