import React from 'react';
import './style.css';

import { HomepageCard } from '../../components';

export function Home() {
    return (
        <>
            <HomepageCard title='New Game'/>
            <HomepageCard title='Highscores'/>
            <HomepageCard title='???'/>
            <HomepageCard title='About'/>
        </>
    )
}