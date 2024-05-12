"use client"
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  return (
    <section className='my-10 md:my-14 lg:my-20 xl:mt-24 bg-main py-10 md:py-14 lg:py-20 text-white'>
      <div className='max-w-screen-xl mx-auto flex'>
        <div className="w-2/5">
          <h2 className='text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] font-bold mt-2'>Don't just take our word for it
          </h2>
          <p className='text-[17px] md:text-lg text-white/90 mt-2'>Check out what our clients have to say about our services and see why PAG is the best choice for your tax & accounting needs.</p>
          <div className="flex gap-x-[6px] mt-4">
            {[1,2,3].map(n => (
              <motion.div layout key={n} className={`rounded-full h-2 ${current === n ? "bg-secondary w-10" : "w-5 bg-white"}`}></motion.div>
            ))}
          </div>
        </div>
        <div className="w-3/5 px-14">
          <Carousel setApi={setApi}>
            <CarouselContent className='p-4 gap-x-4'>
              <CarouselItem className='border basis-full bg-main-darker/70 border-secondary/70 rounded-2xl p-8 flex flex-col'>
                <Quote fill="white" size={34} />
                <p className='text-lg text-white my-4'>They delivered precise financial management, guiding us through complex regulations with expertise and personalized attention. Exceptional!</p>
                <div className='mt-auto'>
                  <p className='font-medium text-white text-lg'>Samantha Reynolds</p>
                  <p className='text-white/80'>Head of Marketing, HealthWise Solutions</p>
                </div>
              </CarouselItem>
              <CarouselItem className='border basis-full bg-main-darker/70 border-secondary/70 rounded-2xl p-8 flex flex-col'>
                <Quote fill="white" size={34} />
                <p className='text-lg text-white my-4'>With PA Group, our financial processes are seamless, strategic, and compliant, allowing us to focus on growth confidently.</p>
                <div className='mt-auto'>
                  <p className='font-medium text-white text-lg'>John Smith</p>
                  <p className='text-white/80'>CFO, Quantum Innovations</p>
                </div>
              </CarouselItem>
              <CarouselItem className='border basis-full bg-main-darker/70 border-secondary/70 rounded-2xl p-8 flex flex-col'>
                <Quote fill="white" size={34} />
                <p className='text-lg text-white my-4'>They delivered precise financial management, guiding us through complex regulations with expertise and personalized attention. Exceptional!</p>
                <div className='mt-auto'>
                  <p className='font-medium text-white text-lg'>Bob Builder</p>
                  <p className='text-white/80'>CEO, Summit Builders Group</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
