import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero-bg h-[75vh] flex items-center px-4">
      <div className="max-w-screen-lg mx-auto w-full">
        <h1 className='text-white text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-bold lg:leading-[65px]'>High Quality <span>Accounting</span> <br />  & Tax services</h1>
        <p className='text-white/85 lg:text-lg mt-2 md:mx-auto lg:mx-0 md:text-center lg:text-left md:max-w-2xl lg:max-w-4xl'>We are your trusted team for tax & accounting services here in Kosovo. Whether you need assistance with tax planning, financial reporting, or bookkeeping, we are here to support your financial success journey every step of the way.</p>
        <div className="flex justify-start md:justify-center lg:justify-start w-full gap-4 mt-4">
          <Link href="/">
            <Button className='text-white' size="xl" variant="outline">
              Learn more
            </Button>
          </Link>
          <Link href="/">
            <Button className='bg-secondary hover:bg-secondary/90 text-black' size="xl">Start a project<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 ml-2 h-6">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
