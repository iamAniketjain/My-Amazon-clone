import React from 'react'
import { useState,useEffect } from 'react'
import {Card} from './card'

export const FetchCard = () => {
    const [users , setUsers] = useState([])

    const getUsers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const List = await response.json()
        setUsers(List)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <div className='App' style={{backgroundColor : "grey"}}>
            {
                users && users.map((element , index) => <Card el={element} key={index.toString()}/>)
            }
        </div>
    )
}