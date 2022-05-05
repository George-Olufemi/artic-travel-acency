import React from 'react';
import image1 from './image1/Frame 44.png';
import image2 from './image2/Frame 43.png';
import picture from './picture/Frame 42.png';
import Slide from 'react-reveal/Slide';

function HeroImage() {
  return (
    <React.Fragment>
        <div className="md:flex mb-20 md:mb-20">
            <Slide right>
                <div className="h-full md:w-1/3">
                    <img src={image1} alt="" />
                </div>
            </Slide>
            <Slide right>
                <div className="h-full md:w-1/3">
                    <img src={image2} alt="" />
                </div>
            </Slide>
            <Slide right>
                <div className="h-full md:w-1/3">
                    <img src={picture} alt="" />
                </div>
            </Slide>
        </div>
    </React.Fragment>
  )
}

export default HeroImage;