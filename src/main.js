import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { Colisao } from "./controllers/colisao.controllers.js";
import { Songs } from "./controllers/songs.button.js";
import { game } from "./models/game.model.js";


document.addEventListener("DOMContentLoaded", () => {
    const buttonPlay = new Button();
    //const snakeMove = new SnakeKeyDown();
    const snakeGameInstance = new SnakeKeyDown(); 

    const ponto = document.getElementById("pontos");
    ponto.innerHTML = `${game.pontos}`

    buttonPlay.Play();
    snakeGameInstance.Mover()
    Colisao();
});

const muted = document.getElementById("playBtn")

muted.addEventListener("click", () => {
    const som = new Songs()

    som.MuttedPlay()
})






