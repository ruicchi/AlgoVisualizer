import React from 'react'
import sortingVisualizer from './algo_visualizer/algo_visualizer';
import './App.css'

function App() {
  return (
    <div className="App">
      //this is the main component of the app, it will render the sorting visualizer component
      <sortingVisualizer></sortingVisualizer>
    </div>
  )
}

export default App
