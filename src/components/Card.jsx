import "./card.css";
import { BiLocationPlus } from "react-icons/bi";
import { TbWind } from "react-icons/tb";

export default function Card({ data }) {
  return (
    data && (<div className="flex-card-centre-maker">
      <div className="card-container">
        <div className="top-main">
          <div className="img-container">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <div className="temp-discription">
            <h1>{data.main.temp + "°"}</h1>
            <h3>{data.weather[0].main}</h3>
          </div>
        </div>
        <div className="more-detail">
          <div className="place-wind-feel">
            <div>
              <BiLocationPlus />
              {data.name}
            </div>
            <div>
              <TbWind />: {data.wind.speed} kmps
            </div>
            <div>feel: {data.main.feels_like}</div>
          </div>
        </div>{" "}
        <div className="min-max">
          <div className="min">min Temp: {data.main.temp_min}°</div>
          <div className="max">max Temp: {data.main.temp_max}°</div>
        </div>
      </div></div>
    )
  );
}
