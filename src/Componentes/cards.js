import React from 'react'
import Card from './card'
import './cards.css'
import Img1 from '../recursos/image1.jpg'
import Img2 from '../recursos/image2.jpg'
import Img3 from '../recursos/image3.jpg'

const tarjetas = [
    {
        id: 1,
        title: 'Fast Web',
        image: Img1,
        url: 'https://www.estudiojuridicocordoba.com/'
    },
    {
        id: 2,
        title: 'Estudio Tal',
        image: Img2,
        url: 'https://www.estudiojuridicocordoba.com/'
    },
    {
        id: 2,
        title: 'Redes Sociales',
        image: Img3,
        url: 'https://www.instagram.com/'
    }
]

function cards() {
  return (

    <div className=' container d-flex justify-content-center h-100 align-items-center '>
        <div className='row'>
            {
                tarjetas.map(
                    card => (
                        <div className="col-md-4" key={card.title}>
                            <Card title={card.title} img={card.image} url={card.url}/>
                         </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default cards
