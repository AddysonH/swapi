import { ProxyState } from "../AppState.js"
import { planetsService } from "../Services/PlanetsService.js"

function _draw() {
    let planets = ProxyState.planets
    let template = ''
    planets.forEach(p => template += p.Template)
    document.getElementById("planets").innerHTML = template
}

export default class CharactersController {
    constructor() {

        ProxyState.on('planets', _draw)
        planetsService.getPlanets();
    }
}