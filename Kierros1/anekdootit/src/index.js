import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (<button onClick = {onClick}>{text}</button>)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [maxvotes, findMax] = useState(0)
  const [points, addPoints] = useState(Array(6).fill(0))

  const buttonClick = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const voteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    addPoints(copy)
    findMax(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {points[selected]} votes</p>
      <br></br>
      <Button onClick = {buttonClick} text = 'Random Anecdote'/>
      <Button onClick = {voteClick} text = 'Vote'/>
      <h2>Anecdote with the most points</h2>
      {props.anecdotes[maxvotes]}
      <p>{points[maxvotes]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
