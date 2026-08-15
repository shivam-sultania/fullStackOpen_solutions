import { useEffect, useState } from 'react'
import Filter from './componenets/Filter'
import ContactForm from './componenets/ContactForm'
import Listing from './componenets/Listing'
import type { PersonInterface } from './interfaces'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState<PersonInterface[]>([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    console.log("effect")
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log("response fetched")
      setPersons(response.data)
    })
    .catch(err => {
      console.log('Fetch failed:', err)
    })
  },[])

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
    const updatedList = persons.concat({ name: name, id:persons.length+1, number:number})
    console.log(updatedList)

    setPersons(updatedList)

    axios
    .patch('http://localhost:3001/persons',updatedList)
    .then(response => {
      console.log('Person Added:', response)
    })
    .catch(error => {
      console.log('Patch failed:', error)
    })

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
      <Filter text={nameFilter} handleChange={handleFilterChange}/>
      <h2>add a new</h2>
      <ContactForm name={newName} number={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Listing persons={persons} filter={nameFilter}/>
    </div>
  )
}

export default App