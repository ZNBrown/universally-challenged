import React from 'react';
import './style.css';

import { AnswerSelector } from '../../components';

import { Question } from '../../components';

export function Questions() {

    const answer1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt voluptatum iure expedita fugiat iusto repudiandae ex quidem sunt illo at tenetur veritatis, vero recusandae esse alias nobis! Natus, voluptatibus.';
    const answer2 = 'placeholder answer';
    const answer3 = 'placeholder answer';
    const answer4 = 'placeholder answer';

    return (
        <>
            <Question />

            <div id="answers">
                <AnswerSelector answer = {answer1} id='answerTL'/>
                <AnswerSelector answer = {answer2} id='answerTR'/>
                <AnswerSelector answer = {answer3} id='answerBL'/>
                <AnswerSelector answer = {answer4} id='answerBR'/>
            </div>
        </>
    )
}
