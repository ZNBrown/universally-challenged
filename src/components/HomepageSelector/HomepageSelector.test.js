/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { HomepageSelector } from '.';

describe('HomepageSelector', () => {
    
    beforeEach(() => {
        render(<HomepageSelector title='test title' />);
    })

    test('it renders a selector with the given title', () => {

        const selector = screen.getByLabelText('page selector');
        const title = screen.getByRole('title').textContent;

        expect(selector).toBeInTheDocument();
        expect(title).toEqual('test title');
    })
})