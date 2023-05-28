import axios from "axios";
import Lottie from '../Component/Lottie'
import weather from '../static/weather-lottie.json'
// import '../Styles/Weather.css'
import { useEffect, useState } from "react";
import "../Styles/Info_page_ui.css"


function Weather() {

  const [data, setData] = useState({});
  const [lgt, setlgt] = useState();
  const [lgn, setlgn] = useState();






  useEffect(() => {


    navigator.geolocation.getCurrentPosition(async function (position) {


      setlgt(position.coords.longitude);

      setlgn(position.coords.latitude);


      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${`839fdcea2a3f4c91ec2a32a9bb34f461`}`


      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

    })



  }, [])
  // console.log(data);
  return (
    // <div className="weather">

    //   <div className="container">
    //     <div className="top">
    //       <div className="location">
    //         <p>{data.name}</p>
    //       </div>
    //       <div className="temp">
    //         {data.main ? <h1>{data.main.temp.toFixed()} &deg;</h1> : null}
    //       </div>
    //       <div className="description">
    //         {data.weather ? <p>{data.weather[0].main}</p> : null}
    //       </div>
    //     </div>


    //     <div className="bottom">
    //       <div className="feels">
    //         {data.main ? <p className="bold">{data.main.feels_like.toFixed()} F</p> : null}
    //         <p>Feels like</p>
    //       </div>
    //       <div className="humidity">
    //         {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}
    //         <p>Humidity</p>
    //       </div>
    //       <div className="wind">
    //         {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
    //         <p>Wind Speed</p>
    //       </div>
    //       <div className="wind">
    //         {data.wind ? <p className="bold">{data.main.pressure.toFixed()} hPa</p> : null}
    //         <p>Pressure</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="weather_widget">
      <div id="weather_cont">
        <div id="weather_loc">
          <p class="city">{data.name}</p>
          <p class="temp">{data.main ? <h1>{data.main.temp.toFixed()} &deg;</h1> : null}</p>
          <p class="nature">{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
        </div>
        <div className='weather-lottie'>
          <Lottie data={weather} height={`13rem`} width={`13rem`} style={{ "position": "relative" }} />
        </div>
      </div>
      <div id="weather_para">
        <ul>
          <li>Feels Like <br />{data.main ? <p className="bold">{data.main.feels_like.toFixed()} F</p> : null}</li>
          <li>Humidity <br /> {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}</li>
          <li>Wind Speed <br />{data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}</li>
          <li>Pressure <br />{data.wind ? <p className="bold">{data.main.pressure.toFixed()} hPa</p> : null}</li>
        </ul>
      </div>
    </div>
  );
}

export default Weather;
