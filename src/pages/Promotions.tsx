import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Promotions = () => {
  const promotions = [
    {
      title: "Скидка 20% новым клиентам",
      description:
        "При первом посещении салона действует скидка 20% на любую услугу",
      discount: "20%",
      validUntil: "Постоянно",
      icon: "Gift",
    },
    {
      title: "Комплекс маникюр + педикюр",
      description: "Маникюр и педикюр вместе со скидкой 15%",
      discount: "15%",
      validUntil: "До 31 декабря",
      icon: "Heart",
    },
    {
      title: "Студенческая скидка",
      description:
        "Скидка 10% для студентов при предъявлении студенческого билета",
      discount: "10%",
      validUntil: "Постоянно",
      icon: "GraduationCap",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши <span className="text-pink-600">акции</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Выгодные предложения и скидки для наших клиентов
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={promo.icon}
                      className="text-pink-600"
                      size={32}
                    />
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    -{promo.discount}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {promo.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    Действует: {promo.validUntil}
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Воспользоваться
                  </Button>
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

export default Promotions;
