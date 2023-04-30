import React from 'react'
import BookForm from './HOME/BookForm'
import HomeSlider from './HOME/HomeSlider'
import OurTaxi from './HOME/OurTaxi'
import Client from './ABOUT/Client'
import Aboutsub3 from './ABOUT/Aboutsub3'
import Lostthings from './HOME/Lostthings'


const Home = () => {
  return (
    <div>
    <HomeSlider/>
    <BookForm/>
    <OurTaxi/>
    <Aboutsub3/>
    <Lostthings/>
    <Client/>
    </div>
  )
}

export default Home