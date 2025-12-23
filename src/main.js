import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { cobraDados } from "./models/cobra.model.js";

const buttonPlay = new Button();
const snakeMove = new SnakeKeyDown();

buttonPlay.Play();
snakeMove.Mover();
console.log(cobraDados.localização[0], cobraDados.localização[1]); // Nessesario observable para pegar mudanças

