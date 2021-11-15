import React from 'react';
import './style.css';

import { HomepageCard } from '../../components';

export function Home() {
    return (
        <>
            <div id="cards">
                <a href="/categories">
                    <HomepageCard id='game-card' title='New Game'/>
                </a>

                <a href="/scores">
                    <HomepageCard id='scores-card' title='Highscores'/>
                </a>

                <a href="/???">
                    <HomepageCard id='questionmark-card' title='???'/>
                </a>

                <a href="/about">
                    <HomepageCard id='about-card' title='About'/>
                </a>
            </div>
        </>
    )
}