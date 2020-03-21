import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, (num1 % num2));
};

const getGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
