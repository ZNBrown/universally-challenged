/**
 * @jest-environment jsdom
 */

 import { screen, render } from "@testing-library/react";
 import { Timer321 } from '.';

 describe('Timer321', () => {
     beforeEach(() => {
        render(<Timer321 />)
     })

     test('it renders on the page', () => {
        const timer321 = screen.getByLabelText('grid timer');
        expect(timer321).toBe.inTheDocument;
     })
     
 })