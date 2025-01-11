
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({ parts }) => {
    const renderParts = parts.map(part => <Part key={part.id} part={part} />)
    return (
        <div>
            {renderParts}
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <p><b>Total number of exercises: {total}</b></p>
    )
}

export default Course;