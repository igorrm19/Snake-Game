import { Button } from "./controllers/button.event.js";
import { SnakeKeyDown } from "./controllers/windows.keyEvent.js";
import { Colisao } from "./controllers/colisao.controllers.js";
import { game } from "./models/game.model.js";



document.addEventListener("DOMContentLoaded", () => {
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos")


    const ponto = document.getElementById("pontos");
    ponto.innerHTML = `${game.pontos}`

    let hora = 0
    let minuto = 0
    let segundo = 0

    setInterval(() => {
        segundo++;

        if (segundo === 60) {
            segundo = 0;
            minuto++;
        }

        if (minuto === 60) {
            minuto = 0;
            hora++;
        }

        horas.textContent = String(hora).padStart(2, "0");
        minutos.textContent = String(minuto).padStart(2, "0");
        segundos.textContent = String(segundo).padStart(2, "0");
    }, 1000);



    const buttonPlay = new Button();
    const snakeMove = new SnakeKeyDown();


    buttonPlay.Play();
    snakeMove.Mover();
    Colisao();

});






