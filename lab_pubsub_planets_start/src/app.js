const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js')
const PlanetInfoView = require('./views/planet_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const navBar = document.querySelector(`#menu`)
  const selectView = new SelectView(navBar)
  selectView.bindEvents()

  const solarSystem = new SolarSystem(planetsData)
  solarSystem.bindEvents()

  const result_display = document.querySelector(`#planet-info`)
  const planetInfo = new PlanetInfoView(result_display)
  planetInfo.bindEvents()

});
