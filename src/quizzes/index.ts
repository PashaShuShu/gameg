import { Quiz } from "../types";

const gameQuiz: Quiz = {
  results: {
    combatGames: {
      name: "Combat games",
      description: "Игры с прямой конфронтацией на нанесение и избегание урона",
      rate: 0,
    },
    mazeGames: {
      name: "Maze games",
      description: "Игры-лабиринты на выживание",
      rate: 0,
    },
    sportsGames: {
      name: "Sports games",
      description: "Моделирование классических видов спортивных игр",
      rate: 0,
    },
    paddleGames: {
      name: "Paddle games",
      rate: 0,
      description: "Игры на удержание мяча на игровом поле",
    },
    raceGames: {
      name: "Race games",
      rate: 0,
      description: "Гонки на различных болидах",
    },
    miscellaneousGame: {
      name: "Miscellaneous game",
      description: "Игры не вошедшие в предыдущие пять классов",

      rate: 0,
    },
    adventure: {
      name: "Adventure",
      rate: 0,
      description:
        "Акцент на прохождении сложных заданий, накоплении инструментов и достижении цели",
    },
    dungeonsAndDragonsGames: {
      name: "D&D games (Dungeons and Dragons games)",
      rate: 0,
      description: "Фантазийная ролевая игра",
    },
    warGames: {
      name: "War games",
      rate: 0,
      description: "Фокус на активном противостоянии с противником",
    },
    gameOfChance: {
      name: "Game of Chance",
      rate: 0,
      description: "Игры с вероятностью, азартные игры",
    },
    educationalAndChildrenGames: {
      name: "Educational and children’s games",
      rate: 0,
      description: "Фокус на обучающей составляющей",
    },
    inretpersonalGames: {
      name: "Inretpersonal games",
      rate: 0,
      description: "Фокус на отношениях между несколькими игроками",
    },
  },
  questions: [
    {
      questionText:
        "Вы любите сложные игры которые требуют оттачивания навыков?",
      answers: {
        yes: [
          "adventure",
          "combatGames",
          "combatGames",
          "sportsGames",
          "paddleGames",
        ],
        no: ["adventure", "combatGames", "sportsGames", "paddleGames"],
      },
    },
    {
      questionText: "Вы азартный человек?",
      answers: {
        yes: ["gameOfChance", "gameOfChance", "raceGames"],
        no: ["gameOfChance", "gameOfChance", "raceGames"],
      },
    },
    {
      questionText: "Вы любите игры с процедурной генерацией мира?",
      answers: {
        yes: ["mazeGames", "dungeonsAndDragonsGames"],
        no: ["mazeGames", "dungeonsAndDragonsGames"],
      },
    },
    {
      questionText: "Вы любите спорт?",
      answers: {
        yes: ["raceGames", "paddleGames", "sportsGames", "gameOfChance"],
        no: ["raceGames", "paddleGames", "sportsGames", "gameOfChance"],
      },
    },
    {
      questionText: "Вы любите машины?",
      answers: {
        yes: ["raceGames", "paddleGames", "sportsGames", "warGames"],
        no: ["raceGames", "paddleGames", "sportsGames", "warGames"],
      },
    },
    {
      questionText: "Вы любите настольные игры?",
      answers: {
        yes: [
          "miscellaneousGame",
          "miscellaneousGame",
          "gameOfChance",
          "dungeonsAndDragonsGames",
          "adventure",
        ],
        no: [
          "miscellaneousGame",
          "gameOfChance",
          "dungeonsAndDragonsGames",
          "adventure",
        ],
      },
    },
    {
      questionText: "Вы любите ролевую систему в играх?",
      answers: {
        yes: [
          "dungeonsAndDragonsGames",
          "dungeonsAndDragonsGames",
          "warGames",
          "combatGames",
        ],
        no: ["dungeonsAndDragonsGames", "warGames", "combatGames"],
      },
    },
    {
      questionText: "Вы любите противостояние двучх сторон в играх?",
      answers: {
        yes: ["warGames", "gameOfChance"],
        no: ["warGames", "gameOfChance"],
      },
    },
    {
      questionText: "Вы любите обучаться играя?",
      answers: {
        yes: ["educationalAndChildrenGames", "educationalAndChildrenGames"],
        no: ["educationalAndChildrenGames"],
      },
    },
    {
      questionText: "Вы предпочтёте сюжет гейплею?",
      answers: {
        yes: ["inretpersonalGames", "inretpersonalGames"],
        no: ["inretpersonalGames"],
      },
    },
  ],
};

export default gameQuiz;
