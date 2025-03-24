import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Truck, CreditCard, Shield } from "lucide-react";

const CartTotal = () => {
  const { products, currency, cartItems, delivery_fee } =
    useContext(ShopContext);
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

  const subtotal = cartData.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const grandTotal = subtotal + delivery_fee;

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Delivery Fee</span>
          <span>
            {currency}
            {delivery_fee.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <span>Total</span>
            <span>
              {currency}
              {grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="w-4 h-4" />
          <span>Free delivery on orders over {currency}50</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CreditCard className="w-4 h-4" />
          <span>Secure payment with multiple options</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="w-4 h-4" />
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
