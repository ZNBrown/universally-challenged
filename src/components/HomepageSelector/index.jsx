import React from 'react';
import './style.css';

export function HomepageSelector({ title, id }) {
    return (
        <div aria-label='page selector' className='card' id={id}>
            <h1 id='card-title'>{title}</h1>
        </div>
    )
}
