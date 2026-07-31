import Header from './Header'
import Content from './Content'
import Total from './Total'
import type { CourseDesc } from '../types'

export default function Course({course}:{course:CourseDesc}) {
    return (
        <div>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </div>
    )
}