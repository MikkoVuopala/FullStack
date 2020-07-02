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
        <Part part={props.part1} e={props.e1}/>
        <Part part={props.part2} e={props.e2}/>
        <Part part={props.part3} e={props.e3}/>
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
        <p>Number of exercises {exercises.count}</p>
    </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content part1={part1.name} e1={part1.exercises} part2={part2.name} e2={part2.exercises} part3={part3.name} e3={part3.exercises}/>
            <Total count={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
