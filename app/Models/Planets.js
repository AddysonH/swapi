export default class Planet {
    constructor({ name, population, terrain }) {
        this.name = name
        this.population = population
        this.terrain = terrain
    }

    get Template() {

        return /*html*/`
        <div class='col-3'>
          <div class="card p-2 value">
              ${this.name} - ${this.terrain}
          </div>
        </div>
        `
    }
}