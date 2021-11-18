/**
 * @jest-environment jsdom
 */

import { screen, render} from "@testing-library/react";
import { LeaderboardTable } from ".";

describe('LeaderboardTable', () => {
    beforeEach(() => render(<LeaderboardTable />))

    test('it renders in the document', () => {
        const leaderboard = screen.getByLabelText('leaderboard');
        expect(leaderboard).toBe.inTheDocument;
    })
 
})

