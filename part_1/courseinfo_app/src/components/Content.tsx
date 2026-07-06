import Part from "./Part";

interface ContentProps {
    parts1: PartProps; 
    parts2: PartProps; 
    parts3: PartProps;
}
interface PartProps {
    name: string;
    exercises: number;
}

const Content = (props:ContentProps) => {
    return (
        <div>
            <Part part={props.parts1.name} exercises={props.parts1.exercises} />
            <Part part={props.parts2.name} exercises={props.parts2.exercises} />
            <Part part={props.parts3.name} exercises={props.parts3.exercises} />
        </div>
    )
}

export default Content;