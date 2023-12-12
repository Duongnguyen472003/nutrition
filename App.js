import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      // Calculate BMI
      const calculatedBMI = parseFloat(weight) / ((parseFloat(height) / 100) ** 2);
      setBMI(calculatedBMI.toFixed(2));
    }
  };

  return (
    <div className="calculator-container">
      <h2>BMI Calculator</h2>

      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight in kilograms"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height in centimeters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button onClick={calculateBMI}>Calculate BMI</button>

      <div id="result">
        {bmi && <h3>Your BMI is: {bmi}</h3>}
      </div>
    </div>
  );
}

export default App;
