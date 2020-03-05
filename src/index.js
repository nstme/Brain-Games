import readlineSync from 'readline-sync';

export default (gameTask, getRandomNumber, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (!gameTask) return;
  console.log(gameTask);

  let correctUserAnswerCount = 0;
  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const randomNumber = getRandomNumber(1, 500);
    const correctAsnwer = getAnswer(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAsnwer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAsnwer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === correctAsnwer) {
      correctUserAnswerCount += 1;
      console.log('Correct!');
    }
    if (correctUserAnswerCount === questionsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
