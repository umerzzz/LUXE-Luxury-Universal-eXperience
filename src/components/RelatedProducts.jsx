import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!category || !subCategory || products.length === 0) return;

    // Filter by category & subCategory
    let filteredProducts = products.filter(
      (item) => item.category === category && item.subCategory === subCategory
    );

    // Shuffle products to randomize related items
    filteredProducts.sort(() => Math.random() - 0.5);

    // Pick up to 5 related products
    setRelated(filteredProducts.slice(0, 5));
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Related Products</h2>
        <p className="mt-2 text-gray-600">You might also like these items</p>
      </div>

      {related.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name || "No Name Available"}
              price={item.price || "N/A"}
              image={item.image || "/default-image.jpg"} // Fallback image
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No related products found.
        </p>
      )}
    </div>
  );
};

export default RelatedProducts;
