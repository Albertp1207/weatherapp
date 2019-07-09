import renderWeathers from './render.js'
import getInfo from './getInfo.js'

const select = document.querySelector("#select select")

let cityId = select.value;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPositions);
}

function getPositions(position) {
  const {latitude,longitude} = position.coords

  const info = getInfo(null,latitude,longitude)
  renderWeathers(info)

}

const cityChanging = async () => {
  document.querySelector("#weathersMain").innerHTML = "<p id='load'>Loading...</p>";
  cityId = select.value;
  const info = getInfo(cityId)
  renderWeathers(info)

}


select.addEventListener("change",cityChanging)
