import React from "react";
import Menu from "./menu";
import './FoodMenu.css';
import { useState } from "react";
import FoodItems from "./FoodItems";
import TabMenu from "./TabMenu";


const catValue = [...new Set(Menu.map((currCategory)=>currCategory.category)),'All']
const FoodMenu = () =>{

    const [items,setItems] = useState(Menu)

    const filterFood = (food) =>{
    if(food==='All'){

        setItems(Menu)
    }
    else{

        const filteredFood = Menu.filter((item)=>{
            return item.category===food
        })

            setItems(filteredFood)
            console.log(food)
       }
    }
    return(
        <>
        <div className="foodMenuContainer">
            <h1>Order Your wishes food from here!</h1>
            <hr></hr>
            <TabMenu filterFood={filterFood} catValue={catValue}/>
            <FoodItems items={items}/>
           
        </div>
        </>
    )
}

export default FoodMenu