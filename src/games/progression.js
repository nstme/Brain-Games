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
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  for (let i = start; i < end; i += step) {
    progression.push(i);
  }
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const getAnswer = (progressionStr) => {
  let answer = 0;
  const progressionArr = progressionStr.split(' ');
  for (let i = 0; i < 10; i += 1) {
    const current = progressionArr[i];
    const prev = Number(progressionArr[i - 1]);
    const prevPrev = Number(progressionArr[i - 2]);
    const next = Number(progressionArr[i + 1]);
    const nextNext = Number(progressionArr[i + 2]);
    let step;

    if (progressionArr[0] === '..') {
      step = nextNext - next;
      answer = next - step;
      return answer.toString();
    }
    if (current === '..') {
      answer = (prev + next) / 2;
      return answer.toString();
    }
    if (progressionArr[progressionArr.length - 1] === '..') {
      step = prev - prevPrev;
      answer = prev + step;
      return answer.toString();
    }
  }
  return 'error';
};

const getGameData = () => {
  const question = getProgression(min, max);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => initGame(gameTask, getGameData);
