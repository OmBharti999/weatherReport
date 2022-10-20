import { useEffect, useState } from "react";
import Card from "./Card";
// import "./styles.css";

export default function Input() {
  const [inp, setInp] = useState("");
  const [cityName, setCityName] = useState("deoghar");
  const [data, setData] = useState();

  const onChangeRn = (e) => {
    setInp(e.target.value);
  };

  // api key  87d0870241cf59358b301b552d7aa777
  //8dc20810cbc2a9a5b9c90ae2c35f8c69
  const fetching = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8dc20810cbc2a9a5b9c90ae2c35f8c69&units=metric`;
    // console.log(url);
    let res = await fetch(url);
    let d = await res.json();
    // console.log(d);
    setData(d);
  };
  useEffect(() => {
    fetching();
  }, [cityName]);

  const settingUpCityName = () => {
    setCityName(inp);
    setInp("");
  };

  return (
    <div className="App">
      <input value={inp} placeholder="Enter city here" onChange={onChangeRn} />
      <button onClick={settingUpCityName}>search</button>
      {cityName ? <Card data={data} /> : <div>Welcome</div>}
    </div>
  );
}
