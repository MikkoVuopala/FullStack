import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const exer = parts.map(part => part.exercises)
  const sum = (x,y) => x + y
  return (
    <p>Total number of exercises {exer.reduce(sum)}</p>
  )
}

const Part = ({parts}) => {
  return (
    <div>
    {parts.map(part =>
      <p key = {part.id}>
      {part.name} {part.exercises}
    </p>
    )}
    </div>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part parts={course.parts} />
      
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Testing',
        exercises: 15,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
