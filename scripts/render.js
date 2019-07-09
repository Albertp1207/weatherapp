const makeElem = (iconName,temp,date) => {
  return `<div class = "weather">
    <img src="http://openweathermap.org/img/wn/${iconName}@2x.png" />
    <div class = "texts">
      <h4>${temp} C°</h4>
      <h5>${date}</h5>
    </div>
  </div>`
}


export default function(data){
  data.then(data=>{
    let all = ""
    data[1].forEach(({icon,temp,date}) => {
      all+= makeElem(icon,temp,date)
    })
    document.querySelector("#cityName h3").innerHTML = data[0]

    document.getElementById("weathersMain").innerHTML = all
    console.log(all)
    
  })
}
