import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { Star, TrendingUp } from "lucide-react";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <p className="font-medium text-sm tracking-wider text-gray-700">
              TRENDING NOW
            </p>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Customer Favorites
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Shop our most-loved items that have received rave reviews. 
            These products have become staples in our customers' collections.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {bestSeller.map((item, index) => (
            <div 
              key={index}
              className="group transform transition-all duration-300 hover:-translate-y-1"
            >
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                off_price={item.off_price}
                showActions={true}
                rating={item.rating || 4.5}
                reviews={item.reviews || 128}
              />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-full blur-2xl -z-10"></div>
      </div>
    </section>
  );
};

export default BestSeller;
