import React, { useState } from "react";
import {
  loadQuiz,
  addUsername,
  updateDifficulty,
  resetState,
} from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.css";

export const EntryForm = () => {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadQuiz(category, difficulty));
    dispatch(addUsername(username));
    dispatch(updateDifficulty(difficulty));
    history.push("/QuestionsPage");
  };

  const reset = () => {
    dispatch(resetState());
  };

  const updateUsername = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  const updateCategory = (e) => {
    const input = e.target.value;
    setCategory(input);
  };

  const sendDifficulty = (e) => {
    const input = e.target.value;
    setDifficulty(input);
  };

  return (
    <>
      {reset()}
      <div>
        <div>
          <h1 className="titleHeading">Quiz Name Here</h1>
        </div>
        <h2 className="titleIntro"> Let's start a quiz! </h2>
        <form aria-label="userForm" role="form" onSubmit={handleSubmit}>
          <label
            className="username"
            placeholder="Enter Username"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            onMouseOver={(e) => (e.target.placeholder = "")}
            onMouseOut={(e) => (e.target.placeholder = "Enter a username...")}
            value={username}
            onChange={updateUsername}
            required
          />
          <label className="category" htmlFor="categorySelect">
            Category:
          </label>
          <select
            defaultValue={"DEFAULT"}
            name="category"
            id="categorySelect"
            required
            onChange={updateCategory}
          >
            <option value="DEFAULT" disabled>
              Pick a Category...{" "}
            </option>
            <option value="any">Random Category</option>
            <option value="9">General Knowledge</option>
            <option value="22">Geography</option>
            <option value="17">Science and Nature</option>
            <option value="11">Film</option>
            <option value="27">Animals</option>
            <option value="18">Science: Computers</option>
            <option value="15">Video Games</option>
            <option value="14">Television</option>
            <option value="20">Mythology</option>
          </select>
          <label className="difficulty" htmlFor="difficultySelect">
            Difficulty:
          </label>
          <select
            defaultValue={"DEFAULT"}
            name="difficulty"
            id="difficultySelect"
            required
            onChange={sendDifficulty}
          >
            <option value="DEFAULT" disabled>
              Pick a Difficulty...
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input className="inputButton" type="submit" value="Submit" />
        </form>

        {/* <UserCount /> */}
      </div>
    </>
  );
};
