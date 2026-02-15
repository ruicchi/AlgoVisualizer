// TO STUDY import React, { useState } from "react";
import "./SortingVisualizer.css";

const SortingVisualizerLogic: React.FC = () => {
  // Visualizer Logic is here 
  // TO STUDY const [sliderValue, setSliderValue] = useState(50);
  
  return (
    <div className="SortingVisualizer">
      {/* Visual UI is here*/}
      <h1>Sorting Visualizer</h1>
        <button className='btn random'>randomize</button>
        <button className='btn play'>play</button>

        {/* slider component TO STUDY*/}
        {/* <div className="slider-container">
          <label>Array Size: {sliderValue}</label>
          <input
            type="range"
            min={10}
            max={100}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
        </div> */}
        
    </div>
  );
};

export default SortingVisualizerLogic;