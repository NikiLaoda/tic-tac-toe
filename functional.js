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
                    console.log(fieldCabinet)
                    playerRole++;
                    break;
                case 1:
                    if (e.textContent === "") {
                        e.textContent = "X";
                    }
                    cabinFull(gameSpot);
                    console.log(fieldCabinet)
                    playerRole--;
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

function render(button) {
    button.addEventListener("click", () => {
        playerField.forEach((e) => {e.textContent = ""})
    })
}


function gamePlay(funcPlay, funcRender) {
    playerPeak(playerField);
    render(renderBtn);;
}

gamePlay(playerPeak, render);