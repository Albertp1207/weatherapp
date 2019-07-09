const getDataForCity =  id => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=0effd2db9fd35814bdee882537232e55&cnt=7`)
            .then(res=>res.json())
}
//taking temp and icon
const getTempAndIconFromData = data => {
  let newData = []
    data.list.forEach((item)=>{
      newData.push({
        temp:(item.main.temp-273.15).toFixed(1),
        icon:item.weather[0].icon,
        date:item.dt_txt.slice(0,10)
      })
    })
  return newData
}

export default async  cityId => {
  let  data =  await getDataForCity(cityId);
  console.log(data)
  return getTempAndIconFromData(data);
}