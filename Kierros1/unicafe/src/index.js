import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let counter = 0
let posCounter = 0

const StatisticLine = (props) => {
  if (props.text === 'Positive:') {
    return (
      <div>
        <p>{props.text} {props.value} %</p>
      </div>
    )
  }

  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }  

  return (
    <div>
      <StatisticLine text = 'Good:' value = {props.good}/>
      <StatisticLine text='Neutral:' value={props.neutral}/>
      <StatisticLine text='Bad:' value={props.bad}/>
      <StatisticLine text='All:' value={props.all}/>
      <StatisticLine text='Average:' value={props.average}/>
      <StatisticLine text='Positive:' value={props.pos} />
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick = {onClick}>{text}</button>
)

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
      <Button onClick = {goodClick} text = 'Good :)'/>
      <Button onClick = {neutralClick} text = 'Neutral' />
      <Button onClick = {badClick} text = 'Bad'/>
      <br></br>
      <h2>Statistics</h2>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average} 
        pos = {pos}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
