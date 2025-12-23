import { cobraDados } from "../models/cobra.model.js";
import { AtualizarPontos } from "../ults/updatePontos.ultils.js";


export function Colisao() {
    
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
        }
    });
};


