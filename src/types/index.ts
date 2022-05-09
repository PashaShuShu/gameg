export type Results = {
  [key: string]: {
    name: string;
    description: string;
    rate: number;
  };
};

export type SetRate = (key: string, results: Results) => Results;

export type Answers = {
  yes: string[];
  no: string[];
};

export type Questions = { questionText: string; answers: Answers }[];

export type Quiz = {
  results: Results;
  questions: Questions;
};
