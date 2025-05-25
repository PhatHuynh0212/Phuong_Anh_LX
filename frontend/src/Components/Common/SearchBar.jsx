// import { Search, X } from "lucide-react";
// import { useState } from "react";

// const SearchBar = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSearchToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Search Input:", searchInput);
//     setSearchInput("");
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className={`flex items-center justify-center w-full transition-all duration-300 ${
//         isOpen
//           ? "absolute top-0 left-0 w-full bg-white h-[110px] md:h-[130px] z-50 animate-slideDown"
//           : "w-auto"
//       }`}
//     >
//       {isOpen ? (
//         <form
//           onSubmit={handleSubmit}
//           className="relative flex items-center justify-center w-full"
//         >
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               placeholder="Tìm kiếm"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               className="bg-gray-100 w-full px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 "
//             />
//             {/* Search Icon */}
//             <button
//               type="submit"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//             >
//               <Search className="size-6 " />
//             </button>
//           </div>
//           {/* Close Search Icon */}
//           <button
//             type="button"
//             onClick={handleSearchToggle}
//             className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//           >
//             <X className="size-6" />
//           </button>
//         </form>
//       ) : (
//         <button onClick={handleSearchToggle}>
//           <Search className="size-7 pt-1 text-gray-700 hover:text-black" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

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
    <div className="relative">
      {isOpen && (
        <div className="fixed h-full inset-0 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      <div
        className={`flex items-center justify-center transition-all duration-300 z-50 ${
          isOpen
            ? "fixed inset-x-4 top-0 md:top-1 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            : ""
        }`}
      >
        {isOpen ? (
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto flex items-center"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full h-10 sm:h-12 px-4 pr-12 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-500 text-gray-800"
            />
            <button
              type="submit"
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <button
            onClick={handleSearchToggle}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <Search className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
