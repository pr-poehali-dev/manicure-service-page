import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-pink-500" size={24} />
              <span className="text-xl font-bold">
                <span className="text-pink-500">Maxim</span>
              </span>
            </div>
            <p className="text-gray-300 mb-2">
              Салон красоты премиум-класса в центре города
            </p>
            <p className="text-gray-400">Создаем красоту с 2018 года</p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">
              Контакты
            </h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-pink-500" />
                <span>ул. Красоты, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-pink-500" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-pink-500" />
                <span>info@maxim-salon.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-pink-500" />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                VK
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
