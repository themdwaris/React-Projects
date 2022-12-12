import React from "react";
import Weather from "./weatherApp/Weather";
import WeatherApp from "./weatherApp2/WeatherApp";
import Todo from './Todo/Todo'
import { BrowserRouter } from "react-router-dom";
import FoodMenu from './FoodMenu/FoodMenu';
import Slider from './Slider/Slider';

const App = () =>{
    return(
      <>
        <Todo/>
        <Weather/>
        <WeatherApp/>
        <BrowserRouter><FoodMenu/></BrowserRouter>
        <Slider/>
      </>
    )
}

export default App