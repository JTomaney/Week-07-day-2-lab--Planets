const PubSub = require(`../helpers/pub_sub.js`)

const PlanetInfoView = function (element) {
  this.element = element
}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe(`SolarSystem:PlanetDetails`, (event) => {
    const planet = event.detail
    this.render(planet)
  })
};

PlanetInfoView.prototype.render = function (planet) {
  // const name = planet.name
  // const orbit = planet.orbit
  // const day = planet.day
  // const surfaceArea = planet.surfaceArea
  // const volume = planet.volume
  // const gravity = planet.gravity
  // const moons = planet.moons
  // const image = planet.image
  const infoDisplay = document.querySelector(`#planet-info`)
  infoDisplay.innerHTML = ""
  const info = document.createElement(`ul`)
  infoDisplay.appendChild(info)
  const name = document.createElement(`li`)
  name.textContent = `Name: ${planet.name}`
  info.appendChild(name)
  const orbit = document.createElement(`li`)
  orbit.textContent = `Orbit: ${planet.orbit}`
  info.appendChild(orbit)
  const day = document.createElement(`li`)
  day.textContent = `Day: ${planet.day}`
  info.appendChild(day)
  const surfaceArea = document.createElement(`li`)
  surfaceArea.textContent = `Surface Area: ${planet.surfaceArea}`
  info.appendChild(surfaceArea)
  const volume = document.createElement(`li`)
  volume.textContent = `Volume: ${planet.volume}`
  info.appendChild(volume)
  const gravity = document.createElement(`li`)
  gravity.textContent = `Gravity: ${planet.gravity}`
  info.appendChild(gravity)
  const moons = document.createElement(`li`)
  moons.textContent = `Moons: ${planet.moons}`
  info.appendChild(moons)
  const image = document.createElement(`img`)
  image.src = planet.image
  infoDisplay.appendChild(image)
};



module.exports = PlanetInfoView
