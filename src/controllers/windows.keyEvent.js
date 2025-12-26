
import { cobraDados } from "../models/cobra.model.js";
import { game } from "../models/game.model.js";
//import { AtualizarPontos } from "../ults/updatePontos.ultils.js";

export class SnakeKeyDown {
    x = 0
    y = 1

    constructor() {

        cobraDados.localização[this.x];
        cobraDados.localização[this.y];
        this.snake = null;
    }

    Resete() {
        let minTamanho = 20;
        let pontoInicial = 0;

        alert("Gamer Over");
        cobraDados.tamanho = minTamanho;
        game.pontos = pontoInicial;
    }


    Mover() {
        const canvas = document.getElementById("cobra");
        this.snake = canvas.getContext("2d");

        window.addEventListener("keydown", (event) => {

            const tecla = event.key;

            canvas.style.left = "0px";
            canvas.style.top = "0px";
            canvas.style.margin = "0";

            switch (tecla) {

                case "ArrowLeft":
                    cobraDados.localização[this.x] -= 5;
                    if (cobraDados.localização[this.x] < 0) {
                        cobraDados.localização[this.x];
                        this.Resete();
                    }

                    break;

                case "ArrowRight":
                    cobraDados.localização[this.y] += 5;
                    if (cobraDados.localização[this.y] > 900) {
                        cobraDados.localização[this.y] = 900;
                        this.Resete();
                    }

                    break;

                case "ArrowDown":
                    cobraDados.localização[this.y] += 5;
                    if (cobraDados.localização[this.y] > 430) {
                        cobraDados.localização[this.y] = 430;
                        this.Resete();
                    }

                    break;

                case "ArrowUp":
                    cobraDados.localização[this.y] -= 5;
                    if (cobraDados.localização[this.y] < 0) {
                        cobraDados.localização[this.y] = 0;
                        this.Resete();
                    }

                    break;
            }

            canvas.style.left = cobraDados.localização[this.x] + "px";
            canvas.style.top = cobraDados.localização[this.y] + "px";

            this.snake.clearRect(0, 0, canvas.width, canvas.height);


            this.snake.fillStyle = "blue";
            this.snake.fillRect(0, 0, cobraDados.tamanho, 20);

            console.log("objeto cobra ", cobraDados);
            //console.log(cobraDados.localização[0], cobraDados.localização[1]);
        });
    };
};



