import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=6cd3ac112dce0606bce5cbdf400330a0';

// 6cd3ac112dce0606bce5cbdf400330a0

module.exports = {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( (res) =>{
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return {
          temp:res.data.main.temp,
          location: res.data.name
        };
      }
    }, (res) => {
      throw new Error(res.data.message);
    })
  }
}
