import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
//*5 Se hace destructurin de randomQuote
const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {
//*6 Se crea el elemento html y con código java {} se accede al objeto randomQuote y se accede al indice en este caso quote y autor del array
// *Step 10
// Desctructirin del randomColor y creamos un objeto para el color de fondo de la card y otro para el del botton
const colorObj = {
    color: randomColor
}
const backgroundObj = {
    background: randomColor
}

  return (
    <article style={colorObj} className='card'>
        <div className='card__content'>
        <FontAwesomeIcon className='card__quote-left' icon={faQuoteLeft} />
        <p className='card__quote'>
        {randomQuote.quote}</p>
        </div>
        <h1 className='card__author'>{randomQuote.author}</h1>
        <button 
        className='card__btn'
        style={backgroundObj}
        onClick={getRandomAll} 
        >&#62;</button>
    </article>
  )
}

export default QuoteBox