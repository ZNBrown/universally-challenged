import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

export function HomepageSelector({ title, id }) {
    return ( 
            <div aria-label='page selector' className='card' id={id}>
                <p aria-label='page title' id='card-title'>{title}</p>
            </div>
    )
}
