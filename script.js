let arrayPlays = [
 [2, 3, 4],
 [5, 6, 7], 
 [8, 9, 2]
]
let lastPlay = [0];

function render() {
    arrayPlays.forEach((e) => console.log(e));
};

function checkWin(plays) {

    if (plays[0][0] === plays[0][1] && plays[0][0] === plays[0][2]) return {state: true, sign: plays[0][0]};
    if (plays[1][0] === plays[1][1] && plays[1][0] === plays[1][2]) return {state: true, sign: plays[1][0]};
    if (plays[2][0] === plays[2][1] && plays[2][0] === plays[2][2]) return {state: true, sign: plays[2][0]};

    if (plays[0][0] === plays[1][0] && plays[0][0] === plays[2][0]) return {state: true, sign: plays[0][0]};
    if (plays[0][1] === plays[1][1] && plays[0][1] === plays[2][1]) return {state: true, sign: plays[1][0]};
    if (plays[0][2] === plays[1][2] && plays[0][2] === plays[2][2]) return {state: true, sign: plays[2][0]};

    if (plays[0][0] === plays[1][1] && plays[0][0] === plays[2][2]) return {state: true, sign: plays[0][0]};
    if (plays[2][0] === plays[1][1] && plays[0][0] === plays[0][2]) return {state: true, sign: plays[2][0]};
    else return {state: false, sign: 'none'};
}

function gameState(plays) {
    let gameStats = checkWin(plays);
    if (gameStats.state === true) {
        console.log(gameStats.sign === 1 ? "The 1's won!" : "The 0's won!");
        let restart = prompt('Restart the game? yes/no')
        if (restart.toLowerCase() === "yes") {
            arrayPlays = [[2, 3, 4], [5, 6, 7], [8, 9, 2]];
            lastPlay = [0];
            gameLoop();
        } else console.log('Come back at any time!');
    }

    else {
        if (lastPlay[0] === 1) {
            playerX(arrayPlays);
            lastPlay[0] = 0;
        }

        else {
            playerO(arrayPlays);
            lastPlay[0] = 1;
        }
        gameLoop();
    }
}

function playerX(plays) {
    let goToX = prompt("Peak your place to add X on X axis") - 1;
    let goToY = prompt("Peak your place to add X on Y axis") - 1;
    if (plays[goToY][goToX] !== 1 && plays[goToY][goToX] !== 0) plays[goToY][goToX] = 1;
    else alert("You can not play in non-empty square!");
}

function playerO(plays) {
    let goToX = prompt("Peak your place to add O on X axis") - 1;
    let goToY = prompt("Peak your place to add O on Y axis") - 1;
    if (plays[goToY][goToX] !== 1 && plays[goToY][goToX] !== 0) plays[goToY][goToX] = 0;
    else alert("You can not play in non-empty square!");
}


function gameLoop() {
    render();
    gameState(arrayPlays);
};

gameLoop();