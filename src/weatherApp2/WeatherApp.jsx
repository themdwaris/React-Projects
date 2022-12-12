import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './WeatherApp.css';

const WeatherApp = () =>{

    const [search, setSearch] = useState('Khalilabad')
    const [weatherInfo,setWeatherInfo] = useState({})


    const getWeatherInfo = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=27edc122d86f061647f0b39746f9191d`;
            const res = await fetch(url)
            const realData = await res.json()
            // console.log(realData)

            const weather = {
                name:realData.name,
                deg:realData.main.temp,
                type:realData.weather[0].main,
                country:realData.sys.country,
                sunset:realData.sys.sunset,
                humidity:realData.main.humidity,
                pressure:realData.main.pressure,
                windSpeed:realData.wind.speed,
            }
            setWeatherInfo(weather)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getWeatherInfo()
    },[])

    const {deg,type,country,sunset,humidity,pressure,windSpeed} = weatherInfo
    const sec = sunset
    const date = new Date(sec * 1000)
    const timeStr = `${date.getHours()}:${date.getMinutes()}`

    const today = new Date()
    const year =  today.getFullYear()
    const month = today.getMonth()
    const date1 = today.getDate()
    const currentDate = `${date1}-${month+1}-${year}`
   
    const addZero = (num) =>{
        return num<10?`0${num}`:num
    }
    const hrs = addZero(today.getHours())
    const min = addZero(today.getMinutes())
    const sec1 = addZero(today.getSeconds())
    let daynight = true

    const into12 = () =>{
    
        if(hrs>12){
            let hr = hrs-12
            return `0${hr}`
        }
        if(hrs>=12){
            daynight = false
        }
    }

    const currentTime = `${into12()}:${min}:${sec1} ${daynight?'PM':'AM'}`
    
    return(
        <>
            <div className="wrapper">
                <div className="input">
                    <input type='search' placeholder="Enter city name" value={search} onChange={(e)=> setSearch(e.target.value)} /><button onClick={getWeatherInfo}>Search</button>
                </div>
                <div className="weatherBox">
                    <div className="weatherIcon"><h1><ion-icon name="sunny-outline"></ion-icon></h1></div>
                    <div className="tempBox">
                        <div className="temp">
                            <div className="deg"><p>{deg}°c</p></div>
                            <div className="type"><p>{type}</p><p className="stateName">{weatherInfo.name}, {country}</p></div>
                        </div>
                        <div className="time"><p className="date">{currentDate}<br></br>{currentTime}</p></div>
                    </div>
                    <div className="weatherDetails">

                        <div className="detailBox"><span className="detailIcon"><ion-icon name="sunny-outline"></ion-icon></span><span className="detailText">{timeStr}<br></br>Sunset</span></div>

                        <div className="detailBox"><span className="detailIcon"><ion-icon name="thermometer-outline"></ion-icon></span><span className="detailText">{humidity}<br></br>Humidity</span></div>

                        <div className="detailBox"><span className="detailIcon"><ion-icon name="rainy-outline"></ion-icon></span><span className="detailText">{pressure}<br></br>Pressure</span></div>

                        <div className="detailBox"><span className="detailIcon"><ion-icon name="leaf-outline"></ion-icon></span><span className="detailText">{windSpeed}<br></br>Speed</span></div>
                    </div>
                    {/* {search===''?(setSearch('Khalilabad')):null} */}
                </div>
            </div>
        </>
    )
}

export default WeatherApp