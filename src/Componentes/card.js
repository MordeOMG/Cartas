import React from 'react'
import  './cards.css'

function card({title, img, url, text}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadelnUp'>
      <div className='overflow'>
      <img src={img} alt='mapa'className='card-img-top'/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting.'
          }
        </p>
        <a href={url} target='_blank' rel="noreferrer" className='btn btn-outline-secondary border-rounded-0' >Ir al sitio web</a>      
      </div>
    </div>
  )
}

export default card;