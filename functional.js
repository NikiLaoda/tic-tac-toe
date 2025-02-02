const renderBtn = document.querySelector(".render-btn");
const playerField = document.querySelectorAll(".grid-elem");
let playerRole = 0;
let fieldCabinet = [];

function playerPeak(gameSpot) {
    gameSpot.forEach((e) => {
        e.addEventListener("click", () => {
            switch (playerRole) {
                case 0:
                    let winStateO = isWin(gameSpot);
                    if (winStateO === true) playerRole = 2;
                    else playerRole++;

                    if (e.textContent === "" && playerRole !== 2) {
                        e.textContent = "O";
                    }
                    cabinFull(gameSpot);
                    break;
                case 1:
                    let winStateX = isWin(gameSpot);
                    console.log(winStateX)
                    if (winStateX === true) playerRole = 2;
                    else playerRole--;

                    if (e.textContent === "" && playerRole !== 2) {
                        e.textContent = "X";
                    }
                    cabinFull(gameSpot);
                    break;
                case 2:
                    alert("The game is over! Try again by pressing the button below!");
                    playerRole = 0;
                    break;
                default:
                    return 0;
            }
        })
    })
}

function cabinFull(gameSpot) {
    gameSpot.forEach((e) => {
        fieldCabinet[e.id[0] - 1] = e.textContent;
    })
}

function isWin(gameSpot) {
    if (gameSpot[0].textContent === gameSpot[1].textContent && gameSpot[0].textContent === gameSpot[2].textContent && ((gameSpot[0].textContent === 'X') || (gameSpot[0].textContent === 'O'))) return true;
    if (gameSpot[3].textContent === gameSpot[4].textContent && gameSpot[3].textContent === gameSpot[5].textContent && ((gameSpot[3].textContent === 'X') || (gameSpot[3].textContent === 'O'))) return true;
    if (gameSpot[6].textContent === gameSpot[7].textContent && gameSpot[6].textContent === gameSpot[8].textContent && ((gameSpot[6].textContent === 'X') || (gameSpot[6].textContent === 'O'))) return true;

    if (gameSpot[0].textContent === gameSpot[3].textContent && gameSpot[0].textContent === gameSpot[6].textContent && ((gameSpot[0].textContent === 'X') || (gameSpot[0].textContent === 'O'))) return true;
    if (gameSpot[1].textContent === gameSpot[4].textContent && gameSpot[1].textContent === gameSpot[7].textContent && ((gameSpot[1].textContent === 'X') || (gameSpot[1].textContent === 'O'))) return true;
    if (gameSpot[2].textContent === gameSpot[5].textContent && gameSpot[2].textContent === gameSpot[8].textContent && ((gameSpot[2].textContent === 'X') || (gameSpot[2].textContent === 'O'))) return true;

    if (gameSpot[0].textContent === gameSpot[4].textContent && gameSpot[0].textContent === gameSpot[8].textContent && ((gameSpot[0].textContent === 'X') || (gameSpot[0].textContent === 'O'))) return true;
    if (gameSpot[2].textContent === gameSpot[4].textContent && gameSpot[2].textContent === gameSpot[6].textContent && ((gameSpot[2].textContent === 'X') || (gameSpot[2].textContent === 'O'))) return true;

    else return false;
}

function render(button) {
    button.addEventListener("click", () => {
        playerField.forEach((e) => {e.textContent = ""})
        console.clear();
    })
}


function gamePlay(funcPlay, funcRender) {
    funcRender(renderBtn);
    funcPlay(playerField);
}

gamePlay(playerPeak, render);