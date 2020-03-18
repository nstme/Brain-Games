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

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Error!Operator '${operator}' is invalid. Valid operators: '+', '-', '*'.`);
  }
};

const getGameData = (a, b) => {
  const [num1, num2] = getRandomPairArray(a, b);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator).toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
