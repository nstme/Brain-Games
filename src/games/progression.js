import initGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const min = 1;
const max = 100;
const progressionLength = 10;

const getProgression = (start, step, progLength) => {
  const end = start + step * progLength;
  const progression = [];
  for (let i = start; i < end; i += step) {
    progression.push(i);
  }
  return progression;
};

const getGameData = () => {
  const start = getRandomNumber(min, max);
  const step = getRandomNumber(2, 10);
  const progression = getProgression(start, step, progressionLength);
  const hiddenItemIndex = getRandomNumber(0, progressionLength - 1);
  const progressionWithHiddenItem = progression.slice();
  progressionWithHiddenItem[hiddenItemIndex] = '..';
  const question = progressionWithHiddenItem.join(' ');
  const answer = progression[hiddenItemIndex].toString();
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
