import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-pink-600" size={24} />
            <span className="text-xl font-bold text-gray-800">
              <span className="text-pink-600">Maxim</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Прайс-лист
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Сертификаты
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Поддержка
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Документы
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              О нас
            </a>
          </nav>

          {/* Login Button */}
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
