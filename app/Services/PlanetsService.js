import { ProxyState } from "../AppState.js"
import Planet from "../Models/Planets.js"
import { api } from "./AxiosService.js"

class PlanetsService {

    getPlanets() {
        api.get('planets')
            .then(res => {
                ProxyState.next = res.data.next
                ProxyState.planets = res.data.results.map(p => new Planet(p))
            })
            .catch(error => {
                console.error(error)
            })
    }
}

export const planetsService = new PlanetsService();