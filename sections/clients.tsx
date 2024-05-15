import React from 'react'

export default function Clients() {
  return (
    <section className='bg-neutral-100 py-10 md:py-14 lg:py-20 md:my-14 lg:my-20 xl:my-24'>
      <div className='max-w-[1150px] mx-auto flex gap-x-8 items-center'>
        <div className="w-1/2">
          <h3 className='font-semibold text-lg text-main'>Partners</h3>
          <h2 className='text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] font-bold mt-2'>Get to Know Our Partners</h2>
          <p className='text-[17px] md:text-lg text-neutral-700 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi officiis enim repudiandae iste sit asperiores facere cupiditate molestiae, dolor assumenda.</p>
        </div>
        <div className="w-1/2 grid grid-cols-3 gap-x-6 gap-y-10">
          <img src="../images/logoipsum-261.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-262.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-264.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-287.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-295.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
          <img src="../images/logoipsum-297.svg" className='max-w-32 mx-auto' alt="Logo Ipsum" />
        </div>
      </div>
    </section>
  )
}
