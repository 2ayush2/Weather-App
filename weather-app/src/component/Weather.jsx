import { React, useState, useEffect } from "react";
import "./weather.css";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=b3ccb966709c45c892e44ead1b58daa8

const Weather = () => {
  const [input, setInput] = useState("null");
  const [city, setCity] = useState("");
  useEffect(() => {
    const FetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b3ccb966709c45c892e44ead1b58daa8`;
      const fetchData = await fetch(url);
      const jsonData = await fetchData.json();
      setCity(jsonData.main);

      console.log(jsonData);
    };
    FetchApi();
  }, [input]);
  return (
    <>
      <div className="inputData">
        <input
          placeholder="Enter city"
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      {!city ? (
        <p>Not found result</p>
      ) : (
        <div className="box">
          <h1>{input}</h1>
          <p>{city.temp}</p>
        </div>
      )}
    </>
  );
};

export default Weather;
