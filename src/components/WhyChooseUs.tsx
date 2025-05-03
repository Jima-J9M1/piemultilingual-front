'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhyChooseUs({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = data?.features;
  // const imageUrl = "https://localhost:1337" + features?.[activeIndex]?.images?.url + "?width=379&height=379";
  const imageUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL + features?.[activeIndex]?.images?.url +"?width=379&height=379"
  console.log(">>>>>>>>>>>>>>> features >>>>>>>>>>>>>>>>>",imageUrl);

  return (
    <section className="py-16 md:py-24 text-center bg-white text-black min-h-[70vh] px-4 sm:px-6 lg:px-8">
      <h3 className="text-lg mb-2">{data?.subtitle}</h3>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{data?.title}</h2>
      <p className="mb-8 md:mb-12  text-gray-700">{data?.description}</p>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-8 max-w-7xl mx-auto mt-10 md:mt-16">
        {/* Left: Image and overlay */}
        <div className="relative w-full max-w-sm md:max-w-none md:w-[45%] lg:w-[480px] aspect-square mb-10 md:mb-0 flex items-center justify-center">
          {/* Text Circle (top, overlapping) */}
          <div
            className="absolute left-0 top-0 rounded-full flex flex-col justify-center items-center z-10 bg-[#BA8194] opacity-80
            sm:w-[85%] sm:h-[85%] max-sm:w-[65%] max-sm:h-[65%]
            "
          >
            <h4 className="text-2xl font-bold mb-2 text-white drop-shadow">{features?.[activeIndex]?.title}</h4>
            <p className="text-white drop-shadow text-center px-4">{features?.[activeIndex]?.description}</p>
          </div>
          {/* Image Circle (bottom) */}
          <div className="absolute left-48 top-0  rounded-full overflow-hidden z-0
          sm:w-[85%] sm:h-[85%] max-sm:w-[65%] max-sm:h-[65%] 
          ">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={features?.[activeIndex]?.title}
                className="object-cover w-full h-full"
                width={320}
                height={320}
              />

            )}
          </div>
          
        </div>
        {/* Right: Feature list */}
        <div className="flex flex-col gap-4 w-full max-w-md flex-1">
          {features?.map((feature: any, idx: number) => (
            <button
              key={feature?.title}
              className={`flex items-center justify-between px-6 py-4 rounded-full font-semibold text-lg transition cursor-pointer ${
                idx === activeIndex
                  ? 'bg-[#A04F68] text-black'
                  : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <span>&lt;</span>
              <span>{feature?.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}