import { Characteristics, Quiz } from "../types";

const {
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
  ZOMBI,
} = Characteristics;

const gameQuiz: Quiz = {
  results: [
    {
      name: "Combat games",
      description: "Игры с прямой конфронтацией на нанесение и избегание урона",
      characteristics: [BLOOD, MIDDLE_AGES, MMO, HORROR, MODERN, ZOMBI],
    },
    {
      name: "Maze games",
      description: "Игры-лабиринты на выживание",
      characteristics: [THINK, HORROR, ROUGE_LIKE, SPACE, MODERN, ZOMBI],
    },
    {
      name: "Sports games",
      description: "Моделирование классических видов спортивных игр",
      characteristics: [SPORT, CHILDREN],
    },
    {
      name: "Paddle games",
      description: "Игры на удержание мяча на игровом поле",
      characteristics: [SPORT, THINK, CHILDREN],
    },
    {
      name: "Race games",
      description: "Гонки на различных болидах",
      characteristics: [CARS, CHILDREN],
    },
    {
      name: "Miscellaneous game",
      description: "Настольние игры",
      characteristics: [THINK, SPORT, ROUGE_LIKE, MIDDLE_AGES, CHILDREN, ZOMBI],
    },
    {
      name: "Adventure",
      description:
        "Акцент на прохождении сложных заданий, накоплении инструментов и достижении цели",
      characteristics: [MODERN, MIDDLE_AGES, BLOOD, ZOMBI],
    },
    {
      name: "D&D games (Dungeons and Dragons games)",
      description: "Фантазийная ролевая игра",
      characteristics: [
        MIDDLE_AGES,
        MMO,
        THINK,
        ALIENS,
        CHILDREN,
        SKILLS,
        MODERN,
      ],
    },
    {
      name: "War games",
      description: "Фокус на активном противостоянии с противником",
      characteristics: [
        MIDDLE_AGES,
        SPACE,
        ALIENS,
        MMO,
        ROUGE_LIKE,
        HORROR,
        ZOMBI,
      ],
    },
    {
      name: "Game of Chance",
      description: "Игры с вероятностью, азартные игры",
      characteristics: [ARDOR],
    },
    {
      name: "Educational and children’s games",
      description: "Фокус на обучающей составляющей",
      characteristics: [THINK, CHILDREN, SKILLS],
    },
    {
      name: "Inretpersonal games",
      description: "Фокус на отношениях между несколькими игроками",
      characteristics: [MMO, MIDDLE_AGES, SPACE, ALIENS, ZOMBI, WITH_FRIEND],
    },
  ],
  questions: [
    {
      text: "Открытый мир",
      characteristics: [
        WITH_FRIEND,
        ZOMBI,
        CARS,
        SKILLS,
        BLOOD,
        MMO,
        ROUGE_LIKE,
      ],
    },
    {
      text: "Атмосфера",
      characteristics: [SPACE, BLOOD, SKILLS, HORROR, MODERN, ROUGE_LIKE],
    },
    { text: "Азарт", characteristics: [SPORT, CARS, ARDOR, SKILLS, CHILDREN] },
    {
      text: "Улучшить свои знания",
      characteristics: [WITH_FRIEND, THINK, CHILDREN],
    },
  ],
};

export default gameQuiz;
