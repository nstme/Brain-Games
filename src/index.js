import readlineSync from 'readline-sync';

export default (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (!gameTask) return;
  console.log(gameTask);

  let correctUserAnswerCount = 0;
  const questionsCount = 3;
  const min = 1;
  const max = 100;
  for (let i = 1; i <= questionsCount; i += 1) {
    const gameData = getGameData(min, max);
    const [question, correctAnswer] = gameData;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === correctAnswer) {
      correctUserAnswerCount += 1;
      console.log('Correct!');
    }
    if (correctUserAnswerCount === questionsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
