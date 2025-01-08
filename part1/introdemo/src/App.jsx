import { useState } from "react"

const Display = ({left, right, allClicks}) => <div>left: {left} right: {right} <p>{allClicks.join(" ")}</p></div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button>


const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([]) 
  

  const addLeft = () => {
    setClicks({...clicks, left: clicks.left+1})
    setAll(allClicks.concat('L'))
    }
  
  const addRight = () => {
    setClicks({...clicks, right: clicks.right+1})
    setAll(allClicks.concat('R'))
  } 
    

  return (
      <div>
        <Display 
        left = {clicks.left}
        right={clicks.right}
        allClicks={allClicks}/>
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
