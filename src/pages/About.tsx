import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const teamMembers = [
    {
      name: "Максим",
      position: "Основатель, мастер маникюра",
      experience: "8 лет опыта",
      description: "Сертифицированный мастер с международными дипломами",
    },
    {
      name: "Анна",
      position: "Мастер педикюра",
      experience: "5 лет опыта",
      description: "Специалист по медицинскому педикюру и spa-процедурам",
    },
    {
      name: "Елена",
      position: "Мастер дизайна ногтей",
      experience: "6 лет опыта",
      description: "Художник с уникальным стилем и креативным подходом",
    },
  ];

  const achievements = [
    { icon: "Award", title: "500+", subtitle: "Довольных клиентов" },
    { icon: "Star", title: "4.9", subtitle: "Рейтинг в отзывах" },
    { icon: "Clock", title: "3 года", subtitle: "Работы на рынке" },
    { icon: "Users", title: "3", subtitle: "Мастера в команде" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            О <span className="text-pink-600">нас</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Салон красоты Maxim — это место, где профессионализм сочетается с
            заботой о каждом клиенте
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={achievement.icon}
                    className="text-pink-600"
                    size={32}
                  />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </div>
                <div className="text-gray-600">{achievement.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Наша история
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Салон красоты Maxim был основан в 2021 году с простой идеей
                    — предоставлять качественные услуги по уходу за ногтями в
                    уютной и дружелюбной атмосфере.
                  </p>
                  <p>
                    За три года работы мы завоевали доверие сотен клиентов
                    благодаря профессионализму наших мастеров и использованию
                    только премиальных материалов.
                  </p>
                  <p>
                    Сегодня мы продолжаем развиваться, внедряя новые техники и
                    предлагая самые актуальные тренды в мире нейл-арта.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Наши принципы
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Heart"
                      className="text-pink-600 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Забота о клиентах
                      </h3>
                      <p className="text-gray-600">
                        Каждый клиент для нас особенный
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Shield"
                      className="text-pink-600 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Безопасность
                      </h3>
                      <p className="text-gray-600">
                        Стерилизация инструментов по стандартам
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Sparkles"
                      className="text-pink-600 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Качество</h3>
                      <p className="text-gray-600">
                        Только проверенные материалы и техники
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Smile"
                      className="text-pink-600 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Атмосфера</h3>
                      <p className="text-gray-600">
                        Уют и комфорт в каждой детали
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border-gray-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" className="text-pink-600" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-pink-600 font-medium mb-1">
                      {member.position}
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {member.experience}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
