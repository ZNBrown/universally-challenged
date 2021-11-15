import { screen, render } from "@testing-library/react";
import HomepageSelector from '.';

describe('HomepageSelector', () => {
    test('it renders a selector with the given title', () => {
        render(<HomepageSelector title='test title' />);
        const selector = screen.queryByRole('page selector');
        const title = screen.queryByRole('heading');
        expect(selector).toBeInTheDocument;
        expect(title).toBe('test title');
    })
})