import { useState } from "react"

const Display = ({left, right, total}) => 
<div>
  left: {left} {" "}
  right: {right} <br></br> 
  total:{total}<br></br> 
</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text}</button>

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([]) 
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(0)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const helloFunction = (who) => () => console.log("hello", who)

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
        total={total}/>
        <Button
        text='left'
        onClick={addLeft}
        />
        <Button
        text='right'
        onClick={addRight}
        />
        <History
        allClicks={allClicks}/>
        <div>
          <button onClick={helloFunction("react")}>hello!</button>
          <button onClick={helloFunction("you")}>hello!</button>  
        </div>
        <div>
          {value}
          <Button
          text="Reset Value"
          onClick={setToValue(0)} />
          <Button
          text="Set 100"
          onClick={setToValue(100)}/>
          <Button
          text="Value +1"
          onClick={setToValue(value + 1)}/>
          </div>
        

      </div>
  )
}

export default App
