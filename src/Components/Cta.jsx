import React from 'react'
import { ChevronRight } from 'lucide-react'

function Cta() {
    return (
      <section>
        <div className="px-5 mt-16 lg:flex lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="my-10 lg:my-0 lg:px-10">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Get full access to Education
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                We're dedicated to delivering top-quality education to people
                from all walks of life, fostering success and growth. Our goal
                is to empower individuals with diverse backgrounds through
                exceptional and impactful online education.
              </p>

              <form action="#" method="POST" className="mt-8 max-w-xl">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <a href="/"
                      type="button"
                      className="rounded-md flex gap-2 bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Know More
                      <ChevronRight className="h-6 w-5" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="ManWith Laptop"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    );
}

export default Cta

