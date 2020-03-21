import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const min = 1;
const max = 100;
const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const firstIndex = 0;
  const lastIndex = operators.length - 1;
  const index = getRandomNumber(firstIndex, lastIndex);
  return operators[index];
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
      throw new Error(`Error! Operator '${operator}' is invalid. Valid operators: '${operators.join("', '")}'.`);
  }
};

const getGameData = () => {
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator).toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
