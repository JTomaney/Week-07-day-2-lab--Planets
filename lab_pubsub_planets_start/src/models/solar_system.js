const PubSub = require(`../helpers/pub_sub.js`)

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe(`SelectView:click`, (evt) => {
    // const selectedPlanet = evt.detail
    // this.publishPlanetInfo(selectedPlanet)
  let chosenPlanet;
  this.planets.forEach( (planet) => {
      if (planet.name === evt.detail) {
         chosenPlanet = planet
      }
    })
    console.log(chosenPlanet);
    PubSub.publish(`SolarSystem:PlanetDetails`, chosenPlanet)
  })

};

// SolarSystem.prototype.publishPlanetInfo = function () {
//   this.planet.indexOf
// };

module.exports = SolarSystem;
