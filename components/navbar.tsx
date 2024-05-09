"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { Button } from './ui/button';

export default function Navbar() {
  const { scrollY } = useScroll();

  const [withBackground, setWithBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setWithBackground(false);
    } else if (latest > 0) {
      setWithBackground(true)
    }
  })

  return (
    <nav className={`fixed top-0 w-full h-[70px] px-4 transition-all ${withBackground ? "bg-white text-black border-b" : "bg-transparent text-white"}`}>
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between">
        <div className='flex gap-8 items-center'>
          <h2 className='text-[22px] font-bold'>PA Group</h2>
          <ul className='hidden lg:flex gap-x-6'>
            <li className={`${!withBackground ? "text-white/80 hover:text-white" : ""} transition-all`}>
              <Link href="/">About</Link></li>
            <li className={`${!withBackground ? "text-white/80 hover:text-white" : ""} transition-all`}><Link href="/services">Services</Link></li>
            <li className={`${!withBackground ? "text-white/80 hover:text-white" : ""} transition-all`}><Link href="/work">Work</Link></li>
          </ul>
        </div>

        <div className='hidden lg:flex gap-x-2'>
          <a href="/">
            <Button variant="outline" size="lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>

              +049 905-144
            </Button>
          </a>
          <Link href="/">
            <Button className={`bg-secondary hover:bg-secondary/90 text-black`} size="lg">
              Contact
            </Button>
          </Link>
        </div>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>PA Group</SheetTitle>
              </SheetHeader>
              <div className="h-full flex flex-col pb-6">
                <div className="grow flex flex-col items-center justify-center">
                  <ul>
                    <li className='text-center my-3 text-lg text-neutral-700'>
                      <Link href="/">Home</Link>
                    </li>
                    <li className='text-center my-3 text-lg text-neutral-700'>
                      <Link href="/about">About</Link>
                    </li>
                    <li className='text-center my-3 text-lg text-neutral-700'>
                      <Link href="/services">Services</Link>
                    </li>
                    <li className='text-center my-3 text-lg text-neutral-700'>
                      <Link href="/work">Work</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="#" className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>

                    +049 905-144</a>
                  <Link href="/contact" className='block mt-4'>
                    <Button className='w-full' size="lg">
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
