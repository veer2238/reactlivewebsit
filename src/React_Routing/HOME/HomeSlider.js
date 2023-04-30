import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Hslider.css'

const HomeSlider = () => {

const Responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
 <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        showDots={true}
        className='hs'  responsive={Responsive}>
        <div><div className='p1'> <h1>Welcome to Smart Cab Point</h1></div></div>
        <div><div className='p2'></div> </div>
        <div><div className='p3'></div> </div>
        <div><div className='p4'></div> </div>
        <div><div className='p5'></div></div>
        <div><div className='p6'></div></div>

</Carousel>)}
export default HomeSlider;