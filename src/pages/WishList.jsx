import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Trash, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, currency } = useContext(ShopContext);

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Your Wishlist</h2>
        <p className="mt-2 text-gray-600">Items you've saved for later</p>
      </div>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center mt-6 text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-2xl shadow-lg p-5 transition-all duration-300 hover:shadow-2xl bg-white backdrop-blur-md bg-opacity-80 hover:bg-opacity-100 group overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <Trash size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-5 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-md mt-1">{`${currency} ${item.price}`}</p>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex justify-center gap-4">
                <Link to={`/product/${item.id}`}>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart size={16} />
                    Move to Cart
                  </button>
                </Link>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-all duration-300 shadow-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
