import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { cobraDados } from "./models/cobra.model.js";
import { fruta } from "./models/fruta.model.js";

const buttonPlay = new Button();
const snakeMove = new SnakeKeyDown();


window.addEventListener("keydown", () => {

    const frutas = document.getElementById("fruta");
    const loc = frutas.getBoundingClientRect()
    let height = frutas.style.height;
    let width = frutas.style.width;

    let fruta = {
        tamanho: [height, width],
        location: [loc.x + "px", loc.y + "px"]
    }

    let fruitX = Math.floor(loc.x)
    let cobraX = Math.floor(cobraDados.localização[0])
    let calc = fruitX - 311
    console.log(calc, cobraX); // Nessesario observable para pegar mudanças
    console.log(fruta)

    if(calc === cobraX){
      alert("colidiu")
    }
   
})


buttonPlay.Play();
snakeMove.Mover();
console.log(cobraDados.localização[0], cobraDados.localização[1]); // Nessesario observable para pegar mudanças
console.log(fruta)

