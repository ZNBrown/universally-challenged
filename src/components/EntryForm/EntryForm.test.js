/**
 * @jest-environment jsdom
 */

import { EntryForm } from "../EntryForm";
import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  beforeEach(() => {
    renderWithReduxProvider(<EntryForm />);
  });
  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  test("Placeholder text exists", () => {
    let placeHolderInput = screen.getByPlaceholderText("Enter Username");
    expect(placeHolderInput).toBeInTheDocument();
  });
  test("Username label exists", () => {
    let usernameInput = screen.getByLabelText("Team name:");
    expect(usernameInput).toBeInTheDocument();
  });
  test("Difficult Label exists", () => {
    let difficultyInput = screen.getByLabelText("Difficulty:");
    expect(difficultyInput).toBeInTheDocument();
  });
  test("Category Label exists", () => {
    let categoryInput = screen.getByLabelText("Category:");
    expect(categoryInput).toBeInTheDocument();
  });
  test("Selected option for category", () => {
    let selectElement = screen.getByDisplayValue("Pick a Category...");
    expect(selectElement).toBeInTheDocument();
  });
  test("Selected option for difficulty", () => {
    let selectElement = screen.getByDisplayValue("Pick a Difficulty...");
    expect(selectElement).toBeInTheDocument();
  });

  test("it displays the 'New Game'button", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test('handleSubmit is called when the form is submitted', () => {
    const handleSubmit = jest.fn();
    const form = screen.getByLabelText('userForm');
    const onSubmit = jest.fn();
    // userEvent.upload(form);
    expect(handleSubmit).toBeCalled;
  })
});
