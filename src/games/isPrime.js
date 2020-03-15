import initGame from '../index.js';

const gameTask = 'Answer \x1b[31m"yes"\x1b[0m if given number is prime, otherwise answer \x1b[31m"no"\x1b[0m.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isPrime = (num) => {
  if (num === 1) return true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => {
  if (isPrime(num)) return 'yes';
  return 'no';
};

const getGameData = (min, max) => {
  const question = getRandomNumber(min, max);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
