import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Package,
  Truck,
  CreditCard,
  MapPin,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const OrderConfirmation = () => {
  const { cartItems, products, currency } = useContext(ShopContext);

  // Calculate order total
  const orderTotal = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  // Generate a random order number
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. We'll send you a confirmation email with
            your order details.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Order Details</h2>
            <span className="text-sm text-gray-500">Order #{orderNumber}</span>
          </div>

          <div className="space-y-6">
            {/* Order Items */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4">
                Order Items
              </h3>
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">
                            {product?.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {currency}
                        {(product?.price || 0) * item.quantity}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-4">
                Order Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">{currency}{orderTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{currency}{orderTotal}</span>
                </div>
              </div>
            </div>

            {/* Order Status */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-4">
                Order Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Package className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Order Placed</span>
                </div>
                <div className="flex items-center text-sm">
                  <Truck className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Processing</span>
                </div>
                <div className="flex items-center text-sm">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Payment Confirmed</span>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-4">
                Shipping Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">
                    123 Main St, City, State 12345
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">
                    Estimated Delivery: 3-5 business days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <Link
            to="/orders"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-black hover:bg-gray-900"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 