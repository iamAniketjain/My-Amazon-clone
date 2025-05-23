import React,{useEffect,useState} from "react";
import { TaskChild } from "./taskChild";

export const Toggle =() =>{
    const [data , setdata] = useState([])

    const Togglebtn = () =>{
        <div className="container" style={{backgroundColor : "black "}}></div>
    }

    const getUsers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const List = await response.json();
        setdata(List);
    }

    useEffect (() => {
        getUsers()
    },[])

    return(
        <div className="container">
            <button onClick={Togglebtn}>Enable dark Mode</button>
            <div>
                {
                    data && data.map((element , index) => <TaskChild data={element} key={index.toString()}/> )
                }    
            </div>
        </div>
    )
}