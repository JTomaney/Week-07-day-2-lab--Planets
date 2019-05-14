const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
this.element = element
}

SelectView.prototype.bindEvents = function () {
  this.element.addEventListener(`click`, (event) => {
    const selectedPlanet = event.target.id
    PubSub.publish(`SelectView:click`, selectedPlanet)
  })
};



module.exports = SelectView;
