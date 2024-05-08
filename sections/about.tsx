import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className="px-4 my-10 md:my-14 lg:my-20">
      <div className="max-w-[1150px] mx-auto flex gap-x-6">
        <div className="w-1/2">
          <Separator className='w-1/3 max-w-20 h-[5px] bg-main' />
          <p className='md:text-[17px] lg:text-lg xl:text-[21px] xl:leading-9 mt-4'><strong>Professional Accounting Group is an accounting firm based in Kosovo providing accounting, tax, and advisory services to business owners and their families.</strong></p>
          <p className='md:text-[17px] lg:text-lg mt-4'>Since 2000, we have advised more than 800 companies, trusts, families, and individuals. We provide our clients forward-thinking solutions characterized by trust, reliability, and outstanding service.</p>
          <Link href="/about" className='block md:text-[17px] lg:text-lg mt-4 underline underline-offset-4'>Continue reading
</Link>
        </div>
        <div className="w-1/2">
          <img className='mx-auto block' src="../images/accounting.png" alt="" />
        </div>
      </div>
    </section>
  )
}
