import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { Sparkles, ArrowRight } from "lucide-react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latest_products, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <p className="font-medium text-sm tracking-wider text-gray-700">
              JUST DROPPED
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            New Arrivals
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Be the first to discover our latest drops. 
            Fresh styles that define the season.
          </p>
        </div>

        {/* Featured Product */}
        <div className="mt-12 mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {latest_products[0]?.name || "Featured Collection"}
                </h3>
                <p className="text-gray-600 text-lg">
                  {latest_products[0]?.description || "Experience the perfect blend of style and comfort with our latest collection. Each piece is carefully crafted to elevate your wardrobe."}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${latest_products[0]?.price || "0"}
                  </span>
                  {latest_products[0]?.off_price && (
                    <span className="text-lg text-gray-500 line-through">
                      ${latest_products[0]?.off_price}
                    </span>
                  )}
                </div>
                <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={latest_products[0]?.image?.[0] || "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"}
                  alt="Featured Product"
                  className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {latest_products.slice(1).map((item, index) => (
            <div 
              key={index}
              className="group transform transition-all duration-300 hover:-translate-y-1"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                off_price={item.off_price}
                showActions={true}
              />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-50 -z-10"></div>
      </div>
    </section>
  );
};

export default LatestCollection;
