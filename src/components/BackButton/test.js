/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import { BackButton } from '.';

jest.mock("react-router-dom", () => ({
    useHistory: () => ({
        goBack: jest.fn(),
    }),
}));

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />);
    })

    test('renders a div in the document', () => {
        const backBtn = screen.getByLabelText('back button');
        expect(backBtn).toBe.inTheDocument;
    })

    test('renders with a left pointing arrow (←) as text content', () => {
        const backBtn = screen.getByLabelText('back button');
        expect(backBtn.textContent).toEqual('←');        
    })

    test('when clicked it calls the history function to go back a page', () => {
        const backBtn = screen.getByLabelText('back button');
        userEvent.click(backBtn);
        expect(history.goBack).toBeCalled;
    })
})