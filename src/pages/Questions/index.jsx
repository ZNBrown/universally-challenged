import React from 'react';
import './style.css';

import { AnswerSelector } from '../../components';

import { Question } from '../../components';

export function Questions() {

    const answer1 = 'placeholder answer';
    const answer2 = 'placeholder answer';
    const answer3 = 'placeholder answer';
    const answer4 = 'placeholder answer';

    return (
        <>
            <Question />

            <div id="answers">
                <AnswerSelector answer = {answer1}/>
                <AnswerSelector answer = {answer2}/>
                <AnswerSelector answer = {answer3}/>
                <AnswerSelector answer = {answer4}/>
            </div>
        </>
    )
}
