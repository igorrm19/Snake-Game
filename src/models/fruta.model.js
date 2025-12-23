const frutas = document.getElementById("fruta");
const loc = frutas.getBoundingClientRect()
let height = frutas.style.height;
let width = frutas.style.width;

export let fruta = {
    tamanho: [height, width],
    location: [loc.left, loc.top]
} 