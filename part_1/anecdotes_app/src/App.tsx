import { useState } from 'react'
import Anecdote from './components/Anecdote'

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

const ln = anecdotes.length

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(ln).fill(0))
  const [maxInd, setMaxInd] = useState(0)

  const handleNextClick = () => {
    console.log("next clicked, curr index = ",selected)
    
    setSelected(prev => {
        if (ln===1) return prev
        let randomInd:number = Math.floor(Math.random()*ln)

        while (randomInd === prev) {
        randomInd = Math.floor(Math.random() * ln)
        }
        
        console.log("new index = ",randomInd)
        return randomInd
    })
  }
  
  const handleVoteClick = () => {
    console.log("Vote clicked, old votes = ",votes)
    setVotes(prev => {
        const next = [...prev]
        next[selected] += 1
        
        // Updates the top anecdote if the current vote overtakes
        if (maxInd!==selected && next[maxInd]<next[selected]) {
            console.log("top anecdote changed")
            setMaxInd(selected)
        }

        console.log("new votes = ",next)
        return next
    })
  }

  // Edge case handling
  if (ln===0) {
    return (
        <p>There are no anecdotes</p>
    )
  }

  return (
    <div>
      <Anecdote message='Anecdote of the day' anecdote={anecdotes[selected]} vote = {votes[selected]} />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <Anecdote message='Anecdote with the most votes' anecdote={anecdotes[maxInd]} vote = {votes[maxInd]} />
    </div>
  )
}

export default App