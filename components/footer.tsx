import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-20 bg-main-darker text-white px-4'>
      <div className="max-w-[1150px] mx-auto flex justify-between gap-x-8">
        <div>
          <h3 className="font-bold text-lg">PA Group © 2024</h3>
          <p className='md:text-[17px] mt-3'>We are your trusted accountants in Prizren, Kosovo</p>
          <Link href="/" className='block mt-3 text-secondary underline underline-offset-2'>Privacy Policy</Link>
        </div>
        <div>
          <h3 className="font-bold text-lg">Join Our Team</h3>
          <p className='md:text-[17px] mt-3'>We're always open to discussing collaboration opportunities with other professional trades. Go ahead and introduce yourself.</p>
          <Link href="/" className='block mt-3 text-secondary underline underline-offset-2'>Say hello</Link>
        </div>
        <div className='min-w-40 max-w-full'>
          <h3 className="whitespace-nowrap font-bold text-lg">Get social</h3>
          <ul className='mt-3'>
            <li className='mt-2 text-secondary md:text-[17px]'><Link href="/">Facebook</Link></li>
            <li className='mt-2 text-secondary md:text-[17px]'><Link href="/">Instagram</Link></li>
            <li className='mt-2 text-secondary md:text-[17px]'><Link href="/">Twitter</Link></li>
          </ul>
        </div>
        <div className='min-w-60 max-w-full'>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-3">
            <li className='mt-2 text-secondary md:text-[17px]'><a href="mailto:sulajlindrit@gmail.com">Send an email</a> </li>
            <li className='mt-2 text-secondary md:text-[17px]'><a href="tel:+38349905144">049 905 144</a></li>
          </ul>
          
        </div>
      </div>
    </footer>
  )
}
