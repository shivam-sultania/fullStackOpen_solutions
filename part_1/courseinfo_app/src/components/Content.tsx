import Part from "./Part";
import type { CoursePart } from "../types";


const Content = ({parts}:{parts: CoursePart[]}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        </div>
    )
}

export default Content;