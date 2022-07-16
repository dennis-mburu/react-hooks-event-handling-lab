// Code Keypad Component Here
import React from "react";

function Keypad(){
    return (
        <input 
            type='password' 
            placeholder="Enter Password" 
            className="textbox"
            onChange={() => console.log("Entering password...")}
        />
        
    )
}

export default Keypad;