import React from 'react';
import './style.css';

export function AnswerSelector({answer, id}) {
    return (
        <p className='card answer-selector' id={id}>{answer}</p>
    )
}
