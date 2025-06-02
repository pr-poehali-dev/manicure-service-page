import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      title: "Телефон",
      description: "Звоните нам с 9:00 до 21:00",
      contact: "+7 (495) 123-45-67",
      icon: "Phone",
    },
    {
      title: "WhatsApp",
      description: "Быстрые ответы в мессенджере",
      contact: "+7 (495) 123-45-67",
      icon: "MessageCircle",
    },
    {
      title: "Email",
      description: "Ответим в течение 24 часов",
      contact: "info@maxim-salon.ru",
      icon: "Mail",
    },
  ];

  const faqItems = [
    {
      question: "Как записаться на процедуру?",
      answer:
        "Вы можете записаться по телефону, через WhatsApp или на нашем сайте в разделе 'Запись'",
    },
    {
      question: "Можно ли отменить запись?",
      answer:
        "Да, отмена возможна за 24 часа до назначенного времени без штрафных санкций",
    },
    {
      question: "Какие принимаете способы оплаты?",
      answer: "Принимаем наличные, банковские карты и безналичный расчет",
    },
    {
      question: "Есть ли парковка?",
      answer:
        "Да, для клиентов предусмотрена бесплатная парковка рядом с салоном",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-pink-600">Поддержка</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Мы всегда готовы помочь и ответить на ваши вопросы
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={option.icon}
                      className="text-pink-600"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-lg font-semibold text-pink-600 mb-4">
                    {option.contact}
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Часто задаваемые вопросы
                </h2>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-4 last:border-b-0"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Режим работы
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Понедельник - Пятница</span>
                    <span className="font-semibold text-gray-800">
                      9:00 - 21:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Суббота</span>
                    <span className="font-semibold text-gray-800">
                      10:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Воскресенье</span>
                    <span className="font-semibold text-gray-800">
                      11:00 - 19:00
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Адрес
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    г. Москва, ул. Примерная, д. 123, стр. 1<br />
                    Метро "Примерная", 5 минут пешком
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
