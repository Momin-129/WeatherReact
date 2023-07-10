import "../css/style.css";

export default function Weather(props) {
  return (
    <div className="boder-2 rounded-xl md:w-96 md:h-96 bg-indigo-600 text-white mt-5 p-5 text-3xl flex flex-col items-center justify-center">
      <p>{props.weather.name}</p>
      <img src="./images/cloudy.png" className="w-24 h-24" alt="temperature" />
      <p>{props.weather.main.temp} &#8451;</p>
      <div className="mt-10 flex justify-between items-center gap-3">
        <img src="./images/humidity.png" className="w-8 h-8" alt="humidity" />
        {props.weather.main.humidity}%
        <img src="./images/windock.png" className="w-8 h-8" alt="wind" />
        {props.weather.wind.speed}km/h
      </div>
    </div>
  );
}
