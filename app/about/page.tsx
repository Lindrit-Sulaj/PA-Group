import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <main>
      <section className="bg-main pb-24 pt-[calc(6rem+70px)] text-white">
        <p className="text-center text-secondary text-lg md:text-[19px] font-medium">About</p>
        <h1 className='text-white text-[26px] md:text-4xl text-center lg:text-5xl mt-2 font-bold lg:leading-[65px]'>Accounting is in our DNA</h1>
        <p className='text-[17px] md:text-lg text-center max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-2'>For more than twenty-four years we've been working in the accounting industry. It's not just what we do — it's who we are.
        </p>
      </section>
      <section className="px-4 my-10 md:my-14 lg:mt-20">
        <div className="max-w-screen-md lg:max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-y-6 gap-x-6">
          <div className="w-full lg:w-1/2">
            <Separator className='w-1/3 max-w-20 h-[5px] bg-main' />
            <p className='text-lg md:text-[19px] xl:text-[21px] xl:leading-9 mt-4 font-semibold'>Professional Accounting Group is an accounting firm based in Kosovo providing accounting, tax, and advisory services to business owners and their families.</p>
            <p className='text-[17px] md:text-lg mt-4'>Since 2000, we have advised more than 800 companies, trusts, families, and individuals. We provide our clients forward-thinking solutions characterized by trust, reliability, and outstanding service.</p>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2">
            <img className='mx-auto block' src="../images/accounting.png" alt="" />
          </div>
        </div>
      </section>
      <section className="core-values px-4 my-10 md:my-14 lg:my-20">
        <div className="max-w-[1150px] mx-auto">
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Core Values</h2>
          <p className='text-[17px] md:text-lg text-neutral-700 text-center max-w-2xl mx-auto mt-3'>We are a mission-driven company committed to transparency, accountability, sustainability and positive impact. It’s not just good business – it’s the only way we want to do business.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 mt-6'>
            <div className='border rounded-md overflow-hidden'>
              <img className="aspect-video object-cover" src="https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="We do it right" />
              <div className="px-8 py-10">
                <h3 className='text-lg md:text-xl font-semibold'>We do it right</h3>
                <p className='text-neutral-700 mt-2 md:text-[17px]'>There's never a stressful amount of pressure to meet unreasonable expectations. We project-manage towards specific quality goals to ensure the best possible result.</p>
              </div>
            </div>
            <div className='border rounded-md overflow-hidden'>
              <img className="aspect-video object-cover" src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="We do it together" />
              <div className="px-8 py-10">
                <h3 className='text-lg md:text-xl font-semibold'>We do it together</h3>
                <p className='text-neutral-700 mt-2 md:text-[17px]'>Collaboration and open lines of communication is an important part of our process. We choose to work with responsible homeowners and trades people we can trust.</p>
              </div>
            </div>
            <div className='border rounded-md overflow-hidden'>
              <img className="aspect-video object-cover" src="https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="We do it with purpose" />
              <div className="px-8 py-10">
                <h3 className='text-lg md:text-xl font-semibold'>We do it with purpose</h3>
                <p className='text-neutral-700 mt-2 md:text-[17px]'>Building close relationships with our clients and turning dreams into reality is a privilege. It's the reason we do what we do and why we enjoy it so much.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-neutral-100 py-10 md:py-14 lg:py-20 md:mt-14 lg:mt-20 xl:mt-24 px-4'>
      <div className='max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-x-8 gap-y-8 items-center'>
        <div className="w-full lg:w-1/2">
          <h3 className='font-semibold text-lg text-main text-center lg:text-left'>Partners</h3>
          <h2 className='text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] font-bold mt-2 text-center lg:text-left'>Get to Know Our Partners</h2>
          <p className='text-[17px] md:text-lg text-neutral-700 mt-2 max-w-lg mx-auto lg:max-w-none lg:mx-0 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi officiis enim repudiandae iste sit asperiores facere cupiditate molestiae, dolor assumenda.</p>
        </div>
        <div className="w-full max-w-xl lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          <img src="../images/logoipsum-261.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-262.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-264.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-287.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-295.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-297.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
        </div>
      </div>
    </section>
    </main>
  )
}
