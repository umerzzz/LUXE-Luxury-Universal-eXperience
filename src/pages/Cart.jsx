import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    navigate,
    products,
    currency,
    cartItems,
    updateQuantity,
    removeFromCart,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
            product: products.find((product) => product._id === itemId),
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const handleCheckout = () => {
    if (cartData.length === 0) {
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartData.length} {cartData.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartData.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate("/collection")}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartData.map((item, index) => {
                const productData = item.product;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={productData?.image?.[0] || "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"}
                          className="w-full h-full object-cover rounded-lg"
                          alt={productData?.name || "Product"}
                        />
                        <button
                          onClick={() => removeFromCart(item._id, item.size)}
                          className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {productData?.name || "Product Not Found"}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Size: {item.size}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() =>
                                updateQuantity(item._id, item.size, item.quantity - 1)
                              }
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() =>
                                updateQuantity(item._id, item.size, item.quantity + 1)
                              }
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                          <p className="font-medium text-gray-900">
                            {currency}
                            {productData?.price
                              ? productData.price * item.quantity
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Summary
                </h2>
                <CartTotal />
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-900 transition-colors duration-300 mt-6"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
