import { useState } from "react";

function CarSelection() {
  let [car, setCar] = useState("Mercedes S600");
  let [color, setColor] = useState("Black");

  const selectCar = e => {
    setCar(e.target.value);
  };

  const selectColor = e => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Select your car</h2>
      <p>
        <span>Select a car</span>
        <select onChange={e => {selectCar(e)}}>
          <option value="Mercedes S600">Mercedes S600</option>
          <option value="Honda Future">Honda Future</option>
          <option value="Yamaha Sirius">Yamaha Sirius</option>
        </select>
      </p>

      <p>
        <span>Select a color</span>
        <select onChange={e => {selectColor(e)}}>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
        </select>
      </p>
      <h5>You selected a {color} - {car}</h5>
    </div>
  );
}

export default CarSelection;
