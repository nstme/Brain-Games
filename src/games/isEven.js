import initGame from '../index.js';

const gameTask = 'Answer \x1b[31m"yes"\x1b[0m if the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';

const isEven = (x) => x % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getAnswer = (num) => {
  if (isEven(num)) return 'yes';
  return 'no';
};

const getGameData = (min, max) => {
  const question = getRandomNumber(min, max);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
