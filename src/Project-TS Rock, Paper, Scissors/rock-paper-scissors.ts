console.log("rock paper scissors");
// rounds selection radio btns
const fiveRounds = document.querySelector('#fiveRounds') as HTMLInputElement;
const tenRounds = document.querySelector('#tenRounds') as HTMLInputElement;
const fifteenRounds = document.querySelector('#fifteenRounds') as HTMLInputElement;
const twentyRounds = document.querySelector('#twentyRounds') as HTMLInputElement;

//result output
const outputYou = document.querySelector('#output-you')as HTMLElement;
const outputComp = document.querySelector('#output-comp') as HTMLElement;

// move option btns
const rockBtn = document.querySelector('#rockBtn') as HTMLButtonElement;
const paperBtn = document.querySelector('#paperBtn') as HTMLButtonElement;
const scissorsBtn = document.querySelector('#scissorsBtn') as HTMLButtonElement;

//restart game btn
const restartBtn = document.querySelector('#restartBtn') as HTMLButtonElement;

console.log(fiveRounds,tenRounds,fifteenRounds,twentyRounds, outputYou, outputComp, rockBtn, paperBtn, scissorsBtn, restartBtn);