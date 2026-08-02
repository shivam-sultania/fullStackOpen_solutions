import { useState } from 'react'

const App = () => {
   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[nameFilter, setNameFilter] = useState('')

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
    setPersons(persons.concat({ name: name, id:persons.length+1, number:newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={nameFilter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
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
          {persons
          .filter(person => person.name.toLowerCase().includes(nameFilter.trim().toLowerCase()))
          .map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App