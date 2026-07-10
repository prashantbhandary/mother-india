import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Amenities from "@/components/sections/Amenities";
import MenuShowcase from "@/components/sections/MenuShowcase";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <Story />
      <Amenities />
      <MenuShowcase />
      <Gallery />
      <Testimonials />
    </main>
  );
}
