#!/usr/bin/env node
import { getUserName } from '..';
import evenGame from '../games';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no" \n');
evenGame(getUserName('May I have your name? '));
