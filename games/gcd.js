import initGame from '../src/index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomPair = (min, max) => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  return `${firstNumber} ${secondNumber}`;
};

const getAnswer = (pair) => {
  const [firstNum, secondNum] = pair.split(' ');
  const minNum = Math.min(firstNum, secondNum);
  let gcd = '1';
  for (let i = minNum; i >= 1; i -= 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      gcd = i;
      return gcd.toString();
    }
  }
  return gcd;
};

export default () => initGame(gameTask, getRandomPair, getAnswer);
