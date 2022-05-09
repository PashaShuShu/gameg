import { useState } from "react";
import gameQuiz from "../../quizzes";
import quizServices from "../../services/QuizServices";
import { Results } from "../../types";

const Quiz = () => {
  const [results, setResults] = useState(gameQuiz.results);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = gameQuiz.questions;

  const onYesClick = () => {
    setCurrentQuestion((number) => number + 1);
    const answers = questions[currentQuestion].answers.yes;
    const newResults: Results = answers.reduce((newResults, answer) => {
      return quizServices.upRate(answer, newResults);
    }, results);
    setResults(newResults);
  };

  const onNoClick = () => {
    setCurrentQuestion((number) => number + 1);
    const answers = questions[currentQuestion].answers.yes;
    const newResults = answers.reduce((newResults, answer) => {
      return quizServices.downRate(answer, newResults);
    }, results);
    setResults(newResults);
  };

  const BestGenre = () => {
    const suitableGenres = Object.values(results).sort(
      (a, b) => b.rate - a.rate
    );
    console.log(suitableGenres);
    const genre = {
      name: suitableGenres[0].name,
      description: suitableGenres[0].description,
    };
    return (
      <>
        <div>Вам подойдёт: {genre.name}</div>
        <div>Описание: {genre.description}</div>
      </>
    );
  };

  return (
    <>
      {currentQuestion <= questions.length - 1 ? (
        <div>
          <p>{questions[currentQuestion].questionText}</p>
          <div>
            <button onClick={onYesClick}>да</button>
            <button onClick={onNoClick}>нет</button>
          </div>
        </div>
      ) : (
        <BestGenre />
      )}
    </>
  );
};

export default Quiz;
