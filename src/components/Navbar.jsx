import { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  ChevronLeft,
  Heart,
  LogOut,
  UserCircle,
  Package,
  X,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const { setShowSearch, getCartCount, getWishlistCount } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const handleSearchClick = () => {
    if (!location.pathname.includes("/collection")) {
      navigate("/collection");
      setTimeout(() => setShowSearch(true), 100);
    } else {
      setShowSearch(true);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="LUXE" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold tracking-wider">LUXE</span>
        </div>
        
        <ul className="hidden sm:flex gap-8 text-sm">
          {[
            { path: "/", label: "HOME" },
            { path: "/collection", label: "COLLECTION" },
            { path: "/about", label: "ABOUT" },
            { path: "/contact", label: "CONTACT" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`relative group py-2 transition-colors duration-300 ${
                isActive(item.path) ? "text-black" : "text-gray-600 hover:text-black"
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
              )}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Search
            onClick={handleSearchClick}
            className="w-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-300"
          />
          
          <div className="group relative">
            <Link to="/login">
              <User className="w-5 cursor-pointer text-gray-600 hover:text-black transition-colors duration-300" />
            </Link>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg py-2 w-48 border border-gray-100">
                <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <UserCircle className="w-4 h-4" />
                  <span>My Profile</span>
                </Link>
                <Link to="/orders" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <Package className="w-4 h-4" />
                  <span>Orders</span>
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-50 w-full">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          <Link to="/wishlist" className="relative group">
            <Heart className="w-5 min-w-5 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
            {getWishlistCount() > 0 && (
              <p className="absolute -right-2 -top-2 w-4 h-4 text-center leading-4 bg-red-500 text-white text-[8px] rounded-full">
                {getWishlistCount()}
              </p>
            )}
          </Link>

          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-5 min-w-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
            {getCartCount() > 0 && (
              <p className="absolute -right-2 -top-2 w-4 h-4 text-center leading-4 bg-black text-white text-[8px] rounded-full">
                {getCartCount()}
              </p>
            )}
          </Link>

          <button
            onClick={() => setVisible(true)}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white sm:hidden transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setVisible(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {[
              { path: "/", label: "HOME" },
              { path: "/collection", label: "COLLECTION" },
              { path: "/about", label: "ABOUT" },
              { path: "/contact", label: "CONTACT" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setVisible(false)}
                className={`block py-3 px-4 rounded-lg transition-colors duration-300 ${
                  isActive(item.path)
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t">
            <div className="space-y-2">
              <Link 
                to="/profile" 
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setVisible(false)}
              >
                <UserCircle className="w-5 h-5" />
                <span>My Profile</span>
              </Link>
              <Link 
                to="/orders" 
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setVisible(false)}
              >
                <Package className="w-5 h-5" />
                <span>Orders</span>
              </Link>
              <button 
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg w-full transition-colors duration-300"
                onClick={() => setVisible(false)}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
