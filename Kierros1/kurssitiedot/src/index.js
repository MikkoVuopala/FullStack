import React from 'react'
import ReactDOM from 'react-dom'

const Header = (head) => {
    return (
    <div>
        <h1>{head.course}</h1>
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
        <Part part={props.parts[0].name} e={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} e={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} e={props.parts[2].exercises}/>
    </div>
    )
}
const Part = (p) => {
    return (
    <div>
        <p>{p.part} {p.e}</p>
    </div>
    )
}

const Total = (exercises) => {
    return (
    <div>    
        <p>Number of exercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}</p>
    </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
