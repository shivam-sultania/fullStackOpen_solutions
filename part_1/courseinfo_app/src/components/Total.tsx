import type {CoursePart} from './Course'

const Total = ({parts}:{parts:CoursePart[]}) => {
    return (
        <p><b>Total of {parts.reduce((s,part) => s+part.exercises,0)} exercises</b></p>
    )   
}

export default Total;