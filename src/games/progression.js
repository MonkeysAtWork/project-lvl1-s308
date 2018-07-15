import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in this progression?';

const makeProgression = (start, step, secretPosition) => {
  let result = '';
  const iter = (counter, acc) => {
    if (counter > 10) {
      return result;
    }
    result += (counter === secretPosition) ? '.. ' : `${acc} `;
    return iter(counter + 1, acc + step);
  };
  return iter(1, start);
};

const getGameData = () => {
  const startPosition = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 20);
  const secretPosition = getRandomNumber(1, 11);
  const question = makeProgression(startPosition, progressionStep, secretPosition);
  const answer = progressionStep * (secretPosition - 1) + startPosition;
  return cons(question, String(answer));
};

export default () => startGame(description, getGameData);
