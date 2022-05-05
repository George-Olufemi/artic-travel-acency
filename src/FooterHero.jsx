import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Fade from 'react-reveal/Fade';

function FooterHero() {
  return (
    <React.Fragment>
    <Fade big>
        <div className="mt-16 md:relative md:-top-64">
            <div className='bg-[url("https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] h-full w-full bg-cover bg-center pt-44 pb-44 pl-24 pr-20'>
            <Fade big>
            <h1 className="text-4xl md:text-8xl font-bold text-white mb-10">View passes we've made<br /> available for you</h1>
            </Fade>
            <Wobble>
                <button className="bg-blue-600 px-6 mt-3 text-white text-2xl py-3 rounded-2xl hover:bg-blue-500 transition-all cursor-pointer">View passes</button>
              </Wobble>
            </div>
        </div>
    </Fade>
    </React.Fragment>
  )
}

export default FooterHero;