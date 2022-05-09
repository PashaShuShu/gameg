import { Results, SetRate } from "../../types";

class QuizServices {
  upRate: SetRate = (key: string, results: Results) => {
    return {
      ...results,
      [key]: {
        ...results[key],
        rate: results[key].rate + 1,
      },
    };
  };
  downRate: SetRate = (key: string, results: Results) => {
    return {
      ...results,
      [key]: {
        ...results[key],
        rate: results[key].rate - 1,
      },
    };
  };
}

const quizServices = new QuizServices();

export default quizServices;
