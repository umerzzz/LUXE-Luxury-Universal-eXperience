import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Lock,
  Truck,
  Shield,
  MapPin,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, products, currency } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
    if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
    if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle payment processing here
      console.log("Order submitted:", formData);
      navigate("/order-confirmation");
    }
  };

  const InputField = ({ label, name, type = "text", icon: Icon, error }) => (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      )}
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={label}
        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="mt-2 text-sm text-gray-600">
            Complete your purchase securely
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                1
              </div>
              <span className="ml-2 text-sm font-medium">Shipping</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4" />
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="firstName"
                    icon={User}
                    error={errors.firstName}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    icon={User}
                    error={errors.lastName}
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    icon={Mail}
                    error={errors.email}
                  />
                  <InputField
                    label="Phone"
                    name="phone"
                    icon={Phone}
                    error={errors.phone}
                  />
                  <div className="md:col-span-2">
                    <InputField
                      label="Address"
                      name="address"
                      icon={MapPin}
                      error={errors.address}
                    />
                  </div>
                  <InputField
                    label="City"
                    name="city"
                    error={errors.city}
                  />
                  <InputField
                    label="State"
                    name="state"
                    error={errors.state}
                  />
                  <InputField
                    label="ZIP Code"
                    name="zipCode"
                    error={errors.zipCode}
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                <div className="space-y-6">
                  <InputField
                    label="Card Number"
                    name="cardNumber"
                    icon={CreditCard}
                    error={errors.cardNumber}
                  />
                  <InputField
                    label="Cardholder Name"
                    name="cardName"
                    error={errors.cardName}
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <InputField
                      label="Expiry Date"
                      name="expiryDate"
                      placeholder="MM/YY"
                      error={errors.expiryDate}
                    />
                    <InputField
                      label="CVV"
                      name="cvv"
                      type="password"
                      error={errors.cvv}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Back to Shipping
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}

            {/* Security Features */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-5 h-5 mr-2" />
                Secure Payment
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Lock className="w-5 h-5 mr-2" />
                Encrypted Data
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-5 h-5 mr-2" />
                Fast Delivery
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 