import questionReducer from "./questionReducer";

describe("question reducer", () => {
  test("it intialises with loading of false", () => {
    const initReturn = questionReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual({
      loading: false,
      questionIndex: 0,
      username: "",
      category: "",
      difficulty: "",
      result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      score: 0,
      userNum: 0,
    });
  });

  test("it returns with updated username when submitted", () => {
    const fakeLoad = questionReducer({ username: "" }, { type: "ADD_USERNAME", payload: "Rach" });
    expect(fakeLoad).toMatchObject({ username: "Rach" });
  });

  test("it returns with updated difficulty when submitted", () => {
    const fakeLoad = questionReducer({ difficulty: "" }, { type: "ADD_DIFFICULTY", payload: "difficult" });
    expect(fakeLoad).toMatchObject({ difficulty: "difficult" });
  });
//   test("it returns with updated userNum when submitted", () => {
//     const fakeLoad = questionReducer({ userNum: 0 }, { type: "ADD_USER_NUM", payload: 5 });
//     expect(fakeLoad).toMatchObject({ userNum: 5 });
//   });

  test("check the quiz and answers load", () => {
    const fakeLike = questionReducer(
      {
        result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      },
      {
        type: "LOAD_QUIZ",
        payload: [
          { question: "What type of animal is Clifford?", correctAnswer: "Dog", incorrectAnswers: ["Cat", "Rabbit", "Turtle"] },
        ],
      }
    );
    expect(fakeLike).toMatchObject({
      result: [
        { question: "What type of animal is Clifford?", correctAnswer: "Dog", incorrectAnswers: ["Cat", "Rabbit", "Turtle"] },
      ],
    });
  });

  test("it returns with a score of +1 when answer is correct ", () => {
    const fakeLike = questionReducer(
      {
        questionIndex: 0,
        score: 0,
        result: [
          { question: "What type of animal is Clifford?", correctAnswer: "Dog", incorrectAnswers: ["Cat", "Rabbit", "Turtle"] },
        ],
      },
      {
        type: "ANSWER_SUBMIT",
        payload: "Dog",
      }
    );
    expect(fakeLike).toMatchObject({
      questionIndex: 1,
      score: 1,
    });
  });

  test("score doesn't change when answer is incorrect ", () => {
    const fakeLike = questionReducer(
      {
        questionIndex: 0,
        score: 0,
        result: [
          { question: "What type of animal is Clifford?", correctAnswer: "Dog", incorrectAnswers: ["Cat", "Rabbit", "Turtle"] },
        ],
      },
      {
        type: "ANSWER_SUBMIT",
        payload: "Cat",
      }
    );
    expect(fakeLike).toMatchObject({
      questionIndex: 1,
      score: 0,
    });
  });
});
