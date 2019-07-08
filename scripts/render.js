const makeElem = (iconName,temp) => {
  return `<div class = "weather">
    <img src="http://openweathermap.org/img/wn/${iconName}@2x.png" />
    <h4>${temp} C°</h4>
  </div>`
}


export default function(data){
  let all = ""
  data.forEach(elem => {
    all+= makeElem(elem.icon,elem.temp)
  })
  document.getElementById("weathersMain").innerHTML = all
  console.log(all)
}
