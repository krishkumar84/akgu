import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';


function Faq() {
    const [faqOpen, setFaqOpen] = useState([]);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

    return (
        <section className="mx-auto max-w-7xl mt-12 px-4 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-2xl  lg:text-center">
              <h2 className="text-3xl h-24 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer rounded-md border border-gray-400 transition-all duration-400"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="flex text-start text-lg font-semibold text-black">
                    How Will I Get Admission Confirmation?
                    </span>
                    {faqOpen[i] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                    )}
                  </button>
                  {faqOpen[i] && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                        iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="textbase mt-6 text-center text-gray-600">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="#" title="" className="font-semibold text-black hover:underline">
                Contact our support
              </a>
            </p>
          </div>
        </section>

);
}

export default Faq


