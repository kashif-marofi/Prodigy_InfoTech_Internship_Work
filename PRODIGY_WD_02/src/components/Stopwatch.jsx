import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  const start = () => {
    myFunc();
    setStatus(setInterval(myFunc, 10)); // Runs after every 10 Milli Seconds
  };

  const stop = () => {
    clearInterval(status);
  };

  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };
  const myFunc = () => {
    if (updMilli === 100) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMilli++;
    return setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli });
  };
  const baseButtonClasses =
    "px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-md transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed";

  const startButtonClasses = "bg-green-600 hover:bg-green-700";
  const stopButtonClasses = "bg-red-600 hover:bg-red-700";
  const resetButtonClasses = "bg-slate-500 hover:bg-slate-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-800/90 backdrop-blur rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-700">
        {/* Header */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-widest uppercase">
          Stopwatch
        </h2>

        {/* Time Display */}
        <div className="mt-8 mb-10 flex justify-center">
          <div className="w-full text-center bg-gray-900/70 rounded-2xl py-6 sm:py-8 shadow-inner">
            <span className="font-mono text-4xl sm:text-6xl md:text-7xl text-white tracking-wider">
              {String(time.hr).padStart(2, "0")}:
              {String(time.min).padStart(2, "0")}:
              {String(time.sec).padStart(2, "0")}.
              {String(time.milli).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={start}
            className={`${baseButtonClasses} ${startButtonClasses}`}
          >
            Start
          </button>
          <button
            onClick={stop}
            className={`${baseButtonClasses} ${stopButtonClasses}`}
          >
            Stop
          </button>
          <button
            onClick={reset}
            className={`${baseButtonClasses} ${resetButtonClasses}`}
          >
            Reset
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Clean • Responsive • UI‑Focused Design
        </p>
      </div>
    </div>
  );
};

export default Stopwatch;
