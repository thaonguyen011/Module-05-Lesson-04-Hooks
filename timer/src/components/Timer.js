import { useState } from "react";

function Timer() {
  let [time, setTime] = useState(10);

  const timer = setTimeout(function () {
    if (time > 0) {
      setTime(time - 1);
    } else {
        clearTimeout(timer);
    }
  }, 1000);

  return (
    <div>
      {time === 0 ? alert(`Time's up`) : <h1>Count down from {time}</h1>}
    </div>
  );
}

export default Timer;
