import { Replace, Undo2, Headset, Shield, Clock } from "lucide-react";

const OurPolicy = () => {
  const policies = [
    {
      icon: Replace,
      title: "Easy Exchange Policy",
      description: "We Offer Hassle-Free Exchange Policy",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Undo2,
      title: "7 Days Return Policy",
      description: "We Provide 7 Days Free Return Policy",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Headset,
      title: "Best Customer Support",
      description: "We Provide 24/7 Customer Support",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% Secure Payment Methods",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick & Reliable Shipping",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Policies
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            We believe in providing the best shopping experience with our customer-friendly policies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map(({ icon: Icon, title, description, color, bgColor }, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 ${bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      </div>
    </section>
  );
};

export default OurPolicy;
