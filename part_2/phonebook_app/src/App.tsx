import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',id:0, number:'0000000000'}
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    if (persons.some(person => person.name===name)) {
      alert(`${newName} is already added to the phonebook`)
      return
    } else if (persons.some(person => person.number===number)) {
      alert(`${newNumber} is already added to the phonebook`)
      return
    }else if (name==='' || newNumber===''){
      alert("You missed a field or two")
      return
    }
    setPersons(persons.concat({ name: name,id:persons.length, number:newNumber}))
    setNewName('')
  }

  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(handleSubmit)}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br />
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App