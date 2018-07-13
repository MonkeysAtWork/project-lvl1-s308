import { cons } from 'hexlet-pairs';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const isDevisor = (num, dev) => num % dev === 0;
const moveToNextDevisor = (num, dev) => (isDevisor(num, dev)
  ? moveToNextDevisor(num / dev, dev) : num);

const getGcd = (number1, number2, devisor, acc) => {
  if (devisor > number1 || devisor > number2) {
    return acc;
  }
  if (isDevisor(number1, devisor) && isDevisor(number2, devisor)) {
    return getGcd(number1 / devisor, number2 / devisor, devisor, acc * devisor);
  }
  const restOfDivisionNum1 = moveToNextDevisor(number1, devisor);
  const restOfDivisionNum2 = moveToNextDevisor(number2, devisor);
  return getGcd(restOfDivisionNum1, restOfDivisionNum2, devisor + 1, acc);
};

const getExampleForGame = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 100);
  const startDevisor = 2;
  const startAcc = 1;
  const gcd = getGcd(number1, number2, startDevisor, startAcc);
  if (gcd < 3 || number1 === number2) {
    return getExampleForGame();
  }
  return cons(`${number1} ${number2}`, String(gcd));
};

export default () => startGame(description, getExampleForGame);
