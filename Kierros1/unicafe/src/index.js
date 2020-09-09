import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let counter = 0
let posCounter = 0

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  let average = counter / all
  let pos = (posCounter / all) * 100

  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    counter += 1
    posCounter += 1
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    counter -= 1
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick = {goodClick}>Good :)</button>
      <button onClick = {neutralClick}>Neutral</button>
      <button onClick = {badClick}>Bad :(</button>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {pos + ' %'}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
