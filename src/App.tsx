import { useState } from 'react'
import { bubbleSort } from './algorithms/sorting/bubbleSort'
import VisualizationCanvas from './components/VisualizationCanvas';
import './App.css'

function App() {
  const [data, setData] = useState([5, 2, 8, 1, 9, 4]);

  const handleStartSort = () => {
      bubbleSort(data, setData);
  }
  return (
      <div>
          <VisualizationCanvas data={data} />
          <button onClick={handleStartSort}>Start Sort</button>
      </div>
  )
}

export default App
