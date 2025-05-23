import React from "react";
import { useRef, useState, useEffect } from "react";

export const UnControlled = () => {
    const userName = useRef('')
    const [name ,setName] = useState('')
    useEffect(() =>{
        console.log('render uncontrolled component')
    })
    const handleSubmit = (ev) => {
        ev.preventDefault()
        userName.current.style.borderColor = 'red'
        setName(userName.current.value)
    }
    return(
        <>
        <p style={{textAlign:"center"}}>uncontrolled</p>
        <div style={{display:"flex", justifyContent:"center", alignContent:"center", gap:4}}>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <input type="text" ref={userName}/>
                <input type="submit" />
            </form>
        </div>
        </>
    )
}
