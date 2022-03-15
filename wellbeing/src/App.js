import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("carbs.JSON")
      const data = await response.json()
      console.log({ data })
    }
    fetchData()
  }, [])

    return (
    <div>
      <dl>
        <dt><b>Carbs</b></dt>
        <dd>Bread</dd>
        <dd>Pasta</dd>
      </dl>
    </div>
  );
}

export default App;
