import readlineSync from 'readline-sync';

export default (gameTask, getQuestion, getAnswer) => {
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
    const question = getQuestion(min, max);
    const correctAsnwer = getAnswer(question);
    console.log(`Question: ${question}`);
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
