import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesGrid = () => {
  const services = [
    {
      title: "Классический маникюр",
      description: "Обработка кутикулы, придание формы, покрытие лаком",
      price: "от 1 500 ₽",
      duration: "60 мин",
    },
    {
      title: "Гель-лак маникюр",
      description: "Стойкое покрытие гель-лаком до 3 недель",
      price: "от 2 000 ₽",
      duration: "90 мин",
    },
    {
      title: "Наращивание ногтей",
      description: "Наращивание гелем или акрилом с дизайном",
      price: "от 3 500 ₽",
      duration: "150 мин",
    },
    {
      title: "Дизайн ногтей",
      description: "Художественная роспись и декор ногтей",
      price: "от 500 ₽",
      duration: "30 мин",
    },
    {
      title: "Классический педикюр",
      description: "Обработка стоп, покрытие лаком",
      price: "от 2 000 ₽",
      duration: "75 мин",
    },
    {
      title: "Spa-педикюр",
      description: "Расслабляющий уход с масками и массажем",
      price: "от 3 000 ₽",
      duration: "120 мин",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border-gray-200"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-pink-600">
                    {service.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {service.duration}
                  </span>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
