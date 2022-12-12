import React from "react";
import './Slider.css';
import { useState } from "react";
import ImgApi from "./imgApi";
// import { useEffect } from "react";


const Slider = () =>{

    const [selectImg,setSelectImg] = useState(0)
    const [arr,setArr] = useState(ImgApi)

    // useEffect(()=>{

    //     setInterval(()=>{
    //      setSelectImg(selectImg => selectImg < arr.length-1? selectImg+1:0)
    //     },2000)
    // },[])

    return(
        <>
            <div className="sliderContainer">
                <h1>Image Slider</h1>
               
                    <div className="imgSlider">
                        <img  src={arr[selectImg].img} alt="img"/>
                    </div>
                    <div className='dots'>
                    {arr.map((currImg,index)=>{
                        return <div key={index}><span onClick={()=>{setSelectImg(index)} }></span></div>
                    })}
                    </div>
                    
                <div className="btnControl">
                <button onClick={()=>{
                        if(selectImg > 0){
                            setSelectImg(selectImg - 1)
                        }
                    }}>Prev</button>
                    <button onClick={() =>{
                    if(selectImg < arr.length-1)
                        setSelectImg(selectImg + 1)
                    }}>Next</button>
                   
                </div>
            </div>
        </>
    )
}

export default Slider
