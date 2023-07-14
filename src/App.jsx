import { useState, useEffect } from "react";
import Weather from "./components/weather";
import Loader from "./components/loader";

function App() {
  let key = "0e9d2d4e702cf193dc119e6c6b970c92";
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  const handleSearch = () => {
    setClick(true);
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
      );
      const newData = await response.json();
      setWeather(newData);
      setLoading(false);
    };
    fetchData();
  };

  return (
    <>
      <div className=" h-full w-full flex flex-col items-center justify-center bg-red-700">
        <p className="md:text-6xl text-5xl font-bold mb-5 text-white">
          Weather App
        </p>
        <div className="flex flex-col items-center">
          <input
            type="text"
            id="large-input"
            className="mx-auto md:w-96 w-80 p-4 rounded-xl text-gray-900 border-black border-2 focus:shadow-none"
            placeholder="Enter city name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (/^[a-zA-Z]+$/.test(e.target.value)) setSearch(false);
              else setSearch(true);
            }}
          />
          <button
            className="mt-2 disabled:bg-blue-300 bg-blue-500 text-white rounded py-2 px-8 text-4xl font-bold"
            disabled={search}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {click ? (
          loading ? (
            <Loader />
          ) : weather.cod == 200 ? (
            <Weather weather={weather} />
          ) : (
            <div className="boder-2 rounded-xl md:w-96 md:h-96 bg-indigo-600 text-white mt-5 p-5 text-3xl flex flex-col items-center justify-center">
              <p className="text-4xl text-white font-bold">City not found</p>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
