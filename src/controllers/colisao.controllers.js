//import { cobraDados } from "../models/cobra.model.js";
import { AtualizarPontos } from "../ults/updatePontos.ultils.js";
//import { SnakeKeyDown } from "./windows.keyEvent.js";
import { cobraDados } from "../models/cobra.model.js";


export function Colisao() {
  
    //console.log(snake.tamanho);
    
    window.addEventListener("keydown", () => {
        const frutas = document.getElementById("fruta");
        const loc = frutas.getBoundingClientRect();
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
        let calc4 = fruitX - 460
        let calc5 = fruitX - 461
        let calc6 = fruitX - 462
        let calc7 = fruitX - 463
        let calc8 = fruitX - 464
        let calc9 = fruitX - 465
        let calc10 = fruitX - 466

        let cobraX = Math.floor(cobraDados.localização[0]);
        console.log(calc, cobraX); // Nessesario observable para pegar mudanças 
        console.log(fruta);


        if (calc === cobraX || calc2 === cobraX || calc3 === cobraX || calc4 === cobraX || calc5 === cobraX || calc6 === cobraX || calc7 === cobraX || calc8 === cobraX || calc9 === cobraX || calc10 === cobraX) {
            AtualizarPontos();
            //snake.tamanho += 10
            cobraDados.tamanho += 10;
            console.log(cobraDados.tamanho - 20)
        };
    });
};
