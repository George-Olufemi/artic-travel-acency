import React from 'react';
import Zoom from 'react-reveal/Zoom';
import picture2 from './picture2/img.png';


function Body() {
  return (
    <React.Fragment>
        <div>
            <Zoom big>
                <img src={picture2} alt="Company Logo's" />
            </Zoom>
        </div>
        <Zoom big>
            <div className="mt-10 mb-10 md:mb-14 text-center text-2xl md:text-5xl font-semibold md:bold">
                <h1>Creating the best <span className="text-blue-600">ice-cold!</span> experiences<br />you would never forget.</h1>
            </div>
        </Zoom>
        <Zoom big>
            <div className="text-center text-gray-500 text-lg md:text-3xl mb-20 md:mb-28">
                <h1>Would you explore nature paradise in the world, find the<br /> best destination in the world with us.</h1>
            </div>
        </Zoom>
        <Zoom big>
            <div className=" flex justify-center items-center text-center text-2xl md:text-5xl font-semibold md:bold mb-20 md:mb-28">
                <h1 className="mr-4">View Regions available</h1>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
                </div>
            </div>
        </Zoom>
    </React.Fragment>
  )
}

export default Body;