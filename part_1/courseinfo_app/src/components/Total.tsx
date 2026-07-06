interface ContentProps {
    parts: Part[];
}

interface Part {
    name: string;
    exercises:number;
}

const Total = (props:ContentProps) => {

    const sum:number = props.parts.reduce((sm,part) => sm+part.exercises,0)

    return (
        <p>Total no. of exercises  -  {sum}</p>
    )   
}

export default Total;