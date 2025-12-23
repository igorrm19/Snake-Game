const cobra = document.getElementById("cobra");
let loc = cobra.getBoundingClientRect();

export let cobraDados = {
    tamanho: 10,
    pontos: 0,
    localização: [loc.x, loc.y],
    status: "vivo"
}


// localização: [90, 120],
