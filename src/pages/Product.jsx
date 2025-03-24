import { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeftRight } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  const handleImageClick = useCallback((img) => setImage(img), []);
  const handleSizeClick = useCallback(
    (selectedSize) => setSize(selectedSize),
    []
  );
  const handleAddToCart = useCallback(
    () => addToCart(productData._id, size, productData.sizes),
    [productData, size, addToCart]
  );

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span>/</span>
          <a href="/collection" className="hover:text-gray-900">Collection</a>
          <span>/</span>
          <span className="text-gray-900">{productData.name}</span>
        </nav>

        {/* Product Container */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 sm:flex sm:flex-col gap-3 sm:max-h-[500px] sm:w-[18%] w-full">
                {productData.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(img)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      image === img ? "border-black" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1} of ${productData.name}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="w-full sm:w-[80%]">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={`Main image of ${productData.name}`}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {productData.name}
                  </h1>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <p className="text-sm text-gray-600">(122 reviews)</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-bold text-gray-900">
                    {currency}
                    {productData.price}
                  </p>
                  <p className="text-xl text-gray-500 line-through">
                    {currency}
                    {productData.off_price}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {productData.description}
                </p>

                {/* Select Size */}
                {productData.sizes.length > 0 && (
                  <div className="space-y-3">
                    <p className="font-medium text-gray-900">Select Size</p>
                    <div className="flex flex-wrap gap-2">
                      {productData.sizes.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSizeClick(item)}
                          className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                            item === size
                              ? "border-black bg-black text-white"
                              : "border-gray-200 text-gray-700 hover:border-gray-300"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-full hover:bg-gray-900 transition-colors duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                {/* Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">100% Original</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === "description"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === "reviews"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Reviews (122)
              </button>
            </div>
          </div>
          <div className="p-8">
            {activeTab === "description" ? (
              <div className="prose prose-sm max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                  architecto in, nihil unde dolorum enim velit omnis error tempore
                  mollitia placeat, facilis sunt itaque. Asperiores maxime perferendis
                  iste impedit iusto.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic
                  cupiditate dolorem cumque maiores unde deleniti, eos sit maxime.
                  Hic, tenetur? Architecto in maxime, porro officia explicabo ea.
                  Incidunt, cum!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Review items would go here */}
                <p className="text-gray-500">Reviews coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
