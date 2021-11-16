import React from 'react';
import './style.css';

export function HomepageSelector({ title, id }) {
    return (
        <div aria-label='page selector' className='card' id={id}>
            <p id='card-title'>{title}</p>
        </div>
    )
}
