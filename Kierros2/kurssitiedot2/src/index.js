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
    <h4>Total number of exercises {exer.reduce(sum)}</h4>
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
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(c =>
      <div key = {c.id}>
        <Course course={c} />
      </div>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
