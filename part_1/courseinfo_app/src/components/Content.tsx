import Part from "./Part";

interface ContentProps {
    parts1: string; exercises1: number
    parts2: string; exercises2: number
    parts3: string; exercises3: number
}

const Content = (props:ContentProps) => {
    return (
        <div>
            <Part part={props.parts1} exercises={props.exercises1} />
            <Part part={props.parts2} exercises={props.exercises2} />
            <Part part={props.parts3} exercises={props.exercises3} />
        </div>
    )
}

export default Content;