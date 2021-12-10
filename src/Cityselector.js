//import React from "react";
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
const api = {
  key: "502ac60cd721bbbadcb0b30e753d7eb3",
  base: "https://api.openweathermap.org/data/2.5/"
}


 function Cityselector (){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
      
        if (evt.key === "Enter") {
          evt.preventDefault()
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
              
            });
            
        }
        
      }
    

    
        return (
            <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
            <div>
             <Navbar bg="secondary alert" variant="dark"   >
            <Navbar.Brand href="#home">SmartWeather </Navbar.Brand>
            <Form className="search-box">
          <FormControl
          type="search"
          placeholder="Search another city..."
          onChange={e=>setQuery(e.target.value)}
          value={query}
          className="me-2"
          aria-label="Search"
          onKeyPress={search}
            />
        
             {/* <Button variant="outline-success">Search</Button>*/}
           </Form>
           </Navbar>

           </div>

           {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
           </div>
           </div>
        ) : ('')}
      </main>
      <Alert variant="success">
        <Alert.Heading>5-DAY FORECAST FOR SHEFFIELD</Alert.Heading>
        </Alert>
    </div>
    );
    
        }
      
      export default Cityselector;        

