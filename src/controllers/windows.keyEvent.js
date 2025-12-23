
export class SnakeKeyDown {

    constructor() {
        this.posX = 90;
        this.posY = 120;
        this.snake = null;
    }

    Mover() {
        const canvas = document.getElementById("cobra");
        this.snake = canvas.getContext("2d");;


        window.addEventListener("keydown", (event) => {

            const tecla = event.key
            console.log("Teclado: ", this.posX, this.posY)

            canvas.style.left = "0px";
            canvas.style.top = "0px"
            canvas.style.margin = "0";

            console.log(this.valueLeft, this.valueRight, this.valueTop, this.valueBotton)
            switch (tecla) {

                case "ArrowLeft":
                    this.posX -= 5;
                    if (this.posX < 0) {
                        this.posX = 0;
                    }
                    break;

                case "ArrowRight":
                    this.posX += 5;
                    if (this.posX > 620) {
                        this.posX = 620;
                    }
                    break;

                case "ArrowDown":
                    this.posY += 5;
                    if (this.posY > 430) {
                        this.posY = 430;
                    }
                    break;

                case "ArrowUp":
                    this.posY -= 5;
                    if (this.posY < 0) {
                        t
                        his.posY = 0;
                    }
                    break;
            }

            canvas.style.left = this.posX + "px";
            canvas.style.top = this.posY + "px";

            this.snake.fillStyle = "blue";
            this.snake.fillRect(0, 0, canvas.width, canvas.height);
        });
    };
};
