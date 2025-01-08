import { useState } from "react"

const Display = ({left, right, allClicks, total}) => 
<div>
  left: {left} {" "}
  right: {right} <br></br> 
  total:{total}<br></br> 
  <p>{allClicks.join(" ")}</p> 
</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button>


const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([]) 
  const [total, setTotal] = useState(0)
  

  const addLeft = () => {
    const updatedLeft = clicks.left+1
    setClicks({...clicks, left: updatedLeft})
    setAll(allClicks.concat('L'))
    
    setTotal(updatedLeft + clicks.right)
    }
  
  const addRight = () => {
    const updatedRight = clicks.right+1
    setClicks({...clicks, right: updatedRight})
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight)
  } 
  
  
  return (
      <div>
        <Display 
        left = {clicks.left}
        right={clicks.right}
        allClicks={allClicks}
        total={total}/>
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
