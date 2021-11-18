import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

export function HomepageSelector({ href, title, id }) {
    return (
        <NavLink to={href}>
            <div aria-label='page selector' className='card' id={id}>
                <p aria-label='page title' id='card-title'>{title}</p>
            </div>
        </NavLink>
    )
}
