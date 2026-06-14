interface TotalProps {
    exercises1: number
    exercises2: number
    exercises3: number
}

const Total = (props:TotalProps) => {
    return (
        <p>Total no. of exercises  -  {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )   
}

export default Total;