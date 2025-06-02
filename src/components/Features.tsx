import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "⭐",
      title: "Качественно",
      description: "Используем только премиальные материалы",
    },
    {
      icon: "⚡",
      title: "Быстро",
      description: "Запись онлайн и без очередей",
    },
    {
      icon: "❤️",
      title: "С заботой",
      description: "Индивидуальный подход к каждому клиенту",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
