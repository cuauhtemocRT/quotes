import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {

  // * Step 1
  // Se calcula el indice random con la función math.random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) 
  // *Step 2
  //Se obtiene el elemento de la función getIndexRandom en quotes
  const firstQuote = quotes[getIndexRandom(quotes)]
  // *Step 7 
  //Calculo de un color random
  const firstColor = color[getIndexRandom(color)]
  // *Step 3
  //Creamos el estado para guardar el quote como valor inicial
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  // *Step 8
  //Creamos el estado para guardar el color como valor inicial
  const [randomColor, setRandomColor] = useState(firstColor)
  // *Step 11
  //creamos una función para obtener en random el color y quote
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  console.log(firstColor)

  return (
      // *Step 9
      //Para hacer dinamico el estado ocupamos la etiqueta style un objeto y pasamos como valor el estado ramdomColor (las dos llaves siver porque las primeras son para agregar el código javascript y las segundas por que se va pasar un objeto)
      <div style={{background: randomColor}}className='App'>
        <QuoteBox 
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
        />
      </div>
  )
}

export default App
