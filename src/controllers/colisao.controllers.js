import { cobraDados } from "../models/cobra.model.js";
import { AtualizarPontos } from "../ults/updatePontos.ultils.js";
import { SnakeKeyDown } from "./windows.keyEvent.js";


export function Colisao() {
    let tam = 20
    let snake = new SnakeKeyDown(tam);
    snake.Mover()
    console.log(snake.tamanho)
    
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

        let calc = fruitX - 457
        let calc2 = fruitX - 458
        let calc3 = fruitX - 456
        let calc4 = fruitX - 459

        let cobraX = Math.floor(cobraDados.localização[0])
        console.log(calc, cobraX); // Nessesario observable para pegar mudanças 
        console.log(fruta)


        if (calc === cobraX || calc2 === cobraX || calc3 === cobraX || calc4 === cobraX) {
            AtualizarPontos();
            snake.tamanho += 10;
        }
    });
};


