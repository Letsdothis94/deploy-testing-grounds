import { Link } from "react-router";

const Docs = () => {
  return (
    <div className="flex justify-center p-2 flex-col text-center">
      <h1 className="font-bold text-3xl text-gray-800 pb-2">Docs</h1>
      <div className="border-2 p-4">
        <h3 className="text-2xl pb-3 text-gray-700 font-semibold">
          About this project
        </h3>
        <p className="text-lg">
          Digi Encyclopedia is a small, fun project where you can browse through
          the first 209 Digimon using pagination and a simple search bar. It’s
          made for easy exploring—whether you’re scrolling through pages or
          quickly searching for a specific Digimon by name.
        </p>
        <Link to="/">
          <p className="font-semibold text-lg tracking-tight p-2 mt-1 underline hover:bg-teal-500 rounded-2xl">
            ↩️Enjoy!↩️
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Docs