import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const getRandomPairArray = (a, b) => {
  const num1 = getRandomNumber(a, b);
  const num2 = getRandomNumber(a, b);
  return [num1, num2];
};

const getGcd = (num1, num2) => {
  let gcd = 1;
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
      return gcd;
    }
  }
  return gcd;
};

const getGameData = () => {
  const [num1, num2] = getRandomPairArray(min, max);
  const question = [num1, num2].join(' ');
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
