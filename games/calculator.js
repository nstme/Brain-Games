import initGame from '../src/index.js';

const gameTask = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randOperator = () => {
  const operators = ['+', '-', '*'];
  const randIndex = getRandomNumber(0, 2);
  return operators[randIndex];
};

const getTask = (min, max) => {
  const a = getRandomNumber(min, max);
  const b = getRandomNumber(min, max);
  return `${a} ${randOperator()} ${b}`;
};

const getAnswer = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let answer;
  switch (operator) {
    case '+':
      answer = Number(a) + Number(b);
      break;
    case '-':
      answer = Number(a) - Number(b);
      break;
    case '*':
      answer = Number(a) * Number(b);
      break;
    default:
      break;
  }
  return answer.toString();
};

export default () => initGame(gameTask, getTask, getAnswer);
