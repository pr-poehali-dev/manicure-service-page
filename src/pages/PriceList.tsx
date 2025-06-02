import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PriceList = () => {
  const priceCategories = [
    {
      category: "Маникюр",
      services: [
        { name: "Классический маникюр", price: "1 500 ₽" },
        { name: "Европейский маникюр", price: "1 800 ₽" },
        { name: "Гель-лак маникюр", price: "2 000 ₽" },
        { name: "Наращивание ногтей", price: "3 500 ₽" },
        { name: "Коррекция наращенных ногтей", price: "2 800 ₽" },
      ],
    },
    {
      category: "Педикюр",
      services: [
        { name: "Классический педикюр", price: "2 000 ₽" },
        { name: "Аппаратный педикюр", price: "2 500 ₽" },
        { name: "Spa-педикюр", price: "3 000 ₽" },
        { name: "Медицинский педикюр", price: "3 500 ₽" },
      ],
    },
    {
      category: "Дизайн",
      services: [
        { name: "Простой дизайн (1-2 ногтя)", price: "500 ₽" },
        { name: "Сложный дизайн", price: "1 000 ₽" },
        { name: "Стразы (за 1 шт)", price: "50 ₽" },
        { name: "Роспись", price: "800 ₽" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-pink-600">Прайс-лист</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Актуальные цены на все услуги нашего салона
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-pink-600 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-gray-800">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriceList;
