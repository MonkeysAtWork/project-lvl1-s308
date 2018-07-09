#!/usr/bin/env node
import {inputAnswer} from '..'

console.log('Welcome to the Brain Games!' + '\n' + '');

const userName = asq => inputAnswer(asq);
console.log(`Hello, ${userName('May I have your name? ')}!`);