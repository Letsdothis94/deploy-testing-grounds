import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  const getData = async () => {
    try {
      let req = await fetch(`https://digimon-api.vercel.app/api/digimon`);
      let res = await req.json();
      setData(res);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      {data.map((dig, i) => (
        <div key={i}>
          <p>{dig.name}</p>
        </div>
      ))}
    </div>
  )
}

export default App
