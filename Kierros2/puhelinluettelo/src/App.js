import React, { useState, useEffect} from 'react'
import axios from 'axios'

const SubmitForms = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>
        name: <input
          value={props.newName}
          onChange={props.handleNameChange} />
        <br></br>
          number: <input
          value={props.newNumber}
          onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Filters = (props) => {
  return (
    <div>filtering with: <input
                              value={props.filter}
                              onChange={props.hfc} />
    </div>
  )
}
const ShowPersons = (props) => {
  return(
    <div>
      {
        props.persons.map(p =>
          <p key={p.name}>{p.name} {p.number}</p>
        )
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [r, setR] = useState(persons)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
        setR(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some(p => p.name === newName)) {
      console.log(nameObject.name)
      window.alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(nameObject))
      setR(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setR(persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filters hfc = {handleFilterChange} filter = {filter}/>
      <h3>Add a new</h3>
      <SubmitForms
          addName = {addName}
          newName = {newName}
          handleNameChange = {handleNameChange}
          newNumber = {newNumber}
          handleNumberChange = {handleNumberChange}
          />
      <h2>Numbers</h2>
      <ShowPersons
      persons = {r}
      />
    </div>
    
  )


}

export default App
