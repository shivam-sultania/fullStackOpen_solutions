interface CounterProp {
    name:string;
    count:number;
}

const Counter = ({name,count}:CounterProp) => {
    return (
        <>
        <p>{name} {count}</p>
        </>
    )
}

export default Counter