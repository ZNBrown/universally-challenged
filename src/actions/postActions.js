import { FETCH_POSTS, NEW_POST } from "./types";

url("https://questionAPI.com");

export const fetchQuestions = () => (dispatch) => {
  fetch(url + "questions")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ACTION1,
        payload: posts,
      })
    );
};

export const createQuestion = (questionData) => (dispatch) => {
  fetch(url + "questions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(questionData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: ACTION2,
        payload: post,
      })
    );
};
