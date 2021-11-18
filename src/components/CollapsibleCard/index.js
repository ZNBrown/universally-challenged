import React, { useState } from "react";
import './style.css';


const CollapsibleCard = ({children, label}) => {
    
    const [open, setOpen] = useState(false)
    
    return (
        <div aria-label='about page card' className='container'>
            <button aria-label='about page card button' className='toggle' onClick={() => setOpen(!open)}><h2>{label}</h2></button>
            
            <div aria-label='about page card text' className={open ? 'content show' : 'content'}>{children}</div>
        </div>
    )
}

export {CollapsibleCard}