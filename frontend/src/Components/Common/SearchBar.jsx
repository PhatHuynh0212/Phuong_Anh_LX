import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Input:", searchInput);
    setSearchInput("");
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-[102px] z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-gray-100 w-full px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 "
            />
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <Search className="size-6 " />
            </button>
          </div>
          {/* Close Search Icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <X className="size-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <Search className="size-7 pt-1 text-gray-700 hover:text-black" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
