import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button>


const App = () => {
  const [counter, setCounter] = useState(0)

  const addFunction = () => setCounter(counter+1)
  const resetFunction = () => setCounter(0)
  const decreaseFunction = () => setCounter(counter-1)

  return (
      <div>
        <Display counter={counter}/>
        <Button
        text='plus'
        onClick={addFunction}
        />
        <Button
        text='reset'
        onClick={resetFunction}
        />
        <Button
        text='minus'
        onClick={decreaseFunction}
        />
      </div>
  )
}

export default App
