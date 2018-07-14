import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber, { length } from '../utils';

const description = 'Balance the given number.';

const getRepeatUnits = (len) => {
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += '1';
  }
  return Number(result);
};

const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const makeBalance = (number) => {
  const numberLength = length(String(number));
  const SumOfNumbers = sum(String(number));
  const average = Math.floor(SumOfNumbers / numberLength);
  const additionLength = SumOfNumbers % numberLength;
  const base = getRepeatUnits(numberLength);
  const addition = getRepeatUnits(additionLength);
  return base * average + addition;
};

const getGameData = () => {
  const question = getRandomNumber(100, 10000);
  const answer = makeBalance(question);
  return cons(question, answer);
};

export default () => startGame(description, getGameData);
