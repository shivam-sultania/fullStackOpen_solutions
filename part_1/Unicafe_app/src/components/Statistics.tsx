import Counter from './Counter';

interface StatisticsProp {
    good: number;
    bad: number;
    neutral: number;
}

const Statistics = ({good,bad,neutral}: StatisticsProp) => {

    const total = good+bad+neutral
    const average = total===0? 0: good-bad/total
    const positive = total===0? 0: (good/total)*100

    return(
        <>
        <h1>statistics</h1>
        <Counter name="good" value={good}></Counter>
        <Counter name="neutral" value={neutral}></Counter>
        <Counter name="bad" value={bad}></Counter>
        <Counter name="all" value={total}></Counter>
        <Counter name="average" value={average}></Counter>
        <Counter name="positive" value={positive} suffix='%'></Counter>
        </>
    )
}

export default Statistics