import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const[currTemp, setCurrTemp] = useState(0);
  const[currConition, setCurrentCondition] = useState("")
  const[dayLowTemp, setDayLowTemp] = useState(0);
  const[dayHighTemp, setDayHighTemp] = useState(0);
  const[WeatherDataByHourPages, setWeatherDataByHourPages]
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
        "http://127.0.0.1:5001/geeks-firebase-72e6d/us-central1/getDayWeather"      
      );

      const data = await res.json();

      setCurrTemp(data.data.current.temp_f);
      setCurrentCondition(data.data.current.condition.text);

      setCurrentPage(data..data.currentPage);
      // const currHour = data.data.hour.find((hour)) => hour.current);

      setDayLowTemp(data.data.day.mintemp_f);
      setDayHighTemp(data.data.day.max_temp_f);
      console.log("The res: ", data);
    { catch (e) {
      console.error(e.message);
    }
  })();
}, []);

  return (
    <div className="App">
      <div className="current">
        <h2 className="current-temp">{currTemp}° F</h2>
        <p className="current-cindition">{currCondition}</p>

        <div className="low-high-temp">
          <span className="low-temp">H {dayLowTemp}</span>
          <span className="high-temp">L {dayHighTemp}</span>
        </div>

        <div className="weather-by-hour">
          {WeatherDataByHourPages.map((weatherDataByHourPage) => ( 
            <div>
              <p>{weatherDataByHourPage[0]?.temp_f}</p>
              <p>{weatherDataByHourPage[1]?.temp_f}</p>
              <p>{weatherDataByHourPage[2]?.temp_f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
