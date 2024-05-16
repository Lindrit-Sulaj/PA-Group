import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function Contact() {
  return (
    <section className='mt-10 md:mt-14 lg:mt-20'>
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center bg-neutral-50">
          <div className="block w-1/2 mx-auto">
            <h2 className='text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] font-bold mt-2'>Get in touch</h2>
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className='bg-main text-white px-4 py-8'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 mx-auto">
                  <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                </svg>
                <a className='block font-semibold text-[17px] mt-3 text-center' href="mailto:sulajlindrit@gmail.com">sulajlindrit@gmail.com</a>
                <p className='text-white/80 text-center'>Send us an email</p>
              </div>
              <div className='border px-4 py-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                <a className='block font-semibold text-[17px] mt-3 text-center' href="tel:+38349905144">+383 49 905 144</a>
                <p className='text-neutral-700 text-center'>Call us</p>
              </div>
              <div className='border px-4 py-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <a className='block font-semibold text-[17px] mt-3 text-center' href="mailto:sulajlindrit@gmail.com">Prizren, Kosovo</a>
                <p className='text-neutral-700 text-center'>Visit us</p>
              </div>
              <div className='bg-main text-white px-4 py-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <p className='block font-semibold text-[17px] mt-3 text-center'>8:00 - 5:00</p>
                <p className='text-white/80 text-center'>Working hours</p>
              </div>
            </div>
          </div>

        </div>
        <div className="grow bg-main text-white h-full p-20">
          <form action="">
            <div>
              <Label>Name</Label>
              <Input className='bg-transparent placeholder:text-white/80 border-white/40 mt-1' placeholder="Your full name" />
            </div>
            <div className='mt-4'>
              <Label>Subject</Label>
              <Input className='bg-transparent placeholder:text-white/80 border-white/40 mt-1' placeholder="Subject of message" />
            </div>
            <div className='mt-4'>
              <Label>Message</Label>
              <Textarea className='bg-transparent placeholder:text-white/80 border-white/40 mt-1' placeholder="Your message" />
            </div>
            <Button variant="secondary" className='w-full mt-6 rounded-md' size="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
