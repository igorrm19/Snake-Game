import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { Colisao } from "./controllers/colisao.controllers.js";

const buttonPlay = new Button();
const snakeMove = new SnakeKeyDown();


buttonPlay.Play();
snakeMove.Mover();
Colisao();

