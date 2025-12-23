

export class SnakeKeyDown {

    constructor() {
        this.value = 0;
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

            this.value += 5;

            switch(tecla){
                case "ArrowLeft": 
                  canvas.style.marginRight = `${this.value}px`;
                  break;
                case "ArrowRight":
                  canvas.style.marginLeft = `${this.value}px`;
                  break;
                case "ArrowDown":
                   canvas.style.marginTop = `${this.value}px`;
                   break;
                case "ArrowUp":
                  canvas.style.marginBottom = `${this.value}px`;
                  break;
            }
        });
    };
};