import readlineSync from 'readline-sync';

export const inputAnswer = msg => readlineSync.question(msg);