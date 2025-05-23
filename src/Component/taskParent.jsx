import React from 'react'
import { useState , useEffect } from 'react'
import { TaskChild } from './taskChild'

export const TaskParent = () => {

    const [users , setUsers] = useState([])

    const getUsers = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const List = await response.json()
        console.log(List)
        setUsers(List)
       
    }

    useEffect(() =>{
        getUsers();
    },[])

    return(
        <div>
            <p>Parent Page </p>
           <div>
            {
                users && users.map((element , index) =><TaskChild data={element} key={index.toString()}/>)
            }
        </div>
        </div>
    )
}