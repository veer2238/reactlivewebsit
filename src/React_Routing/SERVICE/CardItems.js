import React from 'react'
import { Button, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import "./service.css"


const CardItems = (props) => {
  return (
 
    <div >
            <Card  raised={true} className='card-size'>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.Image}
                    alt="GFG Logo"
                />
                 
            <h6 className='heading'> {props.heading}</h6>
                <h6>({props.Distance}km)</h6>
                <CardActions className='bbtn'>
                
                  <button type="button" className='addtobtn'>Add to Cart</button>
                   
                </CardActions>
            </Card>
        </div>


  )
}

export default CardItems