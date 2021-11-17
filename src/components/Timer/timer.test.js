/**
 * @jest-environment jsdom
 */

 import { screen, render } from "@testing-library/react";
 import { Timer } from '.';

 describe('Timer', () => {
     beforeEach(() => {
        render(<Timer />)
     })

     test('it renders on the page', () => {
        const timer = screen.getByLabelText('timer');
        expect(timer).toBe.inTheDocument;
     })
     
 })