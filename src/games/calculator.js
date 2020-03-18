import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const firstIndex = 0;
  const lastIndex = operators.length - 1;
  const randIndex = getRandomNumber(firstIndex, lastIndex);
  return operators[randIndex];
};

const getRandomPairArray = (a, b) => {
  const num1 = getRandomNumber(a, b);
  const num2 = getRandomNumber(a, b);
  return [num1, num2];
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

const getGameData = (a, b) => {
  const [num1, num2] = getRandomPairArray(a, b);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator).toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
