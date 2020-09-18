import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = ({value, onChange}) => {
  return (
    <div>
      Find countries: <input value={value} onChange={onChange} />
    </div>
  )
}

const Show = (props) => {
  if (props.countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (props.countries.length > 1 && props.countries.length <= 10){
    return (
      <div>
        {
          props.countries.map(x =>
            <p key = {x.name}>{x.name}</p>
          )
        }
      </div>
    )
  } else if (props.countries.length === 1) {
    return (
      <div>
        <h3>{props.countries[0].name}</h3>
        <p>Capital: {props.countries[0].capital}</p>
        <p>Population: {props.countries[0].population}</p>
        <h4>Languages:</h4>
        {
          props.countries[0].languages.map(x =>
            <p key = {x.name}>{x.name}</p>
          )
        }
        <img src = {props.countries[0].flag} alt = "Flag" width = "200" height = "auto"></img>
      </div>
    )
  } else {
    return (
      <div>
        <p>No country matches your search.</p>
      </div>
    )
  }
}

const App = () => {
    
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [fCountries, setFC] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
        setFC(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setFC(countries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())))
    console.log(fCountries.length)
  } 
  
  return (
    <div>
      <Filter value = {filter} onChange = {handleSearch}/>
      <Show countries = {fCountries}/>
    </div>
  )
}

export default App;
