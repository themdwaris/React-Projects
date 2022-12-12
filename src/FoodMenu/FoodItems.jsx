import React from "react";

const FoodItems = ({items}) =>{
    return(
        <>
            <div className="foodContainer pd">
            {items.map((elem)=>{
                const {id,image,name,desc,price} = elem
                return(
                    <div className="foodBox" key={id}>
                        <div className="left">
                            <img src={image} alt="img" />
                        </div>
                        <div className="right">
                            <h2>{name}</h2>
                            <p>{desc}</p>
                            <div className="priceOrder">
                                <p>Price {price}</p>
                                <button>Order Now</button>
                            </div>
                            <p>Price may vary on selected date</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default FoodItems