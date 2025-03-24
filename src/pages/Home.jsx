import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetter from "../components/NewsLetter";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Latest Collection Section */}
      <section className="relative">
        <LatestCollection />
      </section>

      {/* Best Sellers Section */}
      <section className="relative">
        <BestSeller />
      </section>

      {/* Policy Section */}
      <section className="relative">
        <OurPolicy />
      </section>

      {/* Newsletter Section */}
      <section className="relative">
        <NewsLetter />
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
      </div>
    </main>
  );
};

export default Home;
