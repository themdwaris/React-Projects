import React from "react";
import './Todo.css'
import notebook from './notebook.svg';
import { useState,useEffect } from "react";



const Todo = () =>{

//getting item from local storage
    const getDataFromLS = () =>{
        let list = localStorage.getItem('list')
        if(list){
            return JSON.parse(localStorage.getItem('list'))
        }
        else{
            return []
        }
    }

    //hooks
    const [elem ,setElem] = useState()
    const [arr,setArr] = useState(getDataFromLS())
    const [editIcon,setEditIcon] = useState(true)
    const [isItemEdit,setIsItemEdit] = useState()
    
    const addItem = () =>{
        if(!elem){
            alert("You can't add empty list.")
        }else if(elem && !editIcon){
            setArr(
                arr.map((currElem)=>{
                    if(currElem.id===isItemEdit){
                        return{...currElem,name:elem}
                    }
                    return currElem
                })
            )
            setEditIcon(true)
            setIsItemEdit(null)
            setElem('')
        }
        else{
            const updatedItems = {id: new Date().getTime().toString(),name:elem}
            setArr([updatedItems,...arr])
        }
        setElem('')
    }
    const delItem = (index) =>{
        // console.log(index)
        const updated = arr.filter((item)=>{
            return index!==item.id
        })
        setArr(updated)
    }
    const editItem = (id) =>{
        let editedItem = arr.find((newItem)=>{
            return newItem.id === id
        })
        setEditIcon(false)
        setElem(editedItem.name)
        setIsItemEdit(id)
    }

    //set item in local storage
    useEffect(()=>{
        //converting data into string form
        localStorage.setItem('list',JSON.stringify(arr))
    },[arr])

    return(
        <>
            <div className="todoContainer lr-pad">
                <div className="innerCon">
                    <div className="img"><img src={notebook} alt="img" /></div>

                    <h3 className="h3">Your To Do List</h3>

                    <div className="inputTag"><input type="text" placeholder="✍ Add your list" value={elem}onChange={(e)=>{setElem(e.target.value)}} />
                    {editIcon? <ion-icon name="add-circle-outline" onClick={addItem}></ion-icon>: <ion-icon name="create-outline" onClick={addItem}></ion-icon>}
                   </div>

                        {arr.map((elem)=>{
                            return(
                                <div className="items" key={elem.id}>
                                <h2 className="itemName">{elem.name} <ion-icon  id='editIcon'name="create-outline" onClick={()=>editItem(elem.id)}></ion-icon><ion-icon id='delIcon'name="trash-outline" onClick={()=>delItem(elem.id)}></ion-icon></h2>
                                </div>
                            )
                        })}
                        
                    
                </div>
            </div>
        </>
    )
}

export default Todo