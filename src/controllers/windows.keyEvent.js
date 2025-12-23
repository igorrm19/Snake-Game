
export class SnakeKeyDown {

    constructor() {
        this.valueLeft = 0;
        this.valueRight = 0;
        this.valueTop = 0;
        this.valueBotton = 0;
        this.snake = null;
    }

    Mover() {
        const canvas = document.getElementById("cobra");
        this.snake = canvas.getContext("2d");;

        window.addEventListener("keydown", (event) => {

            const tecla = event.key
            console.log("Teclado: ", tecla)

            this.snake.fillStyle = "blue";
            this.snake.fillRect(0, 0, canvas.width, canvas.height);


            console.log(this.valueLeft, this.valueRight, this.valueTop, this.valueBotton)
            switch (tecla) {

                case "ArrowLeft":
                    this.valueRight += 5;
                    canvas.style.marginRight = `${this.valueRight}px`;
                    if (this.valueRight > 20) {
                        this.valueRight = -0.1;
                    }
                    break;
                case "ArrowRight":
                    this.valueLeft += 5;
                    canvas.style.marginLeft = `${this.valueLeft}px`;
                    if (this.valueLeft > 345) {
                        this.valueLeft = -0.1;
                    }
                    break;
                case "ArrowDown":
                    this.valueTop += 5;
                    canvas.style.marginTop = `${this.valueTop}px`;
                    if (this.valueTop > 55) {
                        this.valueTop = -0.1;
                    }
                    break;
                case "ArrowUp":
                    this.valueBotton += 5;
                    canvas.style.marginBottom = `${this.valueBotton}px`;
                    if (this.valueBotton > 800) {
                        this.valueBotton = -0.1;
                    }
                    break;
            }
        });
    };
};