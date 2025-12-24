

export class Songs {
    constructor() { }

    SongPlay() {
        const son = document.getElementById("buttonSom");

        try {
            son.play();
        } catch (err) {
            console.error("Erro inesperado no som", err);
        }

    }

    MuttedPlay() {
        const son = document.getElementById("buttonSom");
        const PlayMusic = document.getElementById("playMusic");

        try {
            son.MuttedPlay();
            PlayMusic.MuttedPlay()

        } catch (err) {
            console.error("Erro inesperado no som", err);
        }
    }

    PlayMusic(){
        const PlayMusic = document.getElementById("playMusic");

        PlayMusic.play();
    }
}