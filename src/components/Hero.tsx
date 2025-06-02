import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Салон красоты <span className="text-pink-600">Maxim</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональный маникюр и педикюр в уютной атмосфере. Мы создаем
          красоту, которая вдохновляет каждый день.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
          >
            Записаться онлайн
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3"
          >
            Посмотреть услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
