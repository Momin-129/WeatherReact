import { useState, useEffect } from "react";
import Weather from "./components/weather";

function App() {
  let key = "0e9d2d4e702cf193dc119e6c6b970c92";
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
      );
      const newData = await response.json();
      setWeather(newData);
    };

    fetchData();
  }, [input]);

  //
  return (
    <>
      <div className=" h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-200 via-indigo-500 to-indigo-950">
        <p className="md:text-6xl text-5xl font-bold mb-5 text-white">
          Weather App
        </p>
        <input
          type="text"
          id="large-input"
          className="mx-auto md:w-96 w-80 p-4 rounded-xl text-gray-900 border-black border-2 focus:shadow-none"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {weather.cod === 200 ? (
          <Weather weather={weather} />
        ) : (
          <p className="bg-indigo-700 p-2 text-white text-4xl mt-2 rounded-xl">
            {weather.message}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
