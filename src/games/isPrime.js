import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer \x1b[31m"yes"\x1b[0m if given number is prime, otherwise answer \x1b[31m"no"\x1b[0m.';

const min = 1;
const max = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNumber(min, max);
  const answer = getAnswer(question);
  return [question.toString(), answer];
};

export default () => initGame(gameTask, getGameData);
