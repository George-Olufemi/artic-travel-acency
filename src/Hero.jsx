import React from 'react'
import Slide from 'react-reveal/Slide';
import Wobble from 'react-reveal/Wobble';

function Hero() {
  return (
    <div>
          <div className='bg-[url("https://s3-alpha-sig.figma.com/img/d4ce/0724/0c09800d4737d1ecfda624aa769586c5?Expires=1652054400&Signature=RvvmFb8Q8Jw81iZ28RE80Si~q~blqqOdbZicnxyV0MisGYSM4Pl9cowRCGmwSZugO91UB3xSmoFVIhgpKmbT~LmEElkuvgsnEgrkCflpvDDalsEoSJEjHinRuLd7yFw54FAMaZPkfYCztz5nL9InUp84FQaQzXQUgkxV1u~Kh3BmKHLyVHLzQE~0-fNjDenWM5jn6jRSEeI~EaIwW6Ah8nizn0kLPMArsfO5Y7ifRwsVLfn1qkYN5hMISv3G1wVTu4aJmitDd3-F~sqUQsCovKg2aS372ZxSM2LxhPLJ0Pe9m9mQof8iwfROnRLJ6lNE1uwh70olyPT0xtX0dKJN-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")] h-full w-full bg-cover bg-center pt-44 pb-44 pl-24 pr-20'>
              <Slide top>
                <h1 className="text-6xl font-bold text-white mb-10">Plan The Perfect Winter Trip</h1>
              </Slide>
              <Slide top>
                <h2 className="text-white text-3xl mb-12">Easily plan your ideal ski trip from home with the<br /> help of professionals</h2>
              </Slide>
              <Wobble>
                <button className="bg-blue-600 px-6 mt-3 text-white text-2xl py-3 rounded-2xl hover:bg-blue-500 transition-all cursor-pointer">Book here</button>
              </Wobble>
          </div>
          <div className="flex absolute top-0 pl-24 mt-4">
              <div className="flex">
                  <div className="mr-16">
                    <Slide top>
                      <h1 className="text-white font-semibold text-xl mt-1 md:mt-0">Artic Travel</h1>
                    </Slide>
                  </div>
                <div className="">
                  <Slide top>
                    <ul className="flex hidden md:block md:flex text-white text-lg">
                      <li className="mr-7">Home</li>
                      <li className="mr-7">About</li>
                      <li className="mr-7">Services</li>
                    </ul>
                  </Slide>
                </div>
              </div>
              <div ClassName="flex-auto">
                  <Wobble>
                    <button className="bg-white px-8 text-blue-600 text-lg py-2 font-semibold rounded-2xl transition-all cursor-pointer">Sign in</button>
                  </Wobble>
              </div>
          </div>
          <div className="mb-20 md:mb-20">
          <Slide top>
            <div className="md:grid md:gap-4 md:grid-cols-5 md:p-4 md:px-32 bg-white md:rounded-2xl md:w-62 md:ml-20 md:mr-20 md:relative md:-top-12 md:border-r-blue-500 md:border-b-blue-500 md:border-l-blue-500 md:border md:shadow-lg">
              <Slide left>
              <div className="flex mt-10">
                  <div className="ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="font-semibold text-gray-500">LOCATION</h1>
                  </div>
              </div>
                </Slide>
              
              <Slide left>
              <div className="flex mt-10">
                <div className="ml-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-500">PERSONS</h1>
                </div>
              </div>
                </Slide>
              <div>
                <Slide left>
                <div className="flex mt-10">
                  <div className="ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                    <div>
                      <h1 className="font-semibold text-gray-500">CHECK IN</h1>
                    </div>
                </div>
                    </Slide>
              </div>
              <div>
              <Slide left>
              <div className="flex mt-10">
                  <div className="ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                    <div>
                      <h1 className="font-semibold text-gray-500">CHECK OUT</h1>
                    </div>
                </div>
                    </Slide>
              </div>
              <div>
              <Slide left>
                <button className="bg-blue-600 px-6 mt-3 text-white text-2xl py-3 rounded-2xl hover:bg-blue-500 transition-all cursor-pointer ml-5">Book here    <ion-icon name="airplane"></ion-icon></button>
                </Slide>
              </div>
            </div>
            </Slide>
          </div>
    </div>
  )
}

export default Hero;