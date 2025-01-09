import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const DisplayStat = ({good, neutral, bad, total, average, positive}) => {
  return(
    <div>
      <h3>Statistics:</h3>
      <p>Good: {good} Neutral: {neutral}  Bad: {bad}</p>
      <p>Total: {total}</p> 
      <p>Average: {average}</p> 
      <p>Positive: {positive}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setToGood = () => {
    const newGoodValue = good + 1
    setGood(newGoodValue)
    const newTotal = newGoodValue + neutral + bad 
    setTotal(newTotal)
    setAverage((newGoodValue*1 + neutral*0 + bad*(-1)) / newTotal)
    setPositive(newGoodValue * 100 / newTotal)
  }

  const setToNeutral = () => {
    const newNeutralValue = neutral + 1
    setNeutral(newNeutralValue)
    const newTotal = good + newNeutralValue + bad 
    setTotal(newTotal)
    setAverage((good*1 + newNeutralValue*0 + bad*(-1)) / newTotal)
    setPositive(good * 100 / newTotal)
  }

  const setToBad = () => {
    const newBadValue = bad + 1
    setBad(newBadValue)
    const newTotal = good + neutral + newBadValue 
    setTotal(newTotal)
    setAverage((good*1 + neutral*0 + newBadValue*(-1)) / newTotal)
    setPositive(good * 100 / newTotal)
  }

  return (
    <div>
      <h1>Give Feedback:</h1>
      <Button
      text="Good"
      onClick = {setToGood}/>
      <Button
      text="Neutral"
      onClick = {setToNeutral}/>
      <Button
      text="Bad"
      onClick = {setToBad}/>
      <DisplayStat
      good = {good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive}/>
    </div>
  )
}

export default App
