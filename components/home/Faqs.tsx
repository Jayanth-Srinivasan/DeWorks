import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faqs() {
    interface FaqData {
     question: string;
     answer: string
   }
   [];
    const FAQS:FaqData[] = [
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
    ];

  return (
    <section className="" id="faqs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            People Often Ask About
          </h2>

          <p className="my-4 text-slate-300">
            Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
            Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta
          </p>
        </div>

        <div className="mt-4 lg:px-16 px-0">
          {FAQS.map((faq, idx) => (
            <Accordion key={idx} type="single" collapsible className="w-full">
              <AccordionItem value={idx.toString()}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
          </div>
        </div>
    </section>
  );
}

export default Faqs