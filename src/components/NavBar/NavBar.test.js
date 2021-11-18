/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from ".";

describe("NavBar", () => {
  
  beforeEach(() => {
    render(<NavBar />, { wrapper: MemoryRouter });
  })

  test("it renders a nav tag", () => {
    const nav = screen.queryByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test('it renders with the correct links and button', () => {
    const items = [
      screen.getByLabelText('open nav button'),
      screen.getByLabelText('homepage link'),
      screen.getByLabelText('new quiz link'),
      screen.getByLabelText('highscores link'),
      screen.getByLabelText('about link')
    ];
    expect(items).toBe.toBeInTheDocument;
  })

  test('the burger bar shows the nav bar', () => {
    const navBtn = screen.getByLabelText('open nav button');
    userEvent.click(navBtn); 
    const nav = screen.queryByRole('navigation');
    expect(nav.id).toBe('show');
  })

  test('the close button hides the nav bar', () => {
    const navBtn = screen.getByLabelText('open nav button');
    userEvent.click(navBtn); 
    userEvent.click(navBtn);
    const nav = screen.queryByRole('navigation');
    expect(nav.id).toBe('hide');
  })

  test('it hides when a link is clicked', () => {
    const homepageLink = screen.getByLabelText('homepage link');
    userEvent.click(homepageLink);
    const nav = screen.queryByRole('navigation');
    expect(nav.id).toBe('hide');
  })

  test('it renders a new page when a link is clicked', () => {
    const homepageLink = screen.getByLabelText('homepage link');
    userEvent.click(homepageLink);
    expect(history.push).toBeCalled;
  })
});
