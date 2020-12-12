import React, { useState, useEffect} from 'react'
import personService from './services/persons'
//testitesti
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
          <p key={p.name}>{p.name} {p.number} 
          <button onClick={props.delName} value={p.id}>delete</button> 
          </p>
        )
      }
    </div>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [r, setR] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
        setR(initialPersons)
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
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setR(persons.concat(returnedPerson))
          setErrorMessage(
            `'${newName}' was added to the phonebook!`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const delName = (event) => {
    event.preventDefault()
    const targetID = event.target.value
    const targetName = persons.find(p => p.id === parseInt(targetID)).name
    if (window.confirm(`Delete ${targetName}?`)) {
    personService
      .del(targetID)
      .then(returnedStuff => {
        setPersons(persons.filter(x => x !== returnedStuff))
        setR(persons.filter(x => x !== returnedStuff))
        setErrorMessage(
          `'${targetName}' was removed from the phonebook!`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
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
      <Notification message={errorMessage} />
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
      delName = {delName}
      />
    </div>
    
  )


}

export default App
