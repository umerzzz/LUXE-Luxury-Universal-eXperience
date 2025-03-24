import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductItem = ({ id, image, name, price, showActions, off_price, rating = 4.5, reviews = 0 }) => {
  const { currency } = useContext(ShopContext);
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const product = { id, image, name, price };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image?.[0] || "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            alt={name}
          />
          {off_price && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-gray-600 transition-colors duration-300">
            {name}
          </h3>

          {/* Price Section */}
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-sm font-semibold text-gray-900">
              {currency}
              {price}
            </p>
            {off_price && (
              <p className="text-sm text-gray-500 line-through">
                {currency}
                {off_price}
              </p>
            )}
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({rating.toFixed(1)})
              {reviews > 0 && ` · ${reviews} reviews`}
            </span>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      {showActions && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToWishlist(e, product);
              }}
              className="flex items-center justify-center w-10 h-10 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
