
export function PositionAleatorio() {
    const fruta = document.getElementById("fruta");

    
    fruta.style.display = "block";

    setInterval(() => {
        const max = 25;
        const number = Math.floor(Math.random() * (max + 1));

        const fundo1 = document.getElementById(`fundo-${number}`);
        fundo1.appendChild(fruta)
    }, 10000);

}