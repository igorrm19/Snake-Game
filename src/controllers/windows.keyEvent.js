import { SnakeModelKeyDon } from "../models/model.window.keyDon.js";

export class SnakeKeyDown {

    constructor() {
      this.moddelSnake = new SnakeModelKeyDon()
      
      this.moddelSnake.posX
      this.moddelSnake.posY
      this.snake = null
    }

    Mover() {
        const canvas = document.getElementById("cobra");
        this.snake = canvas.getContext("2d");;


        window.addEventListener("keydown", (event) => {

            const tecla = event.key

            canvas.style.left = "0px";
            canvas.style.top = "0px"
            canvas.style.margin = "0";

            switch (tecla) {

                case "ArrowLeft":
                    this.moddelSnake.posX -= 5;
                    if (this.moddelSnake.posX < 0) {
                        this.moddelSnake.posX = 0;
                    }
                    break;

                case "ArrowRight":
                    this.moddelSnake.posX += 5;
                    if (this.moddelSnake.posX > 620) {
                        this.moddelSnake.posX = 620;
                    }
                    break;

                case "ArrowDown":
                    this.moddelSnake.posY += 5;
                    if (this.moddelSnake.posY > 430) {
                        this.moddelSnake.posY = 430;
                    }
                    break;

                case "ArrowUp":
                    this.moddelSnake.posY -= 5;
                    if (this.moddelSnake.posY < 0) {
                        this.moddelSnake.posY = 0;
                    }
                    break;
            }

            canvas.style.left = this.moddelSnake.posX + "px";
            canvas.style.top = this.moddelSnake.posY + "px";

            this.snake.fillStyle = "blue";
            this.snake.fillRect(0, 0, canvas.width, canvas.height);
        });
    };
};
