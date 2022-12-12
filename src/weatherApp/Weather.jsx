import React from "react";
import { useEffect, useState } from "react";
import './Weather.css'

const Weather = () =>{

    const [city,setCity] = useState('')
    const [search,setSearch] = useState('')
    const [country,setCon] = useState()

    useEffect(()=>{
        const fetchTemp = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=27edc122d86f061647f0b39746f9191d`
            const res = await fetch(url)
            const actualData = await res.json()
            // console.log(actualData)
            setCon(actualData.sys.country)
            setCity(actualData.main)
        }
        fetchTemp()
    },[search])
  
    return(
        <>
           <div className="appContainer lr-pad">
                
                <div className="appBox">
                    <h1>Weather App</h1>
                    <input type='search' placeholder="Enter City" onChange={(e)=>{setSearch(e.target.value)}} />
                    {!city?(
                        <p className="notfound">City not found</p>
                    ):(
                        <div className="info">
                        <h1 className="cityName"><ion-icon name="map-outline"></ion-icon> {search}, <span>{country}</span></h1>
                        <h2 className="temp">{city.temp}°C</h2>
                        <h3 className="min-max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                    </div>
                    )}
                    {search===''?(setSearch('Khalilabad')):null}
                    
                </div>
           </div>
        </>
    )
}

export default Weather