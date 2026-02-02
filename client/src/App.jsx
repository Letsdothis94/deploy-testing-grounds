import { useEffect, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("");

  const totalPages = Math.ceil(data.length / pageSize);
  // console.log(totalPages);

  let currentItems = current.slice(
    (currentPage - 1) * pageSize, currentPage * pageSize
  );

  const nextPage = () => {
    setCurrentPage(prev => prev >= totalPages ? 1 : prev + 1);
    // console.log(currentPage);
  }

  const prevPage = () => {
    setCurrentPage(prev => (prev <= 1 ? totalPages : prev - 1));
    // console.log(currentPage);
  }

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
    const filtered = inputSearch.length < 5 ? data : data.filter(dig => dig.name.toLowerCase().includes(inputSearch.toLowerCase()));
    setCurrent(filtered);
  }, [inputSearch, data]);
  
  return (
    <>
      <Header />
      <Form
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        data={data}
        setData={setData}
        currentItems={currentItems}
      />
      <main className="flex-auto border border-2">
        <div className="flex flex-wrap justify-evenly">
          {currentItems.map((dig, i) => {
            const { name, img, level } = dig;
            return (
              <div
                key={i}
                className="max-w-sm rounded overflow-hidden shadow-lg m-2"
              >
                <img className="w-full" src={img} alt={name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {current.length > pageSize && (
          <div className="inline-flex w-full justify-center p-2">
            <button
              onClick={() => prevPage()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l cursor-pointer"
              disabled={inputSearch.length > 5 ? true : false}
            >
              Prev
            </button>
            <span className="py-2 px-6 font-bold">{currentPage}</span>
            <button
              onClick={() => nextPage()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r cursor-pointer"
              disabled={inputSearch.length > 5 ? true : false}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App
