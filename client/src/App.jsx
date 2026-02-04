import { useEffect, useState } from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Docs from './pages/Docs';

function App() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("");
  let currentItems;

  const getData = async () => {
    const ALL_DIGIMON_URL = `https://digimon-api.vercel.app/api/digimon`;
    try {
      const res = await fetch(ALL_DIGIMON_URL);
      const data = await res.json();
      setData(Array.isArray(data) ? data : []);
      setCurrentPage(1);
    } catch (error) {
      console.log(error.message);
    }
  }

  
  useEffect(() => {
      getData();
  }, []);

  useEffect(() => {
    const filtered = inputSearch.length < 2 ? data : data.filter(dig => dig.name.toLowerCase().includes(inputSearch.toLowerCase()));
    setCurrent(filtered);
  }, [inputSearch, data]);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage inputSearch={inputSearch} setInputSearch={setInputSearch} data={data} setData={setData} currentItems={currentItems} current={current} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App
