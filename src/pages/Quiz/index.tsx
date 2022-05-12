import { useEffect, useState } from "react";
import gameQuiz from "../../quizzes";
import quizServices from "../../services/QuizServices";
import { Characteristics, Result } from "../../types";

const Quiz = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [characteristics, setCharacteristics] = useState<Characteristics[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const onYesClick = () => {
    setCharacteristics((characteristics) => [
      ...characteristics,
      ...gameQuiz.questions[questionNumber].characteristics,
    ]);
    setQuestionNumber((number) => number + 1);
  };

  const onNoClick = () => {
    setQuestionNumber((number) => number + 1);
  };

  const onRestartClick = () => {
    setResults([]);
    setCharacteristics([]);
    setQuestionNumber(0);
  };

  useEffect(() => {
    setResults(quizServices.updateResults(characteristics, gameQuiz.results));
  }, [characteristics]);

  if (questionNumber >= gameQuiz.questions.length) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th>
                <h1>Жанры которые могут вам понравиться</h1>
              </th>
            </tr>
            {results.map((result) => {
              return (
                <tr key={result.name}>
                  <th>
                    <p>{result.name}</p>
                  </th>
                  <th>
                    <p>{result.description}</p>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={onRestartClick}>Restart</button>
      </>
    );
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <p>Какой игровой жанр тебе подойдёт?</p>
            </th>
          </tr>
          <tr>
            <th>
              <div>{gameQuiz.questions[questionNumber].text}</div>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={onYesClick}>Yes</button>
            </th>
            <th>
              <button onClick={onNoClick}>No</button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Quiz;
