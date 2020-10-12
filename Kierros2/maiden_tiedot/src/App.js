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
  console.log(props.w)
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
            <p key = {x.name}>{x.name} <button onClick={props.bClick} value={x.name}>show</button></p>
          )
        }
      </div>
    )
  } else if (props.countries.length === 1) {
    //setCapital(props.countries[0].name)
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
        <h4>Weather in {props.countries[0].capital}</h4>
        <p>temperature: {props.w['main']['temp']} celcius</p>
        <img src = {props.w['weather']['icon']} alt = "WeatherIcon" width = "70" height = "auto"></img>
        <p>wind: {props.w['wind']['speed']} m/s, direction {props.w['wind']['deg']}</p>
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
  const [weather, setWeather] = useState({})
  const [capital, setCapital] = useState('')
  
  //const api_key = process.env.REACT_APP_API_KEY

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

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=' + capital + '&units=metric&appid=' + process.env.REACT_APP_API_KEY)
      .then(response => {
        console.log(response.data)
        setWeather(response.data['main'])
      })
  }, [capital])

  function handleSearch(event) {
    console.log(event.target.value);
    setFilter(event.target.value);
    setFC(countries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())));
    if(countries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())).length === 1) {
      setCapital(countries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()))[0])
    }
  } 

  const handleClick = (event) => {
    setFC(countries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())))
    console.log(fCountries.length)
  }
  
  return (
    <div>
      <Filter value = {filter} onChange = {handleSearch}/>
      <Show countries = {fCountries} bClick = {handleClick} w = {weather}/>
    </div>
  )
}

export default App;
