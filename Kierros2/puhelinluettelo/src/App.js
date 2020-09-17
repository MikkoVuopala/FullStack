import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      phoneNumber: '040-1234567'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filtPersons, setfiltPersons] = useState([])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phoneNumber: newNumber
    }
    
    if (persons.some(p => p.name === newName)) {
      console.log(nameObject.name)
      window.alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(nameObject))
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
    setfiltPersons(persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  
  if (filter === '') {

  return (
    <div>
      <h2>Phonebook</h2>

      <div>filtering with: <input
                              value = {filter}
                              onChange = {handleFilterChange}/>
      </div>
      <form onSubmit = {addName}>
        <div>
          name: <input 
                  value = {newName}
                  onChange = {handleNameChange}/>
                  <br></br>
          number: <input 
                    value = {newNumber}
                    onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p =>
        <p key={p.name}>{p.name} {p.phoneNumber}</p>
      )}
    </div>
    
  )

} else {
    return (
    <div>
      <h2>Phonebook</h2>

      <div>filtering with: <input
        value={filter}
        onChange={handleFilterChange} />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
          <br></br>
          number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtPersons.map(p =>
        <p key={p.name}>{p.name} {p.phoneNumber}</p>
      )}
    </div>
    )
}
}

export default App
