// fetching data
// key = 0effd2db9fd35814bdee882537232e55
//getting data
import renderWeathers from './render'
import getInfo from './getInfo'



// choosing city(id)
const select = document.querySelector("#select select")

let cityId = select.value;

const cityChanging = async (ev) => {
  cityId = select.value;
  const info = getInfo(cityId)
  renderWeathers(info)

}


select.addEventListener("change",cityChanging)




//making weather blocks

const weathersMain = document.getElementById("weathersMain");

let weatherElemTemplate
document.getElementById("weathersMain").innerHTML = `<h1>asds</h1>`

document.getElementById("weathersMain").innerHTML = weatherElemTemplate
