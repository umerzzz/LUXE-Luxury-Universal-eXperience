import {
  Users,
  Award,
  Heart,
  Globe,
  Target,
  Shield,
  Truck,
  Clock,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Products Sold", value: "100K+" },
    { label: "Countries Served", value: "30+" },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on quality. Every product we offer meets our high standards of excellence.",
      icon: Award,
    },
    {
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
      icon: Heart,
    },
    {
      title: "Global Reach",
      description:
        "We serve customers worldwide, bringing our products to every corner of the globe.",
      icon: Globe,
    },
    {
      title: "Innovation",
      description:
        "We constantly innovate to bring you the latest trends and styles in fashion.",
      icon: Target,
    },
  ];

  const features = [
    {
      title: "Secure Shopping",
      description:
        "Your security is our priority. We use the latest encryption technology to protect your data.",
      icon: Shield,
    },
    {
      title: "Fast Delivery",
      description:
        "We ensure quick and reliable delivery of your orders to your doorstep.",
      icon: Truck,
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support team is always ready to help you with any questions.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About TheElecent
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            We're passionate about bringing you the latest fashion trends with
            uncompromising quality and style.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-black">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Founded in 2014, TheElecent has grown from a small boutique to a
                global fashion destination. Our journey began with a simple idea:
                to provide high-quality, stylish clothing at accessible prices.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Today, we're proud to serve customers worldwide, offering a
                carefully curated selection of clothing and accessories that
                combine style, comfort, and quality.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="/images/brand-1.png"
                  alt="Brand 1"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="/images/brand-2.png"
                  alt="Brand 2"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="/images/brand-3.png"
                  alt="Brand 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Meet the people behind TheElecent
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="relative">
                  <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                    <img
                      src={`/images/team-${member}.jpg`}
                      alt={`Team member ${member}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Team Member {member}
                  </h3>
                  <p className="text-sm text-gray-500">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The benefits of shopping with TheElecent
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
