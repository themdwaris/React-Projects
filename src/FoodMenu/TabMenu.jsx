import React from "react";
import { NavLink } from "react-router-dom";

const TabMenu = ({filterFood,catValue}) =>{
    return(
        <>
             <div className="categoryMenu">
                {
                    catValue.map((currCat,id)=>{
                        return <div><NavLink activeClassName='acti' onClick={()=>filterFood(currCat)} key={id}>{currCat}</NavLink></div>
                    })
                }
            
            </div>
        </>
    )
}

export default TabMenu