import React,{createContext} from "react";
import { ParentChild1 } from "./ParentChild1";

export const Parent = () =>{
    return(
        <div>
            <p>Parent</p>
            <ParentChild1/>
        </div>
    )
}
