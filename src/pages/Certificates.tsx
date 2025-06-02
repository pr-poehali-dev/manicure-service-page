import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Certificates = () => {
  const certificates = [
    {
      title: "Сертификат на маникюр",
      amount: "2 000 ₽",
      description: "Подарочный сертификат на любые услуги маникюра",
    },
    {
      title: "Сертификат на педикюр",
      amount: "3 000 ₽",
      description: "Подарочный сертификат на любые услуги педикюра",
    },
    {
      title: "Комплексный сертификат",
      amount: "5 000 ₽",
      description: "Универсальный сертификат на любые услуги салона",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Подарочные <span className="text-pink-600">сертификаты</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Идеальный подарок для ваших близких
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Gift" className="text-pink-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    {cert.amount}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Купить сертификат
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Условия использования сертификатов
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Срок действия: 6 месяцев с даты покупки
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Можно использовать частями
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Действует на все услуги салона
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Возможна доплата при превышении суммы
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">Сертификат именной</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-600 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">
                      Красивая подарочная упаковка
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;
