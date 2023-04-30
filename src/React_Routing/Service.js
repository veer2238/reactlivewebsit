import React from 'react'
import "./SERVICE/service.css"
import Slider from './SERVICE/Slider'
import CardItems from './SERVICE/CardItems'
import Ourservice from './SERVICE/Ourservice'




var Data = require('./Myapi.json')

const Service = () => {

  return (
    <div>
      <div className="service-1" >
        <h1>Service</h1>
      </div>
      <Ourservice />
      <Slider />

      <div className='servicebox py-3 px-3'>
        <h3>Enjoy our Service</h3>
        <div className='gridbox'>
          {Data.map((element) => {

            return <div className='a' key={element.id}>
              <CardItems
                heading={element.title}
                Image={element.avatar_url}
                title={element.following_url}
                Distance={element.Distance}
                button={element.login} />
            </div>

          })}


        </div>

      </div>

    </div>
  )
}

export default Service