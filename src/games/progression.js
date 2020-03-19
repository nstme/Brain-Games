import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const min = 1;
const max = 100;

const getProgression = (minNum, maxNum) => {
  const progressionLength = 10;
  const start = getRandomNumber(minNum, maxNum);
  const step = getRandomNumber(2, 10);
  const end = start + step * progressionLength;
  const progression = [];
  for (let i = start; i < end; i += step) {
    progression.push(i);
  }
  return progression;
};

const getGameData = () => {
  const progression = getProgression(min, max);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const temp = [...progression];
  temp[hiddenIndex] = '..';
  const question = temp.join(' ');
  const answer = progression[hiddenIndex].toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
