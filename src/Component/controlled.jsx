import React, { useEffect, useState } from 'react'

export const Controlled = () =>{
    const [username , setuserName] = useState("")

    useEffect(()=>{
        console.log("rendering Component")
    })

    const handleSubmit =(ev) =>{
        ev.preventDefault()
        console.log(username)
    }

    return(
    <>
        <p style={{textAlign:"center"}}>controlled</p>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <form onSubmit={(ev) => handleSubmit(ev)}>
            <input type="text" value={username} onChange={(event) => setuserName(event.target.value)}/>
            <input type="submit" />
        </form>
        </div>
    </>
    )
}