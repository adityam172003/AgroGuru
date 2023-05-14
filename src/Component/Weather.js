import axios from "axios";
import '../Styles/Weather.css'
import { useEffect, useState } from "react";

function Weather() {

  const [data, setData] = useState({});
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${18.5204}&lon=${73.8567}&appid=${`839fdcea2a3f4c91ec2a32a9bb34f461`}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className="weather">

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>


        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()} F</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Weather;
