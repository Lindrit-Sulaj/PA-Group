import Hero from "@/sections/hero";
import About from "@/sections/about";
import Services from "@/sections/services";
import WhyChooseUs from "@/sections/why-choose-us";
import Clients from "@/sections/clients";
import Faq from "@/sections/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section className="px-4">
        <div className="grid grid-cols-3 max-w-screen-lg mx-auto">
          <div className="border-r-neutral-300 border-r py-4 px-2">
            <h4 className="text-2xl md:text-4xl text-center font-extrabold text-main">24</h4>
            <p className="text-center mt-2 text-neutral-700">Years experience</p>
          </div>
          <div className="py-4 px-2">
            <h4 className="text-2xl md:text-4xl text-center font-extrabold text-main">500+</h4>
            <p className="text-center mt-2 text-neutral-700">Clients</p>
          </div>
          <div className="border-l-neutral-300 border-l py-4 px-2">
            <h4 className="text-2xl md:text-4xl text-center font-extrabold text-main">25</h4>
            <p className="text-center mt-2 text-neutral-700">Team members</p>
          </div>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <Clients />
      <Faq />
      <Contact />
    </main>
  );
}
