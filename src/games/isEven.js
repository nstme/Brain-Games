import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer \x1b[31m"yes"\x1b[0m if the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';

const isEven = (x) => x % 2 === 0;

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getGameData = (min, max) => {
  const question = getRandomNumber(min, max);
  const answer = getAnswer(question);
  return [question.toString(), answer];
};

export default () => initGame(gameTask, getGameData);
