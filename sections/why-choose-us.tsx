import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WhyChooseUs() {
  return (
    <section className='px-4 my-10 md:my-14 lg:my-20'>
      <div className="max-w-[1150px] mx-auto flex flex-col-reverse gap-x-4 gap-y-8 lg:flex-row items-center">
        <div className="w-3/4 max-w-[260px] lg:max-w-none lg:w-1/2 relative">
          <img className='w-full lg:w-3/4' src="../images/businessmen-conversation.jpg" alt="" />
          <div className="absolute w-full lg:w-3/4 h-full bg-secondary/60 top-4 left-4 -z-50"></div>
          <div className="absolute py-8 pl-8 pr-20 hidden lg:flex items-center gap-x-4 bg-main text-white right-20 bottom-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-10 min-h-10 w-10 h-10 text-secondary">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <div>
              <p className='font-extrabold text-2xl'>100%</p>
              <p className='text-[15px]'>Client satisfaction</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className='font-semibold text-lg text-main'>Why choose us?</h3>
          <h2 className='text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] font-bold mt-2'>We are professional, client-driven and reliable</h2>
          <p className='text-[17px] md:text-lg mt-4 text-neutral-700'>We understand the importance of selecting the right accountant for your business needs. That's why we prioritize your requirements, offering tailored solutions built on years of experience and a deep understanding of financial matters.</p>
          <p className="text-[17px] md:text-lg mt-4 text-neutral-700">When you choose us, you're gaining more than just a service provider; you're securing a trusted partner in your financial journey. We believe in transparent communication and timely delivery, providing you with peace of mind regarding your finances.</p>
          <Link href="/contact" className='inline-block mt-4'>
            <Button variant="secondary" size="lg">Get in touch</Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
