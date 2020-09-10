import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ parts }) => {
    const exer = parts.map(part => part.exercises)
    const sum = (x, y) => x + y
    return (
        <h4>Total number of exercises {exer.reduce(sum)}</h4>
    )
}

const Part = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <p key={part.id}>
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
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course