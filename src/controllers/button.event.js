import { Songs } from "./songs.button.js";

export class Button{
    constructor(){}

    Play(){
        const play = document.getElementById("play");
        const song = new Songs()

        try{

          play.addEventListener("click", () => {
             play.style.display = "none"
             song.SongPlay();
          });

        }catch(err){
            console.error("Erro no evento do butão de play", err);
        }
    }
}