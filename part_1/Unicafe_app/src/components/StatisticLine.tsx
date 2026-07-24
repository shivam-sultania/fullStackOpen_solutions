interface CounterProp {
    name:string;
    value:number;
    suffix?:string;
}

const StatisticLine = ({name,value,suffix}:CounterProp) => {
    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{value} {suffix}</td>
        </tr>
        </>
    )
}

export default StatisticLine