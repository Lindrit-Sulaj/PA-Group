import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero-bg h-[75vh] flex items-center px-4">
      <div className="max-w-screen-lg mx-auto w-full">
        <h1 className='text-white text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-bold lg:leading-[65px]'>Professional <span>Accounting</span> <br />  & Tax services</h1>
        <p className='text-white/85 lg:text-lg mt-2 md:mx-auto lg:mx-0 md:text-center lg:text-left md:max-w-2xl lg:max-w-3xl'>We help businesses of any size with tax planning assitance, financial reporting, bookkeeping and more.</p>
        <div className="flex justify-start md:justify-center lg:justify-start w-full gap-4 mt-4">
          <Link href="/">
            <Button variant="secondary" size="xl">
              Get in touch
            </Button>
          </Link>
          <p className='text-sm text-white/70 max-w-80'>More than 300 people trust us for our accounting services.</p>
        </div>
      </div>
    </section>
  )
}
