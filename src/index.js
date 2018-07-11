import readlineSync from 'readline-sync';

export const getAnswer = msg => readlineSync.question(msg);

export const getUserName = (msg) => {
  const name = getAnswer(msg);
  console.log(`Hello, ${name}! \n`);
  return name;
};
