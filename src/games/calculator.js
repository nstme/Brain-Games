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

const getRandomExpression = (min, max) => {
  const a = getRandomNumber(min, max);
  const b = getRandomNumber(min, max);
  return `${a} ${getRandomOperator()} ${b}`;
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

const getGameData = (min, max) => {
  const question = getRandomExpression(min, max);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
