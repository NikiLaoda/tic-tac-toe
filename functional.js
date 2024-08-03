const renderBtn = document.querySelector(".render-btn");
const playerField = document.querySelectorAll(".grid-elem");
let playerRole = 0;
let fieldCabinet = [];

function playerPeak(gameSpot) {
    gameSpot.forEach((e) => {
        e.addEventListener("click", () => {
            switch (playerRole) {
                case 0:
                    if (e.textContent === "") {
                        e.textContent = "O";
                    }
                    cabinFull(gameSpot);
                    let winStateO = isWin(gameSpot);
                    if (winStateO === true) playerRole = 2;
                    else playerRole++;
                    break;
                case 1:
                    if (e.textContent === "") {
                        e.textContent = "X";
                    }
                    cabinFull(gameSpot);
                    let winStateX = isWin(gameSpot);
                    console.log(winStateX)
                    if (winStateX === true) playerRole = 2;
                    else playerRole--;
                    break;
                case 2:
                    alert("X win! Try again by clicking on the button!");
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
    if (gameSpot[0].textContent === gameSpot[1].textContent && gameSpot[0].textContent === gameSpot[2].textContent) return true;
    if (gameSpot[3] === gameSpot[4] && gameSpot[3] === gameSpot[5]) return true;
    if (gameSpot[6] === gameSpot[7] && gameSpot[6] === gameSpot[8]) return true;

    if (gameSpot[0] === gameSpot[3] && gameSpot[0] === gameSpot[6]) return true;
    if (gameSpot[1] === gameSpot[4] && gameSpot[1] === gameSpot[7]) return true;
    if (gameSpot[2] === gameSpot[5] && gameSpot[2] === gameSpot[8]) return true;

    if (gameSpot[0] === gameSpot[4] && gameSpot[0] === gameSpot[8]) return true;
    if (gameSpot[2] === gameSpot[4] && gameSpot[2] === gameSpot[6]) return true;

    else return false;
}

function render(button) {
    button.addEventListener("click", () => {
        playerField.forEach((e) => {e.textContent = ""})
    })
}


function gamePlay(funcPlay, funcRender) {
    render(renderBtn);
    playerPeak(playerField);
}

gamePlay(playerPeak, render);