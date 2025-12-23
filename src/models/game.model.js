const ponto = document.getElementById("pontos");


export let game = {
    pontos: 0,
}

export function Render() {
    if (ponto) {
        ponto.innerHTML = game.pontos;
    }
    setInterval(() => {
        if (ponto) {
            ponto.innerHTML = game.pontos;
        }
    }, 1000)
}

Render()