import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including tax preparation and planning, bookkeeping, payroll services, financial statement preparation, auditing, and business consulting. Whether you’re an individual or a business, we can tailor our services to meet your specific needs."
  },
  {
    question: "How do you charge for your services?",
    answer: "Our fees depend on the type and complexity of the services you require. We typically offer an initial consultation to understand your needs and provide a detailed quote. Some services are billed hourly, while others, like tax preparation, might have a flat fee. We strive to be transparent with our pricing so there are no surprises."
  },
  {
    question: "How can you help me save on taxes?",
    answer: "We stay up-to-date with the latest tax laws and regulations to identify opportunities for deductions and credits that you might qualify for. Our tax planning services focus on strategies to minimize your tax liability and ensure you’re taking advantage of all available tax-saving opportunities."
  },
  {
    question: "What information do you need from me to get started?",
    answer: "For most services, we’ll need basic personal or business information, financial statements, previous tax returns, and any relevant documentation like receipts, invoices, and payroll records. Don’t worry if you’re not sure what to provide—we’ll guide you through the process and let you know exactly what we need."
  },
  {
    question: "How do you ensure the confidentiality of my financial information?",
    answer: "We take your privacy and the security of your financial information very seriously. We use secure, encrypted systems for storing and transmitting data, and all our staff are trained on confidentiality policies. Your information is only accessible to those who need it to perform their duties."
  },
  {
    question: "How often should I meet with my accountant?",
    answer: "The frequency of meetings depends on your individual or business needs. For some clients, an annual meeting is sufficient, especially around tax season. Others, particularly business clients, may benefit from quarterly or even monthly meetings to stay on top of financial planning, bookkeeping, and strategy. We’ll work with you to determine a schedule that makes sense for your situation."
  }
];


export default function Faq() {
  return (
    <section className='px-4 my-10'>
      <div className="max-w-[1150px] mx-auto">
        <h3 className='font-semibold text-lg text-main text-center'>FAQs</h3>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Do you have any questions?</h2>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8'>
          <Accordion type="single" collapsible>
            {faqs.slice(0, 3).map(faq => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
          <Accordion type="single" collapsible>
            {faqs.slice(3, 6).map(faq => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className='text-left'>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
