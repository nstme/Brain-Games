import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (!gameTask) return;
  console.log(gameTask);

  for (let i = 1; i <= questionsCount; i += 1) {
    const gameData = getGameData();
    const [question, correctAnswer] = gameData;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
