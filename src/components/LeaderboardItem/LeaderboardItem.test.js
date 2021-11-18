/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { LeaderboardItem } from ".";

describe('leaderboard item', () => {
    beforeEach(() => render(<LeaderboardItem username='Rob' index={1} score={2} />))

    test('it renders in the document', () => {
        const user = screen.getByLabelText('user placement')
        expect(user).toBe.inTheDocument;
    })

    test('it renders with the username, score and position passed to it', () => {
        const user = screen.getByLabelText('user placement');
        expect(user.textContent).toBe('1. Rob: 2')
    })
})