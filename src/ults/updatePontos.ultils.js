import { game, Render } from "../models/game.model.js";
//import { PositionAleatorio } from "./positionAleatorio.js";

export function AtualizarPontos() {

        game.pontos += 10;
       // PositionAleatorio(1)
        Render();

}
