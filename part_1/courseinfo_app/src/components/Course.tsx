import Header from './Header'
import Content from './Content'
import Total from './Total'

export interface CoursePart {
    name: string,
    exercises: number,
    id: number,
}

interface CourseProp {
    id:number,
    name:string,
    parts: CoursePart[],
}

export default function Course({course}:{course:CourseProp}) {
    return (
        <div>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </div>
    )
}