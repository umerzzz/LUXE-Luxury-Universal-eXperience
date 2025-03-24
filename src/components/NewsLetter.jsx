import { Send } from "lucide-react";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-gray-900 p-8 sm:p-12">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Subscribe Now & Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                20% Off
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Stay updated with our latest offers and exclusive deals. Subscribe to
              our newsletter today!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                Subscribe
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-400">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-white hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-white hover:underline">
                Terms of Service
              </a>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
