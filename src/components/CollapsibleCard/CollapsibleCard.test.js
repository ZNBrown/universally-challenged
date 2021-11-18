/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import { CollapsibleCard } from '.';

describe('CollapsibleCard', () => {

    beforeEach(() => render(<CollapsibleCard />))

    test('it renders in the document', () => {
        const card = screen.getByLabelText('about page card');
        expect(card).toBe.inTheDocument;
    })

    test('when clicked it renders text', () => {
        const btn = screen.getByLabelText('about page card button');
        userEvent.click(btn);
        const text = screen.getByLabelText('about page card text');
        expect(text.className).toContain('show');
    })

    test('when clicked twice it hides the text', () => {
        const btn = screen.getByLabelText('about page card button');
        userEvent.click(btn);
        userEvent.click(btn)
        const text = screen.getByLabelText('about page card text');
        expect(text.className).toEqual('content');    
    })
})


