import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
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
      <p>Average: {}</p>
      <p>Positive: {}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
