/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { HomepageSelector } from '.';

describe('HomepageSelector', () => {
    
    beforeEach(() => {
        render(<HomepageSelector href='/testing' title='test title' />);
    })

    test('it renders a selector', () => {
        const selector = screen.getByLabelText('page selector');
        expect(selector).toBeInTheDocument();
    })

    test('the rendered card has the given title', () => {
        const title = screen.getByLabelText('page title');
        expect(title.textContent).toEqual('test title');
    })

    test('when the selector is clicked it should take the user to the href', () => {
        const selector = screen.getByLabelText('page selector');
        userEvent.click(selector);
        expect(history.push).toBeCalled;
    })
})