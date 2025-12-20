import { useState } from "react";

const apiKey = "c618131cc35f78411fbe10d11f27eb4d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-700 to-sky-500 p-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]"></div>

      <div className="relative w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-7 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-2 tracking-wide">
          Weather Forecast
        </h1>
        <p className="text-center text-white/80 mb-6 text-sm">
          Search real-time weather by city
        </p>

        {/* Search */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkWeather()}
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={checkWeather}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 font-semibold hover:scale-105 transition"
          >
            Go
          </button>
        </div>

        {loading && (
          <p className="text-center text-white/80 animate-pulse">
            Fetching weather...
          </p>
        )}

        {error && (
          <p className="text-red-300 text-center font-medium">{error}</p>
        )}

        {/* Weather Card */}
        {weather && (
          <div className="mt-6 text-center space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{weather.name}</h2>
              <p className="uppercase text-sm tracking-widest text-white/70">
                {weather.weather[0].description}
              </p>
            </div>

            <div className="text-6xl font-extrabold text-white drop-shadow-lg">
              {Math.round(weather.main.temp)}°
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Humidity
                </p>
                <p className="text-xl font-bold">{weather.main.humidity}%</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Wind Speed
                </p>
                <p className="text-xl font-bold">{weather.wind.speed} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
