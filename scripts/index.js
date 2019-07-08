// fetching data
// key = 0effd2db9fd35814bdee882537232e55

//getting data
const getDataForCity = id => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=0effd2db9fd35814bdee882537232e55&cnt=7`)
  // .then(res=>console.log(res))
    .then(res=>res.json())
}
//taking temp and icon
const getTempAndIcon = data => {
  let newData = []
    data.list.forEach((item)=>{
      newData.push({
        temp:item.main.temp,
        icon:item.weather[0].icon
      })
    })
  return newData
}


// choosing city(id)
const select = document.querySelector("#select select")

let cityId = select.value;

const cityChanging = async (ev) => {
  cityId = select.value;
  let  data = await getDataForCity(cityId);
  renderWeathers(getTempAndIcon(data))
  console.log(getTempAndIcon(data));

}


select.addEventListener("change",cityChanging)




//making weather blocks
const makeElem = (iconName,temp) => {
  return `<div class = "weather">
    <img src="http://openweathermap.org/img/wn/${iconName}@2x.png" />
    <h4>${temp} C°</h4>
  </div>`
}

const weathersMain = document.getElementById("weathersMain");

const renderWeathers = data => {
  let all = ""
  data.forEach(elem => {
    all+= makeElem(elem.icon,elem.temp)
  })
  document.getElementById("weathersMain").innerHTML = all
  console.log(all)
}
let weatherElemTemplate
document.getElementById("weathersMain").innerHTML = `<h1>asds</h1>`

document.getElementById("weathersMain").innerHTML = weatherElemTemplate
