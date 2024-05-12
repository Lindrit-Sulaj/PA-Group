import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <section className='my-10 md:my-14 lg:my-20'>
      <div className='services-bg px-4 text-white'>
        <div className="max-w-screen-lg mx-auto pt-20 pb-48 ">
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Services</h2>
          <p className='text-[17px] md:text-lg text-white/80 max-w-xl mx-auto text-center mt-3'>Whether you are a large or small business, or an individual seeking accounting services, we are here to help you.</p>
        </div>
      </div>
      <div className="grid max-w-screen-lg mx-auto px-4 grid-cols-1 md:grid-cols-2 gap-6 -mt-36">
        <div className="bg-white overflow-hidden border-b-8 border-b-secondary">
          <img className='h-64 w-full object-cover' src="../images/financial-management.jpg" alt="Financial Management" />
          <div className="p-6 md:p-10 text-white bg-main-darker">
            <div className="flex flex-wrap flex-col md:flex-row gap-y-1 md:items-end gap-x-2">
              <h3 className='font-bold text-lg md:text-xl'>Financial Management</h3>
              <Link href="/services" className='text-secondary font-medium'>{"Read more >"}</Link>
            </div>

            <p className='text-white/80 mt-3 text-[15px]'>Empower your business with robust financial strategies, optimizing resources for sustainable growth and enhanced profitability.</p>
            <ul className='mt-3'>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Budgeting and forecasting
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Cash Flow Management
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Financial Analysis
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Investment Management
</li>
            </ul>
          </div>
        </div>
        <div className="bg-white overflow-hidden border-b-8 border-b-secondary">
        <img className='h-64 w-full object-cover' src="../images/compliance-reporting.jpg" alt="Compliance and Reporting" />
          <div className="p-6 md:p-10 text-white bg-main-darker">
            <div className="flex flex-wrap flex-col md:flex-row gap-y-1 md:items-end gap-x-2">
              <h3 className='font-bold text-lg md:text-xl'>Compliance and Reporting</h3>
              <Link href="/services" className='text-secondary font-medium'>{"Read more >"}</Link>
            </div>

            <p className='text-white/80 mt-3 text-[15px]'>Navigate complex regulatory landscapes seamlessly while maintaining accurate financial records and transparent reporting.</p>
            <ul className='mt-3'>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Tax Preparation and Planning
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Audit and Assurance
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Bookkeeping
</li>
              <li className='flex items-center gap-x-1 my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 min-w-6 text-secondary min-h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg> Payroll Management
</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
