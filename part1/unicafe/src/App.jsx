import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const DisplayStat = ({good, neutral, bad}) => {
  return(
    <div>
      <h3>Statistics:</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good+1)
  const setToNeutral = () => setNeutral(neutral+1)
  const setToBad = () => setBad(bad+1)

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
      bad={bad}/>
    </div>
  )
}

export default App
