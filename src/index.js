import readlineSync from 'readline-sync';

export const getAnswer = msg => readlineSync.question(msg);