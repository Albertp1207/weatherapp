const getDataForCity = id => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=0effd2db9fd35814bdee882537232e55&cnt=7`)
    .then(res=>res.json())
}
//taking temp and icon
const getTempAndIconFromData = data => {
  let newData = []
    data.list.forEach((item)=>{
      newData.push({
        temp:item.main.temp,
        icon:item.weather[0].icon
      })
    })
  return newData
}

export default cityId => {
  let  data = await getDataForCity(cityId);
  return getTempAndIconFromData(data);
}
