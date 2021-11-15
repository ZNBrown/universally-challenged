import React from 'react';
import './style.css';

export function HomepageCard({ title, id }) {
    return (
        <div className='card' id={id}>
            <h1>{title}</h1>
        </div>
    )
}
