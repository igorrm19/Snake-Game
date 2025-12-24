
import { cobraDados } from "../models/cobra.model.js";
import { game } from "../models/game.model.js";
import { AtualizarPontos } from "../ults/updatePontos.ultils.js";

export class SnakeKeyDown {

    constructor() {

        cobraDados.localização[0]
        cobraDados.localização[1]
        this.snake = null
    }

    Mover() {
        const canvas = document.getElementById("cobra");
        this.snake = canvas.getContext("2d");

        window.addEventListener("keydown", (event) => {

            const tecla = event.key

            canvas.style.left = "0px";
            canvas.style.top = "0px"
            canvas.style.margin = "0";

            switch (tecla) {

                case "ArrowLeft":
                    cobraDados.localização[0] -= 5;
                    if (cobraDados.localização[0] < 0) {
                        cobraDados.localização[0] = 0;
                        alert("Gamer Over");
                        cobraDados.tamanho = 20;
                        game.pontos = 0

                    }
                    break;

                case "ArrowRight":
                    cobraDados.localização[0] += 5;
                    if (cobraDados.localização[0] > 900) {
                        cobraDados.localização[0] = 900;
                        alert("Gamer Over");
                        cobraDados.tamanho = 20;
                        game.pontos = 0
                    }
                    break;

                case "ArrowDown":
                    cobraDados.localização[1] += 5;
                    if (cobraDados.localização[1] > 430) {
                        cobraDados.localização[1] = 430;
                        alert("Gamer Over");
                        cobraDados.tamanho = 20;
                        game.pontos = 0
                    }
                    break;

                case "ArrowUp":
                    cobraDados.localização[1] -= 5;
                    if (cobraDados.localização[1] < 0) {
                        cobraDados.localização[1] = 0;
                        alert("Gamer Over");
                        cobraDados.tamanho = 20;
                        game.pontos = 0
                    }
                    break;
            }

            canvas.style.left = cobraDados.localização[0] + "px";
            canvas.style.top = cobraDados.localização[1] + "px";

            this.snake.clearRect(0, 0, canvas.width, canvas.height);


            this.snake.fillStyle = "blue";
            this.snake.fillRect(0, 0, cobraDados.tamanho, 20);

            console.log("objeto cobra ", cobraDados)
            //console.log(cobraDados.localização[0], cobraDados.localização[1]);
        });
    };
};


