const Form = ({ inputSearch, setInputSearch }) => {

  return (
    <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
            <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Agumon" aria-label="Digimon name"/>
        </div>
    </form>
  )
}

export default Form