import { Songs } from "./songs.button.js";
import { PositionAleatorio } from "../ults/positionAleatorio.js";

export class Button {
    constructor() { }

    Play() {
        const play = document.getElementById("play");

        const song = new Songs()

        try {

            play.addEventListener("click", () => {
                play.style.display = "none";
                PositionAleatorio();

                song.SongPlay();
                song.PlayMusic();
            });

        } catch (err) {
            console.error("Erro no evento do butão de play", err);
        }
    }
}