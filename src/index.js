import readlineSync from 'readline-sync';


export default msg => console.log(`Hello, ${readlineSync.question(msg)}!`);
