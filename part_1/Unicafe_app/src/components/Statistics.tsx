import StatisticLine from './StatisticLine';

interface StatisticsProp {
    good: number;
    bad: number;
    neutral: number;
}

const Statistics = ({good,bad,neutral}: StatisticsProp) => {

    const total = good+bad+neutral
    const average = total===0? 0: good-bad/total
    const positive = total===0? 0: (good/total)*100

    if (good!==0 || bad!==0 || neutral !==0) {
        return(
        <>
        <h1>statistics</h1>
        <table>
            <StatisticLine name="good" value={good}></StatisticLine>
            <StatisticLine name="neutral" value={neutral}></StatisticLine>
            <StatisticLine name="bad" value={bad}></StatisticLine>
            <StatisticLine name="all" value={total}></StatisticLine>
            <StatisticLine name="average" value={average}></StatisticLine>
            <StatisticLine name="positive" value={positive} suffix='%'></StatisticLine>
        </table>
        </>
    )
    }

    return (
        <>
        <h1>statistics</h1>
        <p>No feedback given</p>
        </>
    )
    
}

export default Statistics