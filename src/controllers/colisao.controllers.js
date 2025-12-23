import { cobraDados } from "../models/cobra.model.js";

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
        let cobraX = Math.floor(cobraDados.localização[0])
        let calc = fruitX - 458
        console.log(calc, cobraX); // Nessesario observable para pegar mudanças 
        console.log(fruta)


        if (calc === cobraX) {
            alert("colidiu");  // Nessesario para capiturar fruta
        }

    });

};