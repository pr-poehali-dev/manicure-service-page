import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши <span className="text-pink-600">услуги</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональный уход за вашими ногтями с использованием премиальных
            материалов
          </p>
        </div>
      </section>

      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Services;
