import React, { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App() {
  const [predictions, setPredictions] = useState([]);
  const [days, setDays] = useState("");

  const fetchPredictions = async () => {
    const response = await axios.post("http://127.0.0.1:5000/predict", { days: days.split(',').map(Number) });
    setPredictions(response.data.predicted_usage.map((usage, index) => ({ day: days.split(',')[index], usage })));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI-Based Resource Allocation Optimizer</h1>
      <div>
        <input
          type="text"
          placeholder="Enter days (e.g., 1,2,3)"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button onClick={fetchPredictions}>Predict Usage</button>
      </div>
      <LineChart width={600} height={300} data={predictions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="usage" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default App;
