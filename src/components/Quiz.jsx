import { useEffect, useReducer } from "react";

import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import Welcome from "./Welcome";
import Progress from "./Progress";
import Questions from "./Questions";
import Result from "./Result";

const SECS_PER_QUESTION = 30;

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "SUCCESS":
      return { ...state, questions: action.payload, status: "ready" };
    case "FAILURE":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active",
    remainingSeconds: state.questions.length  *  SECS_PER_QUESTION,
    };
    case "TICK":
      return { ...state, 
      remainingSeconds: state.remainingSeconds - 1,
      status: state.remainingSeconds === 0 ? 'FINISH': state.status,
      };
    case "answer":
      const currentQuestion = state.questions.at(state.index)

      return { 
        ...state, 
        answer: action.payload, 
        gainedPoints: action.payload === currentQuestion.correctOption ? state.gainedPoints + currentQuestion.points: state.gainedPoints,
      };
    case "NEXT_INDEX":
      return { ...state, index: state.index + 1, answer: null };
    case "FINISH":
      // return { ...state, index: 0, answer: null, status: 'ready', gainedPoints: 0};
      return { ...state, status: 'finish', 
      maxPoints: state.gainedPoints > state.maxPoints ? state.gainedPoints : state.maxPoints
    };
    case "RESTART":
      return {...initialState, status: 'ready', questions: state.questions};
    default:
      throw new Error("Something went wrong!!!");
  }
};

const initialState = {
  questions: [],
  status: "loading", //  error, ready,  active, finish
  index: 0,
  answer: null,
  gainedPoints: 0,
  maxPoints: 0,
  remainingSeconds : null,
};

export function Quiz() {
  const [{ questions, status, index, answer, gainedPoints, maxPoints, remainingSeconds }, dispatch] = useReducer(reducer, initialState);

  const totalPoints = questions.reduce((prev, curr) => prev+curr.points ,0);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let res = await fetch("http://localhost:9000/questions");
        if (!res.ok) throw new Error("Something went wrong!!!");

        let data = await res.json();
        if (data.Response === "False")
          throw new Error("Oops! question not found");
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FAILURE", payload: error.message });
      }
    };

    fetchQuestions();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-y-8">
      <Header />
      <main className="max-w-md space-y-8 text-center sm:max-w-lg md:max-w-xl ">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Welcome dispatch={dispatch} questions={questions} />}
        {status === "active" && (
          <>
            <Progress questions={questions} index={index} gainedPoints={gainedPoints} answer={answer} totalPoints={totalPoints} />
            <Questions remainingSeconds={remainingSeconds} question={questions.at(index)} answer={answer} dispatch={dispatch} index={index} />
          </>
        )}
        {status === 'finish' && <Result dispatch={dispatch} gainedPoints={gainedPoints} totalPoints={totalPoints} maxPoints={maxPoints}  />}
      </main>
    </section>
  );
}
