import React, { useState } from "react";
import './style.css';


const CollapsibleCard = ({children, label}) => {
    
    const [open, setOpen] = useState(false)
    
    return (
        <div className='container'>
            <button className='toggle' onClick={() => setOpen(!open)}><h2>{label}</h2></button>
            
            <div className={open ? 'content show' : 'content'}>{children}</div>
        </div>
    )
}

export {CollapsibleCard}