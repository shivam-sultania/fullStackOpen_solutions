import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',id:0}
  ]) 
  
  const [newName, setNewName] = useState('')

  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = newName.trim()
    if (persons.some(person => person.name===name)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(persons.concat({ name: name,id:persons.length}))
    setNewName('')
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(handleSubmit)}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App