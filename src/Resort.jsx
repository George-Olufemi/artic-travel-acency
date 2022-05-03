import React from 'react';
import Slide from 'react-reveal/Slide';
import artic1 from './artic1/pexel1.jpg';
import artic2 from './artic2/pexel2.jpg';
import artic3 from './artic3/pexel3.jpg';
import artic4 from './artic4/pexel4.jpg';

function Resort() {
  return (
    <React.Fragment>
        <Slide left>
            <div className="ml-12 text-2xl md:text-5xl font-semibold md:bold mb-10">
                <h1>The best resorts to chill<br /> and relax</h1>
            </div>
        </Slide>
        <div ClassName="md:flex">
            <div className="">
                <div className="md:relative md:left-96 md:ml-96 md:h-full md:w-1/3 px-5">
                    <Slide right>
                        <img className="rounded-2xl mb-5" src={artic1} alt="Resort Place" />
                    </Slide>
                    <Slide right>
                    <img className="rounded-2xl mb-5" src={artic2} alt="Resort Place" />
                    </Slide>
                </div>
            </div>
            {/* second part to be flexed */}
            <div className="">
                <div className="md:relative md:-top-96 md:ml-64 md:h-full md:w-1/3 px-5">
                    <Slide left>
                        <img className="rounded-2xl mb-5" src={artic3} alt="Resort Place" />
                    </Slide>
                    <Slide left>
                        <img className="rounded-2xl mb-5" src={artic4} alt="Resort Place" />
                    </Slide>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Resort;