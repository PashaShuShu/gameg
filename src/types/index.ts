export enum Characteristics {
  SKILLS,
  CHILDREN,
  BLOOD,
  MIDDLE_AGES,
  SPACE,
  ALIENS,
  MMO,
  ROUGE_LIKE,
  HORROR,
  THINK,
  SPORT,
  CARS,
  MODERN,
  ARDOR,
  WITH_FRIEND,
  ZOMBI
}

export type Result = {
  name: string;
  description: string;
  characteristics: Characteristics[];
};

export type Question = {
  text: string;
  characteristics: Characteristics[];
};

export type Quiz = {
  results: Result[];
  questions: Question[];
};
