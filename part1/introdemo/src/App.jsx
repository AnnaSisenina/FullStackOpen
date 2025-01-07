import { useState } from "react"

const Display = ({left, right}) => <div>left: {left} right: {right}</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button>


const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  

  const addLeft = () => setClicks({...clicks, left: clicks.left + 1})
  const addRight = () => setClicks({...clicks, right: clicks.right + 1})
  

  return (
      <div>
        <Display 
        left = {clicks.left}
        right={clicks.right}/>
        <Button
        text='left'
        onClick={addLeft}
        />
        <Button
        text='right'
        onClick={addRight}
        />
      </div>
  )
}

export default App
