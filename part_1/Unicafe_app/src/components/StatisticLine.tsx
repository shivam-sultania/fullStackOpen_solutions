interface CounterProp {
    name:string;
    value:number;
    suffix?:string;
}

const StatisticLine = ({name,value,suffix}:CounterProp) => {
    return (
        <>
        <p>{name} {value} {suffix}</p>
        </>
    )
}

export default StatisticLine