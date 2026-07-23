import { useState } from "react";
import Counter from './components/Counter';

const App = () => {

  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  const total = good+bad+neutral
  const average = total===0? 0: good-bad/total
  const positive = total===0? 0: (good/total)*100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1>statistics</h1>
      <Counter name="good" value={good}></Counter>
      <Counter name="neutral" value={neutral}></Counter>
      <Counter name="bad" value={bad}></Counter>
      <Counter name="all" value={total}></Counter>
      <Counter name="average" value={average}></Counter>
      <Counter name="positive" value={positive} suffix='%'></Counter>
    </div>
  )
}

export default App

