import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Search, X, XCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/collection")) {
      setVisible(showSearch);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  const handleClose = () => {
    setShowSearch(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="border-t border-b bg-gray-100 text-center py-4 px-4">
      <div className="relative flex items-center max-w-lg mx-auto border border-gray-300 rounded-full px-5 py-2 bg-white shadow-lg">
        <Search className="w-5 text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-base px-3 placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <XCircle
            className="w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition"
            onClick={() => setSearch("")}
          />
        )}

        <X
          className="w-5 text-gray-500 ml-4 cursor-pointer hover:text-gray-700 transition"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default SearchBar;
