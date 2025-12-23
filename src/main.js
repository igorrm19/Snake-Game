import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { Colisao } from "./controllers/colisao.controllers.js";
import { game } from "./models/game.model.js";

const ponto = document.getElementById("pontos");
ponto.innerHTML = `${game.pontos}`


const buttonPlay = new Button();
const snakeMove = new SnakeKeyDown();


buttonPlay.Play();
snakeMove.Mover();
Colisao();

